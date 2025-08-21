
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft } from 'lucide-react';

const PurchaseCanceled: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <XCircle className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Purchase Canceled</h1>
          <p className="text-muted-foreground mb-4">
            Your payment was canceled. No charges were made to your account.
          </p>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-orange-700">
              You can try again anytime to get premium access to all study materials for just $19.99 one-time.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link to="/auth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Try Again
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PurchaseCanceled;
