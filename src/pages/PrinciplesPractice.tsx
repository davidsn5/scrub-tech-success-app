
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { principlesPracticeQuestions } from '@/data/questions/principlesPractice';

const PrinciplesPractice = () => {
  const [missedQuestions, setMissedQuestions] = useState<any[]>([]);

  const handleMissedQuestion = (question: any) => {
    setMissedQuestions(prev => {
      const exists = prev.find(q => q.id === question.id);
      if (!exists) {
        return [...prev, question];
      }
      return prev;
    });
  };

  console.log('Total Principles Practice questions:', principlesPracticeQuestions.length);
  console.log('First 5 question IDs:', principlesPracticeQuestions.slice(0, 5).map(q => q.id));
  console.log('Last 5 question IDs:', principlesPracticeQuestions.slice(-5).map(q => q.id));
  console.log('Questions passed to QuestionPractice:', principlesPracticeQuestions.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-gradient-to-br from-teal-500/90 to-blue-500/90 p-2 rounded-lg shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600/90 to-blue-600/90 bg-clip-text text-transparent">
                  Principles and Practice of Surgical Technology
                </h1>
              </div>
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <p className="text-sm text-gray-600">
                Exam Style Practice Questions ({principlesPracticeQuestions.length} Questions Available)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <QuestionPractice 
          questions={principlesPracticeQuestions}
          categoryName="Principles and Practice of Surgical Technology"
          onMissedQuestion={handleMissedQuestion}
        />
      </div>
    </div>
  );
};

export default PrinciplesPractice;
