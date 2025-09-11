import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Flashcards from '@/components/Flashcards';

const InstrumentationFlashcards = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'general-instruments',
      title: 'General Instruments',
      description: 'Basic surgical instruments used across multiple specialties',
      icon: Wrench,
      color: 'purple'
    }
  ];

  if (selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory(null)}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Categories</span>
            </Button>
          </div>
          
          <Flashcards 
            category={selectedCategory}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/90 to-purple-600/90 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/20 flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </div>
          </div>
          <div className="mt-6 flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-white/20">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Instrumentation Flashcards</h1>
              <p className="text-purple-100 mt-2">Master surgical instruments by category</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="p-6 bg-gradient-to-br from-white/90 via-purple-50/80 to-purple-100/70 backdrop-blur-sm border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500/90 to-purple-600/90">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{category.description}</p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500/90 to-purple-600/90 hover:opacity-90 text-white"
                >
                  Study Flashcards
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InstrumentationFlashcards;