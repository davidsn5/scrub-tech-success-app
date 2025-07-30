import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.5';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const logStep = (step: string, details?: any) => {
  console.log(`[verify-email] ${step}`, details ? JSON.stringify(details) : '');
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Starting email verification');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { token } = await req.json();
    
    if (!token) {
      return new Response(JSON.stringify({ error: 'Token required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    logStep('Verifying token', { token });

    // Find subscriber by verification token
    const { data: subscriber, error: subError } = await supabase
      .from('subscribers')
      .select('*')
      .eq('verification_token', token)
      .single();

    if (subError || !subscriber) {
      logStep('Invalid token', subError);
      return new Response(JSON.stringify({ error: 'Invalid verification token' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if token is expired (24 hours)
    const sentAt = new Date(subscriber.verification_sent_at);
    const now = new Date();
    const hoursDiff = (now.getTime() - sentAt.getTime()) / (1000 * 60 * 60);

    if (hoursDiff > 24) {
      logStep('Token expired', { hoursDiff });
      return new Response(JSON.stringify({ error: 'Verification token expired' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Mark email as verified
    const { error: updateError } = await supabase
      .from('subscribers')
      .update({ 
        email_verified: true,
        verification_token: null 
      })
      .eq('id', subscriber.id);

    if (updateError) {
      logStep('Error updating subscriber', updateError);
      return new Response(JSON.stringify({ error: 'Verification failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    logStep('Email verified successfully', { subscriberId: subscriber.id });

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Email verified successfully'
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    logStep('Error in verify-email function', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});