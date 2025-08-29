-- Update RLS policies on subscribers table to ensure users can read their own subscription data

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own subscription only" ON public.subscribers;

-- Create new policy that allows users to read their own subscription data by email
CREATE POLICY "Users can view their own subscription by email" 
ON public.subscribers 
FOR SELECT 
USING (
  auth.uid() = user_id OR 
  auth.email() = email OR
  auth.jwt() ->> 'email' = email
);

-- Ensure service role can still manage all subscribers
CREATE POLICY "Service role can manage all subscribers" 
ON public.subscribers 
FOR ALL 
USING (auth.role() = 'service_role') 
WITH CHECK (auth.role() = 'service_role');