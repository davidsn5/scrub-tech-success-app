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
import { useDespiaPurchase, PRODUCT_IDS } from '@/hooks/useDespiaPurchase';
import { useAuth } from '@/contexts/AuthContext';

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const plans = [
  {
    id: PRODUCT_IDS.MONTHLY,
    name: 'Monthly',
    price: '$9.99',
    period: '/month',
    features: [
      'Unlimited practice questions',
      'Full exam simulations',
      'All flashcard sets',
      'Key term games',
      'Progress tracking',
      'Cancel anytime'
    ]
  },
  {
    id: PRODUCT_IDS.YEARLY,
    name: 'Yearly',
    price: '$79.99',
    period: '/year',
    badge: 'Best Value',
    features: [
      'Everything in Monthly',
      'Save 33% vs monthly',
      'Priority support',
      'Early access to new features'
    ]
  },
  {
    id: PRODUCT_IDS.LIFETIME,
    name: 'Lifetime',
    price: '$199.99',
    period: 'one-time',
    features: [
      'Everything in Yearly',
      'Lifetime access',
      'All future updates',
      'No recurring payments'
    ]
  }
];

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ open, onOpenChange }) => {
  const { initiatePurchase, isPurchasing } = useDespiaPurchase();
  const { checkSubscription } = useAuth();

  const handlePurchase = async (productId: string) => {
    await initiatePurchase({
      productId,
      onSuccess: () => {
        checkSubscription();
        onOpenChange(false);
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

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative border rounded-lg p-6 hover:border-primary transition-colors"
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {plan.badge}
                </div>
              )}
              
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
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground mt-6">
          Secure payment processed through Apple App Store or Google Play. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};
