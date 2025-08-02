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
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

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
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  // Only show on mobile and if not already installed and if prompt is available
  if (!isMobile || isInstalled || !deferredPrompt) {
    return null;
  }

  return (
    <div className="mt-3 sm:hidden">
      <Button
        onClick={handleInstallClick}
        variant="outline"
        size="sm"
        className="text-xs bg-white/50 hover:bg-white/70 border-primary/20 text-primary"
      >
        <Plus className="h-3 w-3 mr-1" />
        Add to Home Screen
      </Button>
    </div>
  );
};

export default AddToHomeScreen;