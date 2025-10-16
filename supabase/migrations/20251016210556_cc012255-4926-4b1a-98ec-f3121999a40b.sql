-- Create flashcard sessions table to track time spent reviewing flashcards
CREATE TABLE public.flashcard_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  category TEXT NOT NULL,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  cards_reviewed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.flashcard_sessions ENABLE ROW LEVEL SECURITY;

-- Users can view their own flashcard sessions
CREATE POLICY "Users can view their own flashcard sessions"
ON public.flashcard_sessions
FOR SELECT
USING (auth.uid() = user_id);

-- Users can insert their own flashcard sessions
CREATE POLICY "Users can insert their own flashcard sessions"
ON public.flashcard_sessions
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Users can update their own flashcard sessions
CREATE POLICY "Users can update their own flashcard sessions"
ON public.flashcard_sessions
FOR UPDATE
USING (auth.uid() = user_id);

-- Create index for better query performance
CREATE INDEX idx_flashcard_sessions_user_id ON public.flashcard_sessions(user_id);
CREATE INDEX idx_flashcard_sessions_category ON public.flashcard_sessions(category);