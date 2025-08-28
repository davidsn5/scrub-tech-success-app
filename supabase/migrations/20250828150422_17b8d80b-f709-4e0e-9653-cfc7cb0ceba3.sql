-- CRITICAL SECURITY FIXES

-- 1. Fix SECURITY DEFINER functions to have safe search paths
CREATE OR REPLACE FUNCTION public.get_user_by_username(input_username text)
 RETURNS TABLE(user_id uuid, email text, username text, display_name text)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN QUERY
  SELECT 
    p.user_id,
    p.email,
    p.username,
    p.display_name
  FROM public.profiles p
  WHERE p.username = input_username;
END;
$function$;

CREATE OR REPLACE FUNCTION public.username_exists(input_username text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE username = input_username
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.email_has_trial_history(user_email text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.subscribers 
    WHERE email = user_email 
    AND (trial_started = true OR subscribed = true)
  );
END;
$function$;

-- 2. Remove automatic admin assignment from handle_new_user trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email)
  );
  
  -- Insert subscriber record - ALL users start as unsubscribed
  -- Remove automatic admin/premium assignment for security
  INSERT INTO public.subscribers (
    user_id, 
    email, 
    subscribed,
    status,
    subscription_tier
  )
  VALUES (
    NEW.id, 
    NEW.email,
    false,
    'unsubscribed',
    'premium'
  );
  
  RETURN NEW;
END;
$function$;

-- 3. Tighten subscriber policies - users should only see their own data
DROP POLICY IF EXISTS "Users can view own subscription data" ON public.subscribers;
DROP POLICY IF EXISTS "Users can view their own subscription" ON public.subscribers;

CREATE POLICY "Users can view their own subscription only" 
ON public.subscribers 
FOR SELECT 
USING (auth.uid() = user_id);

-- 4. Add session cleanup function for data hygiene
CREATE OR REPLACE FUNCTION public.cleanup_old_sessions()
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  -- Delete sessions older than 30 days with no recent activity
  DELETE FROM public.active_sessions 
  WHERE last_activity < now() - interval '30 days';
END;
$function$;