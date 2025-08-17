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
  const { user, subscription, loading, createCheckoutSession, isPreviewExpired, previewTimeRemaining } = useAuth();

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

  // Allow access during preview period for non-authenticated users
  if (!user && !isPreviewExpired) {
    return <>{children}</>;
  }

  // Redirect to auth if user is not logged in and preview has expired
  if (!user && isPreviewExpired) {
    return <Navigate to="/auth" replace />;
  }

  // Check subscription status - subscribed, admin, premium, or trial users get access
  const isSubscribed = subscription?.subscribed || subscription?.status === 'admin' || subscription?.status === 'premium' || subscription?.status === 'trial';
  const hasAccess = isSubscribed;

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-6 text-center">
          <div className="mb-4">
            <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
            <h2 className="text-xl font-bold">
              Premium Access Required
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Subscribe to access all premium study materials and features.
          </p>
          
          <div className="bg-primary/10 p-4 rounded-md border border-primary/20 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="h-4 w-4 text-primary" />
              <span className="font-medium text-sm">Premium Access for a One Time Fee of $29.99</span>
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