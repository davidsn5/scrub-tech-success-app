import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Settings } from 'lucide-react';
import InstrumentFlashcard from '@/components/InstrumentFlashcard';
import InstrumentImageGenerator from '@/components/InstrumentImageGenerator';

const InstrumentFlashcards = () => {
  const [activeTab, setActiveTab] = useState('flashcards');

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50/95 via-green-50/90 to-teal-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-emerald-50/90 to-green-50/85 shadow-sm border-b border-emerald-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="bg-white/80 hover:bg-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800">
                  Surgical Instrument Flashcards
                </h1>
                <p className="text-emerald-600 font-medium">Admin Preview - Visual Learning Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="flashcards">Study Flashcards</TabsTrigger>
            <TabsTrigger value="generator" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Generate Images</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="flashcards">
            <InstrumentFlashcard />
          </TabsContent>
          
          <TabsContent value="generator">
            <InstrumentImageGenerator />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstrumentFlashcards;