-- Update the existing handle_new_user function to handle admin account
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert profile
  INSERT INTO public.profiles (user_id, email, display_name)
  VALUES (
    NEW.id, 
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', NEW.email)
  );
  
  -- Insert subscriber with 5-day trial (except for admin user)
  IF NEW.email = 'davidsonnf@gmail.com' THEN
    -- Admin user gets permanent access without trial/subscription
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
$$ LANGUAGE plpgsql SECURITY DEFINER;