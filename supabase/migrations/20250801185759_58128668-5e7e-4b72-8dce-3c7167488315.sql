-- Disable email confirmation requirement
UPDATE auth.config 
SET email_confirm_change_enabled = false;

-- Also disable email confirmation for new signups
UPDATE auth.config 
SET email_autoconfirm = true;