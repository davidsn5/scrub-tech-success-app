import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const PurchaseCanceled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <XCircle className="h-6 w-6 text-orange-500" />
            Payment Canceled
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Your payment was canceled. No charges were made to your account.
          </p>
          <p className="text-sm text-muted-foreground">
            You can try again anytime to get premium access to all study materials.
          </p>
          <div className="space-y-2">
            <Button onClick={() => navigate("/")} className="w-full">
              Return to Home
            </Button>
            <Button onClick={() => navigate("/?upgrade=true")} variant="outline" className="w-full">
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseCanceled;