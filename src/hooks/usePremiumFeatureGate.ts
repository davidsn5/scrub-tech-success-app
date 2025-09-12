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
    // If user is not logged in but this isn't a free preview, require sign in
    if (!user && !bypassForFree) {
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
        if (!result.hasAccess && result.verificationSource === 'stripe') {
          toast({
            title: "Subscription Status Changed",
            description: "Your subscription status has changed. Please refresh the page.",
            variant: "destructive",
          });
        }
      });
      return;
    }

    // User doesn't have premium - verify with Stripe and show upgrade option
    const result = await verifyPremiumAccess();
    
    if (result.hasAccess) {
      // User actually has premium, proceed with action
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