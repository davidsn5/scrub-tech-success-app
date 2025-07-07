
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { introSurgicalTechQuestions } from '@/data/questions/introSurgicalTech';

const IntroSurgicalTech = () => {
  const handleMissedQuestion = (question: any) => {
    // Store missed questions in localStorage for now
    const missedQuestions = JSON.parse(localStorage.getItem('missedQuestions') || '[]');
    const isAlreadyMissed = missedQuestions.some((q: any) => q.id === question.id);
    
    if (!isAlreadyMissed) {
      missedQuestions.push({ ...question, category: 'Intro to Surgical Technology' });
      localStorage.setItem('missedQuestions', JSON.stringify(missedQuestions));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-orange-50/90 to-teal-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-orange-50/90 to-teal-50/85 shadow-sm border-b border-orange-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-orange-200/60 hover:bg-orange-50/80">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-orange-500/90 to-teal-500/90 p-2 rounded-lg shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600/90 to-teal-600/90 bg-clip-text text-transparent">
                    Intro to Surgical Technology
                  </h1>
                  <p className="text-sm text-gray-600">Exam Style Practice Questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <QuestionPractice 
          questions={introSurgicalTechQuestions}
          categoryName="Intro to Surgical Technology"
          onMissedQuestion={handleMissedQuestion}
        />
      </div>
    </div>
  );
};

export default IntroSurgicalTech;
