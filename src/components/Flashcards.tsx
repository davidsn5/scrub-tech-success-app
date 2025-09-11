
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, RotateCcw, Eye, EyeOff, Shuffle, CheckCircle, Lock, Crown } from 'lucide-react';
import { flashcardData } from '@/data/flashcardData';
import { useFreeAccessGate } from '@/hooks/useFreeAccessGate';
import { useNavigate } from 'react-router-dom';

interface FlashcardsProps {
  category: string;
  onAnswerCorrect?: () => void;
  onQuestionAttempt?: () => void;
  categoryColors?: {
    color: string;
    bgColor: string;
    borderColor: string;
  };
}

const Flashcards = ({ category, onAnswerCorrect, onQuestionAttempt, categoryColors }: FlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<any[]>([]);
  const [reviewedCards, setReviewedCards] = useState<Set<number>>(new Set());
  const { isPremium, limits } = useFreeAccessGate();
  const navigate = useNavigate();

  const originalFlashcards = flashcardData[category] || [];
  // Limit free users to the specified number of flashcards from the hook
  const limitedFlashcards = isPremium ? originalFlashcards : originalFlashcards.slice(0, limits.flashcardsPerCategory);
  const currentFlashcards = shuffledCards.length > 0 ? shuffledCards : limitedFlashcards;

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffledCards([]);
    setReviewedCards(new Set());
  }, [category]);

  if (currentFlashcards.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No flashcards available</h3>
          <p className="text-gray-500">Flashcards for this category are coming soon!</p>
        </div>
      </div>
    );
  }

  const currentCard = currentFlashcards[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentFlashcards.length);
    setShowAnswer(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentFlashcards.length) % currentFlashcards.length);
    setShowAnswer(false);
  };

  const handleRevealAnswer = () => {
    setShowAnswer(!showAnswer);
    if (!showAnswer) {
      setReviewedCards(prev => new Set([...prev, currentIndex]));
    }
    if (onQuestionAttempt) {
      onQuestionAttempt();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffledCards([]);
    setReviewedCards(new Set());
  };

  const handleShuffle = () => {
    if (!isPremium) {
      handleUnlockPremium();
      return;
    }
    const shuffled = [...originalFlashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setReviewedCards(new Set());
  };

  const handleUnlockPremium = () => {
    navigate('/auth');
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4">
      <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
        <div className="flex items-center flex-wrap gap-2 sm:gap-4 min-w-0">
          <h2 className={`text-lg sm:text-2xl font-bold ${categoryColors?.color?.includes('blue') ? 'text-blue-700' : categoryColors?.color?.includes('purple') ? 'text-purple-700' : categoryColors?.color?.includes('orange') ? 'text-orange-700' : categoryColors?.color?.includes('teal') ? 'text-teal-700' : categoryColors?.color?.includes('green') ? 'text-green-700' : categoryColors?.color?.includes('indigo') ? 'text-indigo-700' : 'text-gray-800'} shrink-0`}>Flashcards</h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className={`${categoryColors?.bgColor || 'bg-blue-100'} ${categoryColors?.color?.includes('blue') ? 'text-blue-800' : categoryColors?.color?.includes('purple') ? 'text-purple-800' : categoryColors?.color?.includes('orange') ? 'text-orange-800' : categoryColors?.color?.includes('teal') ? 'text-teal-800' : categoryColors?.color?.includes('green') ? 'text-green-800' : categoryColors?.color?.includes('indigo') ? 'text-indigo-800' : 'text-blue-800'} px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium`}>
              {currentIndex + 1} of {currentFlashcards.length}
            </div>
            <div className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center space-x-1">
              <CheckCircle className="h-3 w-3" />
              <span>{reviewedCards.size} reviewed</span>
            </div>
            {shuffledCards.length > 0 && (
              <div className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                Shuffled
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button 
            onClick={handleShuffle} 
            variant="outline" 
            size="sm" 
            className={`flex items-center space-x-1 sm:space-x-2 min-h-[44px] text-xs sm:text-sm ${!isPremium ? 'opacity-50 cursor-not-allowed' : ''} relative`}
            disabled={!isPremium}
          >
            <Shuffle className="h-4 w-4" />
            <span>Shuffle</span>
            {!isPremium && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock className="h-3 w-3 text-amber-500" />
              </div>
            )}
          </Button>
          <Button onClick={handleReset} variant="outline" size="sm" className="flex items-center space-x-1 sm:space-x-2 min-h-[44px] text-xs sm:text-sm">
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </Button>
        </div>
      </div>

      {/* Free User Notice */}
      {!isPremium && originalFlashcards.length > limits.flashcardsPerCategory && (
        <div className="mb-4 sm:mb-6">
          <Card className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 border-amber-200/50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Lock className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="text-sm font-medium text-amber-800">
                    Showing {limits.flashcardsPerCategory} of {originalFlashcards.length} flashcards
                  </p>
                  <p className="text-xs text-amber-700">
                    Unlock all flashcards with Premium access
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleUnlockPremium}
                size="sm"
                className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 hover:opacity-90 text-white"
              >
                <Crown className="h-4 w-4 mr-1" />
                Unlock
              </Button>
            </div>
          </Card>
        </div>
      )}

      <div className="mb-6 sm:mb-8">
        <Card className={`w-full h-80 sm:h-96 bg-gradient-to-br ${categoryColors?.bgColor || 'from-white via-blue-50/50 to-indigo-100/30'} backdrop-blur-sm ${categoryColors?.borderColor || 'border-blue-200'} border-2 shadow-lg`}>
          <CardContent className="h-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
            <div className="text-center w-full">
              <div className="flex items-center justify-center mb-4">
                <Eye className={`h-6 w-6 ${categoryColors?.color?.includes('blue') ? 'text-blue-600' : categoryColors?.color?.includes('purple') ? 'text-purple-600' : categoryColors?.color?.includes('orange') ? 'text-orange-600' : categoryColors?.color?.includes('teal') ? 'text-teal-600' : categoryColors?.color?.includes('green') ? 'text-green-600' : categoryColors?.color?.includes('indigo') ? 'text-indigo-600' : 'text-blue-600'} mr-2`} />
                <span className={`${categoryColors?.color?.includes('blue') ? 'text-blue-600' : categoryColors?.color?.includes('purple') ? 'text-purple-600' : categoryColors?.color?.includes('orange') ? 'text-orange-600' : categoryColors?.color?.includes('teal') ? 'text-teal-600' : categoryColors?.color?.includes('green') ? 'text-green-600' : categoryColors?.color?.includes('indigo') ? 'text-indigo-600' : 'text-blue-600'} font-medium`}>Term</span>
              </div>
              
              {currentCard.image ? (
                <div className="mb-4 sm:mb-6">
                  <img 
                    src={currentCard.image} 
                    alt="Surgical instrument" 
                    className="max-w-full max-h-48 mx-auto object-contain rounded-lg shadow-md"
                  />
                </div>
              ) : (
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${categoryColors?.color?.includes('blue') ? 'text-blue-800' : categoryColors?.color?.includes('purple') ? 'text-purple-800' : categoryColors?.color?.includes('orange') ? 'text-orange-800' : categoryColors?.color?.includes('teal') ? 'text-teal-800' : categoryColors?.color?.includes('green') ? 'text-green-800' : categoryColors?.color?.includes('indigo') ? 'text-indigo-800' : 'text-gray-800'} mb-4 sm:mb-6 leading-relaxed text-center`}>
                  {currentCard.question}
                </h3>
              )}
              
              {currentCard.image && (
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold ${categoryColors?.color?.includes('blue') ? 'text-blue-800' : categoryColors?.color?.includes('purple') ? 'text-purple-800' : categoryColors?.color?.includes('orange') ? 'text-orange-800' : categoryColors?.color?.includes('teal') ? 'text-teal-800' : categoryColors?.color?.includes('green') ? 'text-green-800' : categoryColors?.color?.includes('indigo') ? 'text-indigo-800' : 'text-gray-800'} mb-4 sm:mb-6 leading-relaxed text-center`}>
                  {currentCard.question}
                </h3>
              )}
              
              {!showAnswer ? (
                <Button 
                  onClick={handleRevealAnswer}
                  className={`bg-gradient-to-r ${categoryColors?.color || 'from-blue-500/80 to-blue-600/80'} hover:opacity-90 text-white px-4 sm:px-6 py-3 min-h-[44px] text-sm sm:text-base`}
                >
                  Show Answer
                </Button>
              ) : (
                <div className="space-y-3 sm:space-y-4 w-full">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 sm:p-4 lg:p-6">
                    <div className="flex items-center justify-center mb-3">
                      <EyeOff className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-medium">Answer</span>
                    </div>
                    <h4 className={`text-lg sm:text-xl font-semibold ${categoryColors?.color?.includes('blue') ? 'text-blue-800' : categoryColors?.color?.includes('purple') ? 'text-purple-800' : categoryColors?.color?.includes('orange') ? 'text-orange-800' : categoryColors?.color?.includes('teal') ? 'text-teal-800' : categoryColors?.color?.includes('green') ? 'text-green-800' : categoryColors?.color?.includes('indigo') ? 'text-indigo-800' : 'text-gray-800'} mb-2 sm:mb-3 text-center`}>
                      {currentCard.answer}
                    </h4>
                    {currentCard.explanation && (
                      <div className="bg-white bg-opacity-70 rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                          <strong>Explanation:</strong> {currentCard.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={handleRevealAnswer}
                    variant="outline"
                    className="px-4 sm:px-6 py-2 min-h-[44px] text-sm sm:text-base"
                  >
                    Hide Answer
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button 
          onClick={handlePrevious} 
          variant="outline" 
          className="flex items-center space-x-1 sm:space-x-2 min-h-[44px] px-3 sm:px-4 text-sm sm:text-base"
          disabled={currentFlashcards.length <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden xs:inline">Previous</span>
          <span className="xs:hidden">Prev</span>
        </Button>

        <div className="text-center px-2">
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            {currentIndex + 1} of {currentFlashcards.length}
          </span>
        </div>

        <Button 
          onClick={handleNext} 
          variant="outline" 
          className="flex items-center space-x-1 sm:space-x-2 min-h-[44px] px-3 sm:px-4 text-sm sm:text-base"
          disabled={currentFlashcards.length <= 1}
        >
          <span className="hidden xs:inline">Next</span>
          <span className="xs:hidden">Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Flashcards;
