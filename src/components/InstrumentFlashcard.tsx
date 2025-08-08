import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, RotateCcw, Eye, EyeOff, Shuffle, CheckCircle } from 'lucide-react';
import { surgicalInstrumentFlashcards, InstrumentFlashcardItem } from '@/data/flashcards/surgicalInstruments';

interface InstrumentFlashcardProps {
  onAnswerCorrect?: () => void;
  onQuestionAttempt?: () => void;
}

const categoryColors = {
  forceps: 'bg-blue-100 text-blue-800 border-blue-200',
  scissors: 'bg-purple-100 text-purple-800 border-purple-200',
  clamps: 'bg-green-100 text-green-800 border-green-200',
  retractors: 'bg-orange-100 text-orange-800 border-orange-200',
  suction: 'bg-cyan-100 text-cyan-800 border-cyan-200',
  electrocautery: 'bg-red-100 text-red-800 border-red-200',
  staplers: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  bone: 'bg-gray-100 text-gray-800 border-gray-200',
  scopes: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  cutting: 'bg-pink-100 text-pink-800 border-pink-200',
  specialty: 'bg-emerald-100 text-emerald-800 border-emerald-200'
};

const InstrumentFlashcard = ({ onAnswerCorrect, onQuestionAttempt }: InstrumentFlashcardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<InstrumentFlashcardItem[]>([]);
  const [reviewedCards, setReviewedCards] = useState<Set<number>>(new Set());

  const currentFlashcards = shuffledCards.length > 0 ? shuffledCards : surgicalInstrumentFlashcards;

  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffledCards([]);
    setReviewedCards(new Set());
  }, []);

  if (currentFlashcards.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No instrument flashcards available</h3>
          <p className="text-gray-500">Instrument flashcards are being loaded...</p>
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
    if (!showAnswer && onQuestionAttempt) {
      onQuestionAttempt();
    }
    setShowAnswer(!showAnswer);
    setReviewedCards(prev => new Set(prev).add(currentIndex));
  };

  const handleShuffle = () => {
    const shuffled = [...surgicalInstrumentFlashcards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setReviewedCards(new Set());
  };

  const handleReset = () => {
    setShuffledCards([]);
    setCurrentIndex(0);
    setShowAnswer(false);
    setReviewedCards(new Set());
  };

  const progressPercentage = ((reviewedCards.size) / currentFlashcards.length) * 100;

  return (
    <div className="space-y-6">
      {/* Header with admin preview badge */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h2 className="text-2xl font-bold text-emerald-800">Surgical Instruments</h2>
          <Badge className="bg-emerald-100 text-emerald-800 border border-emerald-200">
            Admin Preview
          </Badge>
        </div>
        <div className="flex space-x-2">
          <Button onClick={handleShuffle} variant="outline" size="sm">
            <Shuffle className="h-4 w-4 mr-1" />
            Shuffle
          </Button>
          <Button onClick={handleReset} variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Card {currentIndex + 1} of {currentFlashcards.length}
          </span>
          <span className="text-sm text-gray-600">
            {reviewedCards.size} reviewed ({Math.round(progressPercentage)}%)
          </span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center">
        <Button onClick={handlePrevious} variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </Button>
        
        <Button 
          onClick={handleRevealAnswer} 
          variant={showAnswer ? "secondary" : "default"}
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
        >
          {showAnswer ? (
            <>
              <EyeOff className="h-4 w-4 mr-1" />
              Hide Answer
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-1" />
              Show Answer
            </>
          )}
        </Button>

        <Button onClick={handleNext} variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Flashcard */}
      <Card className="min-h-[500px] bg-white shadow-lg border-2 border-emerald-200">
        <CardContent className="p-8">
          {!showAnswer ? (
            // Question Side - Show Image
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              <Badge className={`${categoryColors[currentCard.category]} text-sm font-medium px-3 py-1`}>
                {currentCard.category.charAt(0).toUpperCase() + currentCard.category.slice(1)}
              </Badge>
              
              <div className="flex items-center justify-center w-full h-80 bg-gray-50 rounded-lg border-2 border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">🔧</span>
                  </div>
                  <p className="text-gray-500 font-medium">Surgical Instrument Image</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Placeholder for: {currentCard.name}
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  What is the name of this surgical instrument?
                </h3>
                <p className="text-gray-600">
                  Study the image above and identify the instrument
                </p>
              </div>
            </div>
          ) : (
            // Answer Side - Show Details
            <div className="space-y-6">
              {/* Instrument Name and Category */}
              <div className="text-center border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-emerald-800 mb-2">
                  {currentCard.name}
                </h2>
                <div className="flex justify-center space-x-2">
                  <Badge className={`${categoryColors[currentCard.category]} text-sm font-medium`}>
                    {currentCard.category.charAt(0).toUpperCase() + currentCard.category.slice(1)}
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    {currentCard.specialty}
                  </Badge>
                </div>
              </div>

              {/* Uses */}
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Primary Uses
                </h3>
                <ul className="space-y-2">
                  {currentCard.uses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-green-700">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Characteristics */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Key Characteristics
                </h3>
                <ul className="space-y-2">
                  {currentCard.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-blue-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sizes and Tips */}
              <div className="grid md:grid-cols-2 gap-4">
                {currentCard.commonSizes && (
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                    <h3 className="text-lg font-semibold text-orange-800 mb-3">
                      Common Sizes
                    </h3>
                    <ul className="space-y-1">
                      {currentCard.commonSizes.map((size, index) => (
                        <li key={index} className="text-orange-700">
                          • {size}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">
                    Pro Tips
                  </h3>
                  <ul className="space-y-2">
                    {currentCard.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-600 mr-2">💡</span>
                        <span className="text-purple-700 text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Review Status */}
      {reviewedCards.has(currentIndex) && (
        <div className="text-center">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Reviewed
          </Badge>
        </div>
      )}
    </div>
  );
};

export default InstrumentFlashcard;