import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Scissors, User, Bone, Stethoscope, Activity } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Flashcards from '@/components/Flashcards';
import { InstrumentQuestions } from '@/components/InstrumentQuestions';
import { useAuth } from '@/contexts/AuthContext';

const InstrumentationFlashcards = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'general-instruments',
      title: 'General Instruments',
      description: 'Basic surgical instruments used across multiple specialties',
      icon: Scissors,
      color: 'from-blue-500/80 to-blue-600/80',
      bgColor: 'from-blue-50/90 to-blue-100/90',
      borderColor: 'border-blue-200/60'
    },
    {
      id: 'general-instrument-questions',
      title: 'General Instrument Question Review',
      description: 'Practice questions focusing on surgical instrument identification and usage',
      icon: Target,
      color: 'from-blue-500/80 to-blue-600/80',
      bgColor: 'from-blue-50/90 to-blue-100/90',
      borderColor: 'border-blue-200/60'
    },
    {
      id: 'orthopedic-instruments',
      title: 'Ortho/Neuro Instruments',
      description: 'Specialized instruments for bone and joint procedures',
      icon: Bone,
      color: 'from-teal-600/80 to-teal-700/80',
      bgColor: 'from-teal-50/90 to-teal-100/90',
      borderColor: 'border-teal-300/60'
    },
    {
      id: 'orthopedic-instrument-questions',
      title: 'Ortho/Neuro Instrument Questions',
      description: 'Practice questions focusing on orthopedic and neurosurgical instrument identification',
      icon: Target,
      color: 'from-teal-500/80 to-teal-600/80',
      bgColor: 'from-teal-50/90 to-teal-100/90',
      borderColor: 'border-teal-200/60'
    },
    {
      id: 'obgyn-instruments',
      title: 'OB/GYN/Urology/Rectal',
      description: 'Specialized instruments for obstetric, gynecologic, urologic, and rectal procedures',
      icon: Stethoscope,
      color: 'from-pink-500/80 to-purple-600/80',
      bgColor: 'from-pink-50/90 to-purple-100/90',
      borderColor: 'border-pink-200/60'
    },
    {
      id: 'obgyn-instrument-questions',
      title: 'OB/GYN/Urology/Rectal Questions',
      description: 'Practice questions focusing on OB/GYN, urology, and rectal instrument identification',
      icon: Target,
      color: 'from-pink-500/80 to-purple-600/80',
      bgColor: 'from-pink-50/90 to-purple-100/90',
      borderColor: 'border-pink-200/60'
    },
    {
      id: 'plastics-instruments',
      title: 'Plastics Instruments',
      description: 'Specialized instruments for plastic and reconstructive surgery procedures',
      icon: Activity,
      color: 'from-plastics/80 to-plastics-dark/80',
      bgColor: 'from-plastics-light/20 to-plastics/10',
      borderColor: 'border-plastics/30'
    },
    {
      id: 'plastics-instrument-questions',
      title: 'Plastics Instrument Questions',
      description: 'Practice questions focusing on plastic surgery instrument identification',
      icon: Target,
      color: 'from-plastics/80 to-plastics-dark/80',
      bgColor: 'from-plastics-light/20 to-plastics/10',
      borderColor: 'border-plastics/30'
    }
  ];

  if (selectedCategory === 'general-instruments' || selectedCategory === 'orthopedic-instruments' || selectedCategory === 'obgyn-instruments' || selectedCategory === 'plastics-instruments') {
    const category = categories.find(cat => cat.id === selectedCategory);
    const bgGradient = selectedCategory === 'orthopedic-instruments' 
      ? 'from-slate-50/95 via-teal-50/90 to-teal-100/85'
      : selectedCategory === 'obgyn-instruments'
      ? 'from-slate-50/95 via-pink-50/90 to-purple-100/85'
      : selectedCategory === 'plastics-instruments'
      ? 'from-slate-50/95 via-plastics-light/40 to-plastics/20'
      : 'from-slate-50/95 via-blue-50/90 to-blue-100/85';
    const headerBg = selectedCategory === 'orthopedic-instruments' 
      ? 'bg-teal-50' 
      : selectedCategory === 'obgyn-instruments'
      ? 'bg-pink-50'
      : selectedCategory === 'plastics-instruments'
      ? 'bg-plastics-light/30'
      : 'bg-blue-50';
    const buttonColors = selectedCategory === 'orthopedic-instruments'
      ? 'hover:bg-teal-100 hover:text-teal-700'
      : selectedCategory === 'obgyn-instruments'
      ? 'hover:bg-pink-100 hover:text-pink-700'
      : selectedCategory === 'plastics-instruments'
      ? 'hover:bg-plastics-light/30 hover:text-plastics'
      : 'hover:bg-blue-100 hover:text-blue-700';
    const titleColor = selectedCategory === 'orthopedic-instruments' 
      ? 'text-teal-700' 
      : selectedCategory === 'obgyn-instruments'
      ? 'text-pink-700'
      : selectedCategory === 'plastics-instruments'
      ? 'text-plastics'
      : 'text-blue-700';
    const upgradeButtonColors = selectedCategory === 'orthopedic-instruments'
      ? 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
      : selectedCategory === 'obgyn-instruments'
      ? 'bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800'
      : selectedCategory === 'plastics-instruments'
      ? 'bg-gradient-to-r from-plastics to-plastics-dark hover:from-plastics-dark hover:to-plastics'
      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800';

    return (
      <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
        {/* Header */}
        <div className={`${headerBg} shadow-sm border-b`}>
          <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant="ghost"
                  size="sm"
                  className={`flex items-center space-x-2 ${buttonColors} min-h-[44px] px-3`}
                >
                  <span>←</span>
                  <span className="hidden xs:inline">Back to Categories</span>
                  <span className="xs:hidden">Back</span>
                </Button>
              </div>
              {!user && (
                <Button 
                  onClick={() => navigate('/auth')}
                  className={`${upgradeButtonColors} text-white flex items-center space-x-2`}
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign In/Upgrade</span>
                  <span className="sm:hidden">Sign In</span>
                </Button>
              )}
            </div>
            <div className="text-center">
              <h1 className={`text-2xl font-bold ${titleColor}`}>{category?.title} Flashcards</h1>
              <p className="text-sm text-gray-600 mt-1">{category?.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
          <Flashcards 
            category={selectedCategory}
            onAnswerCorrect={() => {}}
            onQuestionAttempt={() => {}}
            useOrangeUnlock={true}
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

  if (selectedCategory === 'general-instrument-questions' || selectedCategory === 'orthopedic-instrument-questions' || selectedCategory === 'obgyn-instrument-questions' || selectedCategory === 'plastics-instrument-questions') {
    return <InstrumentQuestions 
      onBack={() => setSelectedCategory(null)} 
      category={selectedCategory}
    />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-blue-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg flex-shrink-0 flex items-center justify-center">
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 leading-tight">
                  Instrumentation Review
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-3 sm:mb-4">
            Choose an Instrument Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-4">
            Study surgical instruments and their uses. Each flashcard includes detailed explanations and proper identification techniques.
          </p>
          <p className="text-blue-700 font-bold text-sm sm:text-base">
            More Instrument Specialties Coming Under Construction 09/2025
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
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
                    {category.id.includes('-questions') ? 'Study Questions' : 'Study Flashcards'}
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