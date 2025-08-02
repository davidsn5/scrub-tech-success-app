
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, Clock, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuestionPractice from '@/components/QuestionPractice';
import { getExamSimulationQuestions, categoryBreakdown } from '@/data/allQuestions';

const ExamSimulation = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [examQuestions, setExamQuestions] = useState<any[]>([]);

  const startExam = () => {
    const questions = getExamSimulationQuestions();
    setExamQuestions(questions);
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
        category: question.category || 'Exam Simulation',
        dateMissed: new Date().toISOString()
      };
      existingMissed.push(missedQuestion);
      localStorage.setItem('missedQuestions', JSON.stringify(existingMissed));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-blue-50/90 to-indigo-50/85 shadow-sm border-b border-blue-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-blue-200/60 hover:bg-blue-50/80">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500/90 to-indigo-500/90 p-2 rounded-lg shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600/90 to-indigo-600/90 bg-clip-text text-transparent">Exam Simulation</h1>
                  <p className="text-sm text-gray-600">Full Practice Exam Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!isStarted ? (
          <Card className="bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-50/70 backdrop-blur-sm border-blue-200/50 shadow-xl p-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/90 to-indigo-500/90">
                  <Award className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Full Exam Simulation</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the complete certification exam with 150 questions drawn from all study categories. 
                This comprehensive simulation mirrors the actual testing environment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex flex-col items-center space-y-2">
                  <Clock className="h-8 w-8 text-blue-500/80" />
                  <h3 className="font-semibold text-gray-900">Self-Paced</h3>
                  <p className="text-sm text-gray-600">Self-paced learning</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <BookOpen className="h-8 w-8 text-indigo-500/80" />
                  <h3 className="font-semibold text-gray-900">150 Questions</h3>
                  <p className="text-sm text-gray-600">Comprehensive coverage</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Target className="h-8 w-8 text-blue-500/80" />
                  <h3 className="font-semibold text-gray-900">Detailed Analysis</h3>
                  <p className="text-sm text-gray-600">Performance breakdown</p>
                </div>
              </div>

              <div className="bg-blue-50/60 rounded-lg p-6 my-8">
                <h3 className="font-semibold text-gray-900 mb-4">Exam Categories Coverage:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-700">• Intro to Surgical Technology ({categoryBreakdown['Intro to Surgical Technology']} questions)</div>
                  <div className="text-gray-700">• Principles and Practice ({categoryBreakdown['Principles and Practice of Surgical Technology']} questions)</div>
                  <div className="text-gray-700">• Surgical Procedures ({categoryBreakdown['Surgical Procedures']} questions)</div>
                  <div className="text-gray-700">• Medical Terminology ({categoryBreakdown['Medical Terminology']} questions)</div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200/50">
                  <p className="font-semibold text-gray-900">Total: {categoryBreakdown.Total} questions available</p>
                  <p className="text-sm text-gray-600 mt-1">Exam will randomly select 150 questions from this pool</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white px-8 py-3"
                onClick={startExam}
              >
                <Award className="h-5 w-5 mr-2" />
                Start Exam Simulation
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            <QuestionPractice
              questions={examQuestions}
              categoryName="Exam Simulation"
              onMissedQuestion={handleMissedQuestion}
              themeColor="from-blue-500/90 to-indigo-500/90"
              progressBarColor="bg-indigo-600"
              isExamMode={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamSimulation;
