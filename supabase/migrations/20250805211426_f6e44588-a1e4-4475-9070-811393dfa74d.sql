CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email)
  );
  
  -- Insert subscriber with 5-day trial (except for admin and premium users)
  IF NEW.email = 'davidsonnf@gmail.com' OR NEW.email = 'surgicaltechreview@gmail.com' THEN
    -- Admin users get permanent access with admin privileges
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
      true,
      'admin',
      'premium'
    );
  ELSIF NEW.email = 'kaylaalejandra17@gmail.com' THEN
    -- Premium user gets content access without admin privileges
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
      true,
      'premium',
      'premium'
    );
  ELSE
    -- Regular users get 5-day trial
    INSERT INTO public.subscribers (
      user_id, 
      email, 
      trial_start, 
      trial_end,
      status
    )
    VALUES (
      NEW.id, 
      NEW.email,
      now(),
      now() + interval '5 days',
      'trial'
    );
  END IF;
  
  RETURN NEW;
END;
$function$