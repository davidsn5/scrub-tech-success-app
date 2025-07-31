import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.scrubtechsuccess',
  appName: 'scrub-tech-success-app',
  webDir: 'dist',
  server: {
    url: 'https://09d1e13c-b27a-4556-ab42-a09dea7d8ac6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;