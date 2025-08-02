
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-teal-50/90 to-teal-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-teal-50/90 to-teal-50/85 shadow-sm border-b border-teal-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-teal-200/60 hover:bg-teal-50/80">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-gradient-to-br from-teal-500/90 to-teal-600/90 p-2 rounded-lg shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-500/90 to-teal-600/90 bg-clip-text text-transparent">
                  Principles and Practice of Surgical Technology
                </h1>
              </div>
              <p className="text-sm text-gray-600">Exam Style Practice Questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <QuestionPractice 
          questions={principlesPracticeQuestions}
          categoryName="Principles and Practice of Surgical Technology"
          onMissedQuestion={handleMissedQuestion}
          themeColor="from-teal-500/90 to-teal-600/90"
          progressBarColor="bg-teal-600"
        />
      </div>
    </div>
  );
};

export default PrinciplesPractice;
