
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Brain, Trophy, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Flashcards from '@/components/Flashcards';
import QuizMode from '@/components/QuizMode';
import StudyProgress from '@/components/StudyProgress';

const StudyCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalQuestions, setTotalQuestions] = useState(245);
  const [correctAnswers, setCorrectAnswers] = useState(180);

  const getCategoryName = (category: string) => {
    const categoryNames: { [key: string]: string } = {
      'medical-terminology': 'Medical Terminology',
      'microbiology': 'Microbiology',
      'anatomy': 'Anatomy & Physiology',
      'instruments': 'Surgical Instruments',
      'procedures': 'Surgical Procedures',
      'sterile': 'Sterile Technique',
      'asepsis': 'Asepsis',
      'sterilization': 'Sterilization'
    };
    return categoryNames[category || ''] || 'Unknown Category';
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <p className="text-gray-600">Category not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-blue-50 shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/study">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Categories</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-slate-500 to-blue-500 p-2 rounded-lg shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">
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
        <Card className="bg-gradient-to-br from-white via-slate-50 to-blue-50 backdrop-blur-sm border-slate-200 shadow-xl">
          <Tabs defaultValue="flashcards" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gradient-to-r from-slate-100 to-blue-100">
              <TabsTrigger value="flashcards" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
                <BookOpen className="h-4 w-4" />
                <span>Flashcards</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
                <Brain className="h-4 w-4" />
                <span>Practice Quiz</span>
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-500 data-[state=active]:to-blue-500 data-[state=active]:text-white">
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
        </Card>
      </div>
    </div>
  );
};

export default StudyCategory;
