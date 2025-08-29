import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

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
  signIn: (emailOrUsername: string, password: string) => Promise<{ error?: any }>;
  signUp: (email: string, password: string, username?: string) => Promise<{ error?: any }>;
  signInWithGoogle: () => Promise<{ error?: any }>;
  signInWithApple: () => Promise<{ error?: any }>;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
  createCheckoutSession: () => Promise<void>;
  openCustomerPortal: () => Promise<void>;
  checkUsernameAvailability: (username: string) => Promise<{ available: boolean; error?: any }>;
  updateUsername: (username: string) => Promise<{ error?: any }>;
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
          console.log('User found in auth state change, scheduling checkSubscription');
          // Use a small delay to ensure state is fully set
          setTimeout(() => {
            console.log('Calling checkSubscription with user:', session.user.email);
            checkSubscription();
          }, 200);
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
        console.log('Existing user found, scheduling checkSubscription');
        // Track existing session
        trackActiveSession(session, session.user.email!);
        // Use a small delay to ensure state is fully set
        setTimeout(() => {
          console.log('Calling checkSubscription for existing user:', session.user.email);
          checkSubscription();
        }, 200);
      }
      setLoading(false);
    });

    return () => authSubscription.unsubscribe();
  }, []);

  // Disable periodic session validation - it was causing users to be signed out after payments
  // useEffect(() => {
  //   if (!user || !session) return;

  //   // Validate session every 30 seconds
  //   const validationInterval = setInterval(() => {
  //     validateSession();
  //   }, 30000);

  //   return () => clearInterval(validationInterval);
  // }, [user, session]);

  const signIn = async (emailOrUsername: string, password: string) => {
    // Check if input is an email or username
    const isEmail = emailOrUsername.includes('@');
    
    if (isEmail) {
      // Standard email/password signin
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailOrUsername,
        password,
      });
      
      if (data.session && !error) {
        await trackActiveSession(data.session, emailOrUsername);
      }
      
      return { error };
    } else {
      // Username-based signin
      try {
        const { data, error } = await supabase.functions.invoke('username-auth', {
          body: {
            action: 'sign-in-with-username',
            username: emailOrUsername,
            password
          }
        });
        
        if (error) {
          return { error };
        }
        
        if (data.session && data.user) {
          await trackActiveSession(data.session, data.user.email);
          // Set the session manually since we're bypassing the normal auth flow
          setSession(data.session);
          setUser(data.user);
        }
        
        return { error: null };
      } catch (error) {
        return { error };
      }
    }
  };

  const signUp = async (email: string, password: string, username?: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    
    // If signup successful and username provided, update the profile
    if (!error && username && data.user) {
      try {
        await supabase.functions.invoke('username-auth', {
          body: {
            action: 'update-username',
            username
          },
          headers: {
            Authorization: `Bearer ${data.session?.access_token}`
          }
        });
      } catch (usernameError) {
        console.error('Error setting username:', usernameError);
        // Don't fail the signup if username update fails
      }
    }
    
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
      console.log('Checking subscription for user:', user.email);
      
      // First try to check with the regular client (respects RLS)
      let { data: dbData, error: dbError } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', user.email)
        .single();

      console.log('Database query result:', { dbData, dbError });

      if (dbData) {
        console.log('User found in database:', dbData);
        
        // Check if user has any form of access (admin, premium, trial, or subscribed)
        // For lifetime access, subscription_end will be null
        const hasAccess = dbData.status === 'admin' || 
                         dbData.status === 'premium' || 
                         dbData.status === 'active' ||
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
        
        // Be more generous with access - if user has any positive status, grant access
        const finalSubscriptionStatus = {
          subscribed: hasAccess,
          subscription_tier: dbData.subscription_tier || 'premium',
          status: dbData.status || 'trial'
        };
        
        console.log('Setting subscription status:', finalSubscriptionStatus);
        setSubscription(finalSubscriptionStatus);
        return;
      }

      // If no database record found or RLS blocks access, try edge function as fallback
      if (dbError || !dbData) {
        console.log('Database query failed or no data found, trying edge function', { dbError });
        try {
          const { data: edgeData, error: edgeError } = await supabase.functions.invoke('check-subscription', {
            headers: {
              Authorization: `Bearer ${session.access_token}`
            }
          });
          if (!edgeError && edgeData) {
            console.log('Edge function returned subscription data:', edgeData);
            setSubscription(edgeData);
            return;
          }
        } catch (edgeError) {
          console.error('Edge function also failed:', edgeError);
        }
      }

    } catch (error) {
      console.error('Error checking subscription:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      // Don't immediately remove access on network errors - preserve existing state
      if (!subscription) {
        setSubscription({ subscribed: false, subscription_tier: null, status: 'trial' });
      }
    }
  };

  const createCheckoutSession = async () => {
    try {
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

  const checkUsernameAvailability = async (username: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('username-auth', {
        body: {
          action: 'check-username',
          username
        }
      });
      
      if (error) {
        return { available: false, error };
      }
      
      return { available: !data.exists, error: null };
    } catch (error) {
      return { available: false, error };
    }
  };

  const updateUsername = async (username: string) => {
    if (!session) {
      return { error: { message: "Not authenticated" } };
    }
    
    try {
      const { data, error } = await supabase.functions.invoke('username-auth', {
        body: {
          action: 'update-username',
          username
        },
        headers: {
          Authorization: `Bearer ${session.access_token}`
        }
      });
      
      if (error) {
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      return { error };
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
    signInWithGoogle,
    signInWithApple,
    signOut,
    checkSubscription,
    createCheckoutSession,
    openCustomerPortal,
    checkUsernameAvailability,
    updateUsername,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};