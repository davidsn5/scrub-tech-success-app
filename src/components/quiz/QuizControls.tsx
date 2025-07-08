
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

interface QuizControlsProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  onShuffle: () => void;
}

const QuizControls: React.FC<QuizControlsProps> = ({ 
  currentQuestionIndex, 
  totalQuestions, 
  onShuffle 
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-center sm:text-left">
        <span className="text-sm text-gray-600">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </span>
        <p className="text-xs text-gray-500 mt-1">
          Total questions available: {totalQuestions}
        </p>
      </div>
      <Button 
        onClick={onShuffle}
        variant="outline"
        size="sm"
        className="border-teal-300 hover:bg-teal-50"
      >
        <Shuffle className="h-4 w-4 mr-2" />
        Shuffle Questions
      </Button>
    </div>
  );
};

export default QuizControls;
