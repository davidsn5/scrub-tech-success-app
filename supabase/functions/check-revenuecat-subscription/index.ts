import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { user_id } = await req.json();

    if (!user_id) {
      return new Response(
        JSON.stringify({ error: 'User ID is required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // RevenueCat API configuration
    const revenueCatApiKey = Deno.env.get('REVENUECAT_API_KEY');
    
    if (!revenueCatApiKey) {
      console.error('RevenueCat API key not configured');
      // Fallback: grant access if RevenueCat is not configured yet
      return new Response(
        JSON.stringify({ 
          subscribed: true,
          subscription_tier: 'premium',
          status: 'active'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check subscription status with RevenueCat
    const revenueCatResponse = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${user_id}`,
      {
        headers: {
          'Authorization': `Bearer ${revenueCatApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!revenueCatResponse.ok) {
      console.error('RevenueCat API error:', await revenueCatResponse.text());
      return new Response(
        JSON.stringify({ subscribed: false }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const subscriptionData = await revenueCatResponse.json();
    
    // Check if user has any active subscriptions
    const activeSubscriptions = subscriptionData.subscriber?.subscriptions || {};
    const hasActiveSubscription = Object.values(activeSubscriptions).some(
      (sub: any) => sub.expires_date && new Date(sub.expires_date) > new Date()
    );

    const subscriptionInfo = {
      subscribed: hasActiveSubscription,
      subscription_tier: hasActiveSubscription ? 'premium' : 'free',
      subscription_end: hasActiveSubscription 
        ? Object.values(activeSubscriptions)[0]?.expires_date 
        : undefined,
      status: hasActiveSubscription ? 'active' : 'inactive'
    };

    return new Response(
      JSON.stringify(subscriptionInfo),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error checking subscription:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
