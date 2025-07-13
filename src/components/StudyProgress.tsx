
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  Calendar, 
  Trophy,
  BookOpen,
  Brain,
  CheckCircle
} from 'lucide-react';

interface StudyProgressProps {
  streak: number;
  totalQuestions: number;
  correctAnswers: number;
  category: string;
}

const StudyProgress: React.FC<StudyProgressProps> = ({
  streak,
  totalQuestions,
  correctAnswers,
  category
}) => {
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  
  const categoryGoals = {
    anatomy: 200,
    instruments: 150,
    procedures: 180,
    sterile: 120,
    'patient-care': 100,
    pharmacology: 90,
    pathology: 80,
    technology: 110
  };

  const categoryProgress = Math.min((correctAnswers / (categoryGoals[category] || 100)) * 100, 100);

  const achievements = [
    { 
      title: "First Steps", 
      description: "Complete your first quiz", 
      achieved: totalQuestions > 0,
      icon: BookOpen
    },
    { 
      title: "Getting Started", 
      description: "Answer 10 questions correctly", 
      achieved: correctAnswers >= 10,
      icon: CheckCircle
    },
    { 
      title: "Study Streak", 
      description: "Study for 7 days in a row", 
      achieved: streak >= 7,
      icon: Calendar
    },
    { 
      title: "Accuracy Expert", 
      description: "Achieve 80% accuracy", 
      achieved: accuracy >= 80,
      icon: Target
    },
    { 
      title: "Category Master", 
      description: "Complete category goals", 
      achieved: categoryProgress >= 100,
      icon: Trophy
    },
    { 
      title: "Knowledge Seeker", 
      description: "Answer 100 questions correctly", 
      achieved: correctAnswers >= 100,
      icon: Brain
    }
  ];

  const weeklyData = [
    { day: 'Mon', questions: 12 },
    { day: 'Tue', questions: 18 },
    { day: 'Wed', questions: 15 },
    { day: 'Thu', questions: 22 },
    { day: 'Fri', questions: 8 },
    { day: 'Sat', questions: 25 },
    { day: 'Sun', questions: 20 }
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Overall Accuracy</h3>
            <Target className="h-5 w-5 text-blue-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">{accuracy}%</span>
              <span className="text-sm text-gray-600">
                ({correctAnswers}/{totalQuestions})
              </span>
            </div>
            <Progress value={accuracy} className="h-2" />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Study Streak</h3>
            <Calendar className="h-5 w-5 text-orange-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">{streak}</span>
              <span className="text-sm text-gray-600">days</span>
            </div>
            <p className="text-sm text-green-600">Keep it up! 🔥</p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 capitalize">
              {category.replace('-', ' ')} Progress
            </h3>
            <TrendingUp className="h-5 w-5 text-green-600" />
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-gray-900">
                {Math.round(categoryProgress)}%
              </span>
              <span className="text-sm text-gray-600">complete</span>
            </div>
            <Progress value={categoryProgress} className="h-2" />
          </div>
        </Card>
      </div>

      {/* Weekly Activity */}
      <Card className="p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Weekly Activity</h3>
        <div className="grid grid-cols-7 gap-2">
          {weeklyData.map((day, index) => (
            <div key={day.day} className="text-center">
              <div className="text-xs text-gray-600 mb-2">{day.day}</div>
              <div 
                className="w-full bg-blue-100 rounded"
                style={{ height: `${Math.max(day.questions * 2, 20)}px` }}
              >
                <div 
                  className="bg-blue-600 rounded transition-all duration-300"
                  style={{ height: `${Math.max(day.questions * 2, 20)}px` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">{day.questions}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  achievement.achieved 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className={`h-6 w-6 ${
                    achievement.achieved ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <Badge 
                    variant={achievement.achieved ? "default" : "secondary"}
                    className={achievement.achieved ? 'bg-green-600' : ''}
                  >
                    {achievement.achieved ? 'Unlocked' : 'Locked'}
                  </Badge>
                </div>
                <h4 className={`font-medium ${
                  achievement.achieved ? 'text-green-900' : 'text-gray-600'
                }`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm ${
                  achievement.achieved ? 'text-green-700' : 'text-gray-500'
                }`}>
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Study Tips */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <h3 className="font-semibold text-gray-900 mb-4">Study Tips</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Review flashcards daily to improve retention through spaced repetition.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Focus on categories where your accuracy is below 70% for targeted improvement.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
            <p className="text-sm text-gray-700">
              Maintain your study streak by dedicating at least 15 minutes daily to practice.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudyProgress;
