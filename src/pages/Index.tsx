
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Zap, RotateCcw, Target, TrendingUp, Clock, Award, FileText, User, LogOut, Settings, Shield, RefreshCw, Star, Check, Users, Trophy, Lock, Scissors } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useUserProgress } from '@/hooks/useUserProgress';
import AddToHomeScreen from '@/components/AddToHomeScreen';
import { useToast } from '@/hooks/use-toast';
import ForgotPasswordDialog from '@/components/ForgotPasswordDialog';
import { useGamePreviewGate } from '@/hooks/useGamePreviewGate';
import { FlagGate } from '@/components/FlagGate';
import { usePremiumFeatureGate } from '@/hooks/usePremiumFeatureGate';



const Index = () => {
  const { user, subscription, loading, signOut, createCheckoutSession, openCustomerPortal, checkAccessBeforeUpgrade, checkSubscription } = useAuth();
  const { progress, loading: progressLoading, getAccuracyPercentage, resetProgress } = useUserProgress();
  const { isPremium } = useGamePreviewGate();
  const { handlePremiumFeatureClick, isVerifying } = usePremiumFeatureGate();
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isResetting, setIsResetting] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

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

  // Show verification overlay when verifying premium access
  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg font-semibold text-primary">Verifying Premium Access...</p>
          <p className="text-sm text-muted-foreground mt-2">Checking your subscription status</p>
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

  

  const handleUnlockPremium = async () => {
    // Directly trigger Stripe checkout
    await createCheckoutSession();
  };

  const handlePremiumFeatureAccess = async (targetPath: string, featureName?: string) => {
    handlePremiumFeatureClick(() => navigate(targetPath), featureName);
  };

  return (
    <div className="min-h-screen gradient-background">
      {/* Header */}
      <div className="bg-card/95 backdrop-blur-md shadow-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative group">
                <div className="absolute -inset-1 gradient-primary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-card overflow-hidden ring-2 ring-white/50">
                  <img 
                    src="/lovable-uploads/f83d7dac-f60d-4f1c-bb14-f51b206c6316.png" 
                    alt="Surgical Tech Review Logo" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
              </div>
              
              <div className="text-center sm:text-left space-y-1 sm:space-y-2">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary animate-fade-in">
                  Surgical Technologist Review
                </h1>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base text-foreground font-medium leading-tight">
                    CST Program and Exam Prep
                    <span className="hidden sm:inline text-muted-foreground"> • </span>
                    <span className="block sm:inline text-muted-foreground">AST Curriculum Based Practice</span>
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
                    1700+ Practice Questions • Interactive Flashcards • Review Games • Full Exam Simulation • Performance Analytics
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-xs">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium border border-accent/20">
                      Premium Features Available
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium border border-secondary/20">
                      Fire Quiz Always Free
                    </span>
                  </div>
                </div>
                
                {/* Mobile Auth Section */}
                <div className="mt-4 sm:hidden">
                  {!user ? (
                    <div className="space-y-2">
                      <Button 
                        onClick={() => navigate('/auth')} 
                        className="w-full gradient-primary hover:opacity-90 shadow-card hover:shadow-professional transition-all duration-300 transform hover:scale-105"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Sign in/Upgrade
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowForgotPassword(true)}
                        className="w-full text-xs text-muted-foreground hover:text-foreground"
                      >
                        Forgot password?
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3 gradient-card rounded-xl p-4 border border-border/50 backdrop-blur-sm shadow-card">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
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
              <div className="hidden sm:block space-y-2">
                <Button 
                  onClick={() => navigate('/auth')} 
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6"
                >
                  <User className="h-4 w-4 mr-2" />
                  Sign in/Upgrade
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Forgot password?
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-16">
        {/* Progress Tracker */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
            Your Progress
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            <Card className="gradient-card shadow-card border-border/50 p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Target className="h-6 w-6 sm:h-8 sm:w-8 text-accent flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-semibold text-foreground">{getAccuracyPercentage()}%</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Accuracy Rate</p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card shadow-card border-border/50 p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-semibold text-foreground">{progress.totalQuestionsAttempted}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Questions Completed</p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card shadow-card border-border/50 p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-secondary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-semibold text-foreground">{progress.currentStreak}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </Card>
            <Card className="gradient-card shadow-card border-border/50 p-4 sm:p-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-lg sm:text-2xl font-semibold text-foreground">{progress.totalMissedQuestions}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Missed Questions</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Study Sections */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
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
                    <Button 
                      onClick={() => handlePremiumFeatureAccess(section.link, section.title)}
                      className={`w-full bg-gradient-to-r ${section.color} hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5`}
                    >
                      Start Studying
                    </Button>
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


        {/* Review Section */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700/90 to-blue-700/90 bg-clip-text text-transparent mb-4 sm:mb-6">
            Review
          </h2>
        
          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Study Flashcards */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-indigo-50/80 to-indigo-100/70 backdrop-blur-sm border-indigo-200/50 shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-indigo-500/90 to-indigo-600/90 flex-shrink-0">
                  <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Study Flashcards</h3>
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">Review key terms and concepts with interactive flashcards organized by category</p>
              <Button 
                onClick={() => handlePremiumFeatureAccess('/flashcards', 'Interactive Flashcards')}
                className="w-full bg-gradient-to-r from-indigo-500/90 to-indigo-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5"
              >
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Browse Flashcards
              </Button>
            </Card>

            {/* Key Term Games */}
            <Card className={`p-4 sm:p-6 bg-gradient-to-br from-teal-50/90 to-teal-100/90 backdrop-blur-sm border-teal-200/60 shadow-lg transition-all duration-300 ${!isPremium ? 'hover:shadow-xl' : ''}`}>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-teal-500/80 to-teal-600/80 flex-shrink-0">
                    <Trophy className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-teal-700">Review Games</h3>
                </div>
                {isPremium ? (
                  <Badge className="bg-green-500/90 text-white text-xs">Premium</Badge>
                ) : (
                  <Badge className="bg-amber-500/90 text-white text-xs">Free Preview</Badge>
                )}
              </div>
              <p className="text-teal-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Interactive games to master medical terminology and surgical concepts
                {!isPremium && <span className="block mt-1 text-amber-700 font-medium">Try limited games daily - upgrade for unlimited access!</span>}
              </p>
              <Button 
                onClick={() => handlePremiumFeatureAccess('/key-term-games', 'Review Games')}
                className="w-full bg-gradient-to-r from-teal-500/80 to-teal-600/80 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5"
              >
                <Trophy className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                {isPremium ? 'Play Games' : 'Try Free Preview'}
              </Button>
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
                <span className="text-xs sm:text-sm text-gray-500">{progress.totalMissedQuestions} questions to review</span>
              </div>
              <Button 
                onClick={() => handlePremiumFeatureAccess('/missed-questions', 'Missed Questions Review')}
                className="w-full bg-gradient-to-r from-cyan-500/90 to-cyan-600/90 hover:opacity-90 transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5"
              >
                <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Review Missed Questions
              </Button>
            </Card>

            {/* Instrumentation Flashcards - Now always accessible */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/70 backdrop-blur-sm border-purple-200/50 shadow-lg">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-purple-500/90 to-purple-600/90 flex-shrink-0">
                    <Scissors className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Instrumentation Review</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                Master surgical instruments with specialized flashcards covering tools, equipment, and their applications
              </p>
              <Button 
                onClick={() => navigate('/instrumentation-flashcards')}
                className="w-full transition-opacity text-white text-xs sm:text-sm py-2 sm:py-2.5 bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:opacity-90"
              >
                <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Study Instruments
              </Button>
            </Card>
          </div>
        </div>

        {/* Fire Quiz */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-white/90 via-red-50/80 to-orange-100/70 backdrop-blur-sm border-orange-200/50 shadow-xl mb-6 sm:mb-8">
          <div className="text-center">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-red-500/90 to-orange-500/90">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Fire Quiz</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Quick 5-question quiz with random questions from all categories
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>5 Minutes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Always Free</span>
              </div>
            </div>
            <Link to="/fire-quiz">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-500/90 to-orange-500/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                Start Fire Quiz
              </Button>
            </Link>
          </div>
        </Card>

        {/* Exam Simulation */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-100/70 backdrop-blur-sm border-blue-200/50 shadow-xl mb-6 sm:mb-8">
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
            <Button 
              onClick={() => handlePremiumFeatureAccess('/exam-simulation', 'Full Exam Simulation')}
              size="lg"
              className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
            >
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
              Start Exam Simulation
            </Button>
          </div>
        </Card>
        
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
                  onClick={() => navigate('/auth')}
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 text-white px-8 py-3 text-lg font-semibold"
                >
                  <Star className="h-5 w-5 mr-2" />
                  Upgrade Now
                </Button>
              </div>
            </Card>
          </div>
        )}
        
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
            <Link 
              to="/copyright-notice" 
              className="hover:text-gray-700 transition-colors"
            >
              Copyright Notice
            </Link>
            <span>Contact Us: SurgicalTechReview@gmail.com</span>
            <span className="text-xs">
              © {new Date().getFullYear()} Surgical Tech Review. All content is copyrighted and protected.
            </span>
          </div>
        </div>
      </div>

      {/* Forgot Password Dialog */}
      <ForgotPasswordDialog 
        isOpen={showForgotPassword} 
        onClose={() => setShowForgotPassword(false)} 
      />
    </div>
  );
};

export default Index;
