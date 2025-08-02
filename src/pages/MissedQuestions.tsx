
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMissedQuestions } from '@/hooks/useMissedQuestions';
import QuestionPractice from '@/components/QuestionPractice';
import { useUserProgress } from '@/hooks/useUserProgress';

const MissedQuestions = () => {
  const { missedQuestions, loading } = useMissedQuestions();
  const { recordQuestionAttempt } = useUserProgress();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [practiceMode, setPracticeMode] = useState(false);

  const handleStartPractice = () => {
    setCurrentQuestionIndex(0);
    setPracticeMode(true);
  };

  const handleAnswerSubmit = async (selectedAnswer: number, isCorrect: boolean) => {
    const currentQuestion = missedQuestions[currentQuestionIndex];
    if (currentQuestion) {
      await recordQuestionAttempt(currentQuestion.id.toString(), currentQuestion.category || 'missed-questions', isCorrect);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < missedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setPracticeMode(false);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-purple-100/85 flex items-center justify-center">
        <div className="text-center">
          <RotateCcw className="h-8 w-8 animate-spin mx-auto mb-4 text-cyan-600" />
          <p className="text-gray-600">Loading missed questions...</p>
        </div>
      </div>
    );
  }

  if (practiceMode && missedQuestions.length > 0) {
    return (
      <QuestionPractice
        questions={missedQuestions}
        categoryName="Missed Questions Review"
        categorySlug="missed-questions"
        showBackToHome={true}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-purple-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/85 shadow-sm border-b border-purple-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-purple-200/60 hover:bg-purple-50/80">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 p-2 rounded-lg shadow-lg">
                  <RotateCcw className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600/90 to-cyan-700/90 bg-clip-text text-transparent">Missed Questions</h1>
                  <p className="text-sm text-gray-600">Review & Retry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Card className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-cyan-100/70 backdrop-blur-sm border-cyan-200/50 shadow-xl p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/90 to-cyan-600/90">
                <RotateCcw className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Missed Questions Review</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Review questions you've answered incorrectly and strengthen your weak areas. 
              This focused approach helps improve your overall performance.
            </p>
            
            <div className="bg-cyan-50/60 rounded-lg p-6 my-8">
              <div className="flex items-center justify-center space-x-4">
                <Target className="h-8 w-8 text-cyan-600/80" />
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">
                    {missedQuestions.length} Question{missedQuestions.length !== 1 ? 's' : ''} to Review
                  </h3>
                  <p className="text-sm text-gray-600">From your recent study sessions</p>
                </div>
              </div>
            </div>

            {missedQuestions.length > 0 ? (
              <div className="text-center space-y-4">
                <p className="text-gray-600 text-center">
                  You have {missedQuestions.length} missed question{missedQuestions.length !== 1 ? 's' : ''} ready for review.
                </p>
                <div className="flex justify-center">
                  <Button 
                    onClick={handleStartPractice}
                    className="bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white flex items-center space-x-2"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Start Review Practice</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-gray-600 text-center">No missed questions yet! Start studying to build your review bank.</p>
                <div className="flex justify-center">
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white">
                      Start Studying to Build Your Review Bank
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MissedQuestions;
