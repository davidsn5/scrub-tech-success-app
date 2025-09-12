-- Ensure all premium users have proper access configuration
-- Fix any inconsistencies in premium user records

-- Update premium users to ensure they have lifetime access if subscription_end is null
UPDATE public.subscribers 
SET 
  subscribed = true,
  status = 'premium',
  subscription_tier = 'premium',
  updated_at = now()
WHERE (status = 'premium' OR status = 'admin') 
  AND subscription_end IS NULL;

-- Ensure users with active paid subscriptions that haven't expired maintain access
UPDATE public.subscribers 
SET 
  subscribed = true,
  status = 'active',
  subscription_tier = 'premium',
  updated_at = now()
WHERE subscription_end IS NOT NULL 
  AND subscription_end > now()
  AND (subscribed = false OR status != 'active');

-- Mark expired subscriptions as expired
UPDATE public.subscribers 
SET 
  subscribed = false,
  status = 'expired',
  updated_at = now()
WHERE subscription_end IS NOT NULL 
  AND subscription_end <= now()
  AND status != 'expired';