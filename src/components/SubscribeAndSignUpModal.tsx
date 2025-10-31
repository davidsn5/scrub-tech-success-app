import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Loader2 } from 'lucide-react';
import { useDespiaPurchase, PRODUCT_ID } from '@/hooks/useDespiaPurchase';
import { useAuth } from '@/contexts/AuthContext';

interface SubscribeAndSignUpModalProps {
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

export const SubscribeAndSignUpModal: React.FC<SubscribeAndSignUpModalProps> = ({ 
  open, 
  onOpenChange 
}) => {
  const { initiatePurchase, isPurchasing, handlePurchaseSuccess } = useDespiaPurchase();
  const { user, signUp, signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);

  const handleSubscribe = async () => {
    setError('');

    // If user is not logged in, create account first
    if (!user) {
      // Validate inputs
      if (!email || !password) {
        setError('Please enter email and password');
        return;
      }
      
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }

      setIsCreatingAccount(true);

      try {
        // Create account
        const { error: signUpError } = await signUp(email, password);
        
        if (signUpError) {
          setError(signUpError.message);
          setIsCreatingAccount(false);
          return;
        }

        // Sign in immediately
        const { error: signInError } = await signIn(email, password);
        
        if (signInError) {
          setError('Account created but sign-in failed. Please try signing in manually.');
          setIsCreatingAccount(false);
          return;
        }

        setIsCreatingAccount(false);
        // Continue to purchase flow below
      } catch (err) {
        setError('Failed to create account. Please try again.');
        setIsCreatingAccount(false);
        return;
      }
    }

    // Set up callback for when iapSuccess is triggered
    window.pendingPurchaseCallback = () => {
      handlePurchaseSuccess(() => {
        onOpenChange(false);
      });
    };

    await initiatePurchase({
      productId: plan.id,
      onSuccess: () => {
        onOpenChange(false);
      },
      onError: () => {
        window.pendingPurchaseCallback = undefined;
      }
    });
  };

  const isProcessing = isPurchasing || isCreatingAccount;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Subscribe & Get Premium Access</DialogTitle>
          <DialogDescription>
            {user 
              ? 'Subscribe to unlock unlimited access to all study materials'
              : 'Create your account and subscribe in one step'
            }
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Left side: Account creation (if not logged in) */}
          {!user && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Step 1: Create Your Account</h3>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isProcessing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isProcessing}
                    minLength={6}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isProcessing}
                    minLength={6}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Right side: Subscription plan */}
          <div className={`space-y-4 ${!user ? '' : 'md:col-span-2'}`}>
            <h3 className="font-semibold text-lg">
              {user ? 'Your Premium Plan' : 'Step 2: Choose Your Plan'}
            </h3>
            <div className="border rounded-lg p-6 hover:border-primary transition-colors">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
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
            </div>
          </div>
        </div>

        {error && (
          <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
            {error}
          </div>
        )}

        <Button
          className="w-full"
          onClick={handleSubscribe}
          disabled={isProcessing}
          size="lg"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {isCreatingAccount ? 'Creating Account...' : 'Processing...'}
            </>
          ) : (
            user ? 'Subscribe Now' : 'Create Account & Subscribe'
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Secure payment processed through Apple App Store or Google Play. Cancel anytime.
        </p>
      </DialogContent>
    </Dialog>
  );
};
