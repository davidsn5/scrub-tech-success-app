import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface VerificationResult {
  hasAccess: boolean;
  verificationSource: string;
  subscriptionData: any;
  error?: string;
}

export const useStripeVerification = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const { user, checkSubscription } = useAuth();
  const { toast } = useToast();

  const verifyPremiumAccess = async (): Promise<VerificationResult> => {
    if (!user) {
      return {
        hasAccess: false,
        verificationSource: 'no_user',
        subscriptionData: null,
        error: 'User not authenticated'
      };
    }

    setIsVerifying(true);

    try {
      // Call the get-user-access edge function to verify against Stripe
      const { data, error } = await supabase.functions.invoke('get-user-access', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) {
        console.error('Error verifying access:', error);
        return {
          hasAccess: false,
          verificationSource: 'error',
          subscriptionData: null,
          error: error.message
        };
      }

      // If verification shows user has access, refresh the local subscription state
      if (data.hasAccess) {
        await checkSubscription();
        
        toast({
          title: "Premium Access Verified",
          description: "Your premium subscription has been verified through Stripe. All premium features are now unlocked!",
          variant: "default",
        });
      }

      return {
        hasAccess: data.hasAccess,
        verificationSource: data.verificationSource,
        subscriptionData: data.subscriptionData,
      };

    } catch (error: any) {
      console.error('Error during verification:', error);
      return {
        hasAccess: false,
        verificationSource: 'error',
        subscriptionData: null,
        error: error.message
      };
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyAndProceed = async (action: () => void): Promise<boolean> => {
    const result = await verifyPremiumAccess();
    
    if (result.hasAccess) {
      action();
      return true;
    } else {
      if (result.error) {
        toast({
          title: "Verification Error",
          description: `Unable to verify premium access: ${result.error}`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Premium Access Required",
          description: "This feature requires a premium subscription. Please upgrade to continue.",
          variant: "destructive",
        });
      }
      return false;
    }
  };

  return {
    verifyPremiumAccess,
    verifyAndProceed,
    isVerifying
  };
};