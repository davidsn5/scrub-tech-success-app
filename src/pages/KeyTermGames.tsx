import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Gamepad2, Target, Zap, Shuffle, Crown, Clock } from 'lucide-react';
import TermMatchingGame from '@/components/games/TermMatchingGame';
import SpeedQuizGame from '@/components/games/SpeedQuizGame';
import WordScrambleGame from '@/components/games/WordScrambleGame';
import { useGamePreviewGate } from '@/hooks/useGamePreviewGate';
import { useAuth } from '@/contexts/AuthContext';

const KeyTermGames = () => {
  const { isPremium, canPlayGame, getGamePreviewMessage } = useGamePreviewGate();
  const { createCheckoutSession } = useAuth();

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
                <h1 className="text-2xl sm:text-3xl font-semibold text-primary">Review Games</h1>
                <p className="text-muted-foreground">Interactive games to master medical terminology</p>
              </div>
            </div>
            <Trophy className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Preview Banner for Non-Premium Users */}
        {!isPremium && (
          <Card className="gradient-card shadow-card border-border/50 bg-gradient-to-r from-amber-50/90 to-orange-50/90 border-amber-200/60">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <Badge className="bg-amber-500/90 text-white">Free Preview</Badge>
              </div>
              <CardTitle className="text-lg text-amber-900">Daily Game Limits</CardTitle>
              <CardDescription className="text-amber-700">
                Enjoy limited daily access to our games. Upgrade for unlimited play!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 bg-white/60 rounded-lg border border-amber-200/50">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-sm">Term Matching</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{getGamePreviewMessage('termMatching')}</p>
                </div>
                <div className="p-3 bg-white/60 rounded-lg border border-amber-200/50">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-sm">Speed Quiz</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{getGamePreviewMessage('speedQuiz')}</p>
                </div>
                <div className="p-3 bg-white/60 rounded-lg border border-amber-200/50">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Shuffle className="h-4 w-4 text-purple-600" />
                    <span className="font-medium text-sm">Word Scramble</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{getGamePreviewMessage('wordScramble')}</p>
                </div>
              </div>
              <Button 
                onClick={createCheckoutSession}
                className="bg-gradient-to-r from-amber-500/90 to-orange-500/90 hover:opacity-90"
              >
                <Crown className="h-4 w-4 mr-2" />
                Upgrade for Unlimited Games
              </Button>
            </CardContent>
          </Card>
        )}

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
                {canPlayGame('termMatching') ? (
                  <TermMatchingGame />
                ) : (
                  <Card className="p-8 text-center bg-gradient-to-r from-slate-50/90 to-gray-50/90 border-slate-200/60">
                    <Trophy className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Daily Limit Reached</h3>
                    <p className="text-slate-600 mb-4">You've used all your free Term Matching games for today.</p>
                    <Button onClick={createCheckoutSession} className="bg-gradient-to-r from-primary to-primary/90">
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade for Unlimited Access
                    </Button>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="speed" className="space-y-6">
                {canPlayGame('speedQuiz') ? (
                  <SpeedQuizGame />
                ) : (
                  <Card className="p-8 text-center bg-gradient-to-r from-slate-50/90 to-gray-50/90 border-slate-200/60">
                    <Trophy className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Daily Limit Reached</h3>
                    <p className="text-slate-600 mb-4">You've used all your free Speed Quiz games for today.</p>
                    <Button onClick={createCheckoutSession} className="bg-gradient-to-r from-primary to-primary/90">
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade for Unlimited Access
                    </Button>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="scramble" className="space-y-6">
                {canPlayGame('wordScramble') ? (
                  <WordScrambleGame />
                ) : (
                  <Card className="p-8 text-center bg-gradient-to-r from-slate-50/90 to-gray-50/90 border-slate-200/60">
                    <Trophy className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-slate-700 mb-2">Daily Limit Reached</h3>
                    <p className="text-slate-600 mb-4">You've used all your free Word Scramble games for today.</p>
                    <Button onClick={createCheckoutSession} className="bg-gradient-to-r from-primary to-primary/90">
                      <Crown className="h-4 w-4 mr-2" />
                      Upgrade for Unlimited Access
                    </Button>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeyTermGames;