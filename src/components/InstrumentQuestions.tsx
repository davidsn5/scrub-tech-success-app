import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { generalInstrumentsQuestions, Question } from '@/data/questions/generalInstruments';
import { orthopedicInstrumentIdentificationQuestions } from '@/data/questions/orthopedicInstrumentIdentification';
import { obgynInstrumentsQuestions } from '@/data/questions/obgynInstruments';
import { plasticsInstrumentQuestions } from '@/data/questions/plasticsInstruments';
import { entInstrumentsQuestions } from '@/data/questions/entInstruments';
import { cardiothoracicInstrumentQuestions } from '@/data/questions/cardiothoracicInstruments';
import { ophthalmologyInstrumentsQuestions } from '@/data/questions/ophthalmologyInstruments';
import { CheckCircle, XCircle, RotateCcw, Shuffle, Lock, Crown, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

interface InstrumentQuestionsProps {
  onBack: () => void;
  category?: string;
}

export const InstrumentQuestions: React.FC<InstrumentQuestionsProps> = ({ onBack, category = 'general-instrument-questions' }) => {
  const { subscription, createCheckoutSession, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Determine if user has premium access
  const hasPremiumAccess = subscription?.subscribed === true;
  const freeQuestionLimit = 5;
  
  // Get questions based on category
  const allQuestions = category === 'orthopedic-instrument-questions' 
    ? orthopedicInstrumentIdentificationQuestions 
    : category === 'obgyn-instrument-questions'
    ? obgynInstrumentsQuestions
    : category === 'plastics-instrument-questions'
    ? plasticsInstrumentQuestions
    : category === 'ent-instrument-questions'
    ? entInstrumentsQuestions
    : category === 'cardiothoracic-instrument-questions'
    ? cardiothoracicInstrumentQuestions
    : category === 'ophthalmology-instrument-questions'
    ? ophthalmologyInstrumentsQuestions
    : generalInstrumentsQuestions;
  
  // Use limited questions for non-premium users
  const availableQuestions = hasPremiumAccess 
    ? allQuestions 
    : allQuestions.slice(0, freeQuestionLimit);
  
  const [questions, setQuestions] = useState<Question[]>(availableQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(availableQuestions.length).fill(false)
  );
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(availableQuestions.length).fill(null)
  );

  // Update questions when subscription status changes
  useEffect(() => {
    const newAvailableQuestions = hasPremiumAccess 
      ? allQuestions 
      : allQuestions.slice(0, freeQuestionLimit);
    
    setQuestions(newAvailableQuestions);
    setAnsweredQuestions(new Array(newAvailableQuestions.length).fill(false));
    setUserAnswers(new Array(newAvailableQuestions.length).fill(null));
    
    // Reset to first question if current index is out of bounds
    if (currentQuestionIndex >= newAvailableQuestions.length) {
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  }, [hasPremiumAccess, category]);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const allQuestionsAnswered = answeredQuestions.every(answered => answered);

  // Safety check - if no questions available, show loading state (no colorScheme usage here to avoid early reference)
  if (!questions.length || !currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center">
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle>Loading Questions...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {allQuestions.length === 0
                ? "No questions available for this category."
                : "Please wait while we load your questions."}
            </p>
            <Button onClick={onBack} variant="outline" className="mt-4">
              Back to Categories
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnsweredQuestions = [...answeredQuestions];
    const newUserAnswers = [...userAnswers];
    
    newAnsweredQuestions[currentQuestionIndex] = true;
    newUserAnswers[currentQuestionIndex] = selectedAnswer;
    
    setAnsweredQuestions(newAnsweredQuestions);
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }

    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Quiz completed
      return;
    }

    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(userAnswers[currentQuestionIndex - 1]);
      setShowResult(answeredQuestions[currentQuestionIndex - 1]);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
    setUserAnswers(new Array(questions.length).fill(null));
  };

  const handleShuffle = () => {
    if (!hasPremiumAccess) {
      toast({
        title: "Premium Feature",
        description: "Shuffle is available with premium access. Upgrade to unlock all features!",
        variant: "destructive",
      });
      return;
    }

    // Fisher-Yates shuffle algorithm
    const shuffledQuestions = [...allQuestions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(shuffledQuestions.length).fill(false));
    setUserAnswers(new Array(shuffledQuestions.length).fill(null));
  };

  const handleUpgrade = () => {
    navigate('/auth');
  };

  const getScoreColor = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 80) return "text-blue-600";
    if (percentage >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  // Color scheme based on category
  const isOrthoNeuro = category === 'orthopedic-instrument-questions';
  const isObgyn = category === 'obgyn-instrument-questions';
  const isPlastics = category === 'plastics-instrument-questions';
  const isEnt = category === 'ent-instrument-questions';
  const isCardiothoracic = category === 'cardiothoracic-instrument-questions';
  const isOphthalmology = category === 'ophthalmology-instrument-questions';
  
  const colorScheme = isOrthoNeuro ? {
    bgGradient: 'from-teal-50 via-white to-teal-100',
    headerBg: 'bg-teal-50',
    buttonHover: 'hover:bg-teal-100 hover:text-teal-700',
    titleColor: 'text-teal-700',
    upgradeButton: 'bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
    progressBar: 'bg-teal-600',
    primaryButton: 'bg-teal-600 hover:bg-teal-700',
    primaryGradient: 'from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800',
    accent: 'teal'
  } : isObgyn ? {
    bgGradient: 'from-pink-50 via-white to-purple-100',
    headerBg: 'bg-pink-50',
    buttonHover: 'hover:bg-pink-100 hover:text-pink-700',
    titleColor: 'text-pink-700',
    upgradeButton: 'bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800',
    progressBar: 'bg-pink-600',
    primaryButton: 'bg-pink-600 hover:bg-pink-700',
    primaryGradient: 'from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800',
    accent: 'pink'
  } : isPlastics ? {
    bgGradient: 'from-plastics-light/30 via-white to-plastics/20',
    headerBg: 'bg-plastics-light/30',
    buttonHover: 'hover:bg-plastics-light/30 hover:text-plastics',
    titleColor: 'text-plastics',
    upgradeButton: 'bg-gradient-to-r from-plastics to-plastics-dark hover:from-plastics-dark hover:to-plastics',
    progressBar: 'bg-plastics',
    primaryButton: 'bg-plastics hover:bg-plastics-dark',
    primaryGradient: 'from-plastics to-plastics-dark hover:from-plastics-dark hover:to-plastics',
    accent: 'plastics'
  } : isEnt ? {
    bgGradient: 'from-orange-50 via-white to-amber-100',
    headerBg: 'bg-orange-50',
    buttonHover: 'hover:bg-orange-100 hover:text-orange-700',
    titleColor: 'text-orange-700',
    upgradeButton: 'bg-gradient-to-r from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800',
    progressBar: 'bg-orange-600',
    primaryButton: 'bg-orange-600 hover:bg-orange-700',
    primaryGradient: 'from-orange-600 to-amber-700 hover:from-orange-700 hover:to-amber-800',
    accent: 'orange'
  } : isCardiothoracic ? {
    bgGradient: 'from-red-50 via-white to-red-100',
    headerBg: 'bg-red-50',
    buttonHover: 'hover:bg-red-100 hover:text-red-700',
    titleColor: 'text-red-700',
    upgradeButton: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
    progressBar: 'bg-red-600',
    primaryButton: 'bg-red-600 hover:bg-red-700',
    primaryGradient: 'from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
    accent: 'red'
  } : isOphthalmology ? {
    bgGradient: 'from-violet-50 via-white to-violet-100',
    headerBg: 'bg-violet-50',
    buttonHover: 'hover:bg-violet-100 hover:text-violet-700',
    titleColor: 'text-violet-700',
    upgradeButton: 'bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800',
    progressBar: 'bg-violet-600',
    primaryButton: 'bg-violet-600 hover:bg-violet-700',
    primaryGradient: 'from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800',
    accent: 'violet'
  } : {
    bgGradient: 'from-blue-50 via-white to-blue-100',
    headerBg: 'bg-blue-50',
    buttonHover: 'hover:bg-blue-100 hover:text-blue-700',
    titleColor: 'text-blue-700',
    upgradeButton: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
    progressBar: 'bg-blue-600',
    primaryButton: 'bg-blue-600 hover:bg-blue-700',
    primaryGradient: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
    accent: 'blue'
  };

  // Safety check - if no questions available, show loading state
  if (!questions.length || !currentQuestion) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${colorScheme.bgGradient} flex items-center justify-center`}>
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle>Loading Questions...</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {allQuestions.length === 0 
                ? "No questions available for this category." 
                : "Please wait while we load your questions."}
            </p>
            <Button onClick={onBack} variant="outline" className="mt-4">
              Back to Categories
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colorScheme.bgGradient}`}>
      {/* Header */}
      <div className={`${colorScheme.headerBg} shadow-sm border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onBack}
                variant="ghost" 
                className={`flex items-center space-x-2 ${colorScheme.buttonHover}`}
              >
                <span>←</span>
                <span>Back to Categories</span>
              </Button>
            </div>
            <div className="flex flex-col items-end space-y-2">
              {!user && (
                <Button 
                  onClick={() => navigate('/auth')}
                  size="sm"
                  className={`${colorScheme.upgradeButton} text-white flex items-center space-x-1`}
                >
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign In/Up</span>
                  <span className="sm:hidden">Sign In</span>
                </Button>
              )}
              <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                {!hasPremiumAccess && (
                  <Badge variant="secondary" className="text-xs flex items-center space-x-1 order-1 sm:order-2">
                    <Crown className="h-3 w-3" />
                    <span>Free: {freeQuestionLimit} questions</span>
                  </Badge>
                )}
                <Badge variant="outline" className="text-sm order-2 sm:order-1">
                  Score: {score}/{totalQuestions}
                </Badge>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className={`text-2xl font-bold ${colorScheme.titleColor}`}>Instrument Identification Quiz</h1>
            <p className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${colorScheme.progressBar} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {allQuestionsAnswered && currentQuestionIndex === totalQuestions - 1 && showResult ? (
          // Final Results
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              <div className={`text-6xl font-bold mt-4 ${getScoreColor()}`}>
                {score}/{totalQuestions}
              </div>
              <p className="text-lg text-gray-600 mt-2">
                {((score / totalQuestions) * 100).toFixed(1)}% Correct
              </p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center space-x-4">
                <Button onClick={handleShuffle} className="flex items-center space-x-2" disabled={!hasPremiumAccess}>
                  {!hasPremiumAccess && <Lock className="h-4 w-4" />}
                  <Shuffle className="h-4 w-4" />
                  <span>{hasPremiumAccess ? 'Shuffle & Retry' : 'Shuffle (Premium)'}</span>
                </Button>
                <Button onClick={handleRestart} variant="outline" className="flex items-center space-x-2">
                  <RotateCcw className="h-4 w-4" />
                  <span>Try Again</span>
                </Button>
                  {!hasPremiumAccess && (
                    <Button onClick={handleUpgrade} className={`${colorScheme.primaryGradient} text-white flex items-center space-x-2`}>
                      <Crown className="h-4 w-4" />
                      <span>{`Upgrade for All ${allQuestions.length} Questions`}</span>
                    </Button>
                  )}
                <Button onClick={onBack} variant="outline" className={`border-${colorScheme.accent}-200 text-${colorScheme.accent}-700 hover:bg-${colorScheme.accent}-50`}>
                  Back to Categories
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          // Question Card
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className={`text-xl font-semibold ${colorScheme.titleColor}`}>
                  {currentQuestion.question}
                </CardTitle>
                <Badge variant={answeredQuestions[currentQuestionIndex] ? "default" : "outline"}>
                  {answeredQuestions[currentQuestionIndex] ? "Answered" : "Unanswered"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Premium Upsell for Non-Premium Users */}
              {!hasPremiumAccess && (
                <Card className={`bg-gradient-to-br from-${colorScheme.accent}-50/80 to-${colorScheme.accent}-100/80 border-${colorScheme.accent}-200/50 p-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Lock className={`h-5 w-5 text-${colorScheme.accent}-600`} />
                      <div>
                        <p className={`text-sm font-medium text-${colorScheme.accent}-800`}>
                          Showing {freeQuestionLimit} of {allQuestions.length} questions
                        </p>
                        <p className={`text-xs text-${colorScheme.accent}-700`}>
                          Unlock all questions with Premium access
                        </p>
                      </div>
                    </div>
                    <Button 
                      onClick={handleUpgrade}
                      size="sm"
                      className={`bg-gradient-to-r from-${colorScheme.accent}-600/90 to-${colorScheme.accent}-700/90 hover:from-${colorScheme.accent}-700/90 hover:to-${colorScheme.accent}-800/90 text-white`}
                    >
                      <Crown className="h-4 w-4 mr-1" />
                      Unlock
                    </Button>
                  </div>
                </Card>
              )}

              {/* Shuffle and Reset Controls */}
              <Card className="bg-gradient-to-br from-gray-50/80 to-gray-100/80 border-gray-200/50 p-4">
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    onClick={handleShuffle}
                    variant="outline"
                    size="sm"
                    className={`flex items-center space-x-1 sm:space-x-2 min-h-[44px] text-xs sm:text-sm ${!hasPremiumAccess ? 'opacity-50 cursor-not-allowed' : ''} relative`}
                    disabled={!hasPremiumAccess}
                  >
                    <Shuffle className="h-4 w-4" />
                    <span>Shuffle</span>
                    {!hasPremiumAccess && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Lock className="h-3 w-3 text-amber-500" />
                      </div>
                    )}
                  </Button>
                  <Button 
                    onClick={handleRestart}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-1 sm:space-x-2 min-h-[44px] text-xs sm:text-sm"
                  >
                    <RotateCcw className="h-4 w-4" />
                    <span>Restart</span>
                  </Button>
                </div>
              </Card>
              {/* Instrument Image */}
              {currentQuestion.image && (
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-md border relative">
                    <img 
                      src={currentQuestion.image} 
                      alt="Surgical instrument"
                      className="max-w-full h-64 object-contain"
                    />
                    <div className="absolute bottom-4 right-4 text-[8px] text-white/40 font-light bg-black/20 px-1 py-0.5 rounded-sm">
                      © SurgicalTechReview.com
                    </div>
                  </div>
                </div>
              )}

              {/* Answer Choices */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestion.choices.map((choice, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  const isIncorrect = showResult && isSelected && !isCorrect;
                  const shouldHighlight = showResult && isCorrect;

                  return (
                    <Button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      variant={isSelected ? "default" : "outline"}
                      className={`
                        p-4 h-auto text-left justify-start relative
                        ${shouldHighlight ? "bg-green-100 border-green-500 text-green-800" : ""}
                        ${isIncorrect ? "bg-red-100 border-red-500 text-red-800" : ""}
                        ${!showResult && isSelected ? `bg-${colorScheme.accent}-100 border-${colorScheme.accent}-500` : ""}
                      `}
                      disabled={showResult}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-sm font-medium">{choice}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        )}
                        {showResult && isIncorrect && (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && currentQuestion.explanation && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
                  <p className="text-blue-800 text-sm">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                <Button
                  onClick={handlePreviousQuestion}
                  variant="outline"
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </Button>
                
                <div className="flex space-x-2">
                  {!showResult ? (
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className={colorScheme.primaryButton}
                    >
                      Submit Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNextQuestion}
                      disabled={isLastQuestion && allQuestionsAnswered}
                      className={colorScheme.primaryButton}
                    >
                      {isLastQuestion ? "View Results" : "Next Question"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};