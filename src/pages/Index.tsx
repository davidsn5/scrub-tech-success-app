
import React from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Brain, GraduationCap, Flame, ClipboardList, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Flashcards', value: '250+', icon: BookOpen },
  { label: 'Practice Questions', value: '500+', icon: ClipboardList },
  { label: 'Exam Simulations', value: '3', icon: GraduationCap },
  { label: 'Fire Quizzes', value: 'Endless', icon: Flame },
];

const features = [
  {
    title: 'Study Mode',
    description: 'Explore flashcards and practice questions by category.',
    href: '/study',
    icon: BookOpen,
  },
  {
    title: 'Exam Simulation',
    description: 'Simulate the actual CST exam with timed questions.',
    href: '/exam-simulation',
    icon: GraduationCap,
  },
  {
    title: 'Fire Quiz',
    description: 'Test your knowledge with a rapid-fire quiz format.',
    href: '/fire-quiz',
    icon: Flame,
  },
  {
    title: 'Missed Questions',
    description: 'Review questions you\'ve missed in practice quizzes.',
    href: '/missed-questions',
    icon: ClipboardList,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-orange-50/90 to-teal-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-orange-50/90 to-teal-50/85 shadow-sm border-b border-orange-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/a97d37e9-2975-4012-992a-008ee35274c1.png" 
              alt="Logo" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600/90 to-teal-600/90 bg-clip-text text-transparent">
                Surgical Tech Review and Study
              </h1>
              <p className="text-gray-600">Master Your CST/CFA Certification</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-white/80 via-orange-50/60 to-teal-50/60 backdrop-blur-sm border-orange-200/30 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-orange-500/80 to-teal-500/80 p-2 rounded-lg">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.href}>
              <Card className="group p-6 h-full bg-gradient-to-br from-white/80 via-orange-50/40 to-teal-50/40 backdrop-blur-sm border-orange-200/30 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-to-br from-orange-500/80 to-teal-500/80 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Study Categories Section */}
        <Card className="p-8 bg-gradient-to-br from-white/80 via-orange-50/40 to-teal-50/40 backdrop-blur-sm border-orange-200/30 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Practice Question Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Intro to Surgical Technology */}
            <Link to="/intro-surgical-tech">
              <Card className="group p-6 bg-gradient-to-br from-white/90 via-blue-50/60 to-purple-50/60 border-blue-200/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500/80 to-purple-500/80 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Intro to Surgical Technology</h3>
                    <p className="text-sm text-gray-600">15 Practice Questions</p>
                  </div>
                </div>
                <p className="text-gray-600">Foundation concepts and basic principles</p>
                <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="font-medium">Start Studying</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            {/* Principles and Practice of Surgical Technology */}
            <Link to="/principles-practice">
              <Card className="group p-6 bg-gradient-to-br from-white/90 via-emerald-50/60 to-cyan-50/60 border-emerald-200/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-emerald-500/80 to-cyan-500/80 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Principles and Practice of Surgical Technology</h3>
                    <p className="text-sm text-gray-600">200 Practice Questions</p>
                  </div>
                </div>
                <p className="text-gray-600">Advanced concepts and practical applications</p>
                <div className="mt-4 flex items-center text-emerald-600 group-hover:text-emerald-700">
                  <span className="font-medium">Start Studying</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
