import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface StripeVerificationResult {
  hasStripePayment: boolean;
  customerId: string | null;
  hasActiveSubscription: boolean;
  error?: string;
}

export const useStripePaymentVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const { user, createCheckoutSession, checkSubscription } = useAuth();
  const { toast } = useToast();

  const verifyStripePayment = async (): Promise<StripeVerificationResult> => {
    if (!user) {
      return {
        hasStripePayment: false,
        customerId: null,
        hasActiveSubscription: false,
        error: 'User not authenticated'
      };
    }

    setIsVerifying(true);

    try {
      // Call the get-user-access edge function to verify against Stripe specifically
      const { data, error } = await supabase.functions.invoke('get-user-access', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) {
        console.error('Error verifying Stripe payment:', error);
        return {
          hasStripePayment: false,
          customerId: null,
          hasActiveSubscription: false,
          error: error.message
        };
      }

      const stripeVerification = data.stripeVerification || {};
      const hasStripePayment = stripeVerification.customerId && 
                              (stripeVerification.hasCompletedPayment || stripeVerification.hasActiveSubscription);

      // If user has completed Stripe payment, refresh subscription state
      if (hasStripePayment) {
        await checkSubscription();
        
        toast({
          title: "Stripe Payment Verified",
          description: "Your Stripe payment has been verified. Access granted!",
          variant: "default",
        });
      }

      return {
        hasStripePayment: !!hasStripePayment,
        customerId: stripeVerification.customerId || null,
        hasActiveSubscription: stripeVerification.hasActiveSubscription || false,
      };

    } catch (error: any) {
      console.error('Error during Stripe verification:', error);
      return {
        hasStripePayment: false,
        customerId: null,
        hasActiveSubscription: false,
        error: error.message
      };
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyStripeAndProceed = async (action: () => void, featureName: string): Promise<boolean> => {
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to access this feature.",
        variant: "default",
      });
      return false;
    }

    const result = await verifyStripePayment();
    
    if (result.hasStripePayment) {
      action();
      return true;
    } else {
      // Show Stripe payment required message
      toast({
        title: "Stripe Payment Required",
        description: `${featureName} requires a verified Stripe payment. Please upgrade to access this premium feature.`,
        variant: "destructive",
      });
      
      // Automatically trigger Stripe checkout
      await createCheckoutSession();
      return false;
    }
  };

  return {
    verifyStripePayment,
    verifyStripeAndProceed,
    isVerifying
  };
};