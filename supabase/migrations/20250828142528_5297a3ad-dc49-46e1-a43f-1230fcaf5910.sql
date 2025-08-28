-- Fix RLS policies for active_sessions table to prevent public access
-- Drop existing policies first
DROP POLICY IF EXISTS "Service role can manage all sessions" ON public.active_sessions;
DROP POLICY IF EXISTS "Users can view their own sessions" ON public.active_sessions;

-- Ensure RLS is enabled
ALTER TABLE public.active_sessions ENABLE ROW LEVEL SECURITY;

-- Create secure policies
-- Policy 1: Users can only view their own sessions (authenticated users only)
CREATE POLICY "Users can view own sessions only" 
ON public.active_sessions 
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy 2: Service role can manage all sessions (needed for authentication functions)
CREATE POLICY "Service role manages sessions" 
ON public.active_sessions 
FOR ALL 
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Policy 3: Users can insert their own sessions
CREATE POLICY "Users can insert own sessions" 
ON public.active_sessions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy 4: Users can update their own sessions  
CREATE POLICY "Users can update own sessions" 
ON public.active_sessions 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Policy 5: Users can delete their own sessions
CREATE POLICY "Users can delete own sessions" 
ON public.active_sessions 
FOR DELETE 
USING (auth.uid() = user_id);