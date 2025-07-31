import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import LockedButton from '@/components/LockedButton';
const Button = LockedButton;
import { BookOpen, Brain, Target, FileText, Shuffle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlashcardsComponent from '@/components/Flashcards';

const Flashcards = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'medical-terminology',
      title: 'Medical Terminology',
      description: 'Essential medical terms and vocabulary for surgical technology practice',
      icon: FileText,
      color: 'from-purple-500/80 to-purple-600/80',
      bgColor: 'from-purple-50/90 to-purple-100/90',
      borderColor: 'border-purple-200/60'
    },
    {
      id: 'surgical-asepsis-sterility',
      title: 'Surgical Asepsis & Sterility',
      description: 'Sterile technique, asepsis principles, and infection control',
      icon: BookOpen,
      color: 'from-orange-500/80 to-orange-600/80',
      bgColor: 'from-orange-50/90 to-orange-100/90',
      borderColor: 'border-orange-200/60'
    },
    {
      id: 'surgical-technologist-role',
      title: 'Surgical Technologist Role',
      description: 'Professional responsibilities and scope of practice',
      icon: Brain,
      color: 'from-teal-500/80 to-teal-600/80',
      bgColor: 'from-teal-50/90 to-teal-100/90',
      borderColor: 'border-teal-200/60'
    },
    {
      id: 'instrumentation-equipment',
      title: 'Instrumentation & Equipment',
      description: 'Surgical instruments, equipment, and their proper use',
      icon: Target,
      color: 'from-blue-500/80 to-blue-600/80',
      bgColor: 'from-blue-50/90 to-blue-100/90',
      borderColor: 'border-blue-200/60'
    },
    {
      id: 'surgical-procedures',
      title: 'Surgical Procedures',
      description: 'Surgical techniques, procedures, and operative methods',
      icon: Shuffle,
      color: 'from-green-500/80 to-green-600/80',
      bgColor: 'from-green-50/90 to-green-100/90',
      borderColor: 'border-green-200/60'
    },
    {
      id: 'disinfection-sterilization',
      title: 'Disinfection & Sterilization',
      description: 'Sterilization methods, disinfection practices, and equipment processing',
      icon: BookOpen,
      color: 'from-indigo-500/80 to-indigo-600/80',
      bgColor: 'from-indigo-50/90 to-indigo-100/90',
      borderColor: 'border-indigo-200/60'
    }
  ];

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
        {/* Header */}
        <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm sticky top-0 z-50">
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
                <h1 className={`text-lg sm:text-xl lg:text-2xl font-bold leading-tight ${category?.color?.includes('blue') ? 'text-blue-700' : category?.color?.includes('purple') ? 'text-purple-700' : category?.color?.includes('orange') ? 'text-orange-700' : category?.color?.includes('teal') ? 'text-teal-700' : category?.color?.includes('green') ? 'text-green-700' : category?.color?.includes('indigo') ? 'text-indigo-700' : 'text-gray-900'}`}>
                  {category?.title} Flashcards
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{category?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
          <FlashcardsComponent 
            category={selectedCategory}
            onAnswerCorrect={() => {}}
            onQuestionAttempt={() => {}}
            categoryColors={{
              color: category?.color || 'from-blue-500/80 to-blue-600/80',
              bgColor: category?.bgColor || 'from-blue-50/90 to-blue-100/90',
              borderColor: category?.borderColor || 'border-blue-200/60'
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/a97d37e9-2975-4012-992a-008ee35274c1.png" 
                  alt="Surgical Tech Review Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-orange-600 leading-tight">
                  Study Flashcards
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Review key terms and concepts</p>
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-3 sm:mb-4">
            Choose a Flashcard Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Study key terms and important facts from each category. Each flashcard includes detailed explanations to help reinforce your learning.
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

export default Flashcards;