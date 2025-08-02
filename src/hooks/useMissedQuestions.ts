import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { allQuestions, Question } from '@/data/allQuestions';

interface MissedQuestion extends Question {
  attemptedAt: string;
}

export const useMissedQuestions = () => {
  const { user } = useAuth();
  const [missedQuestions, setMissedQuestions] = useState<MissedQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchMissedQuestions();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchMissedQuestions = async () => {
    if (!user) return;

    try {
      const { data: attempts, error } = await supabase
        .from('question_attempts')
        .select('question_id, category, attempted_at')
        .eq('user_id', user.id)
        .eq('is_correct', false)
        .order('attempted_at', { ascending: false });

      if (error) {
        console.error('Error fetching missed questions:', error);
        return;
      }

      if (attempts) {
        // Map question IDs to actual question data
        const questionsWithData = attempts
          .map(attempt => {
            const question = allQuestions.find(q => q.id.toString() === attempt.question_id);
            if (question) {
              return {
                ...question,
                category: attempt.category,
                attemptedAt: attempt.attempted_at
              };
            }
            return null;
          })
          .filter(q => q !== null) as MissedQuestion[];

        setMissedQuestions(questionsWithData);
      }
    } catch (error) {
      console.error('Error fetching missed questions:', error);
    } finally {
      setLoading(false);
    }
  };

  return {
    missedQuestions,
    loading,
    refreshMissedQuestions: fetchMissedQuestions
  };
};