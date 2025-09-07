import { useFeatureFlags, type FeatureFlags } from '@/contexts/FeatureFlagsContext';

export const useFeatureFlag = (flagKey: keyof FeatureFlags) => {
  const { flags, isAdmin } = useFeatureFlags();
  
  // Non-admin users never see features
  if (!isAdmin) return false;
  
  return flags[flagKey];
};