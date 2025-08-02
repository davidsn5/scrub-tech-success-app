import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Brain, Trophy, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Flashcards from '@/components/Flashcards';
import QuizMode from '@/components/QuizMode';
import StudyProgress from '@/components/StudyProgress';
import QuestionPractice from '@/components/QuestionPractice';
import { surgicalProceduresQuestions } from '@/data/questions/surgicalProcedures';

const StudyCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalQuestions, setTotalQuestions] = useState(245);
  const [correctAnswers, setCorrectAnswers] = useState(180);

  const getCategoryName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'medical-terminology': 'Medical Terminology',
      'surgical-technologist-role': 'Role of Surgical Technologist',
      'legal-ethics-risk': 'Legal Concepts, Ethics, Risk Management',
      'surgical-patient': 'Surgical Patient',
      'physical-environment-safety': 'Physical Environment and Safety',
      'technological-science': 'Technological Science Concepts',
      'microbiology': 'Microbiology',
      'surgical-asepsis-sterility': 'Surgical Asepsis and Sterility',
      'emergency-situations': 'Emergency Situations',
      'pharmacology-anesthesia': 'Pharmacology and Anesthesia',
      'instrumentation-equipment': 'Instrumentation Equipment and Supplies',
      'hemostasis-wound-healing': 'Hemostasis Wound Healing and Closure',
      'surgical-procedures': 'Surgical Procedures'
    };
    return categoryNames[category || ''] || 'Unknown Category';
  };

  const getCategoryColors = (category: string) => {
    const colorSchemes: { [key: string]: { 
      themeColor: string, 
      progressBarColor: string, 
      bgColor: string, 
      headerColor: string,
      borderColor: string 
    }} = {
      'surgical-procedures': {
        themeColor: 'from-blue-500/90 to-blue-600/90',
        progressBarColor: 'bg-blue-600',
        bgColor: 'from-slate-50/95 via-blue-50/90 to-blue-100/85',
        headerColor: 'from-white/95 via-blue-50/90 to-blue-50/85',
        borderColor: 'border-blue-200/50'
      }
    };
    
    return colorSchemes[category || ''] || {
      themeColor: 'from-slate-600/90 to-blue-600/90',
      progressBarColor: 'bg-blue-600',
      bgColor: 'from-slate-50 via-blue-50 to-indigo-100',
      headerColor: 'from-white via-slate-50 to-blue-50',
      borderColor: 'border-slate-200'
    };
  };

  // Check if this is the surgical procedures category
  const isSurgicalProcedures = category === 'surgical-procedures';
  const colors = getCategoryColors(category || '');

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-gray-600">Category not found</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.bgColor}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${colors.headerColor} shadow-sm border-b ${colors.borderColor}`}>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-br ${colors.themeColor} p-2 rounded-lg shadow-lg`}>
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className={`text-2xl font-bold bg-gradient-to-r ${colors.themeColor} bg-clip-text text-transparent`}>
                    {getCategoryName(category)}
                  </h1>
                  <p className="text-sm text-gray-600">Interactive Learning & Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Main Study Interface */}
        <Card className={`bg-gradient-to-br from-white via-slate-50 to-blue-50 backdrop-blur-sm ${colors.borderColor} shadow-xl`}>
          {isSurgicalProcedures ? (
            // For surgical procedures, show only question practice (no progress tab)
            <div className="p-6">
              <QuestionPractice 
                questions={surgicalProceduresQuestions}
                categoryName="Surgical Procedures"
                themeColor={colors.themeColor}
                progressBarColor={colors.progressBarColor}
                categorySlug={category}
              />
            </div>
          ) : (
            // For other categories, show all three tabs
            <Tabs defaultValue="flashcards" className="w-full">
              <TabsList className={`grid w-full grid-cols-3 mb-6 bg-gradient-to-r from-slate-100 to-blue-100`}>
                <TabsTrigger value="flashcards" className={`flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:${colors.themeColor} data-[state=active]:text-white`}>
                  <BookOpen className="h-4 w-4" />
                  <span>Flashcards</span>
                </TabsTrigger>
                <TabsTrigger value="quiz" className={`flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:${colors.themeColor} data-[state=active]:text-white`}>
                  <Brain className="h-4 w-4" />
                  <span>Practice Quiz</span>
                </TabsTrigger>
                <TabsTrigger value="progress" className={`flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:${colors.themeColor} data-[state=active]:text-white`}>
                  <Trophy className="h-4 w-4" />
                  <span>Progress</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="flashcards" className="p-6">
                <Flashcards 
                  category={category}
                  onAnswerCorrect={() => setCorrectAnswers(prev => prev + 1)}
                  onQuestionAttempt={() => setTotalQuestions(prev => prev + 1)}
                />
              </TabsContent>
              
              <TabsContent value="quiz" className="p-6">
                <QuizMode 
                  category={category}
                  onAnswerCorrect={() => setCorrectAnswers(prev => prev + 1)}
                  onQuestionAttempt={() => setTotalQuestions(prev => prev + 1)}
                />
              </TabsContent>
              
              <TabsContent value="progress" className="p-6">
                <StudyProgress 
                  streak={studyStreak}
                  totalQuestions={totalQuestions}
                  correctAnswers={correctAnswers}
                  category={category}
                />
              </TabsContent>
            </Tabs>
          )}
        </Card>
      </div>
    </div>
  );
};

export default StudyCategory;
