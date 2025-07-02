
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  CheckCircle, 
  XCircle, 
  ArrowRight,
  ArrowLeft,
  Shuffle
} from 'lucide-react';

interface FlashcardsProps {
  category: string;
  onAnswerCorrect: () => void;
  onQuestionAttempt: () => void;
}

const flashcardData = {
  anatomy: [
    {
      question: "What is the largest organ in the human body?",
      answer: "The skin",
      explanation: "The skin covers the entire body and regulates temperature, protects internal organs, and prevents infection."
    },
    {
      question: "Which chamber of the heart pumps blood to the lungs?",
      answer: "Right ventricle",
      explanation: "The right ventricle pumps deoxygenated blood through the pulmonary artery to the lungs for oxygenation."
    },
    {
      question: "What are the three layers of the heart wall?",
      answer: "Epicardium, Myocardium, Endocardium",
      explanation: "From outer to inner: Epicardium (outer protective layer), Myocardium (muscle layer), Endocardium (inner lining)."
    }
  ],
  instruments: [
    {
      question: "What is a Kelly forceps primarily used for?",
      answer: "Clamping blood vessels and tissue",
      explanation: "Kelly forceps are curved hemostatic clamps used to control bleeding by clamping blood vessels during surgery."
    },
    {
      question: "What distinguishes a Mayo scissors from Metzenbaum scissors?",
      answer: "Mayo scissors are heavier and used for cutting tough tissue, while Metzenbaum are lighter for delicate tissue",
      explanation: "Mayo scissors have thick, strong blades for cutting fascia and heavy tissue. Metzenbaum scissors are more delicate for fine dissection."
    }
  ],
  procedures: [
    {
      question: "What is the purpose of the 'time out' before surgery?",
      answer: "To verify correct patient, procedure, and surgical site",
      explanation: "The time out is a standardized safety protocol to prevent wrong-site, wrong-procedure, and wrong-patient surgery."
    },
    {
      question: "What position is used for most abdominal surgeries?",
      answer: "Supine position",
      explanation: "The supine position (lying on back) provides the best access to the abdomen while maintaining patient safety and comfort."
    }
  ],
  sterile: [
    {
      question: "How long should surgical hand scrub last?",
      answer: "3-5 minutes for initial scrub",
      explanation: "The initial surgical scrub should last 3-5 minutes to effectively remove transient and some resident bacteria from hands and arms."
    },
    {
      question: "What is the sterile field?",
      answer: "An area free from all microorganisms",
      explanation: "The sterile field is a designated area that has been prepared to be free of all microorganisms and must be maintained throughout surgery."
    }
  ]
};

const Flashcards: React.FC<FlashcardsProps> = ({ 
  category, 
  onAnswerCorrect, 
  onQuestionAttempt 
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(flashcardData[category] || []);

  useEffect(() => {
    const cards = flashcardData[category] || [];
    setShuffledCards([...cards]);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowExplanation(false);
  }, [category]);

  const currentCard = shuffledCards[currentCardIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      onQuestionAttempt();
    }
  };

  const handleNext = () => {
    if (currentCardIndex < shuffledCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      setShowExplanation(false);
    }
  };

  const handleShuffle = () => {
    const cards = [...shuffledCards];
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    setShuffledCards(cards);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setShowExplanation(false);
  };

  const handleCorrect = () => {
    onAnswerCorrect();
    setShowExplanation(true);
  };

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No flashcards available for this category yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">
            Card {currentCardIndex + 1} of {shuffledCards.length}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {category.replace('-', ' ')}
          </Badge>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleShuffle}
          className="flex items-center space-x-2"
        >
          <Shuffle className="h-4 w-4" />
          <span>Shuffle</span>
        </Button>
      </div>

      <div className="flex justify-center">
        <Card 
          className={`w-full max-w-2xl h-80 cursor-pointer transition-all duration-300 transform ${
            isFlipped ? 'scale-105' : 'hover:scale-102'
          }`}
          onClick={handleFlip}
        >
          <div className="h-full p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              {!isFlipped ? (
                <>
                  <h3 className="text-2xl font-semibold text-gray-900 leading-relaxed">
                    {currentCard.question}
                  </h3>
                  <p className="text-sm text-gray-500">Click to reveal answer</p>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-medium text-blue-600 mb-4">Answer:</h4>
                  <p className="text-xl text-gray-900 leading-relaxed">
                    {currentCard.answer}
                  </p>
                  {showExplanation && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Explanation:</strong> {currentCard.explanation}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Card>
      </div>

      {isFlipped && (
        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => setShowExplanation(true)}
            className="flex items-center space-x-2 text-red-600 border-red-200 hover:bg-red-50"
          >
            <XCircle className="h-4 w-4" />
            <span>Need Help</span>
          </Button>
          <Button 
            onClick={handleCorrect}
            className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Got It!</span>
          </Button>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={currentCardIndex === 0}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <Button 
          variant="outline"
          onClick={() => {
            setIsFlipped(false);
            setShowExplanation(false);
          }}
          className="flex items-center space-x-2"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset Card</span>
        </Button>

        <Button 
          variant="outline" 
          onClick={handleNext}
          disabled={currentCardIndex === shuffledCards.length - 1}
          className="flex items-center space-x-2"
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Flashcards;
