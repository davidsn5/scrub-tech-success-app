-- Create user_progress table to track overall user statistics
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  total_questions_attempted INTEGER NOT NULL DEFAULT 0,
  total_correct_answers INTEGER NOT NULL DEFAULT 0,
  total_missed_questions INTEGER NOT NULL DEFAULT 0,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create question_attempts table to track individual question attempts
CREATE TABLE public.question_attempts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  attempted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create daily_activity table to track login streaks
CREATE TABLE public.daily_activity (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  activity_date DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, activity_date)
);

-- Enable RLS on all tables
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.daily_activity ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_progress
CREATE POLICY "Users can view their own progress" 
ON public.user_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress" 
ON public.user_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" 
ON public.user_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Create RLS policies for question_attempts
CREATE POLICY "Users can view their own question attempts" 
ON public.question_attempts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own question attempts" 
ON public.question_attempts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for daily_activity
CREATE POLICY "Users can view their own daily activity" 
ON public.daily_activity 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own daily activity" 
ON public.daily_activity 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create triggers for updated_at
CREATE TRIGGER update_user_progress_updated_at
BEFORE UPDATE ON public.user_progress
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to update user progress after question attempt
CREATE OR REPLACE FUNCTION public.update_user_progress_after_attempt()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert or update user progress
  INSERT INTO public.user_progress (user_id, total_questions_attempted, total_correct_answers, total_missed_questions)
  VALUES (
    NEW.user_id, 
    1, 
    CASE WHEN NEW.is_correct THEN 1 ELSE 0 END,
    CASE WHEN NEW.is_correct THEN 0 ELSE 1 END
  )
  ON CONFLICT (user_id) DO UPDATE SET
    total_questions_attempted = user_progress.total_questions_attempted + 1,
    total_correct_answers = user_progress.total_correct_answers + CASE WHEN NEW.is_correct THEN 1 ELSE 0 END,
    total_missed_questions = user_progress.total_missed_questions + CASE WHEN NEW.is_correct THEN 0 ELSE 1 END,
    updated_at = now();
    
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic progress updates
CREATE TRIGGER update_progress_after_question_attempt
AFTER INSERT ON public.question_attempts
FOR EACH ROW
EXECUTE FUNCTION public.update_user_progress_after_attempt();

-- Create function to update streak after daily activity
CREATE OR REPLACE FUNCTION public.update_user_streak()
RETURNS TRIGGER AS $$
DECLARE
  consecutive_days INTEGER := 0;
  check_date DATE;
  user_progress_exists BOOLEAN;
BEGIN
  -- Check if user_progress record exists
  SELECT EXISTS(SELECT 1 FROM public.user_progress WHERE user_id = NEW.user_id) INTO user_progress_exists;
  
  -- Count consecutive days leading up to today
  check_date := NEW.activity_date;
  WHILE EXISTS(SELECT 1 FROM public.daily_activity WHERE user_id = NEW.user_id AND activity_date = check_date) LOOP
    consecutive_days := consecutive_days + 1;
    check_date := check_date - INTERVAL '1 day';
  END LOOP;
  
  -- Insert or update user progress with streak
  IF user_progress_exists THEN
    UPDATE public.user_progress 
    SET 
      current_streak = consecutive_days,
      longest_streak = GREATEST(longest_streak, consecutive_days),
      last_activity_date = NEW.activity_date,
      updated_at = now()
    WHERE user_id = NEW.user_id;
  ELSE
    INSERT INTO public.user_progress (user_id, current_streak, longest_streak, last_activity_date)
    VALUES (NEW.user_id, consecutive_days, consecutive_days, NEW.activity_date);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for streak updates
CREATE TRIGGER update_streak_after_daily_activity
AFTER INSERT ON public.daily_activity
FOR EACH ROW
EXECUTE FUNCTION public.update_user_streak();

-- Add unique constraint to user_progress
ALTER TABLE public.user_progress ADD CONSTRAINT user_progress_user_id_unique UNIQUE (user_id);