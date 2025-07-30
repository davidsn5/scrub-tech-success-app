-- Add email verification tracking
ALTER TABLE public.subscribers 
ADD COLUMN email_verified BOOLEAN DEFAULT FALSE,
ADD COLUMN verification_token UUID DEFAULT gen_random_uuid(),
ADD COLUMN verification_sent_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN trial_started BOOLEAN DEFAULT FALSE;

-- Update existing subscribers to be verified (for existing users)
UPDATE public.subscribers SET email_verified = true WHERE created_at < now();

-- Create function to check if email has been used for trial
CREATE OR REPLACE FUNCTION public.email_has_trial_history(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.subscribers 
    WHERE email = user_email 
    AND (trial_started = true OR subscribed = true)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;