-- Update southpawwood@gmail.com to be a paid subscriber
UPDATE public.subscribers 
SET 
  subscribed = true,
  status = 'active',
  subscription_start = now(),
  subscription_end = now() + interval '1 month',
  stripe_customer_id = 'cus_test_account',
  updated_at = now()
WHERE email = 'southpawwood@gmail.com';