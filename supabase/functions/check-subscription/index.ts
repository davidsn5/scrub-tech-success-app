import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    logStep("Function started");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    logStep("Authenticating user with token");
    
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Check if user is an admin or premium user first
    const { data: existingSubscriber } = await supabaseClient
      .from("subscribers")
      .select("status, subscribed, subscription_tier")
      .eq("email", user.email)
      .single();
    
    // If user is admin or premium, return their status without checking Stripe
    if (existingSubscriber?.status === 'admin' || existingSubscriber?.status === 'premium') {
      logStep("Admin or premium user detected, returning status", { status: existingSubscriber.status });
      return new Response(JSON.stringify({
        subscribed: true,
        subscription_tier: existingSubscriber.subscription_tier || "premium",
        status: existingSubscriber.status
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // For non-premium users, check if Stripe key is available
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      logStep("No Stripe key available, returning unsubscribed for regular user");
      await supabaseClient.from("subscribers").upsert({
        email: user.email,
        user_id: user.id,
        stripe_customer_id: null,
        subscribed: false,
        subscription_tier: "premium",
        subscription_end: null,
        status: "trial",
        updated_at: new Date().toISOString(),
      }, { onConflict: 'email' });
      return new Response(JSON.stringify({ 
        subscribed: false, 
        subscription_tier: "premium",
        status: "trial"
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }
    
    logStep("Stripe key verified");

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    
    if (customers.data.length === 0) {
      logStep("No customer found, updating unsubscribed state");
      await supabaseClient.from("subscribers").upsert({
        email: user.email,
        user_id: user.id,
        stripe_customer_id: null,
        subscribed: false,
        subscription_tier: "premium",
        subscription_end: null,
        status: "trial",
        updated_at: new Date().toISOString(),
      }, { onConflict: 'email' });
      return new Response(JSON.stringify({ 
        subscribed: false, 
        subscription_tier: "premium",
        status: "trial"
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    const customerId = customers.data[0].id;
    logStep("Found Stripe customer", { customerId });

    // Check for completed one-time payments instead of subscriptions
    const checkoutSessions = await stripe.checkout.sessions.list({
      customer: customerId,
      limit: 100,
    });
    
    const hasCompletedPayment = checkoutSessions.data.some(session => 
      session.payment_status === "paid" && session.mode === "payment"
    );
    
    logStep("Checked one-time payments", { hasCompletedPayment, sessionsFound: checkoutSessions.data.length });
    
    let subscriptionEnd = null;
    if (hasCompletedPayment) {
      // For one-time payments, grant LIFETIME access (no expiration)
      subscriptionEnd = null; // null = lifetime access
      logStep("Completed one-time payment found, granting LIFETIME access");
    } else {
      logStep("No completed one-time payments found");
    }

    const finalStatus = hasCompletedPayment ? "active" : "trial";
    await supabaseClient.from("subscribers").upsert({
      email: user.email,
      user_id: user.id,
      stripe_customer_id: customerId,
      subscribed: hasCompletedPayment,
      subscription_tier: "premium",
      subscription_end: subscriptionEnd, // null for permanent access
      status: finalStatus,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'email' });

    logStep("Updated database with payment info", { subscribed: hasCompletedPayment, subscriptionTier: "premium", status: finalStatus });
    return new Response(JSON.stringify({
      subscribed: hasCompletedPayment,
      subscription_tier: "premium",
      subscription_end: subscriptionEnd,
      status: finalStatus
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in check-subscription", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});