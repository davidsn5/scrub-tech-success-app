import { useAuth } from '@/contexts/AuthContext';
import { useStripeVerification } from './useStripeVerification';
import { useToast } from '@/hooks/use-toast';

export const usePremiumFeatureGate = () => {
  const { user, subscription, createCheckoutSession } = useAuth();
  const { verifyPremiumAccess, verifyAndProceed, isVerifying } = useStripeVerification();
  const { toast } = useToast();

  const isPremium = () => {
    return subscription?.subscribed || 
           subscription?.status === 'admin' || 
           subscription?.status === 'premium' || 
           subscription?.status === 'trial';
  };

  const handlePremiumFeatureClick = async (
    action: () => void,
    featureName?: string,
    bypassForFree: boolean = false
  ) => {
    // If user is not logged in, redirect to auth
    if (!user) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to access this feature.",
        variant: "default",
      });
      return;
    }

    // If feature is available for free users, proceed without verification
    if (bypassForFree) {
      action();
      return;
    }

    // If user appears to have premium locally, proceed but verify in background
    if (isPremium()) {
      action();
      // Verify in background to ensure subscription is still valid
      verifyPremiumAccess().then(result => {
        if (!result.hasAccess) {
          toast({
            title: "Subscription Status Changed",
            description: "Your subscription status has changed. Please refresh the page or sign in again.",
            variant: "destructive",
          });
        }
      });
      return;
    }

    // User doesn't have premium - verify with both Supabase and Stripe
    toast({
      title: "Verifying Access",
      description: "Checking your subscription status with Supabase and Stripe...",
      variant: "default",
    });

    const result = await verifyPremiumAccess();
    
    if (result.hasAccess) {
      // User has premium access, proceed with action
      toast({
        title: "Access Verified!",
        description: "Premium features are now unlocked. Enjoy full access!",
        variant: "default",
      });
      action();
    } else {
      // Show upgrade prompt
      toast({
        title: "Premium Feature",
        description: featureName 
          ? `${featureName} requires a premium subscription. Upgrade to unlock this feature.`
          : "This feature requires a premium subscription. Upgrade to unlock all premium features.",
        variant: "default",
      });
      
      // Trigger upgrade flow
      createCheckoutSession();
    }
  };

  return {
    handlePremiumFeatureClick,
    isPremium: isPremium(),
    isVerifying
  };
};