import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Gamepad2, Target, Zap, Shuffle } from 'lucide-react';
import { InstrumentImageGenerator } from '@/components/InstrumentImageGenerator';
import TermMatchingGame from '@/components/games/TermMatchingGame';
import SpeedQuizGame from '@/components/games/SpeedQuizGame';
import WordScrambleGame from '@/components/games/WordScrambleGame';

const KeyTermGames = () => {
  return (
    <div className="min-h-screen gradient-background">
      {/* Header */}
      <div className="bg-card/95 backdrop-blur-md shadow-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-primary">Key Term Games</h1>
                <p className="text-muted-foreground">Interactive games to master medical terminology</p>
              </div>
            </div>
            <Trophy className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Instrument Image Generator */}
        <InstrumentImageGenerator />
        
        {/* Games Section */}
        <Card className="gradient-card shadow-card border-border/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/90 to-purple-600/90">
                <Gamepad2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl">Interactive Learning Games</CardTitle>
            <CardDescription className="text-lg">
              Test and improve your medical terminology knowledge with fun, engaging games
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="matching" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="matching" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Term Matching
                </TabsTrigger>
                <TabsTrigger value="speed" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Speed Quiz
                </TabsTrigger>
                <TabsTrigger value="scramble" className="flex items-center gap-2">
                  <Shuffle className="h-4 w-4" />
                  Word Scramble
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="matching" className="space-y-6">
                <TermMatchingGame />
              </TabsContent>
              
              <TabsContent value="speed" className="space-y-6">
                <SpeedQuizGame />
              </TabsContent>
              
              <TabsContent value="scramble" className="space-y-6">
                <WordScrambleGame />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeyTermGames;