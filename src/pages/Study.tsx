
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import StudyCategorySelector from '@/components/StudyCategorySelector';

const Study = () => {
  const [selectedCategory, setSelectedCategory] = useState('medical-terminology');
  const navigate = useNavigate();

  const handleCategorySelect = (category: string) => {
    navigate(`/study/${category}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-blue-50 shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-slate-500 to-blue-500 p-2 rounded-lg shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">Study Center</h1>
                  <p className="text-sm text-gray-600">Interactive Learning & Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Selector */}
        <div className="mb-8">
          <StudyCategorySelector 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategorySelect}
          />
        </div>

        {/* Instructions */}
        <Card className="bg-gradient-to-br from-white via-slate-50 to-blue-50 backdrop-blur-sm border-slate-200 shadow-xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Select a Study Category</h2>
            <p className="text-gray-600">Choose a category above to access flashcards and practice quizzes for that topic.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Study;
