import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Shield, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  
  const { signIn, signUp, createCheckoutSession } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
    } else {
      onClose();
    }
    
    setLoading(false);
  };


  const handleUpgradeNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    // Directly open Stripe checkout without requiring account creation
    try {
      await createCheckoutSession();
      onClose();
    } catch (error) {
      setError('Failed to open payment page. Please try again.');
    }
    
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      // First create the account
      const { error: signUpError } = await signUp(email, password);
      
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
      
      setSuccess('Account created! Signing you in and opening payment...');
      
      // Sign in the user immediately after successful signup
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        setError('Account created but sign-in failed. Please try signing in manually.');
        setLoading(false);
        return;
      }
      
      // Wait a moment for auth state to update, then trigger checkout
      setTimeout(async () => {
        try {
          await createCheckoutSession();
          onClose();
        } catch (checkoutError) {
          setError('Account created but payment page failed to open. Please try the upgrade button.');
        }
        setLoading(false);
      }, 1500);
      
    } catch (error) {
      setError('Failed to create account. Please try again.');
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    setSuccess('');
    setActiveTab('signin');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
        <DialogHeader className="text-center pb-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                alt="Surgical Tech Review Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-bold">Surgical Tech Review</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Master your surgical technology certification
          </p>
        </DialogHeader>
        
        <div className="space-y-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Upgrade Now</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                {error && (
                  <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                    {error}
                  </div>
                )}
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-md border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">12 Months of Premium Access for a One Time Fee of $19.99</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete study materials for all categories</li>
                    <li>• Interactive flashcards and practice quizzes</li>
                    <li>• Full exam simulation</li>
                    <li>• Progress tracking and analytics</li>
                  </ul>
                  
                  {/* Quick Upgrade Button */}
                  <div className="mt-4">
                    <Button 
                      onClick={handleUpgradeNow}
                      className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white"
                      disabled={loading}
                    >
                      {loading ? 'Opening payment...' : 'Upgrade Now - $19.99'}
                    </Button>
                     <p className="text-xs text-muted-foreground text-center mt-2">
                       One-time payment for 12 months of access. Create account after payment.
                     </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">Or create an account first:</span>
                </div>
                
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
                      required
                      minLength={6}
                    />
                  </div>
                  
                  {error && (
                    <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                      {error}
                    </div>
                  )}
                  
                  {success && (
                    <div className="text-sm text-green-600 bg-green-50 p-3 rounded-md">
                      {success}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                     {loading ? 'Creating account...' : 'Create Account & Upgrade'}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By signing up, you'll be redirected to complete payment for $19.99.
                  </p>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;