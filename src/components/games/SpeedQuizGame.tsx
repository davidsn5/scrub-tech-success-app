import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Zap, Clock, Trophy, RotateCcw, Play } from 'lucide-react';
import { allQuestions } from '@/data/allQuestions';
import { toast } from '@/hooks/use-toast';

interface GameState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  gameActive: boolean;
  gameComplete: boolean;
  questions: typeof allQuestions;
  answers: boolean[];
}

const SpeedQuizGame = () => {
  const GAME_DURATION = 60; // 60 seconds
  const QUESTIONS_COUNT = 10;

  const [gameState, setGameState] = useState<GameState>({
    currentQuestion: 0,
    score: 0,
    timeLeft: GAME_DURATION,
    gameActive: false,
    gameComplete: false,
    questions: [],
    answers: []
  });

  const startGame = () => {
    // Get random questions
    const shuffledQuestions = [...allQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, QUESTIONS_COUNT);

    setGameState({
      currentQuestion: 0,
      score: 0,
      timeLeft: GAME_DURATION,
      gameActive: true,
      gameComplete: false,
      questions: shuffledQuestions,
      answers: []
    });
  };

  const resetGame = () => {
    setGameState({
      currentQuestion: 0,
      score: 0,
      timeLeft: GAME_DURATION,
      gameActive: false,
      gameComplete: false,
      questions: [],
      answers: []
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameState.gameActive && gameState.timeLeft > 0) {
      interval = setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            // Game over
            toast({
              title: "Time's Up! ⏰",
              description: `Final Score: ${prev.score}/${prev.questions.length}`,
            });
            return {
              ...prev,
              timeLeft: 0,
              gameActive: false,
              gameComplete: true
            };
          }
          return {
            ...prev,
            timeLeft: prev.timeLeft - 1
          };
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameState.gameActive, gameState.timeLeft]);

  const handleAnswer = (selectedAnswer: number) => {
    if (!gameState.gameActive) return;

    const currentQ = gameState.questions[gameState.currentQuestion];
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    const newAnswers = [...gameState.answers, isCorrect];

    if (isCorrect) {
      setGameState(prev => ({ ...prev, score: prev.score + 1, answers: newAnswers }));
      toast({
        title: "Correct! 🎉",
        description: "Great job! Keep going!",
      });
    } else {
      setGameState(prev => ({ ...prev, answers: newAnswers }));
      toast({
        title: "Incorrect",
        description: `Correct answer: ${currentQ.choices[currentQ.correctAnswer]}`,
        variant: "destructive",
      });
    }

    // Move to next question or end game
    setTimeout(() => {
      if (gameState.currentQuestion + 1 >= gameState.questions.length) {
        // Game complete
        setGameState(prev => ({
          ...prev,
          gameActive: false,
          gameComplete: true
        }));
        toast({
          title: "Quiz Complete! 🏆",
          description: `Final Score: ${gameState.score + (isCorrect ? 1 : 0)}/${gameState.questions.length}`,
        });
      } else {
        setGameState(prev => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1
        }));
      }
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = gameState.questions[gameState.currentQuestion];
  const progress = ((gameState.currentQuestion + 1) / gameState.questions.length) * 100;

  return (
    <Card className="gradient-card shadow-card border-border/50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/90 to-orange-500/90">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl">Speed Quiz</CardTitle>
        <CardDescription>
          Answer as many questions as you can in {GAME_DURATION} seconds!
        </CardDescription>
        
        {gameState.gameActive && (
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="outline" className="flex items-center gap-2">
              <Trophy className="h-3 w-3" />
              Score: {gameState.score}/{gameState.questions.length}
            </Badge>
            <Badge 
              variant="outline" 
              className={`flex items-center gap-2 ${
                gameState.timeLeft <= 10 ? 'text-red-600 border-red-600' : ''
              }`}
            >
              <Clock className="h-3 w-3" />
              {formatTime(gameState.timeLeft)}
            </Badge>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="space-y-6">
        {!gameState.gameActive && !gameState.gameComplete && (
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Test your knowledge with rapid-fire questions! You'll have {GAME_DURATION} seconds to answer {QUESTIONS_COUNT} questions.
            </p>
            <Button onClick={startGame} className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 hover:opacity-90">
              <Play className="h-4 w-4 mr-2" />
              Start Quiz
            </Button>
          </div>
        )}

        {gameState.gameActive && currentQuestion && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Question {gameState.currentQuestion + 1} of {gameState.questions.length}</span>
                <span>{currentQuestion.category}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-relaxed">
                {currentQuestion.question}
              </h3>
              
              <div className="grid grid-cols-1 gap-2">
                {currentQuestion.choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full p-4 h-auto text-left justify-start hover:bg-primary/10"
                    onClick={() => handleAnswer(index)}
                  >
                    <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-sm">{choice}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {gameState.gameComplete && (
          <div className="space-y-4">
            <div className="text-center p-6 bg-gradient-to-r from-green-50/80 to-blue-50/80 rounded-lg border border-green-200/50">
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">Quiz Complete!</h3>
              <p className="text-lg text-green-700 mb-2">
                Final Score: {gameState.score}/{gameState.questions.length}
              </p>
              <p className="text-sm text-green-600">
                Accuracy: {Math.round((gameState.score / gameState.questions.length) * 100)}%
              </p>
            </div>
            
            <div className="flex justify-center gap-3">
              <Button onClick={startGame} className="bg-gradient-to-r from-yellow-500/90 to-orange-500/90 hover:opacity-90">
                <Play className="h-4 w-4 mr-2" />
                Play Again
              </Button>
              <Button onClick={resetGame} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SpeedQuizGame;