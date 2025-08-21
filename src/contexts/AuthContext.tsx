import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionInfo {
  subscribed: boolean;
  subscription_tier?: string;
  subscription_end?: string;
  status?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscription: SubscriptionInfo | null;
  loading: boolean;
  previewTimeRemaining: number;
  isPreviewExpired: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signUp: (email: string, password: string) => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
  createCheckoutSession: () => Promise<void>;
  openCustomerPortal: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [previewStartTime, setPreviewStartTime] = useState<number | null>(null);
  const [previewTimeRemaining, setPreviewTimeRemaining] = useState(120); // 2 minutes in seconds
  const [isPreviewExpired, setIsPreviewExpired] = useState(false);
  const { toast } = useToast();

  // Preview timer for non-authenticated users
  useEffect(() => {
    if (!loading && !user) {
      // Start preview timer for non-authenticated users
      if (previewStartTime === null) {
        const startTime = Date.now();
        setPreviewStartTime(startTime);
        localStorage.setItem('previewStartTime', startTime.toString());
      }

      const interval = setInterval(() => {
        const startTime = previewStartTime || parseInt(localStorage.getItem('previewStartTime') || '0');
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = Math.max(120 - elapsed, 0); // 2 minutes = 120 seconds
        
        setPreviewTimeRemaining(remaining);
        setIsPreviewExpired(remaining === 0);
      }, 1000);

      return () => clearInterval(interval);
    } else if (user) {
      // Clear preview timer when user is authenticated
      setPreviewStartTime(null);
      setPreviewTimeRemaining(120);
      setIsPreviewExpired(false);
      localStorage.removeItem('previewStartTime');
    }
  }, [user, loading, previewStartTime]);

  // Helper function to track active sessions
  const trackActiveSession = async (session: Session, email: string) => {
    try {
      const deviceInfo = navigator.userAgent;
      
      await supabase
        .from('active_sessions')
        .insert({
          user_id: session.user.id,
          email: email,
          session_id: session.access_token,
          device_info: deviceInfo,
          ip_address: null // IP will be handled server-side if needed
        });
    } catch (error) {
      console.error('Error tracking session:', error);
    }
  };

  // Helper function to remove active session
  const removeActiveSession = async (sessionId: string) => {
    try {
      await supabase
        .from('active_sessions')
        .delete()
        .eq('session_id', sessionId);
    } catch (error) {
      console.error('Error removing session:', error);
    }
  };

  // Helper function to validate current session
  const validateSession = async () => {
    if (!session) return true;
    
    try {
      const { data, error } = await supabase.functions.invoke('validate-session');
      
      if (error || !data?.valid) {
        console.log('Session invalidated, signing out user');
        
        // Show user-friendly message about session invalidation
        toast({
          title: "Session Expired",
          description: "You've been signed in from another device. Please sign in again to continue.",
          variant: "destructive",
        });
        
        // Session is invalid, sign out the user
        setSubscription(null);
        setUser(null);
        setSession(null);
        await supabase.auth.signOut({ scope: 'local' });
        
        // Redirect to auth page after a short delay
        setTimeout(() => {
          window.location.href = '/auth';
        }, 2000);
        
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error validating session:', error);
      return true; // Don't sign out on network errors
    }
  };

  useEffect(() => {
    console.log('AuthContext useEffect - Setting up auth listener');
    // Set up auth state listener
    const { data: { subscription: authSubscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', event, 'Session exists:', !!session);
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          console.log('User found, calling checkSubscription in 100ms');
          setTimeout(() => {
            checkSubscription();
          }, 100);
        } else {
          console.log('No user, setting subscription to null');
          setSubscription(null);
        }
      }
    );

    // Check for existing session
    console.log('AuthContext - Checking for existing session');
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Existing session check result:', !!session);
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('Existing user found, calling checkSubscription in 100ms');
        // Track existing session
        trackActiveSession(session, session.user.email!);
        setTimeout(() => {
          checkSubscription();
        }, 100);
      }
      setLoading(false);
    });

    return () => authSubscription.unsubscribe();
  }, []);

  // Periodic session validation for authenticated users
  useEffect(() => {
    if (!user || !session) return;

    // Validate session every 30 seconds
    const validationInterval = setInterval(() => {
      validateSession();
    }, 30000);

    return () => clearInterval(validationInterval);
  }, [user, session]);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    // If login successful, track the session to enforce single device login
    if (data.session && !error) {
      await trackActiveSession(data.session, email);
    }
    
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { error };
  };

  const signOut = async () => {
    // Prevent multiple simultaneous sign out attempts
    if (!session) return;
    
    try {
      setLoading(true);
      
      // Remove active session tracking
      await removeActiveSession(session.access_token);
      
      // Clear local state immediately to prevent UI issues
      setSubscription(null);
      setUser(null);
      setSession(null);
      
      // Then sign out from Supabase
      await supabase.auth.signOut({ scope: 'global' });
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkSubscription = async () => {
    // Don't check subscription if no user is authenticated
    if (!user || !session) {
      console.log('No user or session, skipping subscription check');
      return;
    }
    
    try {
      console.log('Checking subscription for user:', user.email);
      
      // First check database directly for all users
      const { data: dbData, error: dbError } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', user.email)
        .single();

      console.log('Database query result:', { dbData, dbError });

      if (dbData) {
        console.log('User found in database:', dbData);
        
        // Check if user has any form of access (admin, premium, trial, or subscribed)
        const hasAccess = dbData.status === 'admin' || 
                         dbData.status === 'premium' || 
                         dbData.subscribed || 
                         (dbData.trial_started && dbData.trial_end && new Date(dbData.trial_end) > new Date());
        
        console.log('User access status:', { 
          hasAccess, 
          status: dbData.status, 
          subscribed: dbData.subscribed, 
          trial_started: dbData.trial_started,
          trial_end: dbData.trial_end,
          trial_still_valid: dbData.trial_end ? new Date(dbData.trial_end) > new Date() : false
        });
        
        setSubscription({
          subscribed: hasAccess,
          subscription_tier: dbData.subscription_tier || 'premium',
          status: dbData.status || 'trial'
        });
        return;
      }

      // If no database record exists, fall back to edge function
      console.log('No database record found, trying edge function');
      const { data, error } = await supabase.functions.invoke('check-subscription');
      
      if (error) {
        console.error('Edge function error:', error);
        // Default to no access if everything fails
        setSubscription({ subscribed: false, subscription_tier: null, status: 'trial' });
        return;
      }
      
      console.log('Subscription data received:', data);
      setSubscription(data);
    } catch (error) {
      console.error('Error checking subscription:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      // Default to no access on error
      setSubscription({ subscribed: false, subscription_tier: null, status: 'trial' });
    }
  };

  const createCheckoutSession = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout');
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  const openCustomerPortal = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('customer-portal');
      if (error) throw error;
      if (data?.url) {
        // Check if mobile device to avoid popup blockers
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile) {
          window.location.href = data.url;
        } else {
          window.open(data.url, '_blank');
        }
      }
    } catch (error) {
      console.error('Error opening customer portal:', error);
    }
  };

  const value = {
    user,
    session,
    subscription,
    loading,
    previewTimeRemaining,
    isPreviewExpired,
    signIn,
    signUp,
    signOut,
    checkSubscription,
    createCheckoutSession,
    openCustomerPortal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
