import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export const useFlashcardSession = (category: string) => {
  const { user } = useAuth();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [cardsReviewed, setCardsReviewed] = useState(0);
  const startTimeRef = useRef<Date | null>(null);

  // Start a new session when component mounts
  useEffect(() => {
    if (!user) return;

    const startSession = async () => {
      try {
        const { data, error } = await supabase
          .from('flashcard_sessions')
          .insert({
            user_id: user.id,
            category: category,
            started_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (error) {
          console.error('Error starting flashcard session:', error);
          return;
        }

        setSessionId(data.id);
        startTimeRef.current = new Date(data.started_at);
      } catch (error) {
        console.error('Error in startSession:', error);
      }
    };

    startSession();

    // Cleanup: end session when component unmounts
    return () => {
      if (sessionId && startTimeRef.current) {
        endSession();
      }
    };
  }, [user, category]);

  const endSession = async () => {
    if (!sessionId || !startTimeRef.current) return;

    try {
      const endTime = new Date();
      const durationSeconds = Math.floor((endTime.getTime() - startTimeRef.current.getTime()) / 1000);

      await supabase
        .from('flashcard_sessions')
        .update({
          ended_at: endTime.toISOString(),
          duration_seconds: durationSeconds,
          cards_reviewed: cardsReviewed,
        })
        .eq('id', sessionId);
    } catch (error) {
      console.error('Error ending flashcard session:', error);
    }
  };

  const incrementCardsReviewed = () => {
    setCardsReviewed((prev) => prev + 1);
  };

  return {
    sessionId,
    cardsReviewed,
    incrementCardsReviewed,
  };
};
