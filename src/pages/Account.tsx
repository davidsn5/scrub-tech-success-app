
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Mail, Crown, ArrowLeft, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Account: React.FC = () => {
  const { user, subscription, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    navigate('/auth');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 p-4">
      <div className="container mx-auto max-w-2xl py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-2xl font-bold">Account Settings</h1>
        </div>

        <div className="space-y-6">
          {/* Profile Information */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Profile Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Subscription Status */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Crown className="h-5 w-5 mr-2" />
              Subscription Status
            </h2>
            
            <div className="space-y-4">
              {subscription?.subscribed ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Crown className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-medium text-green-800">Premium Access</span>
                  </div>
                  <p className="text-sm text-green-700">
                    You have lifetime access to all study materials and features.
                  </p>
                </div>
              ) : (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-orange-800">Free Access</p>
                      <p className="text-sm text-orange-700">
                        Upgrade to premium for full access to all study materials.
                      </p>
                    </div>
                    <Button onClick={() => navigate('/auth')} size="sm">
                      Upgrade
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Actions</h2>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                onClick={() => navigate('/study')}
                className="w-full justify-start"
              >
                Go to Study Materials
              </Button>
              
              <Button 
                variant="destructive" 
                onClick={handleSignOut}
                className="w-full justify-start"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Account;
