import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, RefreshCw, Trophy, Clock } from 'lucide-react';
import { flashcardData } from '@/data/flashcardData';
import { toast } from '@/hooks/use-toast';
import { useGamePreviewGate } from '@/hooks/useGamePreviewGate';

interface MatchPair {
  id: string;
  term: string;
  definition: string;
  matched: boolean;
}

const TermMatchingGame = () => {
  const [pairs, setPairs] = useState<MatchPair[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [gameTime, setGameTime] = useState(0);
  const { isPremium, incrementGameCount } = useGamePreviewGate();

  const generatePairs = () => {
    // Get random items from different flashcard categories
    const allItems = Object.values(flashcardData).flat();
    const pairCount = isPremium ? 6 : 4; // Fewer pairs for preview
    const shuffledItems = allItems.sort(() => Math.random() - 0.5).slice(0, pairCount);
    
    const newPairs = shuffledItems.map((item, index) => ({
      id: `pair-${index}`,
      term: item.answer, // Use answer as the term to match
      definition: item.question.replace(/What (does|is|are) ['"]?(.+?)['"]? mean\?/i, '$2'), // Extract term from question
      matched: false
    }));
    
    setPairs(newPairs);
    setScore(0);
    setGameComplete(false);
    setStartTime(new Date());
    setGameTime(0);
    
    // Increment play count for non-premium users
    if (!isPremium) {
      incrementGameCount('termMatching');
    }
  };

  useEffect(() => {
    generatePairs();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (startTime && !gameComplete) {
      interval = setInterval(() => {
        setGameTime(Math.floor((Date.now() - startTime.getTime()) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime, gameComplete]);

  const handleTermClick = (id: string) => {
    if (pairs.find(p => p.id === id)?.matched) return;
    setSelectedTerm(selectedTerm === id ? null : id);
    
    if (selectedDefinition) {
      checkMatch(id, selectedDefinition);
    }
  };

  const handleDefinitionClick = (id: string) => {
    if (pairs.find(p => p.id === id)?.matched) return;
    setSelectedDefinition(selectedDefinition === id ? null : id);
    
    if (selectedTerm) {
      checkMatch(selectedTerm, id);
    }
  };

  const checkMatch = (termId: string, definitionId: string) => {
    if (termId === definitionId) {
      // Correct match
      setPairs(prev => prev.map(pair => 
        pair.id === termId ? { ...pair, matched: true } : pair
      ));
      setScore(prev => prev + 1);
      setSelectedTerm(null);
      setSelectedDefinition(null);
      
      toast({
        title: "Perfect Match! 🎉",
        description: "Great job matching that term!",
      });

      // Check if game is complete
      const updatedPairs = pairs.map(pair => 
        pair.id === termId ? { ...pair, matched: true } : pair
      );
      if (updatedPairs.every(pair => pair.matched)) {
        setGameComplete(true);
        toast({
          title: "Game Complete! 🏆",
          description: `You matched all terms in ${gameTime} seconds!`,
        });
      }
    } else {
      // Incorrect match
      setSelectedTerm(null);
      setSelectedDefinition(null);
      toast({
        title: "Not quite right",
        description: "Try again! Look for the matching definition.",
        variant: "destructive",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="gradient-card shadow-card border-border/50">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/90 to-blue-600/90">
            <Target className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl">Term Matching</CardTitle>
        <CardDescription>
          Match medical terms with their definitions
        </CardDescription>
        <div className="flex justify-center gap-4 mt-4">
          <Badge variant="outline" className="flex items-center gap-2">
            <Trophy className="h-3 w-3" />
            Score: {score}/{pairs.length}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-2">
            <Clock className="h-3 w-3" />
            {formatTime(gameTime)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Terms Column */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">Terms</h3>
            <div className="space-y-2">
              {pairs.map((pair) => (
                <Button
                  key={`term-${pair.id}`}
                  variant={pair.matched ? "default" : selectedTerm === pair.id ? "secondary" : "outline"}
                  className={`w-full p-3 min-h-[60px] text-left justify-start whitespace-normal ${
                    pair.matched 
                      ? "bg-green-500/90 text-white hover:bg-green-500/90" 
                      : selectedTerm === pair.id 
                        ? "bg-primary/20 border-primary" 
                        : ""
                  }`}
                  onClick={() => handleTermClick(pair.id)}
                  disabled={pair.matched}
                >
                  <span className="text-sm font-medium leading-tight break-words">{pair.term}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Definitions Column */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center">Definitions</h3>
            <div className="space-y-2">
              {pairs.map((pair) => (
                <Button
                  key={`definition-${pair.id}`}
                  variant={pair.matched ? "default" : selectedDefinition === pair.id ? "secondary" : "outline"}
                  className={`w-full p-3 min-h-[60px] text-left justify-start whitespace-normal ${
                    pair.matched 
                      ? "bg-green-500/90 text-white hover:bg-green-500/90" 
                      : selectedDefinition === pair.id 
                        ? "bg-primary/20 border-primary" 
                        : ""
                  }`}
                  onClick={() => handleDefinitionClick(pair.id)}
                  disabled={pair.matched}
                >
                  <span className="text-sm leading-tight break-words">{pair.definition}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={generatePairs}
            className="flex items-center gap-2"
            variant="outline"
          >
            <RefreshCw className="h-4 w-4" />
            New Game
          </Button>
        </div>

        {gameComplete && (
          <div className="text-center p-4 bg-gradient-to-r from-green-50/80 to-green-100/80 rounded-lg border border-green-200/50">
            <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <h3 className="font-semibold text-green-900 mb-1">Congratulations!</h3>
            <p className="text-sm text-green-700">
              You completed the game in {formatTime(gameTime)}!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TermMatchingGame;