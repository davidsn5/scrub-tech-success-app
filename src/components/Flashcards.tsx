
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
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<any[]>([]);

  const originalFlashcards = flashcardData[category] || [];
  const currentFlashcards = shuffledCards.length > 0 ? shuffledCards : originalFlashcards;

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
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
    setIsFlipped(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + currentFlashcards.length) % currentFlashcards.length);
    setShowAnswer(false);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer);
    if (onQuestionAttempt) {
      onQuestionAttempt();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setShuffledCards([]);
  };

  const handleShuffle = () => {
    const shuffled = [...originalFlashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
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

      <div className="perspective-1000 mb-8">
        <Card 
          className={`relative w-full h-96 cursor-pointer transition-transform duration-500 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={handleFlip}
        >
          {/* Front of card (Question) */}
          <CardContent className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-blue-600 font-medium">Question</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 leading-relaxed">
                {currentCard.question}
              </h3>
              <p className="text-gray-600 italic">Click to reveal answer</p>
            </div>
          </CardContent>

          {/* Back of card (Answer) */}
          <CardContent className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <EyeOff className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-green-600 font-medium">Answer</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {currentCard.answer}
              </h3>
              {currentCard.explanation && (
                <div className="bg-white bg-opacity-70 rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Explanation:</strong> {currentCard.explanation}
                  </p>
                </div>
              )}
              <p className="text-gray-600 italic mt-4">Click to see question</p>
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

        <div className="flex space-x-2">
          {currentFlashcards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setShowAnswer(false);
                setIsFlipped(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
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
