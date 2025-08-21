-- Create table to track active user sessions
CREATE TABLE public.active_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  email TEXT NOT NULL,
  session_id TEXT NOT NULL UNIQUE,
  device_info TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.active_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own sessions" 
ON public.active_sessions 
FOR SELECT 
USING (auth.uid()::text = user_id::text);

CREATE POLICY "Service role can manage all sessions" 
ON public.active_sessions 
FOR ALL 
USING (true);

-- Create index for performance
CREATE INDEX idx_active_sessions_user_id ON public.active_sessions(user_id);
CREATE INDEX idx_active_sessions_email ON public.active_sessions(email);

-- Create function to manage single session per user
CREATE OR REPLACE FUNCTION public.enforce_single_session()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Delete any existing sessions for this email (except the current one)
  DELETE FROM public.active_sessions 
  WHERE email = NEW.email 
  AND session_id != NEW.session_id;
  
  RETURN NEW;
END;
$$;

-- Create trigger to enforce single session
CREATE TRIGGER enforce_single_session_trigger
  AFTER INSERT ON public.active_sessions
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_single_session();