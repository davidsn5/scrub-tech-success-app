
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Zap, RotateCcw, Target, TrendingUp, Clock, Award, FileText, User, LogOut, Settings, Shield, RefreshCw } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProgress } from '@/hooks/useUserProgress';
import AddToHomeScreen from '@/components/AddToHomeScreen';
import { useToast } from '@/hooks/use-toast';


const Index = () => {
  const { user, subscription, loading, signOut, createCheckoutSession, openCustomerPortal } = useAuth();
  const { progress, loading: progressLoading, getAccuracyPercentage, resetProgress } = useUserProgress();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isResetting, setIsResetting] = useState(false);

  if (loading || progressLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const isTrialActive = subscription?.status === 'trial';
  const isAdmin = subscription?.status === 'admin';
  const isSubscribed = subscription?.subscribed || isAdmin;

  // Debug logging for admin access
  console.log('Index.tsx - User:', user?.email);
  console.log('Index.tsx - Subscription:', subscription);
  console.log('Index.tsx - isAdmin:', isAdmin);

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

  const handleProgressReset = async () => {
    if (!user) return;
    
    setIsResetting(true);
    try {
      await resetProgress();
      toast({
        title: "Progress Reset",
        description: "Your progress has been successfully reset to 0.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reset progress. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResetting(false);
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 flex-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                  alt="Surgical Tech Review Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-600">
                  Surgical Technologist Review
                </h1>
                <p className="text-sm sm:text-base text-gray-600 font-bold">
                  CST Program and Exam Prep<span className="hidden sm:inline">, </span>
                  <span className="block sm:inline">AST Curriculum Based Practice</span>
                </p>
                <p className="text-sm sm:text-base text-gray-500 font-bold">1700+ Practice Questions, Interactive Flashcards, Full Exam Simulation, and Performance Analytics</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Full Access and Performance Analytics Only Available with Subscription</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Unlimited Fire Quiz questions available without Subscription</p>
                
                {/* Mobile Sign In/Out Buttons - show below subscription text on mobile only */}
                <div className="mt-4 sm:hidden">
                  {!user ? (
                    <Button 
                      onClick={() => navigate('/auth')} 
                      className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90"
                    >
                      Sign in/Sign up
                    </Button>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <div className="flex flex-col space-y-2">
                        {isSubscribed && !isAdmin && (
                          <Link to="/account">
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4 mr-1" />
                              Manage Account
                            </Button>
                          </Link>
                        )}
                        <Button onClick={signOut} variant="outline" size="sm">
                          <LogOut className="h-4 w-4 mr-1" />
                          Sign Out
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* User Menu - Only show when authenticated on desktop/tablet */}
            {user && (
              <div className="hidden sm:flex items-center space-x-4">
                {/* Subscription Status */}
                <div className="flex items-center space-x-2">
                  {isAdmin ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full border border-green-200">
                      <Shield className="h-3 w-3" />
                      <span className="text-xs font-medium">Admin</span>
                    </div>
                  ) : isSubscribed ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
                      <Shield className="h-3 w-3" />
                      <span className="text-xs font-medium">Premium</span>
                    </div>
                  ) : isTrialActive ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-medium">Trial</span>
                    </div>
                  ) : null}
                </div>
                
                {/* User Actions */}
                <div className="flex flex-col items-end space-y-2">
                  <span className="text-sm text-gray-600">{user.email}</span>
                  
                  <div className="flex items-center space-x-2">
                    {isSubscribed && !isAdmin && (
                      <Link to="/account">
                        <Button variant="outline" size="sm">
                          <Settings className="h-4 w-4 mr-1" />
                          Manage Account
                        </Button>
                      </Link>
                    )}
                    
                    <Button onClick={signOut} variant="outline" size="sm">
                      <LogOut className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Sign Out</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Sign In Button for non-authenticated users - desktop only */}
            {!user && (
              <Button 
                onClick={() => navigate('/auth')} 
                className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 hidden sm:block"
              >
                Sign in/Sign up
              </Button>
            )}
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
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{getAccuracyPercentage()}%</p>
                  <p className="text-xs sm:text-sm text-gray-600">Accuracy Rate</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-teal-50/80 to-teal-100/70 backdrop-blur-sm border-teal-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-teal-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{progress.totalQuestionsAttempted}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Questions Completed</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-blue-100/70 backdrop-blur-sm border-blue-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{progress.currentStreak}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Day Streak</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600/90 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{progress.totalMissedQuestions}</p>
                  <p className="text-xs sm:text-sm text-gray-600">Missed Questions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Study Sections */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Practice Questions
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

        {/* Review Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Review
          </h2>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Regular Flashcards */}
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

            {/* Admin-Only Surgical Instruments */}
            {isAdmin && (
              <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-emerald-50/80 to-emerald-100/70 backdrop-blur-sm border-emerald-200/50 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-emerald-500/90 to-emerald-600/90 flex-shrink-0">
                    <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Surgical Instruments</h3>
                    <span className="px-2 py-1 text-xs bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
                      Admin Preview
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Visual flashcards for surgical instrument identification and learning</p>
                <Link to="/instrument-flashcards">
                  <Button className="w-full bg-gradient-to-r from-emerald-500/90 to-emerald-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    Study Instruments
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </div>

        {/* Fire Quiz and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
              <span className="text-xs sm:text-sm text-gray-500">{progress.totalMissedQuestions} questions to review</span>
            </div>
            <Link to="/missed-questions">
              <Button className="w-full bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5">
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Review Missed Questions
              </Button>
            </Link>
          </Card>

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
              Take a comprehensive 150-question practice exam
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
            </div>
            <Link to="/exam-simulation">
              <Button size="lg" className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                Start Exam Simulation
              </Button>
            </Link>
          </div>
        </Card>
        
        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200/50 space-y-4">
          {user && (
            <div className="mb-4">
              <Button 
                onClick={handleProgressReset}
                disabled={isResetting}
                variant="outline"
                className="bg-gradient-to-r from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20 border-red-200 text-red-600 hover:text-red-700"
              >
                {isResetting ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Progress Reset
                  </>
                )}
              </Button>
            </div>
          )}
          <AddToHomeScreen />
          {user && (
            <div className="mb-4 space-y-2">
              <p className="text-sm text-gray-600">{user.email}</p>
              <Link to="/account">
                <Button variant="outline" className="mb-2">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Account
                </Button>
              </Link>
              <div>
                <Button onClick={signOut} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-col space-y-2 text-sm text-gray-500">
            <Link 
              to="/privacy-policy" 
              className="hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>Contact Us: SurgicalTechReview@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
