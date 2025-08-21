
-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.active_sessions ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own session rows
CREATE POLICY "Users can insert their own sessions"
  ON public.active_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own session rows (used on sign-out)
CREATE POLICY "Users can delete their own sessions"
  ON public.active_sessions
  FOR DELETE
  USING (auth.uid() = user_id);

-- (Optional) Allow users to update their own sessions if needed client-side
CREATE POLICY "Users can update their own sessions"
  ON public.active_sessions
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create trigger to enforce single session per email (delete others on insert)
CREATE TRIGGER enforce_single_session_trigger
BEFORE INSERT ON public.active_sessions
FOR EACH ROW
EXECUTE FUNCTION public.enforce_single_session();
