import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface EngagementMetrics {
  currentStreak: number;
  correctAnswersToday: number;
  consecutiveDays: number;
  quizCompletions: number;
  lastActivityDate: string;
  sessionStartTime: number;
  highestScore: number;
}

interface EngagementTrigger {
  type: 'streak' | 'high_score' | 'quiz_completion' | 'time_spent' | 'consecutive_days' | null;
  message: string;
  shouldTrigger: boolean;
}

const ENGAGEMENT_THRESHOLDS = {
  STREAK: 5, // Show paywall after 5 correct in a row
  HIGH_SCORE: 80, // Show paywall after getting 80%+ on a quiz
  TIME_SPENT: 10 * 60 * 1000, // 10 minutes
  CONSECUTIVE_DAYS: 3, // 3 days in a row
  QUIZ_COMPLETIONS: 2, // After completing 2 quizzes
};

export const useEngagementTracking = () => {
  const { subscription } = useAuth();
  const isPremium = subscription?.subscribed || subscription?.status === 'admin' || subscription?.status === 'trial';

  const [metrics, setMetrics] = useState<EngagementMetrics>(() => {
    const saved = localStorage.getItem('engagementMetrics');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return getDefaultMetrics();
      }
    }
    return getDefaultMetrics();
  });

  function getDefaultMetrics(): EngagementMetrics {
    return {
      currentStreak: 0,
      correctAnswersToday: 0,
      consecutiveDays: 1,
      quizCompletions: 0,
      lastActivityDate: new Date().toDateString(),
      sessionStartTime: Date.now(),
      highestScore: 0,
    };
  }

  // Reset daily metrics if new day
  useEffect(() => {
    const today = new Date().toDateString();
    if (metrics.lastActivityDate !== today) {
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toDateString();
      const isConsecutive = metrics.lastActivityDate === yesterday;
      
      const newMetrics = {
        ...metrics,
        correctAnswersToday: 0,
        currentStreak: 0,
        consecutiveDays: isConsecutive ? metrics.consecutiveDays + 1 : 1,
        lastActivityDate: today,
        sessionStartTime: Date.now(),
      };
      
      setMetrics(newMetrics);
      localStorage.setItem('engagementMetrics', JSON.stringify(newMetrics));
    }
  }, []);

  const trackCorrectAnswer = () => {
    if (isPremium) return;
    
    const newMetrics = {
      ...metrics,
      currentStreak: metrics.currentStreak + 1,
      correctAnswersToday: metrics.correctAnswersToday + 1,
    };
    
    setMetrics(newMetrics);
    localStorage.setItem('engagementMetrics', JSON.stringify(newMetrics));
  };

  const trackIncorrectAnswer = () => {
    if (isPremium) return;
    
    const newMetrics = {
      ...metrics,
      currentStreak: 0,
    };
    
    setMetrics(newMetrics);
    localStorage.setItem('engagementMetrics', JSON.stringify(newMetrics));
  };

  const trackQuizCompletion = (score: number) => {
    if (isPremium) return;
    
    const newMetrics = {
      ...metrics,
      quizCompletions: metrics.quizCompletions + 1,
      highestScore: Math.max(metrics.highestScore, score),
    };
    
    setMetrics(newMetrics);
    localStorage.setItem('engagementMetrics', JSON.stringify(newMetrics));
  };

  const getEngagementTrigger = (): EngagementTrigger => {
    if (isPremium) {
      return { type: null, message: '', shouldTrigger: false };
    }

    // Check for streak milestone
    if (metrics.currentStreak >= ENGAGEMENT_THRESHOLDS.STREAK) {
      return {
        type: 'streak',
        message: `🔥 Amazing! You got ${metrics.currentStreak} questions correct in a row! Keep your momentum going with unlimited access.`,
        shouldTrigger: true,
      };
    }

    // Check for high score
    if (metrics.highestScore >= ENGAGEMENT_THRESHOLDS.HIGH_SCORE && metrics.quizCompletions > 0) {
      return {
        type: 'high_score',
        message: `🎯 Excellent work! You scored ${metrics.highestScore}% on your last quiz. You're ready to master all the material with premium access.`,
        shouldTrigger: true,
      };
    }

    // Check for quiz completions
    if (metrics.quizCompletions >= ENGAGEMENT_THRESHOLDS.QUIZ_COMPLETIONS) {
      return {
        type: 'quiz_completion',
        message: `📚 You've completed ${metrics.quizCompletions} quizzes! You're clearly serious about studying. Unlock all quizzes and ace your exam.`,
        shouldTrigger: true,
      };
    }

    // Check for consecutive days
    if (metrics.consecutiveDays >= ENGAGEMENT_THRESHOLDS.CONSECUTIVE_DAYS) {
      return {
        type: 'consecutive_days',
        message: `⭐ ${metrics.consecutiveDays} days in a row! Your dedication is impressive. Upgrade to maintain this streak with unlimited practice.`,
        shouldTrigger: true,
      };
    }

    // Check for time spent
    const timeSpent = Date.now() - metrics.sessionStartTime;
    if (timeSpent >= ENGAGEMENT_THRESHOLDS.TIME_SPENT) {
      return {
        type: 'time_spent',
        message: `⏰ You've been studying hard for ${Math.floor(timeSpent / 60000)} minutes! Maximize your study time with unlimited access to all materials.`,
        shouldTrigger: true,
      };
    }

    return { type: null, message: '', shouldTrigger: false };
  };

  const resetEngagement = () => {
    const newMetrics = getDefaultMetrics();
    setMetrics(newMetrics);
    localStorage.setItem('engagementMetrics', JSON.stringify(newMetrics));
  };

  return {
    metrics,
    trackCorrectAnswer,
    trackIncorrectAnswer,
    trackQuizCompletion,
    getEngagementTrigger,
    resetEngagement,
    isPremium,
  };
};
