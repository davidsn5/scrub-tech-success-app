import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Download, Plus, Bookmark } from 'lucide-react';
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
  const [showDesktopDialog, setShowDesktopDialog] = useState(false);
  const [showMobileDialog, setShowMobileDialog] = useState(false);
  const isMobile = useIsMobile();
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Check if device is iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Check if device is tablet (including iPad)
    const tablet = /iPad/.test(navigator.userAgent) || 
                  (navigator.userAgent.includes('Android') && !navigator.userAgent.includes('Mobile')) ||
                  (window.innerWidth >= 768 && window.innerWidth <= 1024);
    setIsTablet(tablet);

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

  const handleClick = async () => {
    // For desktop (not mobile and not tablet), show bookmark instructions
    if (!isMobile && !isTablet) {
      setShowDesktopDialog(true);
      return;
    }

    // For tablets and mobile devices (iOS or Android), show add to home screen instructions
    if (isTablet || isIOS || !deferredPrompt) {
      setShowMobileDialog(true);
      return;
    }

    // For mobile Android with install prompt (only phones, not tablets)
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } catch (error) {
      console.error('Error showing install prompt:', error);
      // Fallback to showing instructions
      setShowMobileDialog(true);
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
    <>
      <div className="mt-3">
        <Button
          onClick={handleClick}
          variant="outline"
          className="bg-gradient-to-r from-orange-500/80 to-orange-600/80 hover:opacity-90 transition-opacity text-white"
        >
          {(isMobile || isTablet) ? <Plus className="h-3 w-3 mr-1" /> : <Bookmark className="h-3 w-3 mr-1" />}
          {(isMobile || isTablet) ? 'Add to Home Screen' : 'Bookmark This Page'}
        </Button>
      </div>

      <Dialog open={showDesktopDialog} onOpenChange={setShowDesktopDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Bookmark This Page</DialogTitle>
            <DialogDescription>
              Save this app for quick access by bookmarking it in your browser.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Chrome, Edge, or Firefox:</h4>
              <p>Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Ctrl+D</kbd> (or <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Cmd+D</kbd> on Mac)</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Safari:</h4>
              <p>Press <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Cmd+D</kbd> or click the Share button and select "Add Bookmark"</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Alternative:</h4>
              <p>Click the star icon in your browser's address bar or use your browser's Bookmarks menu.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showMobileDialog} onOpenChange={setShowMobileDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add to Home Screen</DialogTitle>
            <DialogDescription>
              Install this app on your device for quick access with an icon on your home screen.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Android Phone:</h4>
              <p>1. Tap the menu button ⋮ in the top right corner</p>
              <p>2. Select "Add to Home screen" or "Install app"</p>
              <p>3. Tap "Add" or "Install" to confirm</p>
              <p className="text-xs text-gray-500 mt-1">Works with Chrome, Firefox, and most browsers</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">iPhone (Safari):</h4>
              <p>1. Tap the Share button <span className="inline-block">📤</span> at the bottom of the screen</p>
              <p>2. Scroll down and tap "Add to Home Screen"</p>
              <p>3. Tap "Add" to confirm</p>
              <p className="text-xs text-gray-500 mt-1">Note: This option is only available in Safari browser</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddToHomeScreen;