-- Update the handle_new_user function to include matt@gmail.com as a premium user
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
  
  -- Insert subscriber record with conditional access
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
  ELSIF NEW.email = 'kaylaalejandra17@gmail.com' OR NEW.email = 'ahlummg@mail.irsc.edu' OR NEW.email = 'matt@gmail.com' THEN
    -- Premium users get content access without admin privileges
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