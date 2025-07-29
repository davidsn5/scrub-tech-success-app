
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, Eye, EyeOff, Shuffle } from 'lucide-react';
import { flashcardData } from '@/data/flashcardData';

interface FlashcardsProps {
  category: string;
  onAnswerCorrect?: () => void;
  onQuestionAttempt?: () => void;
}

const Flashcards = ({ category, onAnswerCorrect, onQuestionAttempt }: FlashcardsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<any[]>([]);

  const originalFlashcards = flashcardData[category] || [];
  const currentFlashcards = shuffledCards.length > 0 ? shuffledCards : originalFlashcards;

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffledCards([]);
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
    if (onQuestionAttempt) {
      onQuestionAttempt();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffledCards([]);
  };

  const handleShuffle = () => {
    const shuffled = [...originalFlashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-800">Flashcards</h2>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} of {currentFlashcards.length}
          </div>
          {shuffledCards.length > 0 && (
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Shuffled
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button onClick={handleShuffle} variant="outline" size="sm" className="flex items-center space-x-2">
            <Shuffle className="h-4 w-4" />
            <span>Shuffle</span>
          </Button>
          <Button onClick={handleReset} variant="outline" size="sm" className="flex items-center space-x-2">
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <Card className="w-full h-96 bg-gradient-to-br from-white via-blue-50/50 to-indigo-100/30 border-2 border-blue-200 shadow-lg">
          <CardContent className="h-full flex flex-col justify-center items-center p-8">
            <div className="text-center w-full">
              <div className="flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Term</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                {currentCard.question}
              </h3>
              
              {!showAnswer ? (
                <Button 
                  onClick={handleRevealAnswer}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  Show Answer
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                    <div className="flex items-center justify-center mb-3">
                      <EyeOff className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-green-600 font-medium">Answer</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      {currentCard.answer}
                    </h4>
                    {currentCard.explanation && (
                      <div className="bg-white bg-opacity-70 rounded-lg p-4 mt-4">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <strong>Explanation:</strong> {currentCard.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                  <Button 
                    onClick={handleRevealAnswer}
                    variant="outline"
                    className="px-6 py-2"
                  >
                    Hide Answer
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <Button 
          onClick={handlePrevious} 
          variant="outline" 
          className="flex items-center space-x-2"
          disabled={currentFlashcards.length <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <div className="text-center">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {currentFlashcards.length}
          </span>
        </div>

        <Button 
          onClick={handleNext} 
          variant="outline" 
          className="flex items-center space-x-2"
          disabled={currentFlashcards.length <= 1}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Flashcards;
