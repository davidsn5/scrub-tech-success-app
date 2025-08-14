-- Grant 60-day trial to specific user
UPDATE public.subscribers 
SET 
  trial_started = true,
  trial_start = now(),
  trial_end = now() + INTERVAL '60 days',
  status = 'trial',
  subscribed = true,
  updated_at = now()
WHERE email = 'ahlummg@mail.irsc.edu';