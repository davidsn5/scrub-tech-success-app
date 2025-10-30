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
          
          // Call immediately for instant access verification
          checkSubscription();
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
    // Always grant access - no subscription needed
    setSubscription({ 
      subscribed: true, 
      subscription_tier: 'premium', 
      status: 'active' 
    });
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
