import { useState } from 'react';
import despia from 'despia-native';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface PurchaseOptions {
  productId: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useDespiaPurchase = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isPurchasing, setIsPurchasing] = useState(false);

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
      
      toast({
        title: "Purchase Successful",
        description: "Your premium access has been activated!",
      });

      onSuccess?.();
    } catch (error) {
      console.error('Purchase error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Purchase failed. Please try again.';
      
      toast({
        title: "Purchase Failed",
        description: errorMessage,
        variant: "destructive"
      });

      onError?.(errorMessage);
    } finally {
      setIsPurchasing(false);
    }
  };

  return {
    initiatePurchase,
    isPurchasing
  };
};

// Product IDs for different subscription tiers
export const PRODUCT_IDS = {
  MONTHLY: 'premium_monthly',
  YEARLY: 'premium_yearly',
  LIFETIME: 'premium_lifetime'
} as const;
