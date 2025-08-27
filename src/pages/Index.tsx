
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Zap, RotateCcw, Target, TrendingUp, Clock, Award, FileText, User, LogOut, Settings, Shield, RefreshCw, Star, Check, Users, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProgress } from '@/hooks/useUserProgress';
import AddToHomeScreen from '@/components/AddToHomeScreen';
import StickyPromoBanner from '@/components/StickyPromoBanner';
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

  

  const handleUnlockPremium = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Sticky Promo Banner */}
      <StickyPromoBanner />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-white/98 via-slate-50/95 to-blue-50/90 shadow-lg border-b border-slate-200/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-lg overflow-hidden ring-2 ring-white/50">
                  <img 
                    src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                    alt="Surgical Tech Review Logo" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
              
              <div className="text-center sm:text-left space-y-1 sm:space-y-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent animate-fade-in">
                  Surgical Technologist Review
                </h1>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base text-slate-700 font-semibold leading-tight">
                    CST Program and Exam Prep
                    <span className="hidden sm:inline text-slate-500"> • </span>
                    <span className="block sm:inline text-slate-600">AST Curriculum Based Practice</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-2xl">
                    1700+ Practice Questions • Interactive Flashcards • Full Exam Simulation • Performance Analytics
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-100/80 text-orange-700 font-medium border border-orange-200/50">
                      Premium Features Available
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-green-100/80 text-green-700 font-medium border border-green-200/50">
                      Fire Quiz Always Free
                    </span>
                  </div>
                </div>
                
                {/* Mobile Auth Section */}
                <div className="mt-4 sm:hidden">
                  {!user ? (
                    <Button 
                      onClick={() => navigate('/auth')} 
                      className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Sign in/Sign up
                    </Button>
                  ) : (
                    <div className="space-y-3 bg-white/60 rounded-xl p-4 border border-slate-200/50 backdrop-blur-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-sm text-slate-700 font-medium">{user.email}</p>
                      </div>
                      <div className="flex flex-col space-y-2">
                        {isSubscribed && !isAdmin && (
                          <Link to="/account" className="w-full">
                            <Button variant="outline" size="sm" className="w-full hover:bg-slate-50">
                              <Settings className="h-4 w-4 mr-2" />
                              Manage Account
                            </Button>
                          </Link>
                        )}
                        <Button 
                          onClick={signOut} 
                          variant="outline" 
                          size="sm" 
                          className="w-full hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Sign Out
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Desktop User Section */}
            {user && (
              <div className="hidden sm:flex items-center space-x-4">
                {/* Enhanced Subscription Status */}
                <div className="flex items-center space-x-3">
                  {isAdmin ? (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 px-4 py-2 rounded-full border border-emerald-200/60 shadow-sm">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-semibold">Admin</span>
                    </div>
                  ) : isSubscribed ? (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full border border-blue-200/60 shadow-sm">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm font-semibold">Premium</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  ) : isTrialActive ? (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-4 py-2 rounded-full border border-amber-200/60 shadow-sm">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-semibold">Trial</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-semibold">Free</span>
                    </div>
                  )}
                </div>
                
                {/* Enhanced User Actions */}
                <div className="flex flex-col items-end space-y-3 bg-white/60 rounded-xl p-4 border border-slate-200/50 backdrop-blur-sm shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-slate-700 font-medium">{user.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {isSubscribed && !isAdmin && (
                      <Link to="/account">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="hover:bg-slate-50 hover:scale-105 transition-all duration-200"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Account
                        </Button>
                      </Link>
                    )}
                    
                    <Button 
                      onClick={signOut} 
                      variant="outline" 
                      size="sm"
                      className="hover:bg-red-50 hover:border-red-200 hover:text-red-600 hover:scale-105 transition-all duration-200"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      <span className="hidden lg:inline">Sign Out</span>
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Desktop Sign In Button */}
            {!user && (
              <div className="hidden sm:block">
                <Button 
                  onClick={() => navigate('/auth')} 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign in/Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-16">
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
                     <div className="flex-1">
                        <h3 className="text-sm sm:text-lg font-semibold text-gray-900 leading-tight">{section.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 flex-grow text-xs sm:text-sm leading-relaxed">{section.description}</p>
                    <Link to={section.link} className="mt-auto">
                      <Button className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5`}>
                        Start Studying
                      </Button>
                    </Link>
                    {!isSubscribed && (
                      <div className="flex justify-center mt-2">
                        <Badge variant="outline" className="text-xs">
                          10 free Qs
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Premium Section - Only show for non-premium users */}
        {!isSubscribed && (
          <div className="mb-6 sm:mb-8">
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-white/95 via-primary/5 to-primary/10 backdrop-blur-sm border-primary/20 shadow-xl">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary/80">
                    <Star className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Go Premium
                </h2>
                
                <p className="text-gray-600 mb-6 text-lg">
                  Unlock your full potential with complete access to all study materials
                </p>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">1700+ Practice Questions</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">Complete Flashcard Library</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">Full Exam Simulations</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">Detailed Performance Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">Unlimited Study Sessions</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center md:justify-start">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">Lifetime Updates</span>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"The comprehensive question bank helped me pass my CST exam on the first try!"</p>
                    <p className="text-xs text-gray-500 font-medium">- Sarah M., CST</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-4 border border-gray-200/50">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">"91% pass rate improvement with detailed explanations and analytics."</p>
                    <p className="text-xs text-gray-500 font-medium">- Program Director Review</p>
                  </div>
                </div>

                <Button 
                  onClick={handleUnlockPremium}
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Unlock Premium Access
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Review Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Review
          </h2>
        
          {/* Study Flashcards - Full Width */}
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-indigo-50/80 to-indigo-100/70 backdrop-blur-sm border-indigo-200/50 shadow-lg mb-6">
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
