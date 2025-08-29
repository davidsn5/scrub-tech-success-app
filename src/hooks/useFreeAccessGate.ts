import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface FreeAccessLimits {
  questionsPerCategory: number;
  dailyQuizCompletions: number;
}

interface DailyTracker {
  date: string;
  completedQuizzes: number;
}

export const useFreeAccessGate = () => {
  const { subscription, user } = useAuth();
  const [dailyQuizCount, setDailyQuizCount] = useState(0);

  const isAdmin = subscription?.status === 'admin';
  const isPremium = subscription?.subscribed || isAdmin;
  
  // Free access is granted to:
  // 1. Non-authenticated users (guest access)
  // 2. Authenticated users who have been verified as non-premium via Stripe
  // 3. Users with status 'trial' after Stripe verification
  const hasFreeAccess = !user || // Guest users get free access
                        (user && subscription && !isPremium) || // Authenticated users verified as non-premium
                        subscription?.status === 'trial'; // Users explicitly on trial

  const limits: FreeAccessLimits = {
    questionsPerCategory: 10,
    dailyQuizCompletions: 2,
  };

  // Load daily quiz count from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    // Use user-specific storage key if authenticated, otherwise use global key
    const storageKey = user ? `dailyQuizTracker_${user.id}` : 'dailyQuizTracker';
    const storedData = localStorage.getItem(storageKey);
    
    if (storedData) {
      try {
        const tracker: DailyTracker = JSON.parse(storedData);
        if (tracker.date === today) {
          setDailyQuizCount(tracker.completedQuizzes);
        } else {
          // New day, reset counter
          setDailyQuizCount(0);
          localStorage.setItem(storageKey, JSON.stringify({
            date: today,
            completedQuizzes: 0
          }));
        }
      } catch (error) {
        // Invalid data, reset
        setDailyQuizCount(0);
        localStorage.setItem(storageKey, JSON.stringify({
          date: today,
          completedQuizzes: 0
        }));
      }
    } else {
      // No data exists, initialize
      localStorage.setItem(storageKey, JSON.stringify({
        date: today,
        completedQuizzes: 0
      }));
    }
  }, [user]);

  const incrementDailyQuizCount = () => {
    if (isPremium) return; // No limits for premium users

    const today = new Date().toDateString();
    const newCount = dailyQuizCount + 1;
    setDailyQuizCount(newCount);
    
    // Store quiz count per user or globally for non-authenticated users
    const storageKey = user ? `dailyQuizTracker_${user.id}` : 'dailyQuizTracker';
    localStorage.setItem(storageKey, JSON.stringify({
      date: today,
      completedQuizzes: newCount
    }));
  };

  const canAccessQuiz = (categoryName?: string) => {
    if (isPremium) return true;
    
    // Free users (including trial status) get limited access
    if (hasFreeAccess) {
      // Special handling for Surgical Procedures - always allow access (questions are limited instead)
      if (categoryName?.toLowerCase().includes('surgical procedures')) {
        return true;
      }
      
      return dailyQuizCount < limits.dailyQuizCompletions;
    }
    
    return false; // No access if not premium and not free user
  };

  const canAccessQuestion = (questionIndex: number, categoryName?: string) => {
    if (isPremium) return true;
    
    // Free users (including trial status) get limited access
    if (hasFreeAccess) {
      // Special handling for Surgical Procedures - use question limit instead of daily quiz limit
      if (categoryName?.toLowerCase().includes('surgical procedures')) {
        return questionIndex < limits.questionsPerCategory;
      }
      
      return questionIndex < limits.questionsPerCategory;
    }
    
    return false; // No access if not premium and not free user
  };

  const getRemainingQuizzes = () => {
    if (isPremium) return -1; // Unlimited
    if (hasFreeAccess) {
      return Math.max(0, limits.dailyQuizCompletions - dailyQuizCount);
    }
    return 0; // No access if not premium and not free user
  };

  const getRemainingQuestions = (currentIndex: number) => {
    if (isPremium) return -1; // Unlimited
    if (hasFreeAccess) {
      return Math.max(0, limits.questionsPerCategory - currentIndex);
    }
    return 0; // No access if not premium and not free user
  };

  return {
    isPremium,
    hasFreeAccess,
    limits,
    dailyQuizCount,
    canAccessQuiz,
    canAccessQuestion,
    getRemainingQuizzes,
    getRemainingQuestions,
    incrementDailyQuizCount,
  };
};