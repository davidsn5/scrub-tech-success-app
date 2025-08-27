import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const StickyPromoBanner: React.FC = () => {
  const { user, subscription } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const isAdmin = subscription?.status === 'admin';
  const isSubscribed = subscription?.subscribed || isAdmin;

  useEffect(() => {
    // Don't show banner for premium/admin users
    if (isSubscribed) {
      setIsVisible(false);
      return;
    }

    // Check if banner was dismissed (stored for 7 days)
    const dismissedUntil = localStorage.getItem('promoBannerDismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, [isSubscribed]);

  const handleDismiss = () => {
    setIsVisible(false);
    // Hide banner for 7 days
    const dismissUntil = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem('promoBannerDismissed', dismissUntil.toString());
  };

  const handleUnlockPremium = () => {
    navigate('/auth');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
            <div className="text-sm font-medium">
              <span className="hidden sm:inline">🚀 Unlock Premium: </span>
              Full question bank • Complete flashcards • Unlimited practice • One-time purchase, lifetime updates
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleUnlockPremium}
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Unlock Premium
            </Button>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyPromoBanner;