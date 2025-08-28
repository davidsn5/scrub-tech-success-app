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

    // Update subscribers table to grant access
    const { data, error } = await supabaseService
      .from("subscribers")
      .upsert({
        user_id: user.id,
        email: customerEmail,
        subscribed: true,
        status: "premium",
        subscription_tier: "premium",
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
      email: customerEmail 
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