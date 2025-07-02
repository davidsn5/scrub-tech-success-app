
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle, Clock, Award } from 'lucide-react';

interface QuizModeProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}

const quizData = {
  anatomy: [
    {
      question: "Which bone is commonly called the 'collarbone'?",
      options: ["Scapula", "Clavicle", "Humerus", "Sternum"],
      correct: 1,
      explanation: "The clavicle, or collarbone, connects the shoulder blade to the sternum and helps support the shoulder."
    },
    {
      question: "What is the medical term for the kneecap?",
      options: ["Patella", "Tibia", "Fibula", "Femur"],
      correct: 0,
      explanation: "The patella is a small, triangular bone that protects the knee joint and helps with leg extension."
    },
    {
      question: "Which part of the brain controls balance and coordination?",
      options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
      correct: 1,
      explanation: "The cerebellum is responsible for balance, coordination, and fine motor control."
    }
  ],
  instruments: [
    {
      question: "What type of suture material is absorbed by the body?",
      options: ["Silk", "Nylon", "Vicryl", "Prolene"],
      correct: 2,
      explanation: "Vicryl is an absorbable synthetic suture that dissolves naturally in the body over time."
    },
    {
      question: "Which instrument is used to hold tissue during dissection?",
      options: ["Kelly forceps", "Tissue forceps", "Needle holders", "Scissors"],
      correct: 1,
      explanation: "Tissue forceps (pickups) are designed to grasp and hold tissue gently during surgical procedures."
    }
  ],
  procedures: [
    {
      question: "What is the most common surgical position?",
      options: ["Prone", "Supine", "Lateral", "Trendelenburg"],
      correct: 1,
      explanation: "The supine position (lying on back) is the most common and provides access to many surgical sites."
    }
  ],
  sterile: [
    {
      question: "What is the minimum temperature for steam sterilization?",
      options: ["250°F", "270°F", "285°F", "300°F"],
      correct: 1,
      explanation: "Steam sterilization requires a minimum temperature of 270°F (132°C) for effective sterilization."
    }
  ]
};

const QuizMode: React.FC<QuizModeProps> = ({ 
  category, 
  onAnswerCorrect, 
  onQuestionAttempt 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = quizData[category] || [];
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
  }, [category]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && timeLeft > 0 && !showResult) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleSubmitAnswer();
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, showResult]);

  const startQuiz = () => {
    setIsActive(true);
    setTimeLeft(30);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showResult) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null && timeLeft > 0) return;
    
    setShowResult(true);
    setIsActive(false);
    onQuestionAttempt();
    
    if (selectedAnswer === currentQuestion?.correct) {
      setScore(score + 1);
      onAnswerCorrect();
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setTimeLeft(30);
      setIsActive(true);
    } else {
      setQuizCompleted(true);
      setIsActive(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
    setTimeLeft(30);
    setIsActive(false);
  };

  if (!questions.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No quiz questions available for this category yet.</p>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Award className="h-16 w-16 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Quiz Completed!</h2>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-blue-600">{percentage}%</p>
          <p className="text-gray-600">You scored {score} out of {questions.length} questions</p>
        </div>
        <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
          Take Quiz Again
        </Button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">
            Question {currentQuestionIndex + 1} of {questions.length}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {category.replace('-', ' ')}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className={`font-mono ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-700'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      <Progress value={(timeLeft / 30) * 100} className="h-2" />

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left transition-all duration-200 ";
            
            if (showResult) {
              if (index === currentQuestion.correct) {
                buttonClass += "bg-green-100 border-green-500 text-green-800";
              } else if (index === selectedAnswer && index !== currentQuestion.correct) {
                buttonClass += "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-200 text-gray-600";
              }
            } else {
              if (selectedAnswer === index) {
                buttonClass += "bg-blue-100 border-blue-500 text-blue-800";
              } else {
                buttonClass += "bg-white border-gray-200 hover:bg-gray-50";
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between w-full">
                  <span>{option}</span>
                  {showResult && index === currentQuestion.correct && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && index === selectedAnswer && index !== currentQuestion.correct && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Explanation:</strong> {currentQuestion.explanation}
            </p>
          </div>
        )}
      </Card>

      <div className="flex justify-between">
        <div className="text-sm text-gray-600">
          Score: {score}/{questions.length}
        </div>
        <div className="space-x-3">
          {!isActive && !showResult && (
            <Button onClick={startQuiz} className="bg-blue-600 hover:bg-blue-700">
              Start Question
            </Button>
          )}
          {isActive && !showResult && selectedAnswer !== null && (
            <Button onClick={handleSubmitAnswer} className="bg-green-600 hover:bg-green-700">
              Submit Answer
            </Button>
          )}
          {showResult && (
            <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700">
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizMode;
