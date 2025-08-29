import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Stethoscope, Shield } from 'lucide-react';

const Auth = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  
  const { signIn, signUp, user, createCheckoutSession, checkUsernameAvailability } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await signIn(emailOrUsername, password);
    
    if (error) {
      setError(error.message);
    }
    
    setLoading(false);
  };

  const checkUsername = async (username: string) => {
    if (username.length < 3) {
      setUsernameAvailable(null);
      return;
    }
    
    const { available } = await checkUsernameAvailability(username);
    setUsernameAvailable(available);
  };

  const handleUpgradeNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    
    // Directly open Stripe checkout without requiring account creation
    try {
      await createCheckoutSession();
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
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (username && usernameAvailable === false) {
      setError('Username is not available');
      setLoading(false);
      return;
    }
    
    const { error } = await signUp(email, password, username);
    
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Account created! Redirecting to payment...');
      
      // Sign in the user immediately after successful signup
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        setError('Account created but sign-in failed. Please try signing in manually.');
      } else {
        // Wait a bit for the auth state to update, then trigger checkout
        setTimeout(() => {
          createCheckoutSession();
        }, 2000);
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                alt="Surgical Tech Review Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold">Surgical Tech Review</h1>
          </div>
          <p className="text-muted-foreground">
            Master your surgical technology certification with our comprehensive study platform
          </p>
        </div>

        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome</CardTitle>
            <CardDescription>
              Sign in to your account or create a new one to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Upgrade Now</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email or Username</Label>
                    <Input
                      id="signin-email"
                      type="text"
                      placeholder="your@email.com or username"
                      value={emailOrUsername}
                      onChange={(e) => setEmailOrUsername(e.target.value)}
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
                      <span className="font-medium text-sm">Premium Access for a One Time Fee of $19.99</span>
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
                        Pay once, access forever. Create account after payment.
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
                      <Label htmlFor="signup-username">Username (optional)</Label>
                      <Input
                        id="signup-username"
                        type="text"
                        placeholder="Choose a username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (e.target.value) {
                            checkUsername(e.target.value);
                          } else {
                            setUsernameAvailable(null);
                          }
                        }}
                        minLength={3}
                      />
                      {usernameAvailable === true && (
                        <p className="text-xs text-green-600">✓ Username available</p>
                      )}
                      {usernameAvailable === false && (
                        <p className="text-xs text-destructive">✗ Username not available</p>
                      )}
                      {username && username.length < 3 && (
                        <p className="text-xs text-muted-foreground">Username must be at least 3 characters</p>
                      )}
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
                      By upgrading, you'll be redirected to complete payment for $19.99.
                    </p>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;