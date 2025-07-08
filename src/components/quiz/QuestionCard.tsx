
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { Question } from '@/data/questions/introSurgicalTech';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  isLastQuestion: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  showResult,
  isLastQuestion,
  onAnswerSelect,
  onNext
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <Card className="p-8 bg-gradient-to-br from-white/90 via-orange-50/40 to-teal-50/40 backdrop-blur-sm border-orange-200/30 shadow-xl">
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
          {question?.question}
        </h3>

        <div className="space-y-3">
          {question?.choices.map((choice, index) => {
            let buttonClass = 'w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ';
            
            if (!showResult) {
              buttonClass += 'border-gray-200/60 hover:border-orange-300/60 hover:bg-orange-50/30';
            } else {
              if (index === question.correctAnswer) {
                buttonClass += 'border-green-400/70 bg-green-50/70 text-green-800';
              } else if (index === selectedAnswer && index !== question.correctAnswer) {
                buttonClass += 'border-red-400/70 bg-red-50/70 text-red-800';
              } else {
                buttonClass += 'border-gray-200/60 bg-gray-50/30';
              }
            }

            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={buttonClass}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{choice}</span>
                  </div>
                  {showResult && index === question.correctAnswer && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="pt-4 border-t border-gray-200/50">
            <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50/70 border border-green-200/50' : 'bg-red-50/70 border border-red-200/50'}`}>
              <div className="flex items-center space-x-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              {!isCorrect && (
                <p className="text-sm text-gray-700">
                  The correct answer is: <strong>{question.choices[question.correctAnswer]}</strong>
                </p>
              )}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button 
                onClick={onNext}
                className="bg-gradient-to-r from-orange-500/90 to-teal-500/90 hover:opacity-90 transition-opacity text-white"
              >
                {!isLastQuestion ? (
                  <>
                    Next Question
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  'Complete Quiz'
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QuestionCard;
