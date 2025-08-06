
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Study = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-slate-50/90 to-blue-50/85 shadow-sm border-b border-slate-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm" className="flex items-center space-x-2 border-slate-200/60 hover:bg-slate-50/80">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-orange-500/90 to-teal-500/90 p-2 rounded-lg shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600/90 to-teal-600/90 bg-clip-text text-transparent">Study Center</h1>
                  <p className="text-sm text-gray-600">Interactive Learning & Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Instructions */}
        <Card className="bg-gradient-to-br from-white/90 via-slate-50/80 to-blue-50/70 backdrop-blur-sm border-slate-200/50 shadow-xl p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Study Questions by Category Practice Questions Available</h2>
            <p className="text-gray-600">Visit the home page to access the new study categories and quiz features.</p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-orange-500/90 to-teal-500/90 hover:opacity-90 transition-opacity text-white">
                Go to Home Page
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Study;
