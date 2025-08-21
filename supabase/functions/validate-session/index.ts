import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    // Create client with user's token for auth check
    const supabaseClient = createClient(
      supabaseUrl,
      Deno.env.get('SUPABASE_ANON_KEY')!,
      {
        global: {
          headers: {
            Authorization: authHeader,
          },
        },
      }
    );

    // Get current user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    if (userError || !user) {
      console.log('User validation failed:', userError);
      return new Response(
        JSON.stringify({ valid: false, error: 'Invalid user' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 401 
        }
      );
    }

    // Extract session ID from the token
    const token = authHeader.replace('Bearer ', '');
    
    // Check if this session exists in active_sessions
    const { data: sessionData, error: sessionError } = await supabaseAdmin
      .from('active_sessions')
      .select('*')
      .eq('user_id', user.id)
      .eq('session_id', token)
      .single();

    if (sessionError || !sessionData) {
      console.log('Session not found or invalid:', sessionError);
      
      // Session is not valid, clean up any stale sessions for this user
      await supabaseAdmin
        .from('active_sessions')
        .delete()
        .eq('user_id', user.id);

      return new Response(
        JSON.stringify({ valid: false, error: 'Session invalidated' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 401 
        }
      );
    }

    // Update last activity
    await supabaseAdmin
      .from('active_sessions')
      .update({ last_activity: new Date().toISOString() })
      .eq('id', sessionData.id);

    console.log('Session validated successfully for user:', user.email);
    
    return new Response(
      JSON.stringify({ 
        valid: true, 
        user: {
          id: user.id,
          email: user.email
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Session validation error:', error);
    
    return new Response(
      JSON.stringify({ 
        valid: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});