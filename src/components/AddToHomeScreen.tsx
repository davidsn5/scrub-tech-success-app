import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Plus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const AddToHomeScreen = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Check if device is iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const installedHandler = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', installedHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', installedHandler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      // For iOS devices, show instructions since they don't support the install prompt
      alert('To add this app to your home screen:\n\n1. Tap the Share button in your browser\n2. Scroll down and tap "Add to Home Screen"\n3. Tap "Add" in the top right corner');
      return;
    }

    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } catch (error) {
      console.error('Error showing install prompt:', error);
    }
  };

  // Only hide if already installed
  if (isInstalled) {
    return null;
  }

  // Show button for iOS or if install prompt is available, or for testing
  const showButton = isIOS || deferredPrompt || true; // Force show for now

  console.log('AddToHomeScreen Debug:', {
    isMobile,
    isInstalled,
    isIOS,
    deferredPrompt: !!deferredPrompt,
    showButton,
    userAgent: navigator.userAgent
  });

  return (
    <div className="mt-3">
      <Button
        onClick={handleInstallClick}
        variant="outline"
        size="sm"
        className="w-full bg-gradient-to-r from-orange-500/80 to-orange-600/80 hover:opacity-90 transition-opacity text-white text-xs py-2"
      >
        <Plus className="h-3 w-3 mr-1" />
        Add to Home Screen
      </Button>
    </div>
  );
};

export default AddToHomeScreen;