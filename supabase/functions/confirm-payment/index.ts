
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CONFIRM-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Authenticate the user first - this is critical for security
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      throw new Error("Authorization header is required");
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);
    
    if (authError || !user) {
      throw new Error("Invalid authentication token");
    }
    
    logStep("User authenticated", { userId: user.id, email: user.email });

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    // Use service role key to bypass RLS for updating subscribers
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { sessionId } = await req.json();
    if (!sessionId) throw new Error("Session ID is required");
    logStep("Session ID received", { sessionId });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Retrieve the checkout session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    logStep("Retrieved Stripe session", { 
      sessionId: session.id, 
      paymentStatus: session.payment_status,
      customerEmail: session.customer_details?.email 
    });

    if (session.payment_status !== "paid") {
      throw new Error(`Payment not completed. Status: ${session.payment_status}`);
    }

    const customerEmail = session.customer_details?.email;
    if (!customerEmail) {
      throw new Error("Customer email not found in session");
    }

    // Verify the authenticated user's email matches the payment email
    if (user.email !== customerEmail) {
      throw new Error("Payment email does not match authenticated user");
    }

    // Get Stripe customer and subscription info
    const customerId = session.customer as string;
    let subscriptionData = {
      subscribed: true,
      status: "active",
      subscription_tier: "premium",
      subscription_start: new Date().toISOString(),
      subscription_end: null as string | null,
      stripe_customer_id: customerId
    };

    // If this is a subscription payment, get subscription details
    if (session.mode === "subscription" && session.subscription) {
      const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
      logStep("Retrieved subscription details", { 
        subscriptionId: subscription.id, 
        status: subscription.status 
      });

      if (subscription.status === "active") {
        subscriptionData.subscription_start = new Date(subscription.current_period_start * 1000).toISOString();
        subscriptionData.subscription_end = new Date(subscription.current_period_end * 1000).toISOString();
      }
    } else if (session.mode === "payment") {
      // One-time payment - give 365-day access (12 months)
      const paymentDate = new Date();
      const expirationDate = new Date(paymentDate);
      expirationDate.setDate(expirationDate.getDate() + 365); // Add 365 days
      
      subscriptionData.subscription_start = paymentDate.toISOString();
      subscriptionData.subscription_end = expirationDate.toISOString();
      logStep("One-time payment confirmed, granting 365-day access", { 
        startDate: subscriptionData.subscription_start,
        endDate: subscriptionData.subscription_end 
      });
    }

    // Update subscribers table to grant access
    const { data, error } = await supabaseService
      .from("subscribers")
      .upsert({
        user_id: user.id,
        email: customerEmail,
        subscribed: subscriptionData.subscribed,
        status: subscriptionData.status,
        subscription_tier: subscriptionData.subscription_tier,
        subscription_start: subscriptionData.subscription_start,
        subscription_end: subscriptionData.subscription_end,
        stripe_customer_id: subscriptionData.stripe_customer_id,
        updated_at: new Date().toISOString(),
      }, { 
        onConflict: 'email',
        ignoreDuplicates: false 
      })
      .select();

    if (error) {
      logStep("Error updating subscriber", { error: error.message });
      throw new Error(`Failed to update subscription: ${error.message}`);
    }

    logStep("Successfully granted access", { email: customerEmail, data });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Payment confirmed and access granted",
      email: customerEmail,
      subscribed: subscriptionData.subscribed,
      subscription_tier: subscriptionData.subscription_tier,
      subscription_end: subscriptionData.subscription_end
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in confirm-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
