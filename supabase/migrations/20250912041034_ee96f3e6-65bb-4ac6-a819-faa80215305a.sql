-- Grant premium access to the specified user by upserting into subscribers
-- This sets lifetime premium (no expiration) for the email provided

INSERT INTO public.subscribers (
  user_id,
  email,
  subscribed,
  status,
  subscription_tier,
  subscription_start,
  subscription_end,
  updated_at
) VALUES (
  '5ac5aa61-88ef-4ce3-aa3c-01aed4fb26f6',
  'surgicaltechreview@gmail.com',
  true,
  'premium',
  'premium',
  now(),
  NULL,
  now()
)
ON CONFLICT (email) DO UPDATE SET
  subscribed = EXCLUDED.subscribed,
  status = EXCLUDED.status,
  subscription_tier = EXCLUDED.subscription_tier,
  subscription_start = EXCLUDED.subscription_start,
  subscription_end = EXCLUDED.subscription_end,
  updated_at = now();