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
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify webhook signature if RevenueCat webhook secret is configured
    const webhookSecret = Deno.env.get('REVENUECAT_WEBHOOK_SECRET');
    if (webhookSecret) {
      const signature = req.headers.get('x-revenuecat-signature');
      // Implement signature verification here if needed
      console.log('Webhook signature:', signature);
    }

    const payload = await req.json();
    console.log('RevenueCat webhook received:', JSON.stringify(payload, null, 2));

    const { event } = payload;
    
    // Handle different webhook event types
    // See: https://www.revenuecat.com/docs/integrations/webhooks/event-types-and-fields
    switch (event.type) {
      case 'INITIAL_PURCHASE':
      case 'RENEWAL':
      case 'PRODUCT_CHANGE':
      case 'UNCANCELLATION': {
        // User has active subscription
        const userId = event.app_user_id;
        const productId = event.product_id;
        const expiresDate = event.expiration_at_ms 
          ? new Date(parseInt(event.expiration_at_ms)).toISOString() 
          : null;

        console.log(`Processing active subscription for user ${userId}`);

        // Update subscriber status
        const { error: updateError } = await supabaseClient
          .from('subscribers')
          .upsert({
            user_id: userId,
            subscribed: true,
            status: 'active',
            subscription_tier: 'premium',
            subscription_end: expiresDate,
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id'
          });

        if (updateError) {
          console.error('Error updating subscriber:', updateError);
          throw updateError;
        }

        console.log(`Successfully activated subscription for user ${userId}`);
        break;
      }

      case 'CANCELLATION':
      case 'EXPIRATION': {
        // Subscription ended
        const userId = event.app_user_id;

        console.log(`Processing subscription end for user ${userId}`);

        const { error: updateError } = await supabaseClient
          .from('subscribers')
          .upsert({
            user_id: userId,
            subscribed: false,
            status: 'cancelled',
            subscription_tier: 'free',
            updated_at: new Date().toISOString()
          }, {
            onConflict: 'user_id'
          });

        if (updateError) {
          console.error('Error updating subscriber:', updateError);
          throw updateError;
        }

        console.log(`Successfully deactivated subscription for user ${userId}`);
        break;
      }

      case 'BILLING_ISSUE': {
        // Payment failed
        const userId = event.app_user_id;

        console.log(`Billing issue for user ${userId}`);

        const { error: updateError } = await supabaseClient
          .from('subscribers')
          .update({
            status: 'billing_issue',
            updated_at: new Date().toISOString()
          })
          .eq('user_id', userId);

        if (updateError) {
          console.error('Error updating subscriber:', updateError);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(
      JSON.stringify({ received: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
