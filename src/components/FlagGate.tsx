import React from 'react';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';
import { type FeatureFlags } from '@/contexts/FeatureFlagsContext';

interface FlagGateProps {
  flag: keyof FeatureFlags;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const FlagGate: React.FC<FlagGateProps> = ({ flag, children, fallback = null }) => {
  const isEnabled = useFeatureFlag(flag);
  
  return isEnabled ? <>{children}</> : <>{fallback}</>;
};