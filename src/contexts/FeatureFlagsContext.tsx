import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export interface FeatureFlags {
  newExamUI: boolean;
  chartsV2: boolean;
  enhancedProgress: boolean;
  instrumentFlashcards: boolean;
}

interface FeatureFlagsContextType {
  flags: FeatureFlags;
  toggleFlag: (flagKey: keyof FeatureFlags) => void;
  isAdmin: boolean;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(undefined);

const defaultFlags: FeatureFlags = {
  newExamUI: false,
  chartsV2: false,
  enhancedProgress: false,
  instrumentFlashcards: false,
};

export const FeatureFlagsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { subscription } = useAuth();
  const [flags, setFlags] = useState<FeatureFlags>(defaultFlags);
  
  const isAdmin = subscription?.status === 'admin';

  // Load flags from localStorage on mount (admin only)
  useEffect(() => {
    if (isAdmin) {
      const savedFlags = localStorage.getItem('featureFlags');
      if (savedFlags) {
        try {
          const parsedFlags = JSON.parse(savedFlags);
          setFlags({ ...defaultFlags, ...parsedFlags });
        } catch (error) {
          console.warn('Failed to parse saved feature flags');
        }
      }

      // Check URL params for flag overrides
      const urlParams = new URLSearchParams(window.location.search);
      const enableParam = urlParams.get('enable');
      if (enableParam && enableParam in defaultFlags) {
        setFlags(prev => ({
          ...prev,
          [enableParam]: true
        }));
      }
    }
  }, [isAdmin]);

  // Save flags to localStorage when they change (admin only)
  useEffect(() => {
    if (isAdmin) {
      localStorage.setItem('featureFlags', JSON.stringify(flags));
    }
  }, [flags, isAdmin]);

  const toggleFlag = (flagKey: keyof FeatureFlags) => {
    if (!isAdmin) return;
    
    setFlags(prev => ({
      ...prev,
      [flagKey]: !prev[flagKey]
    }));
  };

  return (
    <FeatureFlagsContext.Provider value={{ flags, toggleFlag, isAdmin }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export const useFeatureFlags = () => {
  const context = useContext(FeatureFlagsContext);
  if (context === undefined) {
    throw new Error('useFeatureFlags must be used within a FeatureFlagsProvider');
  }
  return context;
};