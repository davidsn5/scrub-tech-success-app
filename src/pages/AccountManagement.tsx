import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Settings, CreditCard, Shield, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AccountManagement = () => {
  const { user, signOut, loading } = useAuth();

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
          <p className="text-gray-600 mb-4">Please sign in to access your account.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </Card>
      </div>
    );
  }

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
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-3 py-1 rounded-full border border-green-200 w-fit">
                    <Shield className="h-3 w-3" />
                    <span className="text-xs font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>
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