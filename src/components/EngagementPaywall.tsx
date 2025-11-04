import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

interface EngagementPaywallProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerMessage: string;
  onUpgrade: () => void;
}

const PREMIUM_FEATURES = [
  "Unlimited practice questions",
  "All exam simulations",
  "Complete flashcard decks",
  "Unlimited study games",
  "Detailed progress tracking",
  "Offline access",
];

export const EngagementPaywall = ({ 
  open, 
  onOpenChange, 
  triggerMessage,
  onUpgrade 
}: EngagementPaywallProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <DialogTitle className="text-2xl">You're On Fire! 🔥</DialogTitle>
          </div>
          <DialogDescription className="text-base pt-2">
            {triggerMessage}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p className="font-semibold text-lg mb-3">
              Unlock Premium Access
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Continue your momentum with unlimited access to all study materials
            </p>
            <div className="space-y-2">
              {PREMIUM_FEATURES.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-2xl font-bold text-primary mb-1">
              $19.99
            </p>
            <p className="text-sm text-muted-foreground">
              One-time payment • Lifetime access
            </p>
          </div>

          <Button 
            onClick={onUpgrade}
            className="w-full"
            size="lg"
          >
            Upgrade Now
          </Button>

          <Button
            onClick={() => onOpenChange(false)}
            variant="ghost"
            className="w-full"
          >
            Maybe Later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
