import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { useDespiaPurchase, PRODUCT_ID } from '@/hooks/useDespiaPurchase';
import { useAuth } from '@/contexts/AuthContext';

// Extend Window interface for purchase callback
declare global {
  interface Window {
    pendingPurchaseCallback?: () => void;
  }
}

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plan = {
  id: PRODUCT_ID,
  name: 'Premium Access',
  price: '$9.99',
  period: '/month',
  features: [
    'Unlimited practice questions',
    'Full exam simulations',
    'All flashcard sets',
    'Key term games',
    'Progress tracking',
    'Visual resources access',
    'Study mode with all categories',
    'Track missed questions',
    'Cancel anytime'
  ]
};

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ open, onOpenChange }) => {
  const { initiatePurchase, isPurchasing, handlePurchaseSuccess } = useDespiaPurchase();

  const handlePurchase = async (productId: string) => {
    // Set up callback for when iapSuccess is triggered
    window.pendingPurchaseCallback = () => {
      handlePurchaseSuccess(() => {
        onOpenChange(false);
      });
    };

    await initiatePurchase({
      productId,
      onSuccess: () => {
        onOpenChange(false);
      },
      onError: () => {
        window.pendingPurchaseCallback = undefined;
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Choose Your Plan</DialogTitle>
          <DialogDescription>
            Unlock unlimited access to all study materials and features
          </DialogDescription>
        </DialogHeader>

        <div className="max-w-md mx-auto mt-6">
          <div className="relative border rounded-lg p-6 hover:border-primary transition-colors">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              onClick={() => handlePurchase(plan.id)}
              disabled={isPurchasing}
            >
              {isPurchasing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Subscribe Now'
              )}
            </Button>
          </div>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-6">
          Secure payment processed through Apple App Store or Google Play. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};
