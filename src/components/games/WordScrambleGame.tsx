import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Shuffle, Check, SkipForward, Trophy, Lightbulb } from 'lucide-react';
import { flashcardData } from '@/data/flashcardData';
import { toast } from '@/hooks/use-toast';

interface ScrambleItem {
  originalWord: string;
  scrambledWord: string;
  definition: string;
  hint: string;
}

const WordScrambleGame = () => {
  const [currentItem, setCurrentItem] = useState<ScrambleItem | null>(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [gameWords, setGameWords] = useState<ScrambleItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const extractMedicalTerms = () => {
    const allItems = Object.values(flashcardData).flat();
    const terms: ScrambleItem[] = [];

    allItems.forEach(item => {
      // Extract terms from answers (many are single medical terms)
      const answer = item.answer.toLowerCase();
      if (answer.length >= 4 && answer.length <= 15 && !answer.includes(' ') && /^[a-z]+$/.test(answer)) {
        terms.push({
          originalWord: answer,
          scrambledWord: scrambleWord(answer),
          definition: item.question.replace(/What (does|is|are) ['"]?(.+?)['"]? (mean|refer to)\?/i, '').trim(),
          hint: item.explanation.slice(0, 50) + '...'
        });
      }

      // Also extract terms from questions that ask about specific terms
      const questionMatch = item.question.match(/What (does|is|are) ['"]?(.+?)['"]? (mean|refer to)\?/i);
      if (questionMatch) {
        const term = questionMatch[2].toLowerCase().replace(/[^a-z]/g, '');
        if (term.length >= 4 && term.length <= 15) {
          terms.push({
            originalWord: term,
            scrambledWord: scrambleWord(term),
            definition: item.answer,
            hint: item.explanation.slice(0, 50) + '...'
          });
        }
      }
    });

    // Remove duplicates and get unique terms
    const uniqueTerms = terms.filter((term, index, self) => 
      index === self.findIndex(t => t.originalWord === term.originalWord)
    );

    return uniqueTerms.sort(() => Math.random() - 0.5).slice(0, 20);
  };

  const scrambleWord = (word: string): string => {
    const chars = word.split('');
    for (let i = chars.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    // Make sure it's actually scrambled
    return chars.join('') === word ? scrambleWord(word) : chars.join('');
  };

  const initializeGame = () => {
    const words = extractMedicalTerms();
    setGameWords(words);
    setCurrentIndex(0);
    setCurrentItem(words[0] || null);
    setScore(0);
    setTotalAttempts(0);
    setUserInput('');
    setShowHint(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const checkAnswer = () => {
    if (!currentItem) return;
    
    const isCorrect = userInput.toLowerCase().trim() === currentItem.originalWord.toLowerCase();
    setTotalAttempts(prev => prev + 1);

    if (isCorrect) {
      setScore(prev => prev + 1);
      toast({
        title: "Correct! 🎉",
        description: `Great job! "${currentItem.originalWord.toUpperCase()}" is correct!`,
      });
      nextWord();
    } else {
      toast({
        title: "Not quite right",
        description: "Try again or use the hint button for help!",
        variant: "destructive",
      });
    }
  };

  const nextWord = () => {
    if (currentIndex + 1 < gameWords.length) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentItem(gameWords[nextIndex]);
      setUserInput('');
      setShowHint(false);
    } else {
      // Game complete
      toast({
        title: "Game Complete! 🏆",
        description: `You scored ${score + (userInput.toLowerCase().trim() === currentItem?.originalWord.toLowerCase() ? 1 : 0)} out of ${gameWords.length}!`,
      });
      setCurrentItem(null);
    }
  };

  const skipWord = () => {
    if (!currentItem) return;
    
    toast({
      title: "Skipped",
      description: `The answer was "${currentItem.originalWord.toUpperCase()}"`,
    });
    nextWord();
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && userInput.trim()) {
      checkAnswer();
    }
  };

  const handleNewScramble = () => {
    if (currentItem) {
      setCurrentItem({
        ...currentItem,
        scrambledWord: scrambleWord(currentItem.originalWord)
      });
    }
  };

  return (
    <Card className="gradient-card shadow-card border-border/50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/90 to-pink-500/90">
            <Shuffle className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl">Word Scramble</CardTitle>
        <CardDescription>
          Unscramble medical terms and learn their meanings
        </CardDescription>
        <div className="flex justify-center gap-4 mt-4">
          <Badge variant="outline" className="flex items-center gap-2">
            <Trophy className="h-3 w-3" />
            Score: {score}/{totalAttempts}
          </Badge>
          <Badge variant="outline">
            Word: {currentIndex + 1}/{gameWords.length}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {currentItem ? (
          <div className="space-y-6">
            {/* Definition */}
            <div className="text-center p-4 bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-lg border border-blue-200/50">
              <h3 className="font-semibold text-blue-900 mb-2">Definition:</h3>
              <p className="text-blue-800">{currentItem.definition}</p>
            </div>

            {/* Scrambled Word */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Unscramble this word:</h3>
              <div className="text-3xl font-bold tracking-wider text-primary mb-4 font-mono">
                {currentItem.scrambledWord.toUpperCase()}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleNewScramble}
                className="mb-4"
              >
                <Shuffle className="h-3 w-3 mr-1" />
                Re-scramble
              </Button>
            </div>

            {/* Input */}
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Type your answer here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-center text-lg"
              />
              
              <div className="flex justify-center gap-3">
                <Button 
                  onClick={checkAnswer} 
                  disabled={!userInput.trim()}
                  className="bg-gradient-to-r from-green-500/90 to-green-600/90 hover:opacity-90"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Check Answer
                </Button>
                <Button onClick={toggleHint} variant="outline">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
                <Button onClick={skipWord} variant="outline">
                  <SkipForward className="h-4 w-4 mr-2" />
                  Skip
                </Button>
              </div>
            </div>

            {/* Hint */}
            {showHint && (
              <div className="text-center p-3 bg-gradient-to-r from-yellow-50/80 to-orange-50/80 rounded-lg border border-yellow-200/50">
                <p className="text-sm text-yellow-800">
                  <strong>Hint:</strong> {currentItem.hint}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            {gameWords.length > 0 ? (
              <div className="p-6 bg-gradient-to-r from-green-50/80 to-blue-50/80 rounded-lg border border-green-200/50">
                <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  Congratulations!
                </h3>
                <p className="text-green-700 mb-4">
                  You completed all {gameWords.length} words!
                </p>
                <p className="text-lg font-medium text-green-800">
                  Final Score: {score}/{totalAttempts} 
                  {totalAttempts > 0 && (
                    <span className="text-sm ml-2">
                      ({Math.round((score / totalAttempts) * 100)}% accuracy)
                    </span>
                  )}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">Loading words...</p>
            )}
            
            <Button onClick={initializeGame} className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 hover:opacity-90">
              <Shuffle className="h-4 w-4 mr-2" />
              New Game
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WordScrambleGame;