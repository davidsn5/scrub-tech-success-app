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
  const { subscription } = useAuth();
  const [dailyQuizCount, setDailyQuizCount] = useState(0);

  const isAdmin = subscription?.status === 'admin';
  const isPremium = subscription?.subscribed || isAdmin;

  const limits: FreeAccessLimits = {
    questionsPerCategory: 10,
    dailyQuizCompletions: 2,
  };

  // Load daily quiz count from localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem('dailyQuizTracker');
    
    if (storedData) {
      try {
        const tracker: DailyTracker = JSON.parse(storedData);
        if (tracker.date === today) {
          setDailyQuizCount(tracker.completedQuizzes);
        } else {
          // New day, reset counter
          setDailyQuizCount(0);
          localStorage.setItem('dailyQuizTracker', JSON.stringify({
            date: today,
            completedQuizzes: 0
          }));
        }
      } catch (error) {
        // Invalid data, reset
        setDailyQuizCount(0);
        localStorage.setItem('dailyQuizTracker', JSON.stringify({
          date: today,
          completedQuizzes: 0
        }));
      }
    } else {
      // No data exists, initialize
      localStorage.setItem('dailyQuizTracker', JSON.stringify({
        date: today,
        completedQuizzes: 0
      }));
    }
  }, []);

  const incrementDailyQuizCount = () => {
    if (isPremium) return; // No limits for premium users

    const today = new Date().toDateString();
    const newCount = dailyQuizCount + 1;
    setDailyQuizCount(newCount);
    
    localStorage.setItem('dailyQuizTracker', JSON.stringify({
      date: today,
      completedQuizzes: newCount
    }));
  };

  const canAccessQuiz = () => {
    if (isPremium) return true;
    return dailyQuizCount < limits.dailyQuizCompletions;
  };

  const canAccessQuestion = (questionIndex: number) => {
    if (isPremium) return true;
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

  return {
    isPremium,
    limits,
    dailyQuizCount,
    canAccessQuiz,
    canAccessQuestion,
    getRemainingQuizzes,
    getRemainingQuestions,
    incrementDailyQuizCount,
  };
};