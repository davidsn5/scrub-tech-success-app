
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { medicalTerminologyQuestions } from '@/data/questions/medicalTerminology';

const MedicalTerminology = () => {
  const [missedQuestions, setMissedQuestions] = useState<any[]>([]);

  const handleMissedQuestion = (question: any) => {
    // Store missed questions in localStorage for now
    const missedQuestions = JSON.parse(localStorage.getItem('missedQuestions') || '[]');
    const isAlreadyMissed = missedQuestions.some((q: any) => q.id === question.id);
    
    if (!isAlreadyMissed) {
      missedQuestions.push({ ...question, category: 'Medical Terminology' });
      localStorage.setItem('missedQuestions', JSON.stringify(missedQuestions));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-purple-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-purple-50/90 to-purple-50/85 shadow-sm border-b border-purple-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-purple-200/60 hover:bg-purple-50/80">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center justify-center space-x-3">
                <div className="bg-gradient-to-br from-purple-500/90 to-purple-600/90 p-2 rounded-lg shadow-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500/90 to-purple-600/90 bg-clip-text text-transparent">
                  Medical Terminology
                </h1>
              </div>
              <p className="text-sm text-gray-600">Exam Style Practice Questions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <QuestionPractice
          questions={medicalTerminologyQuestions}
          categoryName="Medical Terminology"
          onMissedQuestion={handleMissedQuestion}
          themeColor="from-purple-500/90 to-purple-600/90"
          progressBarColor="bg-purple-600"
        />
      </div>
    </div>
  );
};

export default MedicalTerminology;
