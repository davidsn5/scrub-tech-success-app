
import React from 'react';

interface QuizProgressProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizProgress: React.FC<QuizProgressProps> = ({ 
  currentQuestionIndex, 
  totalQuestions 
}) => {
  return (
    <div className="bg-gray-200/60 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-orange-500/80 to-teal-500/80 h-2 rounded-full transition-all duration-300"
        style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
      />
    </div>
  );
};

export default QuizProgress;
