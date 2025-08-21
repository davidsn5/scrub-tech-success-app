
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Study from './pages/Study';
import Auth from './pages/Auth';
import Account from './pages/Account';
import { Toaster } from "@/components/ui/toaster"
import PurchaseSuccess from './pages/PurchaseSuccess';
import PurchaseCanceled from './pages/PurchaseCanceled';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Toaster />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/study" element={<Study />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/account" element={<Account />} />
              <Route path="/purchase/success" element={<PurchaseSuccess />} />
              <Route path="/purchase/canceled" element={<PurchaseCanceled />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
