import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
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
    logStep("Function started");

    // Create auth client for user authentication
    const supabaseAuth = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseAuth.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id, email: user.email });

    // Create service role client for database operations (bypasses RLS)
    const supabaseService = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Query user's subscription status with service role (bypasses RLS)
    const { data: subscription, error: subError } = await supabaseService
      .from("subscribers")
      .select("*")
      .eq("email", user.email)
      .single();

    logStep("Subscription query completed", { subscription, subError });

    if (subError && subError.code !== 'PGRST116') {
      throw new Error(`Database error: ${subError.message}`);
    }

    // Determine access level
    let hasAccess = false;
    let accessType = 'trial';
    let subscriptionTier = 'premium';

    if (subscription) {
      hasAccess = subscription.status === 'admin' || 
                  subscription.status === 'premium' || 
                  subscription.status === 'active' ||
                  subscription.subscribed === true;
      
      accessType = subscription.status || 'trial';
      subscriptionTier = subscription.subscription_tier || 'premium';
      
      logStep("Access determined from database", { 
        hasAccess, 
        accessType, 
        subscriptionTier,
        dbStatus: subscription.status,
        dbSubscribed: subscription.subscribed 
      });
    } else {
      logStep("No subscription record found, granting trial access");
      // For users without records, give trial access
      hasAccess = false;
      accessType = 'trial';
    }

    const response = {
      hasAccess,
      accessType,
      subscriptionTier,
      userId: user.id,
      email: user.email
    };

    logStep("Returning access response", response);

    return new Response(JSON.stringify(response), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in get-user-access", { message: errorMessage });
    
    return new Response(JSON.stringify({ 
      error: errorMessage,
      hasAccess: false,
      accessType: 'trial',
      subscriptionTier: 'premium'
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200, // Return 200 to avoid breaking the frontend
    });
  }
});