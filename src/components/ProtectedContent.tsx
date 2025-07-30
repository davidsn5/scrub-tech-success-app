import React from 'react';
import { useAuth } from '@/components/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Lock, Clock, CreditCard } from 'lucide-react';

interface ProtectedContentProps {
  children: React.ReactNode;
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({ children }) => {
  const { user, subscription, loading, createCheckout } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm shadow-xl text-center">
          <Lock className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Required</h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access this content. Start your free trial today!
          </p>
          <Link to="/auth">
            <Button className="w-full">
              Sign In / Start Free Trial
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (!subscription.subscribed) {
    const isTrialExpired = subscription.status === 'trial_expired';
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm shadow-xl text-center">
          {isTrialExpired ? (
            <Clock className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          ) : (
            <CreditCard className="h-16 w-16 text-primary mx-auto mb-4" />
          )}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isTrialExpired ? 'Trial Expired' : 'Subscription Required'}
          </h1>
          <p className="text-gray-600 mb-6">
            {isTrialExpired 
              ? 'Your 5-day free trial has ended. Subscribe now to continue accessing all study materials!'
              : 'A subscription is required to access this content. Start with a 5-day free trial!'
            }
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700 font-medium">Monthly Subscription - $9.99/month</p>
              <p className="text-xs text-green-600">
                {isTrialExpired ? 'Continue your access' : '5-day free trial included'}
              </p>
            </div>
          </div>

          <Button onClick={createCheckout} className="w-full mb-3">
            {isTrialExpired ? 'Subscribe Now' : 'Start Free Trial'}
          </Button>
          
          <Link to="/">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedContent;