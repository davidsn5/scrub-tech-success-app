
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const MissedQuestions = () => {
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
        <Card className="bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/70 backdrop-blur-sm border-purple-200/50 shadow-xl p-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/90 to-cyan-600/90">
                <RotateCcw className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Missed Questions Review</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Review questions you've answered incorrectly and strengthen your weak areas. 
              This focused approach helps improve your overall performance.
            </p>
            
            <div className="bg-cyan-50/60 rounded-lg p-6 my-8">
              <div className="flex items-center justify-center space-x-4">
                <Target className="h-8 w-8 text-cyan-600/80" />
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900">12 Questions to Review</h3>
                  <p className="text-sm text-gray-600">From your recent study sessions</p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-600">Missed questions will appear here once you start taking quizzes and exams.</p>
              <div className="flex justify-center">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white">
                    Start Studying to Build Your Review Bank
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MissedQuestions;
