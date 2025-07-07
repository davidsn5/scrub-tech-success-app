
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { medicalTerminologyQuestions } from '@/data/questions/medicalTerminology';

const MedicalTerminology = () => {
  const [missedQuestions, setMissedQuestions] = useState<any[]>([]);

  const handleMissedQuestion = (question: any) => {
    setMissedQuestions(prev => {
      const exists = prev.find(q => q.question === question.question);
      if (!exists) {
        return [...prev, question];
      }
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-purple-50/90 to-indigo-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
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
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MT</span>
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600/90 to-indigo-600/90 bg-clip-text text-transparent">
                    Medical Terminology
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
          questions={medicalTerminologyQuestions}
          categoryName="Medical Terminology"
          onMissedQuestion={handleMissedQuestion}
        />
      </div>
    </div>
  );
};

export default MedicalTerminology;
