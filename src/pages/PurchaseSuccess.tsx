import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PurchaseSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { checkSubscription } = useAuth();
  const { toast } = useToast();
  const [isConfirming, setIsConfirming] = useState(true);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const confirmPayment = async () => {
      const sessionId = searchParams.get("session_id");
      
      if (!sessionId) {
        toast({
          title: "Error",
          description: "No session ID found. Please contact support.",
          variant: "destructive",
        });
        setIsConfirming(false);
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke("confirm-payment", {
          body: { sessionId },
        });

        if (error) throw error;

        setConfirmed(true);
        
        console.log('💳 Payment confirmed, triggering comprehensive access verification...');
        
        // Wait a moment for the database to update, then check subscription multiple times
        await new Promise(resolve => setTimeout(resolve, 1000));
        await checkSubscription();
        
        // Check again after another delay to ensure the subscription is properly updated
        setTimeout(async () => {
          console.log('🔄 Second verification check...');
          await checkSubscription();
        }, 3000);
        
        // Final check after 6 seconds
        setTimeout(async () => {
          console.log('🔄 Final verification check...');
          await checkSubscription();
        }, 6000);
        
        toast({
          title: "Payment Confirmed!",
          description: "Your lifetime premium access has been activated.",
        });
      } catch (error) {
        console.error("Payment confirmation error:", error);
        toast({
          title: "Confirmation Error",
          description: "There was an issue confirming your payment. Please contact support.",
          variant: "destructive",
        });
      } finally {
        setIsConfirming(false);
      }
    };

    confirmPayment();
  }, [searchParams, checkSubscription, toast]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            {isConfirming ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : confirmed ? (
              <CheckCircle className="h-6 w-6 text-green-500" />
            ) : null}
            {isConfirming ? "Confirming Payment..." : confirmed ? "Payment Successful!" : "Payment Issue"}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          {isConfirming ? (
            <p className="text-muted-foreground">
              Please wait while we confirm your payment and activate your access...
            </p>
          ) : confirmed ? (
            <>
              <p className="text-muted-foreground">
                Thank you for your purchase! Your premium access has been activated and you now have full access to all study materials.
              </p>
              <Button onClick={() => navigate("/")} className="w-full">
                Start Studying
              </Button>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                There was an issue confirming your payment. Please contact support for assistance.
              </p>
              <Button onClick={() => navigate("/")} variant="outline" className="w-full">
                Return to Home
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseSuccess;