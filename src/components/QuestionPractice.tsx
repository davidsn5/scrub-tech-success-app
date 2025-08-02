
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Shuffle } from 'lucide-react';
import { Question } from '@/data/questions/introSurgicalTech';
import { useUserProgress } from '@/hooks/useUserProgress';

interface QuestionPracticeProps {
  questions: Question[];
  categoryName: string;
  onMissedQuestion?: (question: Question) => void;
  themeColor?: string;
  progressBarColor?: string;
  categorySlug?: string;
}

const QuestionPractice: React.FC<QuestionPracticeProps> = ({ 
  questions, 
  categoryName, 
  onMissedQuestion,
  themeColor = "from-orange-500/90 to-teal-500/90",
  progressBarColor = "bg-orange-500",
  categorySlug = "general"
}) => {
  const { recordQuestionAttempt } = useUserProgress();
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [isComplete, setIsComplete] = useState(false);

  // Initialize shuffled questions on component mount
  useEffect(() => {
    console.log(`Total questions loaded for ${categoryName}:`, questions.length);
    setShuffledQuestions([...questions]);
  }, [questions, categoryName]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  const shuffleQuestions = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore({ correct: 0, total: 0 });
    setIsComplete(false);
  };

  const handleAnswerSelect = async (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const newScore = {
      correct: isCorrect ? score.correct + 1 : score.correct,
      total: score.total + 1
    };
    setScore(newScore);

    // Record the question attempt in the database
    await recordQuestionAttempt(
      `${categorySlug}-${currentQuestionIndex}`, 
      categorySlug, 
      isCorrect
    );

    // Track missed questions
    if (!isCorrect && onMissedQuestion) {
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
        <p className="text-gray-600">Loading questions...</p>
      </Card>
    );
  }

  if (isComplete) {
    const percentage = Math.round((score.correct / score.total) * 100);
    return (
      <Card className="p-8 text-center space-y-6">
        <div className="space-y-4">
          <div className="text-6xl font-bold text-teal-600/80">{percentage}%</div>
          <h3 className="text-2xl font-semibold text-gray-900">Quiz Complete!</h3>
          <p className="text-gray-600">
            You answered {score.correct} out of {score.total} questions correctly.
          </p>
          <p className="text-sm text-gray-500">
            Total questions available: {shuffledQuestions.length}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
          <Button 
            onClick={handleRestart}
            className={`bg-gradient-to-r ${themeColor} hover:opacity-90 transition-opacity text-white`}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          <Button 
            onClick={shuffleQuestions}
            variant="outline"
            className="border-teal-300 hover:bg-teal-50"
          >
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle & Restart
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Controls Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <span className="text-sm text-gray-600">
            Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
          </span>
          <p className="text-xs text-gray-500 mt-1">
            Total questions available: {shuffledQuestions.length}
          </p>
        </div>
        <Button 
          onClick={shuffleQuestions}
          variant="outline"
          size="sm"
          className="border-teal-300 hover:bg-teal-50"
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Shuffle Questions
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200/60 rounded-full h-2">
        <div 
          className={`${progressBarColor} h-2 rounded-full transition-all duration-300`}
          style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <Card className="p-8 bg-gradient-to-br from-white/90 via-orange-50/40 to-teal-50/40 backdrop-blur-sm border-orange-200/30 shadow-xl">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
            {currentQuestion?.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion?.choices.map((choice, index) => {
              let buttonClass = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
              
              if (!showResult) {
                buttonClass += 'border-gray-200/60 hover:border-orange-300/60 hover:bg-orange-50/30';
              } else {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += 'border-green-400/70 bg-green-50/70 text-green-800';
                } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                  buttonClass += 'border-red-400/70 bg-red-50/70 text-red-800';
                } else {
                  buttonClass += 'border-gray-200/60 bg-gray-50/30';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={buttonClass}
                  disabled={showResult}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{choice}</span>
                    </div>
                    {showResult && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    )}
                    {showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="pt-4 border-t border-gray-200/50">
              <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50/70 border border-green-200/50' : 'bg-red-50/70 border border-red-200/50'}`}>
                <div className="flex items-center space-x-2 mb-2">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
                {!isCorrect && (
                  <p className="text-sm text-gray-700">
                    The correct answer is: <strong>{currentQuestion.choices[currentQuestion.correctAnswer]}</strong>
                  </p>
                )}
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button 
                  onClick={handleNextQuestion}
                  className={`bg-gradient-to-r ${themeColor} hover:opacity-90 transition-opacity text-white`}
                >
                  {currentQuestionIndex < shuffledQuestions.length - 1 ? (
                    <>
                      Next Question
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  ) : (
                    'Complete Quiz'
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuestionPractice;
