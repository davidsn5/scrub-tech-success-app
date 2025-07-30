import React from 'react';
import { useAuth } from './AuthContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Lock, Clock, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProtectedContentProps {
  children: React.ReactNode;
  requireSubscription?: boolean;
  maxItems?: number;
  currentItems?: number;
  contentType?: string;
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({
  children,
  requireSubscription = false,
  maxItems,
  currentItems = 0,
  contentType = "content"
}) => {
  const { user, subscription, createCheckout } = useAuth();

  // Admin users get full access
  if (user?.email === 'davidsonnf@gmail.com') {
    return <>{children}</>;
  }

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
        <Card className="max-w-md p-6 text-center bg-gradient-to-br from-white/90 via-slate-50/80 to-blue-50/70 backdrop-blur-sm border-blue-200/50 shadow-xl">
          <Lock className="mx-auto h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Sign In Required</h2>
          <p className="text-gray-600 mb-4">
            Please sign in to access {contentType}
          </p>
          <Link to="/auth">
            <Button className="w-full bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90">
              Sign In / Sign Up
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  // Check if user has active subscription or trial
  const hasAccess = subscription?.subscribed || 
                   subscription?.status === 'trial' || 
                   subscription?.status === 'admin';

  // If subscription is required and user doesn't have access
  if (requireSubscription && !hasAccess) {
    const isTrialExpired = subscription?.status === 'expired';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
        <Card className="max-w-md p-6 text-center bg-gradient-to-br from-white/90 via-orange-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-xl">
          <Crown className="mx-auto h-12 w-12 text-orange-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {isTrialExpired ? 'Trial Expired' : 'Premium Required'}
          </h2>
          <p className="text-gray-600 mb-4">
            {isTrialExpired 
              ? 'Your free trial has ended. Subscribe to continue accessing premium features.'
              : 'This feature requires a premium subscription with 5-day free trial.'
            }
          </p>
          <Button 
            onClick={createCheckout}
            className="w-full bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:opacity-90"
          >
            Start Free Trial - $9.99/month
          </Button>
        </Card>
      </div>
    );
  }

  // Check item limits for trial users
  if (maxItems && currentItems >= maxItems && subscription?.status === 'trial') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
        <Card className="max-w-md p-6 text-center bg-gradient-to-br from-white/90 via-yellow-50/80 to-yellow-100/70 backdrop-blur-sm border-yellow-200/50 shadow-xl">
          <Clock className="mx-auto h-12 w-12 text-yellow-600 mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Trial Limit Reached</h2>
          <p className="text-gray-600 mb-4">
            You've reached the limit of {maxItems} {contentType} for trial users. 
            Subscribe now to get unlimited access!
          </p>
          <Button 
            onClick={createCheckout}
            className="w-full bg-gradient-to-r from-yellow-500/90 to-yellow-600/90 hover:opacity-90"
          >
            Upgrade Now - $9.99/month
          </Button>
          {subscription?.trial_end && (
            <p className="text-xs text-gray-500 mt-3">
              Trial ends: {new Date(subscription.trial_end).toLocaleDateString()}
            </p>
          )}
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedContent;