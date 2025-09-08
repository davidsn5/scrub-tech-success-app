import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface GamePreviewLimits {
  termMatching: number;
  speedQuiz: number;
  wordScramble: number;
}

interface DailyGameTracker {
  date: string;
  termMatching: number;
  speedQuiz: number;
  wordScramble: number;
}

const FREE_PREVIEW_LIMITS: GamePreviewLimits = {
  termMatching: 2,  // 2 games per day
  speedQuiz: 1,     // 1 game per day
  wordScramble: 2   // 2 games per day
};

export const useGamePreviewGate = () => {
  const { user, subscription } = useAuth();
  const [dailyGameCounts, setDailyGameCounts] = useState<DailyGameTracker>({
    date: new Date().toDateString(),
    termMatching: 0,
    speedQuiz: 0,
    wordScramble: 0
  });

  const isPremium = subscription?.subscribed || subscription?.status === 'admin' || subscription?.status === 'trial';

  useEffect(() => {
    // Load daily counts from localStorage
    const savedData = localStorage.getItem('dailyGameCounts');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        const today = new Date().toDateString();
        
        if (parsed.date === today) {
          setDailyGameCounts(parsed);
        } else {
          // New day, reset counts
          const resetCounts = {
            date: today,
            termMatching: 0,
            speedQuiz: 0,
            wordScramble: 0
          };
          setDailyGameCounts(resetCounts);
          localStorage.setItem('dailyGameCounts', JSON.stringify(resetCounts));
        }
      } catch (error) {
        console.error('Error parsing daily game counts:', error);
      }
    }
  }, []);

  const incrementGameCount = (gameType: keyof GamePreviewLimits) => {
    if (isPremium) return; // Premium users have unlimited access
    
    const newCounts = {
      ...dailyGameCounts,
      [gameType]: dailyGameCounts[gameType] + 1
    };
    
    setDailyGameCounts(newCounts);
    localStorage.setItem('dailyGameCounts', JSON.stringify(newCounts));
  };

  const canPlayGame = (gameType: keyof GamePreviewLimits): boolean => {
    if (isPremium) return true;
    return dailyGameCounts[gameType] < FREE_PREVIEW_LIMITS[gameType];
  };

  const getRemainingPlays = (gameType: keyof GamePreviewLimits): number => {
    if (isPremium) return Infinity;
    return Math.max(0, FREE_PREVIEW_LIMITS[gameType] - dailyGameCounts[gameType]);
  };

  const getGamePreviewMessage = (gameType: keyof GamePreviewLimits): string => {
    if (isPremium) return '';
    
    const remaining = getRemainingPlays(gameType);
    const limit = FREE_PREVIEW_LIMITS[gameType];
    
    if (remaining > 0) {
      return `Free Preview: ${remaining} of ${limit} plays remaining today`;
    } else {
      return `Daily limit reached. Upgrade for unlimited access.`;
    }
  };

  return {
    isPremium,
    dailyGameCounts,
    canPlayGame,
    getRemainingPlays,
    getGamePreviewMessage,
    incrementGameCount,
    limits: FREE_PREVIEW_LIMITS
  };
};