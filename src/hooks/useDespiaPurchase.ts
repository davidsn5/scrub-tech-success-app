import { useState } from 'react';
import despia from 'despia-native';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface PurchaseOptions {
  productId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useDespiaPurchase = () => {
  const { user, checkSubscription } = useAuth();
  const { toast } = useToast();
  const [isPurchasing, setIsPurchasing] = useState(false);

  const pollSubscriptionStatus = async (maxAttempts = 10, interval = 2000) => {
    let attempts = 0;
    
    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, interval));
      
      try {
        const { data } = await supabase.functions.invoke('check-revenuecat-subscription', {
          body: { user_id: user?.id }
        });
        
        if (data?.subscribed) {
          return true;
        }
      } catch (error) {
        console.error('Error polling subscription:', error);
      }
      
      attempts++;
    }
    
    return false;
  };

  const initiatePurchase = async ({ productId, onSuccess, onError }: PurchaseOptions) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to make a purchase",
        variant: "destructive"
      });
      return;
    }

    setIsPurchasing(true);

    try {
      // Use RevenueCat URL pattern with Despia
      const purchaseUrl = `revenuecat://purchase?external_id=${user.id}&product=${productId}`;
      
      await despia(purchaseUrl);
      
      // Note: iapSuccess() will be called by the native runtime
      // We don't need to handle it here as it's set up globally
      
    } catch (error) {
      console.error('Purchase error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Purchase failed. Please try again.';
      
      toast({
        title: "Purchase Failed",
        description: errorMessage,
        variant: "destructive"
      });

      onError?.(errorMessage);
      setIsPurchasing(false);
    }
  };

  // This will be called by the global iapSuccess handler
  const handlePurchaseSuccess = async (onSuccess?: () => void) => {
    toast({
      title: "Processing Purchase",
      description: "Verifying your subscription...",
    });

    const isSubscribed = await pollSubscriptionStatus();
    
    if (isSubscribed) {
      await checkSubscription();
      toast({
        title: "Purchase Successful",
        description: "Your premium access has been activated!",
      });
      onSuccess?.();
    } else {
      toast({
        title: "Verification Pending",
        description: "Your purchase is being processed. This may take a few moments.",
      });
    }
    
    setIsPurchasing(false);
  };

  return {
    initiatePurchase,
    isPurchasing,
    handlePurchaseSuccess
  };
};

// Product ID for the app subscription
export const PRODUCT_ID = 'ofrng14ed9a14b9';
