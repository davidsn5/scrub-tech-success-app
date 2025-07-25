
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { getFireQuizQuestions, categoryBreakdown } from '@/data/allQuestions';

const FireQuiz = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);

  const startQuiz = () => {
    const questions = getFireQuizQuestions();
    setQuizQuestions(questions);
    setIsStarted(true);
  };

  const handleMissedQuestion = (question: any) => {
    // Get existing missed questions from localStorage
    const existingMissed = JSON.parse(localStorage.getItem('missedQuestions') || '[]');
    
    // Check if question already exists (avoid duplicates)
    const questionExists = existingMissed.some((q: any) => q.id === question.id && q.category === question.category);
    
    if (!questionExists) {
      const missedQuestion = { 
        ...question, 
        category: question.category || 'Fire Quiz',
        dateMissed: new Date().toISOString()
      };
      existingMissed.push(missedQuestion);
      localStorage.setItem('missedQuestions', JSON.stringify(existingMissed));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-red-50/90 to-orange-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-red-50/90 to-orange-50/85 shadow-sm border-b border-red-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-red-200/60 hover:bg-red-50/80">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-red-500/90 to-orange-500/90 p-2 rounded-lg shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600/90 to-orange-600/90 bg-clip-text text-transparent">Fire Quiz</h1>
                  <p className="text-sm text-gray-600">Quick 5-Question Challenge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isStarted ? (
          <Card className="bg-gradient-to-br from-white/90 via-red-50/80 to-orange-50/70 backdrop-blur-sm border-red-200/50 shadow-xl p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-red-500/90 to-orange-500/90">
                  <Zap className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Ready for the Fire Quiz?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Test your knowledge with 5 random questions from all study categories. 
                This quick quiz will help you identify areas that need more attention.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="h-8 w-8 text-red-500/80" />
                  <h3 className="font-semibold text-gray-900">5 Minutes</h3>
                  <p className="text-sm text-gray-600">Quick and focused</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Target className="h-8 w-8 text-orange-500/80" />
                  <h3 className="font-semibold text-gray-900">5 Questions</h3>
                  <p className="text-sm text-gray-600">Random selection</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Zap className="h-8 w-8 text-red-500/80" />
                  <h3 className="font-semibold text-gray-900">Instant Results</h3>
                  <p className="text-sm text-gray-600">Immediate feedback</p>
                </div>
              </div>

              <div className="bg-red-50/60 rounded-lg p-6 my-8">
                <h3 className="font-semibold text-gray-900 mb-4">Question Pool:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-700">• Intro to Surgical Technology ({categoryBreakdown['Intro to Surgical Technology']} questions)</div>
                  <div className="text-gray-700">• Principles and Practice ({categoryBreakdown['Principles and Practice of Surgical Technology']} questions)</div>
                  <div className="text-gray-700">• Surgical Procedures ({categoryBreakdown['Surgical Procedures']} questions)</div>
                  <div className="text-gray-700">• Medical Terminology ({categoryBreakdown['Medical Terminology']} questions)</div>
                </div>
                <div className="mt-4 pt-4 border-t border-red-200/50">
                  <p className="font-semibold text-gray-900">Total: {categoryBreakdown.Total} questions available</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500/90 to-orange-500/90 hover:opacity-90 transition-opacity text-white px-8 py-3"
                onClick={startQuiz}
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Fire Quiz
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            <QuestionPractice
              questions={quizQuestions}
              categoryName="Fire Quiz"
              onMissedQuestion={handleMissedQuestion}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FireQuiz;
