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
  signInWithGoogle: () => Promise<{ error?: any }>;
  signInWithApple: () => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
  createCheckoutSession: () => Promise<void>;
  checkAccessBeforeUpgrade: () => Promise<boolean>;
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
  const [previewTimeRemaining, setPreviewTimeRemaining] = useState(600); // 10 minutes in seconds
  const [isPreviewExpired, setIsPreviewExpired] = useState(false);
  const { toast } = useToast();

  // Preview timer disabled - allow unlimited access for non-authenticated users
  useEffect(() => {
    // Always set preview as not expired to allow unlimited access
    setIsPreviewExpired(false);
    setPreviewTimeRemaining(600); // Keep at max for display purposes
    
    // Clear any existing preview timer data
    localStorage.removeItem('previewStartTime');
  }, [user, loading]);

  // Helper function to track active sessions
  const trackActiveSession = async (session: Session, email: string) => {
    try {
      const deviceInfo = navigator.userAgent;
      
      // Use upsert to handle potential duplicates
      await supabase
        .from('active_sessions')
        .upsert({
          user_id: session.user.id,
          email: email,
          session_id: session.access_token,
          device_info: deviceInfo,
          ip_address: null, // IP will be handled server-side if needed
          last_activity: new Date().toISOString()
        }, { 
          onConflict: 'session_id',
          ignoreDuplicates: false 
        });
    } catch (error) {
      console.error('Error tracking session:', error);
      // Don't throw - session tracking failure shouldn't block authentication
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
      // Don't throw - session cleanup failure shouldn't block sign out
    }
  };

  // Helper function to validate current session
  const validateSession = async () => {
    if (!session) return true;
    
    try {
      const { data, error } = await supabase.functions.invoke('validate-session');
      
      if (error || !data?.valid) {
        console.log('Session invalidated, signing out user');
        // Session is invalid, sign out the user
        setSubscription(null);
        setUser(null);
        setSession(null);
        await supabase.auth.signOut({ scope: 'local' });
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
          console.log('👤 User found in auth state change, triggering immediate access verification');
          
          // Track session for both SIGNED_IN and TOKEN_REFRESHED events
          if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            setTimeout(() => {
              trackActiveSession(session, session.user.email!);
            }, 0);
          }
          
          // CRITICAL: Always verify payment status on EVERY sign-in
          if (event === 'SIGNED_IN') {
            console.log('🔍 SIGNED_IN event detected - triggering comprehensive payment verification');
            // Call immediately for instant access verification with toast notification
            verifyAndShowPremiumAccess();
          } else {
            // For other events (TOKEN_REFRESHED, etc), do silent verification
            checkSubscription();
          }
        } else {
          console.log('❌ No user, setting subscription to null');
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
        console.log('👤 Existing user found, triggering immediate access verification');
        // Track existing session
        trackActiveSession(session, session.user.email!);
        // Call immediately for instant access verification
        checkSubscription();
      }
      setLoading(false);
    });

    return () => authSubscription.unsubscribe();
  }, []);

  // Set up periodic session validation and window focus validation
  useEffect(() => {
    if (!session) return;

    // Validate session every 60 seconds
    const validationInterval = setInterval(() => {
      validateSession();
    }, 60000);

    // Validate session when window regains focus
    const handleFocus = () => {
      validateSession();
    };

    // Validate session when page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        validateSession();
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(validationInterval);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [session]);

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (data.session && !error) {
      await trackActiveSession(data.session, email);
    }
    
    return { error };
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    
    return { error };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`
      }
    });
    return { error };
  };

  const signInWithApple = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: {
        redirectTo: `${window.location.origin}/`
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
      console.log('🔍 Starting comprehensive payment verification for:', user.email);
      console.log('📧 User details:', { userId: user.id, email: user.email });
      console.log('🔑 Session token exists:', !!session.access_token);
      
      // Use the comprehensive get-user-access function that cross-checks Stripe and Supabase
      const { data, error } = await supabase.functions.invoke('get-user-access', {
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      console.log('🎯 Access verification response:', { data, error });

      if (error) {
        console.error('❌ Access verification error:', error);
        console.error('❌ Error details:', JSON.stringify(error, null, 2));
        // On error, preserve existing subscription state or default to trial
        if (!subscription) {
          setSubscription({ subscribed: false, subscription_tier: 'premium', status: 'trial' });
        }
        return;
      }

      if (data) {
        const subscriptionStatus = {
          subscribed: data.hasAccess,
          subscription_tier: data.subscriptionTier,
          status: data.accessType,
          subscription_end: data.subscriptionEnd,
          verificationSource: data.verificationSource
        };
        
        console.log(
          data.hasAccess 
            ? `✅ ACCESS GRANTED - Source: ${data.verificationSource}` 
            : `❌ ACCESS DENIED - Status: ${data.accessType}`,
          subscriptionStatus
        );
        
        setSubscription(subscriptionStatus);

        // Log additional verification details for debugging
        if (data.stripeVerification) {
          console.log('💳 Stripe verification details:', data.stripeVerification);
        }
        console.log('🗄️ Database status:', {
          status: data.databaseStatus,
          subscribed: data.databaseSubscribed
        });
      } else {
        console.log('⚠️ No data returned from access verification, setting default');
        setSubscription({ subscribed: false, subscription_tier: 'premium', status: 'trial' });
      }

    } catch (error) {
      console.error('🚨 Critical error in subscription check:', error);
      // Don't immediately remove access on network errors - preserve existing state
      if (!subscription) {
        setSubscription({ subscribed: false, subscription_tier: 'premium', status: 'trial' });
      }
    }
  };

  const createCheckoutSession = async () => {
    try {
      console.log('🔍 Starting checkout session...');
      
      // Check if user is authenticated
      if (!session?.access_token) {
        console.log('🚧 User not authenticated - proceeding with guest checkout');
        // Proceed with guest checkout - no authentication required
        const { data, error } = await supabase.functions.invoke('create-checkout');
        if (error) {
          console.error('Supabase function error:', error);
          throw error;
        }
        if (data?.url) {
          console.log('Checkout URL received:', data.url);
          
          // Force popup window for all devices including mobile and iPad
          const popup = window.open(
            data.url, 
            'stripe-checkout',
            'width=800,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
          );
          
          if (!popup) {
            console.log('Popup blocked, falling back to redirect');
            window.location.href = data.url;
          } else {
            console.log('Stripe checkout popup opened successfully');
          }
        } else {
          console.error('No checkout URL received from function');
        }
        return;
      }
      
      // First, check if user is already a paid subscriber
      const { data: accessData, error: accessError } = await supabase.functions.invoke('get-user-access', {
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });

      console.log('💳 Access check result:', { accessData, accessError });

      if (!accessError && accessData?.hasAccess) {
        console.log('🚫 PREVENTING DUPLICATE PAYMENT - User already has premium access');
        
        // User already has access, show confirmation and refresh their status
        toast({
          title: "You're Already Premium! 🎉",
          description: "You already have premium access. No additional payment needed.",
          duration: 6000,
        });
        
        // Force refresh their subscription status to ensure UI is updated immediately
        await checkSubscription();
        
        // Double-check after a moment to ensure state is properly updated
        setTimeout(async () => {
          await checkSubscription();
        }, 1000);
        
        return; // CRITICAL: Stop here to prevent duplicate charging
      }

      console.log('💰 User needs premium access - proceeding with checkout');

      // User doesn't have access, proceed with normal checkout
      console.log('Creating checkout session...');
      const { data, error } = await supabase.functions.invoke('create-checkout');
      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }
      if (data?.url) {
        console.log('Checkout URL received:', data.url);
        
        // Force popup window for all devices including mobile and iPad
        const popup = window.open(
          data.url, 
          'stripe-checkout',
          'width=800,height=600,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
        );
        
        if (!popup) {
          console.log('Popup blocked, falling back to redirect');
          window.location.href = data.url;
        } else {
          console.log('Stripe checkout popup opened successfully');
        }
      } else {
        console.error('No checkout URL received from function');
      }
    } catch (error) {
      console.error('Error with checkout process:', error);
      toast({
        title: "Checkout Error",
        description: error instanceof Error ? error.message : "Failed to start checkout process",
        variant: "destructive",
      });
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

  // Helper function to check access before upgrade attempts
  const checkAccessBeforeUpgrade = async (): Promise<boolean> => {
    try {
      console.log('🔍 Checking if user already has premium access...');
      
      const { data: accessData, error: accessError } = await supabase.functions.invoke('get-user-access', {
        headers: {
          Authorization: `Bearer ${session?.access_token}`
        }
      });

      if (!accessError && accessData?.hasAccess) {
        console.log('✅ User already has premium access');
        toast({
          title: "You're Already Premium! 🎉",
          description: "You already have premium access to all features. Your subscription is active.",
          duration: 5000,
        });
        
        // Refresh their subscription status
        await checkSubscription();
        return true; // User already has access
      }
      
      console.log('❌ User needs premium access');
      return false; // User needs to upgrade
    } catch (error) {
      console.error('Error checking access:', error);
      return false; // On error, assume they need to upgrade
    }
  };

  // Helper function to verify access and show success notification
  const verifyAndShowPremiumAccess = async () => {
    await checkSubscription();
    
    // After verification, check if user has premium access and show success toast
    setTimeout(() => {
      if (subscription?.subscribed || subscription?.status === 'premium' || subscription?.status === 'admin') {
        toast({
          title: "Premium Access Verified! 🎉",
          description: "Welcome back! All premium features are now unlocked.",
          duration: 4000,
        });
      }
    }, 1000); // Wait a moment for subscription state to update
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
    signInWithGoogle,
    signInWithApple,
    signOut,
    checkSubscription,
    createCheckoutSession,
    checkAccessBeforeUpgrade,
    openCustomerPortal,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
