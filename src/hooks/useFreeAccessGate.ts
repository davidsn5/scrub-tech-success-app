import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface FreeAccessLimits {
  questionsPerCategory: number;
  flashcardsPerCategory: number;
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
  
  // All users (authenticated or not) get free access to 10 questions/flashcards
  // Only premium users get unlimited access
  const hasFreeAccess = true;

  const limits: FreeAccessLimits = {
    questionsPerCategory: 10,
    flashcardsPerCategory: 5,
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
    
    // Special handling for Surgical Procedures - always allow access (questions are limited instead)
    if (categoryName?.toLowerCase().includes('surgical procedures')) {
      return true;
    }
    
    return dailyQuizCount < limits.dailyQuizCompletions;
  };

  const canAccessQuestion = (questionIndex: number, categoryName?: string) => {
    if (isPremium) return true;
    
    // All users (authenticated or not) can access the first 10 questions
    return questionIndex < limits.questionsPerCategory;
  };

  const getRemainingQuizzes = () => {
    if (isPremium) return -1; // Unlimited
    return Math.max(0, limits.dailyQuizCompletions - dailyQuizCount);
  };

  const getRemainingQuestions = (currentIndex: number) => {
    if (isPremium) return -1; // Unlimited
    return Math.max(0, limits.questionsPerCategory - currentIndex);
  };

  const canAccessFlashcard = (cardIndex: number) => {
    if (isPremium) return true;
    return cardIndex < limits.flashcardsPerCategory;
  };

  const getRemainingFlashcards = (currentIndex: number) => {
    if (isPremium) return -1; // Unlimited
    return Math.max(0, limits.flashcardsPerCategory - currentIndex);
  };

  return {
    isPremium,
    limits,
    dailyQuizCount,
    canAccessQuiz,
    canAccessQuestion,
    canAccessFlashcard,
    getRemainingQuizzes,
    getRemainingQuestions,
    getRemainingFlashcards,
    incrementDailyQuizCount,
  };
};