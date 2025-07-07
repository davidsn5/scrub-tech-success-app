
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/a97d37e9-2975-4012-992a-008ee35274c1.png" 
                    alt="Surgical Tech Review Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600/90 to-blue-600/90 bg-clip-text text-transparent">
                    Principles and Practice of Surgical Technology
                  </h1>
                  <p className="text-sm text-gray-600">Exam Style Practice Questions</p>
                </div>
              </div>
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
