import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface UserProgress {
  totalQuestionsAttempted: number;
  totalCorrectAnswers: number;
  totalMissedQuestions: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string | null;
}

export const useUserProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress>({
    totalQuestionsAttempted: 0,
    totalCorrectAnswers: 0,
    totalMissedQuestions: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserProgress();
      trackDailyActivity();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchUserProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching user progress:', error);
        return;
      }

      if (data) {
        setProgress({
          totalQuestionsAttempted: data.total_questions_attempted,
          totalCorrectAnswers: data.total_correct_answers,
          totalMissedQuestions: data.total_missed_questions,
          currentStreak: data.current_streak,
          longestStreak: data.longest_streak,
          lastActivityDate: data.last_activity_date
        });
      }
    } catch (error) {
      console.error('Error fetching user progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const trackDailyActivity = async () => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    
    try {
      await supabase
        .from('daily_activity')
        .insert({
          user_id: user.id,
          activity_date: today
        });
    } catch (error) {
      // Ignore duplicate key errors - user already has activity for today
      if (!error.message?.includes('duplicate key')) {
        console.error('Error tracking daily activity:', error);
      }
    }
  };

  const recordQuestionAttempt = async (
    questionId: string,
    category: string,
    isCorrect: boolean
  ) => {
    if (!user) return;

    try {
      await supabase
        .from('question_attempts')
        .insert({
          user_id: user.id,
          question_id: questionId,
          category,
          is_correct: isCorrect
        });

      // Refresh progress after recording attempt
      await fetchUserProgress();
    } catch (error) {
      console.error('Error recording question attempt:', error);
    }
  };

  const getAccuracyPercentage = () => {
    if (progress.totalQuestionsAttempted === 0) return 0;
    return Math.round((progress.totalCorrectAnswers / progress.totalQuestionsAttempted) * 100);
  };

  return {
    progress,
    loading,
    recordQuestionAttempt,
    getAccuracyPercentage,
    refreshProgress: fetchUserProgress
  };
};