
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Trophy, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [studyStreak, setStudyStreak] = useState(7);
  const [totalQuestions, setTotalQuestions] = useState(245);
  const [correctAnswers, setCorrectAnswers] = useState(180);

  const sections = [
    {
      title: "Study Center",
      description: "Interactive flashcards and practice quizzes across all surgical technologist topics",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      link: "/study"
    },
    {
      title: "Practice Tests",
      description: "Full-length mock exams to prepare for your certification",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      link: "/practice-tests",
      comingSoon: true
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning progress and identify areas for improvement",
      icon: Trophy,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      link: "/progress",
      comingSoon: true
    },
    {
      title: "Reference Materials",
      description: "Quick access to important surgical terminology and procedures",
      icon: Target,
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-50 to-orange-50",
      link: "/reference",
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-blue-50 shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-slate-500 to-blue-500 p-2 rounded-lg shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent">SurgTech Study</h1>
                <p className="text-sm text-gray-600">Certified Surgical Technologist Exam Prep</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Target className="h-4 w-4 text-emerald-500" />
                <span className="text-gray-700">{Math.round((correctAnswers/totalQuestions) * 100)}% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span className="text-gray-700">{studyStreak} Day Streak</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 backdrop-blur-sm border-blue-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalQuestions}</p>
                <p className="text-sm text-gray-600">Questions Attempted</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-emerald-50 to-teal-100 backdrop-blur-sm border-emerald-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-emerald-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{correctAnswers}</p>
                <p className="text-sm text-gray-600">Correct Answers</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-amber-50 to-orange-100 backdrop-blur-sm border-amber-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-amber-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{studyStreak}</p>
                <p className="text-sm text-gray-600">Day Streak</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-white via-slate-50 to-blue-100 backdrop-blur-sm border-slate-200 shadow-lg">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-slate-500" />
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Study Categories</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Sections */}
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Study Sections
            </h2>
            <p className="text-gray-600">Choose a section to begin your surgical technologist exam preparation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className={`p-6 bg-gradient-to-br ${section.bgColor} backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{section.description}</p>
                      {section.comingSoon ? (
                        <Button disabled variant="outline" className="w-full">
                          Coming Soon
                        </Button>
                      ) : (
                        <Link to={section.link}>
                          <Button className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 transition-opacity`}>
                            <span>Start Learning</span>
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
