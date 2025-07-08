
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Question } from '@/data/questions/introSurgicalTech';
import QuizControls from './quiz/QuizControls';
import QuizProgress from './quiz/QuizProgress';
import QuestionCard from './quiz/QuestionCard';
import QuizComplete from './quiz/QuizComplete';

interface QuestionPracticeProps {
  questions: Question[];
  categoryName: string;
  onMissedQuestion?: (question: Question) => void;
}

const QuestionPractice: React.FC<QuestionPracticeProps> = ({ 
  questions, 
  categoryName, 
  onMissedQuestion 
}) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isComplete, setIsComplete] = useState(false);

  // Initialize shuffled questions on component mount
  useEffect(() => {
    setShuffledQuestions([...questions]);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsComplete(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const newScore = {
      correct: answerIndex === currentQuestion.correctAnswer ? score.correct + 1 : score.correct,
      total: score.total + 1
    };
    setScore(newScore);

    // Track missed questions
    if (answerIndex !== currentQuestion.correctAnswer && onMissedQuestion) {
      onMissedQuestion(currentQuestion);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsComplete(false);
  };

  if (shuffledQuestions.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-gray-600">No questions available for this category yet.</p>
      </Card>
    );
  }

  if (isComplete) {
    return (
      <QuizComplete 
        score={score}
        onRestart={handleRestart}
        onShuffle={shuffleQuestions}
      />
    );
  }

  return (
    <div className="space-y-6">
      <QuizControls 
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={shuffledQuestions.length}
        onShuffle={shuffleQuestions}
      />

      <QuizProgress 
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={shuffledQuestions.length}
      />

      <QuestionCard 
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
        isLastQuestion={currentQuestionIndex >= shuffledQuestions.length - 1}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
      />
    </div>
  );
};

export default QuestionPractice;
