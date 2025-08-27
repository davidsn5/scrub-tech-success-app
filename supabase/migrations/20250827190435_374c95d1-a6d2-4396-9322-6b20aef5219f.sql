-- Add username column to profiles table and make it unique
ALTER TABLE public.profiles ADD COLUMN username TEXT;

-- Create unique index for usernames (excluding null values)
CREATE UNIQUE INDEX profiles_username_unique ON public.profiles (username) WHERE username IS NOT NULL;

-- Create a function to find user by username
CREATE OR REPLACE FUNCTION public.get_user_by_username(input_username TEXT)
RETURNS TABLE (
  user_id UUID,
  email TEXT,
  username TEXT,
  display_name TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;

-- Create a function to check if username exists
CREATE OR REPLACE FUNCTION public.username_exists(input_username TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE username = input_username
  );
END;
$$;