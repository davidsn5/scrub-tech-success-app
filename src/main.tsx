import { createRoot } from 'react-dom/client'
import { Capacitor } from '@capacitor/core'
import App from './App.tsx'
import './index.css'

// Initialize Capacitor
if (Capacitor.isNativePlatform()) {
  console.log('Running on native platform:', Capacitor.getPlatform())
}

createRoot(document.getElementById("root")!).render(<App />);
