
import React, { useEffect, useState } from 'react';
import { useSearchParams, Navigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PurchaseSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { user, checkSubscription } = useAuth();
  const { toast } = useToast();
  const [status, setStatus] = useState<'confirming' | 'success' | 'error'>('confirming');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const confirmPayment = async () => {
      if (!sessionId || !user) {
        setStatus('error');
        setErrorMessage('Missing payment session or user not authenticated');
        return;
      }

      try {
        console.log('Confirming payment for session:', sessionId);
        
        const { data, error } = await supabase.functions.invoke('confirm-payment', {
          body: { session_id: sessionId }
        });

        if (error) {
          console.error('Payment confirmation error:', error);
          setStatus('error');
          setErrorMessage(error.message || 'Failed to confirm payment');
          return;
        }

        if (data?.success) {
          console.log('Payment confirmed successfully');
          setStatus('success');
          
          // Refresh subscription status
          await checkSubscription();
          
          toast({
            title: "Payment Successful!",
            description: "Welcome to Surgical Tech Review Premium! You now have full access to all study materials.",
          });
        } else {
          console.error('Payment confirmation failed:', data);
          setStatus('error');
          setErrorMessage(data?.error || 'Payment confirmation failed');
        }
      } catch (error) {
        console.error('Error confirming payment:', error);
        setStatus('error');
        setErrorMessage('An unexpected error occurred');
      }
    };

    confirmPayment();
  }, [sessionId, user, checkSubscription, toast]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!sessionId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        {status === 'confirming' && (
          <>
            <div className="mb-6">
              <Loader2 className="h-16 w-16 text-primary mx-auto mb-4 animate-spin" />
              <h1 className="text-2xl font-bold mb-2">Confirming Your Payment</h1>
              <p className="text-muted-foreground">
                Please wait while we verify your payment and activate your premium access...
              </p>
            </div>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="mb-6">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2 text-green-700">Payment Successful!</h1>
              <p className="text-muted-foreground mb-4">
                Welcome to Surgical Tech Review Premium! You now have lifetime access to all our study materials.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-green-800 mb-2">What's included:</h3>
                <ul className="text-sm text-green-700 space-y-1 text-left">
                  <li>• Complete study materials for all categories</li>
                  <li>• Interactive flashcards and practice quizzes</li>
                  <li>• Full exam simulation</li>
                  <li>• Progress tracking and analytics</li>
                  <li>• Lifetime access - no recurring fees</li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <Button asChild className="w-full">
                <Link to="/study">Start Studying</Link>
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/">Go to Homepage</Link>
              </Button>
            </div>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="mb-6">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2 text-red-700">Payment Issue</h1>
              <p className="text-muted-foreground mb-4">
                There was an issue confirming your payment. Please don't worry - if your payment went through, 
                it will be processed shortly.
              </p>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-700">
                  <strong>Error:</strong> {errorMessage}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={() => window.location.reload()} className="w-full">
                Try Again
              </Button>
              
              <Button asChild variant="outline" className="w-full">
                <Link to="/account">Contact Support</Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default PurchaseSuccess;
