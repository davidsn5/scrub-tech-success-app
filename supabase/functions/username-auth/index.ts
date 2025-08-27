import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[USERNAME-AUTH] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const { action, username, email, password } = await req.json();
    logStep("Request received", { action, username, email: email ? "provided" : "not provided" });

    if (action === "sign-in-with-username") {
      // Find user by username
      const { data: userProfile, error: profileError } = await supabaseClient
        .rpc('get_user_by_username', { input_username: username });

      if (profileError || !userProfile || userProfile.length === 0) {
        logStep("Username not found", { username });
        return new Response(JSON.stringify({ 
          error: "Invalid username or password" 
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }

      const userEmail = userProfile[0].email;
      logStep("Username found, attempting sign in", { email: userEmail });

      // Use the anon client for sign in
      const anonClient = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_ANON_KEY") ?? ""
      );

      const { data, error } = await anonClient.auth.signInWithPassword({
        email: userEmail,
        password: password,
      });

      if (error) {
        logStep("Sign in failed", { error: error.message });
        return new Response(JSON.stringify({ 
          error: "Invalid username or password" 
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }

      logStep("Sign in successful");
      return new Response(JSON.stringify({ 
        user: data.user,
        session: data.session 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (action === "check-username") {
      const { data: exists, error } = await supabaseClient
        .rpc('username_exists', { input_username: username });

      if (error) {
        logStep("Error checking username", { error: error.message });
        return new Response(JSON.stringify({ error: error.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      return new Response(JSON.stringify({ exists }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    if (action === "update-username") {
      const authHeader = req.headers.get("Authorization");
      if (!authHeader) {
        return new Response(JSON.stringify({ error: "Authorization required" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        });
      }

      const token = authHeader.replace("Bearer ", "");
      const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
      
      if (userError || !userData.user) {
        return new Response(JSON.stringify({ error: "Invalid token" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        });
      }

      // Check if username already exists
      const { data: exists, error: checkError } = await supabaseClient
        .rpc('username_exists', { input_username: username });

      if (checkError) {
        return new Response(JSON.stringify({ error: checkError.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      if (exists) {
        return new Response(JSON.stringify({ error: "Username already taken" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        });
      }

      // Update username in profile
      const { error: updateError } = await supabaseClient
        .from('profiles')
        .update({ 
          username: username,
          display_name: username,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userData.user.id);

      if (updateError) {
        logStep("Error updating username", { error: updateError.message });
        return new Response(JSON.stringify({ error: updateError.message }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        });
      }

      logStep("Username updated successfully", { username, userId: userData.user.id });
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in username-auth", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});