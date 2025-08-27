-- Update existing matt@gmail.com record to have admin access
UPDATE public.subscribers 
SET 
  subscribed = true,
  status = 'admin',
  subscription_tier = 'premium',
  updated_at = now()
WHERE email = 'matt@gmail.com';