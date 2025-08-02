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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('signin');
  
  const { signIn, signUp, user, createCheckoutSession } = useAuth();
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
    
    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
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
    
    const { error } = await signUp(email, password);
    
    if (error) {
      setError(error.message);
    } else {
      setSuccess('Account created! Signing you in and redirecting to checkout...');
      
      // Sign in the user immediately after successful signup
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        setError('Account created but sign-in failed. Please try signing in manually.');
      } else {
        // Wait a bit for the auth state to update, then trigger checkout
        setTimeout(() => {
          createCheckoutSession();
        }, 1500);
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Background - Main page preview with opacity */}
      <div className="absolute inset-0 opacity-20 blur-sm pointer-events-none">
        <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
          {/* Header */}
          <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                    <img 
                      src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                      alt="Surgical Tech Review Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-orange-600">
                      Surgical Technologist Review
                    </h1>
                    <p className="text-sm text-gray-600">CST Program Prep and Exam Prep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Progress Cards */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-6">
                Your Progress
              </h2>
              <div className="grid grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                  <Card key={i} className="p-6 bg-gradient-to-br from-white/90 via-orange-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-lg">
                    <div className="h-16 bg-gray-200 rounded"></div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Study Categories */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-6">
                Study Categories
              </h2>
              <div className="grid grid-cols-4 gap-6">
                {[1,2,3,4].map((i) => (
                  <Card key={i} className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/70 backdrop-blur-sm border-blue-200/50 shadow-lg">
                    <div className="h-32 bg-gray-200 rounded"></div>
                  </Card>
                ))}
              </div>
            </div>

            {/* More cards */}
            <div className="grid grid-cols-2 gap-6">
              {[1,2].map((i) => (
                <Card key={i} className="p-6 bg-gradient-to-br from-white/90 via-red-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-lg">
                  <div className="h-24 bg-gray-200 rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="w-full max-w-md relative z-10">
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
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
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
                      <span className="font-medium text-sm">Premium Access - $14.99/month</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete study materials for all categories</li>
                      <li>• Interactive flashcards and practice quizzes</li>
                      <li>• Full exam simulation</li>
                      <li>• Progress tracking and analytics</li>
                      
                    </ul>
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
                      {loading ? 'Creating account...' : 'Sign Up & Subscribe'}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      By signing up, you agree to our terms and will be charged $14.99/month.
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