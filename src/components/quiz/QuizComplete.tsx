
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, Shuffle } from 'lucide-react';

interface QuizCompleteProps {
  score: {
    correct: number;
    total: number;
  };
  onRestart: () => void;
  onShuffle: () => void;
}

const QuizComplete: React.FC<QuizCompleteProps> = ({ 
  score, 
  onRestart, 
  onShuffle 
}) => {
  const percentage = Math.round((score.correct / score.total) * 100);

  return (
    <Card className="p-8 text-center space-y-6">
      <div className="space-y-4">
        <div className="text-6xl font-bold text-teal-600/80">{percentage}%</div>
        <h3 className="text-2xl font-semibold text-gray-900">Quiz Complete!</h3>
        <p className="text-gray-600">
          You answered {score.correct} out of {score.total} questions correctly.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
        <Button 
          onClick={onRestart}
          className="bg-gradient-to-r from-orange-500/90 to-teal-500/90 hover:opacity-90 transition-opacity text-white"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
        <Button 
          onClick={onShuffle}
          variant="outline"
          className="border-teal-300 hover:bg-teal-50"
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Shuffle & Restart
        </Button>
      </div>
    </Card>
  );
};

export default QuizComplete;
