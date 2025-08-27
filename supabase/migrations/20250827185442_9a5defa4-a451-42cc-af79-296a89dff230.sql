-- Mark specific emails as paid/premium users
UPDATE public.subscribers 
SET 
  subscribed = true,
  status = 'premium',
  subscription_tier = 'premium',
  updated_at = now()
WHERE email IN ('Matt@gmail.com', 'surgicaltechreview@gmail.com');

-- Insert records if they don't exist
INSERT INTO public.subscribers (email, subscribed, status, subscription_tier, updated_at)
VALUES 
  ('Matt@gmail.com', true, 'premium', 'premium', now()),
  ('surgicaltechreview@gmail.com', true, 'premium', 'premium', now())
ON CONFLICT (email) DO UPDATE SET
  subscribed = true,
  status = 'premium', 
  subscription_tier = 'premium',
  updated_at = now();