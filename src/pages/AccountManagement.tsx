import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Settings, CreditCard, Shield, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AccountManagement = () => {
  const { user, subscription, openCustomerPortal, createCheckoutSession, signOut, loading } = useAuth();

  // Show loading state while authentication is being restored
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600">Loading account information...</p>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85 flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600 mb-4">Please sign in to access account management.</p>
          <Link to="/auth">
            <Button>Sign In</Button>
          </Link>
        </Card>
      </div>
    );
  }

  const isSubscribed = subscription?.subscribed;
  const isAdmin = subscription?.status === 'admin';
  const isTrialActive = subscription?.status === 'trial';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-indigo-100/85">
      {/* Header */}
      <div className="bg-gradient-to-r from-white/95 via-blue-50/90 to-indigo-50/85 shadow-sm border-b border-blue-200/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2 border-blue-200/60 hover:bg-blue-50/80">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-500/90 to-indigo-500/90 p-2 rounded-lg shadow-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600/90 to-indigo-600/90 bg-clip-text text-transparent">
                    Account Management
                  </h1>
                  <p className="text-sm text-gray-600">Manage your subscription and account settings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Account Information */}
          <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-50/70 backdrop-blur-sm border-blue-200/50 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <p className="text-gray-900 mt-1">{user.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Account Status</label>
                <div className="mt-1">
                  {isAdmin ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full border border-green-200 w-fit">
                      <Shield className="h-3 w-3" />
                      <span className="text-xs font-medium">Admin Account</span>
                    </div>
                  ) : isSubscribed ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200 w-fit">
                      <Shield className="h-3 w-3" />
                      <span className="text-xs font-medium">Premium Subscriber</span>
                    </div>
                  ) : isTrialActive ? (
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200 w-fit">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-medium">Trial Active</span>
                    </div>
                  ) : null}
                </div>
              </div>
              {(isSubscribed || isTrialActive) && subscription?.subscription_end && (
                <div>
                  <label className="text-sm font-medium text-gray-700">Subscription Renews</label>
                  <p className="text-gray-900 mt-1">{new Date(subscription.subscription_end).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </Card>

          {/* Subscription Management */}
          <Card className="p-6 bg-gradient-to-br from-white/90 via-blue-50/80 to-indigo-50/70 backdrop-blur-sm border-blue-200/50 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Subscription Management</h2>
            </div>
            
            {isAdmin ? (
              <div className="text-center py-8">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Admin Account</h3>
                <p className="text-gray-600">You have administrative access to all features.</p>
              </div>
            ) : isSubscribed ? (
              <div className="space-y-6">
                <div className="bg-blue-50/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Premium Subscription Active</h3>
                      <p className="text-sm text-gray-600">You have full access to all study materials and features.</p>
                      {subscription?.subscription_tier && (
                        <p className="text-xs text-gray-500 mt-1">Plan: {subscription.subscription_tier}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">Active</div>
                      {subscription?.subscription_end && (
                        <div className="text-xs text-gray-500">
                          Renews: {new Date(subscription.subscription_end).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Button 
                      onClick={openCustomerPortal}
                      className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Manage Subscription
                    </Button>
                    
                    <Button 
                      onClick={openCustomerPortal}
                      variant="outline"
                      className="border-orange-300 text-orange-700 hover:bg-orange-50"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Cancel Subscription
                    </Button>
                  </div>
                  
                  <p className="text-xs text-orange-600 text-center font-medium">
                    Enable Pop-ups to Cancel Subscription
                  </p>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Manage your payment method, update your plan, or cancel your subscription
                  </p>
                </div>
              </div>
            ) : isTrialActive ? (
              <div className="space-y-6">
                <div className="bg-amber-50/60 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Trial Period Active</h3>
                      <p className="text-sm text-gray-600">You're currently in your trial period with full access.</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-600">Trial</div>
                      <div className="text-xs text-gray-500">Limited time access</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Upgrade to continue your access when your trial ends.</p>
                  <Link to="/">
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90">
                      Upgrade to Premium
                    </Button>
                  </Link>
                </div>
              </div>
             ) : (
               <div className="space-y-6">
                 <div className="bg-gray-50/60 rounded-lg p-4">
                   <div className="flex items-center justify-between">
                     <div>
                       <h3 className="font-semibold text-gray-900">No Active Subscription</h3>
                       <p className="text-sm text-gray-600">Subscribe to access all premium study materials and features.</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-primary/10 p-4 rounded-md border border-primary/20 mb-6">
                   <div className="flex items-center gap-2 mb-2">
                     <CreditCard className="h-4 w-4 text-primary" />
                     <span className="font-medium text-sm">Premium Access - $9.99/month</span>
                   </div>
                   <ul className="text-sm text-muted-foreground space-y-1">
                     <li>• Complete study materials for all categories</li>
                     <li>• Interactive flashcards and practice quizzes</li>
                     <li>• Full exam simulation</li>
                     <li>• Progress tracking and analytics</li>
                   </ul>
                 </div>
                 
                 <div className="text-center space-y-3">
                   <Button 
                     onClick={createCheckoutSession}
                     className="bg-gradient-to-r from-blue-500/90 to-indigo-500/90 hover:opacity-90 transition-opacity text-white w-full"
                   >
                     <CreditCard className="h-4 w-4 mr-2" />
                     Subscribe Now
                   </Button>
                   <p className="text-xs text-gray-500">
                     Secure payment processing through Stripe
                   </p>
                 </div>
               </div>
             )}
          </Card>

          {/* Account Actions */}
           <Card className="p-6 bg-gradient-to-br from-white/90 via-orange-50/80 to-orange-50/70 backdrop-blur-sm border-orange-200/50 shadow-xl">
             <div className="flex items-center space-x-3 mb-6">
               <Settings className="h-6 w-6 text-orange-600" />
               <h2 className="text-xl font-semibold text-gray-900">Account Actions</h2>
             </div>
             
             <div className="space-y-4">
               <div className="flex items-center justify-between p-4 bg-orange-50/60 rounded-lg border border-orange-200/50">
                 <div>
                   <h3 className="font-semibold text-gray-900">Sign Out</h3>
                   <p className="text-sm text-gray-600">Sign out of your account on this device.</p>
                 </div>
                 <Button onClick={signOut} variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                   Sign Out
                 </Button>
               </div>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountManagement;