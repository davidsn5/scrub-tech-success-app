import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Gamepad2, Target, Zap } from 'lucide-react';
import { InstrumentImageGenerator } from '@/components/InstrumentImageGenerator';

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Instrument Image Generator */}
        <InstrumentImageGenerator />
        
        {/* Coming Soon Section */}
        <Card className="gradient-card shadow-card border-border/50">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-purple-500/90 to-purple-600/90">
                <Gamepad2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl">Coming Soon!</CardTitle>
            <CardDescription className="text-lg">
              Interactive games to help you master surgical terminology and concepts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50/80 to-blue-100/80 rounded-lg border border-blue-200/50">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900">Term Matching</h3>
                <p className="text-sm text-blue-700">Match medical terms with their definitions</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50/80 to-green-100/80 rounded-lg border border-green-200/50">
                <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-green-900">Speed Quiz</h3>
                <p className="text-sm text-green-700">Quick-fire terminology challenges</p>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-purple-50/80 to-purple-100/80 rounded-lg border border-purple-200/50">
                <Trophy className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold text-purple-900">Word Games</h3>
                <p className="text-sm text-purple-700">Crosswords and word puzzles</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                We're working hard to bring you engaging and educational games that will make learning medical terminology fun and effective.
              </p>
              <Link to="/">
                <Button className="bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:opacity-90">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Study Materials
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KeyTermGames;