
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Brain, Trophy, Target } from 'lucide-react';
import Flashcards from '@/components/Flashcards';
import QuizMode from '@/components/QuizMode';
import StudyProgress from '@/components/StudyProgress';
import CategorySelector from '@/components/CategorySelector';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('anatomy');
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalQuestions, setTotalQuestions] = useState(245);
  const [correctAnswers, setCorrectAnswers] = useState(180);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-teal-50 to-purple-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-orange-50 to-teal-50 shadow-sm border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-teal-500 to-orange-500 p-2 rounded-lg shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">SurgTech Study</h1>
                <p className="text-sm text-gray-600">Certified Surgical Technologist Exam Prep</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-teal-600" />
                <span className="text-gray-700">{Math.round((correctAnswers/totalQuestions) * 100)}% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-orange-500" />
                <span className="text-gray-700">{studyStreak} Day Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-white via-teal-50 to-teal-100 backdrop-blur-sm border-teal-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-teal-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalQuestions}</p>
                <p className="text-sm text-gray-600">Questions Attempted</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-green-50 to-green-100 backdrop-blur-sm border-green-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{correctAnswers}</p>
                <p className="text-sm text-gray-600">Correct Answers</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-orange-50 to-orange-100 backdrop-blur-sm border-orange-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{studyStreak}</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-purple-50 to-purple-100 backdrop-blur-sm border-purple-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-gray-600">Study Categories</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Selector */}
        <div className="mb-8">
          <CategorySelector 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Main Study Interface */}
        <Card className="bg-gradient-to-br from-white via-orange-50 to-teal-50 backdrop-blur-sm border-orange-200 shadow-xl">
          <Tabs defaultValue="flashcards" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-gradient-to-r from-teal-100 to-orange-100">
              <TabsTrigger value="flashcards" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                <BookOpen className="h-4 w-4" />
                <span>Flashcards</span>
              </TabsTrigger>
              <TabsTrigger value="quiz" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                <Brain className="h-4 w-4" />
                <span>Practice Quiz</span>
              </TabsTrigger>
              <TabsTrigger value="progress" className="flex items-center space-x-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-500 data-[state=active]:to-orange-500 data-[state=active]:text-white">
                <Trophy className="h-4 w-4" />
                <span>Progress</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="flashcards" className="p-6">
              <Flashcards 
                category={selectedCategory}
                onAnswerCorrect={() => setCorrectAnswers(prev => prev + 1)}
                onQuestionAttempt={() => setTotalQuestions(prev => prev + 1)}
              />
            </TabsContent>
            
            <TabsContent value="quiz" className="p-6">
              <QuizMode 
                category={selectedCategory}
                onAnswerCorrect={() => setCorrectAnswers(prev => prev + 1)}
                onQuestionAttempt={() => setTotalQuestions(prev => prev + 1)}
              />
            </TabsContent>
            
            <TabsContent value="progress" className="p-6">
              <StudyProgress 
                streak={studyStreak}
                totalQuestions={totalQuestions}
                correctAnswers={correctAnswers}
                category={selectedCategory}
              />
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Index;
