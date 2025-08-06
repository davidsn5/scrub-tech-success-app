import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Clock, CreditCard } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, subscription, loading, createCheckoutSession } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Check subscription status
  const isTrialActive = subscription?.status === 'trial' && subscription?.subscription_end && new Date(subscription.subscription_end) > new Date();
  const isSubscribed = subscription?.subscribed || subscription?.status === 'admin';
  const hasAccess = isTrialActive || isSubscribed;

  if (!hasAccess) {
    const trialExpired = subscription?.status === 'trial' && subscription?.subscription_end && new Date(subscription.subscription_end) <= new Date();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 text-center">
          <div className="mb-4">
            {trialExpired ? (
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-2" />
            ) : (
              <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
            )}
            <h2 className="text-xl font-bold">
              {trialExpired ? 'Trial Expired' : 'Premium Access Required'}
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {trialExpired 
              ? 'Your free trial has ended. Subscribe to continue accessing all study materials.'
              : 'Subscribe to access all premium study materials and features.'
            }
          </p>
          
          <div className="bg-primary/10 p-4 rounded-md border border-primary/20 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Premium Access - $9.99/month</span>
            </div>
            <ul className="text-sm text-muted-foreground text-left space-y-1">
              <li>• Complete study materials for all categories</li>
              <li>• Interactive flashcards and practice quizzes</li>
              <li>• Full exam simulation</li>
              <li>• Progress tracking and analytics</li>
            </ul>
          </div>

          <Button onClick={createCheckoutSession} className="w-full">
            Subscribe Now
          </Button>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;