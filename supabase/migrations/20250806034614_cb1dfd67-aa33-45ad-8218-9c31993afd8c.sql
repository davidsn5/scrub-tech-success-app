-- Update the handle_new_user function to remove trial and set users as unsubscribed by default
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
  
  -- Insert subscriber record (no trial for regular users)
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
    -- Regular users start as unsubscribed and need to pay
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
  END IF;
  
  RETURN NEW;
END;
$function$;