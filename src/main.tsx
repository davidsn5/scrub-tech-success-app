import { createRoot } from 'react-dom/client'
import { Capacitor } from '@capacitor/core'
import App from './App.tsx'
import './index.css'

// Global callback for successful in-app purchases
// This is called by the Despia Native Runtime when a purchase succeeds
declare global {
  interface Window {
    iapSuccess: (data: {
      planID: string;
      transactionID: string;
      subreceipts: string;
    }) => void;
    pendingPurchaseCallback?: () => void;
  }
}

window.iapSuccess = (data) => {
  console.log('In-app purchase successful:', data);
  
  // Call the pending callback if it exists
  if (window.pendingPurchaseCallback) {
    window.pendingPurchaseCallback();
    window.pendingPurchaseCallback = undefined;
  }
};

// Initialize Capacitor
if (Capacitor.isNativePlatform()) {
  console.log('Running on native platform:', Capacitor.getPlatform())
}

createRoot(document.getElementById("root")!).render(
  <App />
);
