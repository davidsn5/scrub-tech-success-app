-- Fix RLS policies for subscribers table to prevent public access
-- Remove the overly permissive service role policy and replace with secure policies

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Service role can manage subscribers" ON public.subscribers;

-- Create secure policies for subscribers table
-- Allow authenticated users to view only their own subscription data
CREATE POLICY "Users can view own subscription data" ON public.subscribers
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id OR auth.email() = email);

-- Allow service role to insert/update for stripe webhook handling and signup process
CREATE POLICY "Service role can insert subscribers" ON public.subscribers
FOR INSERT 
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can update subscribers" ON public.subscribers
FOR UPDATE 
TO service_role
USING (true);

-- Fix RLS policies for profiles table to prevent public access
-- Remove the overly permissive service role policy

-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Service role can manage profiles" ON public.profiles;

-- Create secure policies for profiles table
-- Allow authenticated users to view only their own profile
CREATE POLICY "Users can view own profile" ON public.profiles
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Allow authenticated users to update their own profile
CREATE POLICY "Users can update own profile" ON public.profiles
FOR UPDATE 
TO authenticated
USING (auth.uid() = user_id);

-- Allow service role to insert/update for user signup process
CREATE POLICY "Service role can insert profiles" ON public.profiles
FOR INSERT 
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can update profiles" ON public.profiles
FOR UPDATE 
TO service_role
USING (true);