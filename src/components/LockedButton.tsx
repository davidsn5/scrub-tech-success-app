import React from 'react';
import { useAuth } from './AuthContext';
import { Button, ButtonProps } from './ui/button';
import { Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LockedButtonProps extends ButtonProps {
  children: React.ReactNode;
  allowOnAuthPages?: boolean;
}

const LockedButton: React.FC<LockedButtonProps> = ({ children, onClick, allowOnAuthPages = false, ...props }) => {
  const { user, subscription } = useAuth();
  const location = useLocation();

  // Allow buttons on auth and subscription management pages
  const isAuthOrSubPage = location.pathname === '/auth' || location.pathname === '/verify-email' || allowOnAuthPages;
  
  // Admin users get full access
  if (user?.email === 'davidsonnf@gmail.com') {
    return <Button onClick={onClick} {...props}>{children}</Button>;
  }

  // Check if user has started trial or has subscription
  const hasTrialAccess = subscription?.status === 'trial' || 
                        subscription?.status === 'admin' || 
                        subscription?.subscribed;

  // If on auth pages or special buttons, always allow
  if (isAuthOrSubPage) {
    return <Button onClick={onClick} {...props}>{children}</Button>;
  }

  // If no user or no trial access, show locked button
  if (!user || !hasTrialAccess) {
    return (
      <Link to="/auth">
        <Button 
          {...props} 
          className={`${props.className || ''} relative`}
          onClick={(e) => e.preventDefault()}
        >
          <Lock className="mr-2 h-4 w-4" />
          Start Free Trial
        </Button>
      </Link>
    );
  }

  // User has access, render normal button
  return <Button onClick={onClick} {...props}>{children}</Button>;
};

export default LockedButton;