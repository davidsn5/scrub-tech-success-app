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

  const handleClick = async () => {
    // For desktop, show bookmark instructions
    if (!isMobile) {
      setShowDesktopDialog(true);
      return;
    }

    // For mobile iOS devices or Android without install prompt, show instructions
    if (isIOS || !deferredPrompt) {
      setShowMobileDialog(true);
      return;
    }

    // For mobile Android with install prompt
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
          size="sm"
          className="w-full bg-gradient-to-r from-orange-500/80 to-orange-600/80 hover:opacity-90 transition-opacity text-white text-xs py-2"
        >
          {isMobile ? <Plus className="h-3 w-3 mr-1" /> : <Bookmark className="h-3 w-3 mr-1" />}
          {isMobile ? 'Add to Home Screen' : 'Bookmark This Page'}
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
              Install this app on your device for quick access.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            {isIOS ? (
              <>
                <div>
                  <h4 className="font-medium mb-2">iPhone/iPad (Safari):</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Tap the Share button <span className="inline-block">📤</span> at the bottom of the screen</li>
                    <li>Scroll down and tap "Add to Home Screen"</li>
                    <li>Tap "Add" in the top right corner</li>
                  </ol>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h4 className="font-medium mb-2">Android (Chrome):</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Tap the menu button ⋮ in the top right corner</li>
                    <li>Select "Add to Home screen" or "Install app"</li>
                    <li>Tap "Add" or "Install" to confirm</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Android (Firefox):</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Tap the menu button ⋮ in the top right corner</li>
                    <li>Select "Install" or "Add to Home Screen"</li>
                    <li>Tap "Add" to confirm</li>
                  </ol>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddToHomeScreen;