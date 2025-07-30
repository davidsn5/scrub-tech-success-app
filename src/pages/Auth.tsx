import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password);

      if (error) {
        throw error;
      }

      if (!isLogin) {
        toast({
          title: "Success!",
          description: "Please check your email to confirm your account",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You have been successfully logged in",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-gradient-to-br from-white/90 via-slate-50/80 to-blue-50/70 backdrop-blur-sm border-blue-200/50 shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Sign in to your account' : 'Get started with your 5-day free trial'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLogin ? 'Sign In' : 'Start Free Trial'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {isLogin 
              ? "Don't have an account? Sign up for free trial" 
              : "Already have an account? Sign in"
            }
          </button>
        </div>

        {!isLogin && (
          <div className="mt-4 p-3 bg-blue-50/50 rounded-lg border border-blue-200/50">
            <p className="text-xs text-blue-700 text-center">
              Start your 5-day free trial today! No payment required until trial ends.
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Auth;