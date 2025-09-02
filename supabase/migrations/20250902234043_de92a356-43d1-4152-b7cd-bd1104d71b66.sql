
-- Grandfather specific emails as lifetime premium (no expiry)
WITH target_emails AS (
  SELECT unnest(ARRAY[
    'andradegaby_leo@hotmail.com',
    'firejeep1991@yahoo.com',
    'ednagibbs022@gmail.com',
    'surgicaltechreview@gmail.com'
  ]) AS email
)
INSERT INTO public.subscribers AS s (
  email,
  subscribed,
  status,
  subscription_tier,
  subscription_start,
  subscription_end,
  updated_at
)
SELECT 
  t.email,
  true AS subscribed,
  'premium' AS status,
  'premium' AS subscription_tier,
  now() AS subscription_start,
  NULL AS subscription_end,
  now() AS updated_at
FROM target_emails t
ON CONFLICT (email)
DO UPDATE SET
  subscribed = true,
  status = 'premium',
  subscription_tier = COALESCE(EXCLUDED.subscription_tier, 'premium'),
  -- Keep existing start if present; otherwise use the inserted value
  subscription_start = COALESCE(s.subscription_start, EXCLUDED.subscription_start),
  -- Force lifetime by clearing any end date
  subscription_end = NULL,
  updated_at = now();
