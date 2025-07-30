import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.5';
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend('re_EW3mLVWr_KAZ2Gihd2cn6e6mUewP5eB3V');

const logStep = (step: string, details?: any) => {
  console.log(`[send-verification] ${step}`, details ? JSON.stringify(details) : '');
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep('Starting email verification send');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
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

    // Check if email has already been used for trial
    const { data: hasHistory, error: historyError } = await supabase
      .rpc('email_has_trial_history', { user_email: user.email });

    if (historyError) {
      logStep('Error checking trial history', historyError);
      return new Response(JSON.stringify({ error: 'Database error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (hasHistory) {
      logStep('Email already used for trial', { email: user.email });
      return new Response(JSON.stringify({ 
        error: 'This email has already been used for a trial period' 
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get subscriber record
    const { data: subscriber, error: subError } = await supabase
      .from('subscribers')
      .select('verification_token')
      .eq('user_id', user.id)
      .single();

    if (subError || !subscriber) {
      logStep('Subscriber not found', subError);
      return new Response(JSON.stringify({ error: 'Subscriber not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Update verification sent timestamp
    await supabase
      .from('subscribers')
      .update({ verification_sent_at: new Date().toISOString() })
      .eq('user_id', user.id);

    // Send verification email
    const verificationUrl = `${req.headers.get('origin')}/verify-email?token=${subscriber.verification_token}`;
    
    const emailResponse = await resend.emails.send({
      from: "Study App <onboarding@resend.dev>",
      to: [user.email!],
      subject: "Verify your email to start your 5-day free trial",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome to Study App!</h1>
          <p>Thank you for signing up! To start your 5-day free trial, please verify your email address by clicking the button below:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${verificationUrl}" 
               style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">
              Verify Email & Start Trial
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            This link will expire in 24 hours. If you didn't sign up for Study App, please ignore this email.
          </p>
          
          <p style="color: #666; font-size: 12px;">
            You'll need to provide payment information to start your trial, but you won't be charged until after the 5-day trial period ends.
          </p>
        </div>
      `,
    });

    logStep('Email sent successfully', emailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Verification email sent' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    logStep('Error in send-verification function', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});