import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.5';
import Stripe from 'https://esm.sh/stripe@17.3.1?target=deno';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  console.log(`[cancel-subscription] ${step}`, details ? JSON.stringify(details) : '');
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Starting subscription cancellation');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const stripe = new Stripe(Deno.env.get('sk_test_51RqP6nCppe8o4tCnjYUGsaYJduHmK6zxo5Agnr47DgoOaY6CcOarpRUnLiFuJtaxPT9S2WiBdE9LKuj6NLt2StVx00FumQu6kL')!, {
      apiVersion: '2023-10-16',
    });

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get the authenticated user
    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      logStep('Authentication failed', authError);
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    logStep('User authenticated', { userId: user.id, email: user.email });

    // Get subscriber data
    const { data: subscriber, error: subError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (subError || !subscriber) {
      logStep('Subscriber not found', subError);
      return new Response(JSON.stringify({ error: 'Subscription not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!subscriber.stripe_customer_id) {
      logStep('No Stripe customer ID found');
      return new Response(JSON.stringify({ error: 'No active subscription to cancel' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get active subscriptions from Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: subscriber.stripe_customer_id,
      status: 'active',
    });

    if (subscriptions.data.length === 0) {
      logStep('No active subscriptions found');
      return new Response(JSON.stringify({ error: 'No active subscription found' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Cancel the subscription
    const subscription = subscriptions.data[0];
    await stripe.subscriptions.cancel(subscription.id);

    logStep('Subscription cancelled in Stripe', { subscriptionId: subscription.id });

    // Update local subscription status
    const { error: updateError } = await supabase
      .from('subscribers')
      .update({ 
        subscribed: false,
        status: 'cancelled',
        subscription_end: new Date().toISOString()
      })
      .eq('user_id', user.id);

    if (updateError) {
      logStep('Error updating local subscription', updateError);
    }

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Subscription cancelled successfully'
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    logStep('Error in cancel-subscription function', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});