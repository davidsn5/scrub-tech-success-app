import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Flashcards from '@/components/Flashcards';

const InstrumentationFlashcards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'general-instruments',
      title: 'General Instruments',
      description: 'Basic surgical instruments used across multiple specialties',
      icon: Wrench,
      color: 'from-purple-500/80 to-purple-600/80',
      bgColor: 'from-purple-50/90 to-purple-100/90',
      borderColor: 'border-purple-200/60'
    }
  ];

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-purple-100/85">
        {/* Header */}
        <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-purple-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
            <div className="flex items-center justify-between space-x-2">
              <Button
                onClick={() => setSelectedCategory(null)}
                variant="outline"
                size="sm"
                className="flex items-center space-x-1 shrink-0 min-h-[44px] px-3"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden xs:inline">Back to Categories</span>
                <span className="xs:hidden">Back</span>
              </Button>
              <div className="min-w-0 flex-1 pl-2">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-purple-700">
                  {category?.title} Flashcards
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{category?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
          <Flashcards 
            category={selectedCategory}
            onAnswerCorrect={() => {}}
            onQuestionAttempt={() => {}}
            categoryColors={{
              color: category?.color || 'from-purple-500/80 to-purple-600/80',
              bgColor: category?.bgColor || 'from-purple-50/90 to-purple-100/90',
              borderColor: category?.borderColor || 'border-purple-200/60'
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-purple-50/90 to-purple-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-purple-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg flex-shrink-0 flex items-center justify-center">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-purple-600 leading-tight">
                  Instrumentation Flashcards
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Master surgical instruments by category</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 min-h-[44px] shrink-0">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        {/* Introduction */}
        <div className="text-center mb-6 sm:mb-8 px-2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-700/90 to-purple-700/90 bg-clip-text text-transparent mb-3 sm:mb-4">
            Choose an Instrument Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Study surgical instruments and their uses. Each flashcard includes detailed explanations and proper identification techniques.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`p-4 sm:p-5 lg:p-6 bg-gradient-to-br ${category.bgColor} backdrop-blur-sm ${category.borderColor} border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95 min-h-[180px] sm:min-h-[200px]`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight line-clamp-2">{category.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-4 flex-grow text-sm leading-relaxed line-clamp-3">{category.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 transition-opacity text-white text-sm sm:text-base py-3 sm:py-2.5 min-h-[44px] font-medium`}>
                    Study Flashcards
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstrumentationFlashcards;