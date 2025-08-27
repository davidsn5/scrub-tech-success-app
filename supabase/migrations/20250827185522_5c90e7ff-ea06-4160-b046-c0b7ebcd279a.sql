-- First, make user_id nullable to allow manual premium entries
ALTER TABLE public.subscribers ALTER COLUMN user_id DROP NOT NULL;

-- Now insert the premium users
INSERT INTO public.subscribers (email, user_id, subscribed, status, subscription_tier, updated_at)
VALUES 
  ('Matt@gmail.com', NULL, true, 'premium', 'premium', now()),
  ('surgicaltechreview@gmail.com', NULL, true, 'premium', 'premium', now())
ON CONFLICT (email) DO UPDATE SET
  subscribed = true,
  status = 'premium', 
  subscription_tier = 'premium',
  updated_at = now();