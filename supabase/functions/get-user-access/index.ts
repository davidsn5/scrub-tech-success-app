import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[GET-USER-ACCESS] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Starting comprehensive access verification");

    // Create auth client for user authentication
    const supabaseAuth = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("No authorization header provided");
      throw new Error("No authorization header provided");
    }

    const token = authHeader.replace("Bearer ", "");
    logStep("Extracting user from token");
    
    const { data: userData, error: userError } = await supabaseAuth.auth.getUser(token);
    if (userError) {
      logStep("Authentication error", { error: userError.message });
      throw new Error(`Authentication error: ${userError.message}`);
    }
    
    const user = userData.user;
    if (!user?.email) {
      logStep("User not authenticated or email not available");
      throw new Error("User not authenticated or email not available");
    }
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Create service role client for database operations (bypasses RLS)
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Step 1: Check Supabase database first
    const { data: dbSubscription, error: dbError } = await supabaseService
      .from("subscribers")
      .select("*")
      .eq("email", user.email)
      .single();

    logStep("Database check completed", { dbSubscription, dbError });

    // Step 2: Cross-check with Stripe if we have Stripe integration
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    let stripeVerification = null;
    
    if (stripeKey) {
      try {
        const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
        
        // Find Stripe customer
        const customers = await stripe.customers.list({ email: user.email, limit: 1 });
        
        if (customers.data.length > 0) {
          const customerId = customers.data[0].id;
          logStep("Found Stripe customer", { customerId });

          // Check for successful one-time payments
          const checkoutSessions = await stripe.checkout.sessions.list({
            customer: customerId,
            limit: 100,
          });
          
          const hasCompletedPayment = checkoutSessions.data.some(session => 
            session.payment_status === "paid" && session.mode === "payment"
          );

          // Check for active subscriptions
          const subscriptions = await stripe.subscriptions.list({
            customer: customerId,
            status: "active",
            limit: 1,
          });

          stripeVerification = {
            customerId,
            hasCompletedPayment,
            hasActiveSubscription: subscriptions.data.length > 0,
            totalSessions: checkoutSessions.data.length
          };
          
          logStep("Stripe verification completed", stripeVerification);
        } else {
          logStep("No Stripe customer found for email");
          stripeVerification = { customerId: null, hasCompletedPayment: false, hasActiveSubscription: false };
        }
      } catch (stripeError) {
        logStep("Stripe verification failed", { error: stripeError.message });
        stripeVerification = { error: stripeError.message };
      }
    } else {
      logStep("No Stripe key configured, skipping Stripe verification");
    }

    // Step 3: Determine final access status
    let finalAccess = {
      hasAccess: false,
      accessType: 'trial',
      subscriptionTier: 'premium',
      verificationSource: 'none'
    };

    // Priority 1: Check database status (most reliable for lifetime access)
    if (dbSubscription) {
      const dbHasAccess = dbSubscription.status === 'admin' || 
                         dbSubscription.status === 'premium' || 
                         dbSubscription.status === 'active' ||
                         dbSubscription.subscribed === true;
      
      if (dbHasAccess) {
        finalAccess = {
          hasAccess: true,
          accessType: dbSubscription.status || 'active',
          subscriptionTier: dbSubscription.subscription_tier || 'premium',
          verificationSource: 'database'
        };
        logStep("Access granted from database verification");
        
        // IMPORTANT: Even if database shows access, cross-verify with Stripe
        // This ensures our local data stays in sync with Stripe's reality
        if (stripeVerification && !stripeVerification.error) {
          const stripeHasPayment = stripeVerification.hasCompletedPayment || stripeVerification.hasActiveSubscription;
          
          if (!stripeHasPayment) {
            logStep("WARNING: Database shows access but Stripe shows no payment - may be admin override or data sync issue");
            // For lifetime purchases, we trust the database more than Stripe ongoing subscription status
          }
        }
      }
    }

    // Priority 2: If no database access but Stripe shows payment, grant access and update database
    if (!finalAccess.hasAccess && stripeVerification && 
        (stripeVerification.hasCompletedPayment || stripeVerification.hasActiveSubscription)) {
      
      logStep("Stripe shows payment but database doesn't - updating database");
      
      // Update database to reflect Stripe payment
      const updateData = {
        user_id: user.id,
        email: user.email,
        subscribed: true,
        status: "active",
        subscription_tier: "premium",
        subscription_start: new Date().toISOString(),
        subscription_end: stripeVerification.hasCompletedPayment ? null : undefined, // null for one-time payments (lifetime)
        stripe_customer_id: stripeVerification.customerId,
        updated_at: new Date().toISOString(),
      };

      logStep("Attempting database update with data", updateData);

      const { data: updateResult, error: updateError } = await supabaseService
        .from("subscribers")
        .upsert(updateData, { onConflict: 'email', ignoreDuplicates: false })
        .select();

      if (!updateError) {
        finalAccess = {
          hasAccess: true,
          accessType: 'active',
          subscriptionTier: 'premium',
          verificationSource: 'stripe_sync'
        };
        logStep("Database updated from Stripe verification - access granted", { updateResult });
      } else {
        logStep("Failed to update database from Stripe", { error: updateError.message, details: updateError });
        
        // Even if database update fails, if Stripe shows payment, grant access
        // This prevents payment/access issues due to database sync problems
        finalAccess = {
          hasAccess: true,
          accessType: 'active',
          subscriptionTier: 'premium',
          verificationSource: 'stripe_fallback'
        };
        logStep("Database update failed but granting access based on Stripe payment");
      }
    }

    // Priority 3: If user has no premium access, ensure they have free access
    // This grants free users access after Stripe verification shows they're not premium
    if (!finalAccess.hasAccess) {
      logStep("No premium access found - granting free access and updating database");
      
      // Update database to reflect free user status
      const freeUpdateData = {
        user_id: user.id,
        email: user.email,
        subscribed: false,
        status: "trial",
        subscription_tier: "premium",
        stripe_customer_id: stripeVerification?.customerId || null,
        updated_at: new Date().toISOString(),
      };

      const { error: freeUpdateError } = await supabaseService
        .from("subscribers")
        .upsert(freeUpdateData, { onConflict: 'email', ignoreDuplicates: false });

      if (freeUpdateError) {
        logStep("Failed to update database for free user", { error: freeUpdateError.message });
      } else {
        logStep("Database updated for free user");
      }
      
      // Grant free access regardless of database update success
      finalAccess = {
        hasAccess: false, // Free users don't have premium access
        accessType: 'trial',
        subscriptionTier: 'premium',
        verificationSource: 'stripe_verified_free'
      };
      logStep("Free access status set after Stripe verification");
    }

    // Step 4: Return comprehensive response
    const response = {
      hasAccess: finalAccess.hasAccess,
      accessType: finalAccess.accessType,
      subscriptionTier: finalAccess.subscriptionTier,
      verificationSource: finalAccess.verificationSource,
      userId: user.id,
      email: user.email,
      databaseStatus: dbSubscription?.status || null,
      databaseSubscribed: dbSubscription?.subscribed || false,
      stripeVerification: stripeVerification
    };

    logStep("Final access determination", response);

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in comprehensive access verification", { message: errorMessage });
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      hasAccess: false,
      accessType: 'trial',
      subscriptionTier: 'premium',
      verificationSource: 'error'
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200, // Return 200 to avoid breaking the frontend
    });
  }
});