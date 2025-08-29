import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const AdminPaymentConfirm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleManualConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userEmail || !adminKey) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      const { data, error } = await supabase.functions.invoke("manual-confirm-payment", {
        body: { 
          userEmail,
          adminKey
        }
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Success!",
          description: `Payment confirmed for ${userEmail}. Found ${data.successful_payments} successful payment(s).`,
        });
        
        setUserEmail("");
        setAdminKey("");
      } else {
        throw new Error(data.error || "Manual confirmation failed");
      }
    } catch (error: any) {
      console.error("Manual confirmation error:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to confirm payment",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Admin: Manual Payment Confirmation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleManualConfirm} className="space-y-4">
            <div>
              <Label htmlFor="userEmail">User Email</Label>
              <Input
                id="userEmail"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="user@example.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="adminKey">Admin Key</Label>
              <Input
                id="adminKey"
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter admin key"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Confirming Payment...
                </>
              ) : (
                "Manually Confirm Payment"
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Instructions:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>1. Enter the email of the user who paid but didn't receive access</li>
              <li>2. Enter the admin key</li>
              <li>3. This will check Stripe for successful payments and grant access</li>
              <li>4. Works for both subscription and one-time payments</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPaymentConfirm;