
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, BookOpen, Brain, Award } from 'lucide-react';

const Home: React.FC = () => {
  const { user, subscription } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Surgical Tech Review</span>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/study">
                  <Button variant="ghost">Study</Button>
                </Link>
                <Link to="/account">
                  <Button variant="ghost">Account</Button>
                </Link>
              </>
            ) : (
              <Link to="/auth">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Master Your Surgical Tech Exam
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Comprehensive study materials, practice questions, and flashcards to help you pass your certification exam with confidence.
        </p>
        
        {!user || !subscription?.subscribed ? (
          <Card className="max-w-md mx-auto p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <div className="text-center mb-4">
              <Award className="h-12 w-12 text-primary mx-auto mb-2" />
              <h3 className="text-2xl font-bold">Unlock Premium Access</h3>
              <p className="text-muted-foreground">Get lifetime access to all study materials</p>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl font-bold text-primary mb-2">$19.99</div>
              <div className="text-sm text-muted-foreground">One-time payment • Lifetime access</div>
            </div>

            <ul className="text-left space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">Complete study materials for all categories</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">Interactive flashcards and practice quizzes</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">Full exam simulation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm">Progress tracking and analytics</span>
              </li>
            </ul>

            <Link to="/auth" className="w-full">
              <Button className="w-full" size="lg">
                Get Premium Access
              </Button>
            </Link>
          </Card>
        ) : (
          <Link to="/study">
            <Button size="lg" className="text-lg px-8 py-4">
              <Brain className="h-5 w-5 mr-2" />
              Start Studying
            </Button>
          </Link>
        )}
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Content</h3>
            <p className="text-muted-foreground">
              Complete coverage of all surgical technology topics and procedures.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-muted-foreground">
              Engaging flashcards and practice questions to reinforce knowledge.
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exam Simulation</h3>
            <p className="text-muted-foreground">
              Full-length practice exams that mirror the real certification test.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Surgical Tech Review. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
