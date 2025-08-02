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
    if (!user) {
      console.log('No user found, cannot fetch missed questions');
      return;
    }

    console.log('Fetching missed questions for user:', user.id);

    try {
      const { data: attempts, error } = await supabase
        .from('question_attempts')
        .select('question_id, category, attempted_at')
        .eq('user_id', user.id)
        .eq('is_correct', false)
        .order('attempted_at', { ascending: false });

      console.log('Query result:', { attempts, error });

      if (error) {
        console.error('Error fetching missed questions:', error);
        return;
      }

      if (attempts) {
        console.log('Found attempts:', attempts.length);
        
        // Map question IDs to actual question data
        const questionsWithData = attempts
          .map(attempt => {
            console.log('Looking for question with ID:', attempt.question_id);
            
            // Handle both string and numeric question IDs
            // Extract numeric part from question_id if it's in format "general-1" or "category-1"
            let questionId = attempt.question_id;
            let numericId: number;
            
            if (typeof questionId === 'string' && questionId.includes('-')) {
              // Extract number from "general-1" format
              const parts = questionId.split('-');
              numericId = parseInt(parts[parts.length - 1]) + 1; // +1 because questions start at id 1, not 0
            } else {
              numericId = parseInt(questionId);
            }
            
            console.log('Converted to numeric ID:', numericId);
            const question = allQuestions.find(q => q.id === numericId);
            console.log('Found question:', question ? 'Yes' : 'No', question?.question?.substring(0, 50));
            
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

        console.log('Final missed questions:', questionsWithData.length);
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