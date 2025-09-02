
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[MANUAL-CONFIRM-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    // Use service role key for admin operations
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { userEmail, adminKey } = await req.json();
    
    // Simple admin verification (you should replace this with proper admin auth)
    if (adminKey !== "admin-manual-confirm-2025") {
      throw new Error("Unauthorized access");
    }

    if (!userEmail) throw new Error("User email is required");
    logStep("Manual confirmation request", { userEmail });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Find Stripe customer by email
    const customers = await stripe.customers.list({ 
      email: userEmail, 
      limit: 1 
    });

    if (customers.data.length === 0) {
      throw new Error(`No Stripe customer found for email: ${userEmail}`);
    }

    const customer = customers.data[0];
    logStep("Found Stripe customer", { customerId: customer.id });

    // Check for any successful payments
    const paymentIntents = await stripe.paymentIntents.list({
      customer: customer.id,
      limit: 10
    });

    const successfulPayments = paymentIntents.data.filter(p => p.status === "succeeded");
    logStep("Found successful payments", { count: successfulPayments.length });

    if (successfulPayments.length === 0) {
      throw new Error("No successful payments found for this customer");
    }

    // Check for active subscriptions
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.id,
      status: "active",
      limit: 1
    });

    let subscriptionData = {
      subscribed: true,
      status: "active",
      subscription_tier: "premium",
      subscription_start: new Date().toISOString(),
      subscription_end: null as string | null,
      stripe_customer_id: customer.id
    };

    if (subscriptions.data.length > 0) {
      const subscription = subscriptions.data[0];
      subscriptionData.subscription_start = new Date(subscription.current_period_start * 1000).toISOString();
      subscriptionData.subscription_end = new Date(subscription.current_period_end * 1000).toISOString();
      logStep("Active subscription found", { subscriptionId: subscription.id });
    } else {
      // One-time payment - give 365-day access
      const paymentDate = new Date();
      const expirationDate = new Date(paymentDate);
      expirationDate.setDate(expirationDate.getDate() + 365); // Add 365 days
      
      subscriptionData.subscription_end = expirationDate.toISOString();
      logStep("No active subscription, granting 365-day access", {
        startDate: subscriptionData.subscription_start,
        endDate: subscriptionData.subscription_end
      });
    }

    // Find user profile
    const { data: profileData, error: profileError } = await supabaseService
      .from("profiles")
      .select("user_id")
      .eq("email", userEmail)
      .single();

    if (profileError) {
      throw new Error(`Profile not found for email: ${userEmail}`);
    }

    // Update subscribers table
    const { data, error } = await supabaseService
      .from("subscribers")
      .upsert({
        user_id: profileData.user_id,
        email: userEmail,
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

    logStep("Successfully granted manual access", { email: userEmail, data });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Manual payment confirmation successful - access granted",
      email: userEmail,
      subscribed: subscriptionData.subscribed,
      subscription_tier: subscriptionData.subscription_tier,
      subscription_end: subscriptionData.subscription_end,
      successful_payments: successfulPayments.length
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in manual-confirm-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
