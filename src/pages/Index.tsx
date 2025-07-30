
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Zap, RotateCcw, Target, TrendingUp, Clock, Award, FileText, LogIn, User, Crown, Settings, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/components/AuthContext';
import ProtectedContent from '@/components/ProtectedContent';

const Index = () => {
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [missedQuestions, setMissedQuestions] = useState(12);
  const [studyStreak, setStudyStreak] = useState(5);
  const { user, subscription, signOut, createCheckout, openCustomerPortal } = useAuth();

  const sections = [
    {
      title: "Intro to Surgical Technology",
      description: "Fundamental concepts and foundational knowledge for surgical technologists",
      icon: BookOpen,
      color: "from-orange-500/80 to-orange-600/80",
      bgColor: "from-orange-50/90 to-orange-100/90",
      borderColor: "border-orange-200/60",
      link: "/intro-surgical-tech",
      questionCount: 200
    },
    {
      title: "Principles and Practice of Surgical Technology",
      description: "Core principles, techniques, and best practices in surgical technology",
      icon: Brain,
      color: "from-teal-500/80 to-teal-600/80",
      bgColor: "from-teal-50/90 to-teal-100/90",
      borderColor: "border-teal-200/60",
      link: "/principles-practice",
      questionCount: 270
    },
    {
      title: "Surgical Procedures",
      description: "Comprehensive coverage of various surgical procedures and techniques",
      icon: Target,
      color: "from-blue-500/80 to-blue-600/80",
      bgColor: "from-blue-50/90 to-blue-100/90",
      borderColor: "border-blue-200/60",
      link: "/study/surgical-procedures",
      questionCount: 0
    },
    {
      title: "Medical Terminology",
      description: "Essential medical terms and vocabulary for surgical technology practice",
      icon: FileText,
      color: "from-purple-500/80 to-purple-600/80",
      bgColor: "from-purple-50/90 to-purple-100/90",
      borderColor: "border-purple-200/60",
      link: "/medical-terminology",
      questionCount: 40
    }
  ];

  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/a97d37e9-2975-4012-992a-008ee35274c1.png" 
                  alt="Surgical Tech Review Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">
                  Surgical Technologist Review
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">CST Program Prep and Exam Prep</p>
              </div>
            </div>
            
            {/* Auth Section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {user ? (
                <div className="flex items-center space-x-2 sm:space-x-3">
                  {/* Subscription Status */}
                  {subscription?.status === 'admin' && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full border border-purple-300/50">
                      <Crown className="h-3 w-3 text-purple-600" />
                      <span className="text-xs font-medium text-purple-700">Admin</span>
                    </div>
                  )}
                  {subscription?.status === 'active' && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full border border-green-300/50">
                      <Crown className="h-3 w-3 text-green-600" />
                      <span className="text-xs font-medium text-green-700">Premium</span>
                    </div>
                  )}
                  {subscription?.status === 'trial' && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full border border-blue-300/50">
                      <Clock className="h-3 w-3 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700">Trial</span>
                    </div>
                  )}
                  {subscription?.status === 'expired' && (
                    <Button
                      onClick={createCheckout}
                      size="sm"
                      className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:opacity-90 text-white text-xs px-3 py-1"
                    >
                      Subscribe $9.99/mo
                    </Button>
                  )}
                  
                  {/* User Menu */}
                  <div className="flex items-center space-x-2">
                    {subscription?.subscribed && (
                      <Button
                        onClick={openCustomerPortal}
                        variant="outline"
                        size="sm"
                        className="text-xs px-2 py-1"
                      >
                        <Settings className="h-3 w-3 mr-1" />
                        Manage
                      </Button>
                    )}
                    <Button
                      onClick={signOut}
                      variant="outline"
                      size="sm"
                      className="text-xs px-2 py-1"
                    >
                      <User className="h-3 w-3 mr-1" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/auth">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1"
                    >
                      <LogIn className="h-3 w-3 mr-1" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 text-white text-xs px-3 py-1"
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Progress Tracker */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Your Progress
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-orange-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{accuracy}%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Accuracy Rate</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-teal-50/80 to-teal-100/70 backdrop-blur-sm border-teal-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{totalQuestions}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Questions Completed</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/70 backdrop-blur-sm border-blue-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{studyStreak}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Day Streak</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{missedQuestions}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Missed Questions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Study Sections */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Study Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className={`p-4 sm:p-6 bg-gradient-to-br ${section.bgColor} backdrop-blur-sm ${section.borderColor} border shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-start space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${section.color} flex-shrink-0`}>
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-tight">{section.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm leading-relaxed">{section.description}</p>
                    <Link to={section.link} className="mt-auto">
                      <Button className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5`}>
                        Start Studying
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Flashcards Section */}
        <div className="mb-6 sm:mb-8">
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-indigo-50/80 to-indigo-100/70 backdrop-blur-sm border-indigo-200/50 shadow-lg">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-indigo-500/90 to-indigo-600/90 flex-shrink-0">
                <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Study Flashcards</h3>
            </div>
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Review key terms and concepts with interactive flashcards organized by category</p>
            <Link to="/flashcards">
              <Button className="w-full bg-gradient-to-r from-indigo-500/90 to-indigo-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5">
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Browse Flashcards
              </Button>
            </Link>
          </Card>
        </div>

        {/* Fire Quiz and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Fire Quiz */}
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-red-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-lg">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-red-500/90 to-orange-500/90 flex-shrink-0">
                <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Fire Quiz</h3>
            </div>
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Quick 5-question quiz with random questions from all categories</p>
            <Link to="/fire-quiz">
              <Button className="w-full bg-gradient-to-r from-red-500/90 to-orange-500/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Start Fire Quiz
              </Button>
            </Link>
          </Card>

          {/* Missed Questions */}
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-cyan-50/80 to-cyan-100/70 backdrop-blur-sm border-cyan-200/50 shadow-lg">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 flex-shrink-0">
                <RotateCcw className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Missed Questions</h3>
            </div>
            <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Review and retry questions you've missed</p>
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm text-gray-500">{missedQuestions} questions to review</span>
            </div>
            <Link to="/missed-questions">
              <Button className="w-full bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5">
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Review Missed Questions
              </Button>
            </Link>
          </Card>
        </div>

        {/* Exam Simulation */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-100/70 backdrop-blur-sm border-blue-200/50 shadow-xl">
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-blue-500/90 to-indigo-500/90">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Full Exam Simulation</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Take a comprehensive 150-question practice exam that simulates the actual certification test experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>150 Questions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Detailed Results</span>
              </div>
              {!user && (
                <div className="flex items-center space-x-2 text-orange-600">
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Subscription Required</span>
                </div>
              )}
            </div>
            {user ? (
              subscription?.subscribed || subscription?.status === 'admin' ? (
                <Link to="/exam-simulation">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                    Start Exam Simulation
                  </Button>
                </Link>
              ) : (
                <Button 
                  onClick={createCheckout}
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500/90 to-orange-600/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  <Crown className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                  Subscribe to Access - $9.99/mo
                </Button>
              )
            ) : (
              <Link to="/auth">
                <Button size="lg" className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                  <LogIn className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                  Sign Up for Free Trial
                </Button>
              </Link>
            )}
          </div>
        </Card>
        
        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200/50">
          <Link 
            to="/privacy-policy" 
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
