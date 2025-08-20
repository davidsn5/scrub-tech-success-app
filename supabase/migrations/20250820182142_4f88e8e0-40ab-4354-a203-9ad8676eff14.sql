-- Update subscriber record for ahlummg@mail.irsc.edu to have permanent premium access
UPDATE public.subscribers 
SET 
    subscribed = true,
    status = 'premium',
    subscription_tier = 'premium',
    trial_started = false,
    trial_start = NULL,
    trial_end = NULL,
    updated_at = now()
WHERE email = 'ahlummg@mail.irsc.edu';