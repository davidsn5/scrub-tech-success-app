
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { FeatureFlagsProvider } from "@/contexts/FeatureFlagsContext";
import AuthModal from "@/components/AuthModal";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import StudyCategory from "./pages/StudyCategory";
import Flashcards from "./pages/Flashcards";
import IntroSurgicalTech from "./pages/IntroSurgicalTech";
import PrinciplesPractice from "./pages/PrinciplesPractice";
import MedicalTerminology from "./pages/MedicalTerminology";
import FireQuiz from "./pages/FireQuiz";
import MissedQuestions from "./pages/MissedQuestions";
import ExamSimulation from "./pages/ExamSimulation";
import AccountManagement from "./pages/AccountManagement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CopyrightNotice from "./pages/CopyrightNotice";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import Preview from "./pages/Preview";
import KeyTermGames from "./pages/KeyTermGames";
import InstrumentationFlashcards from "./pages/InstrumentationFlashcards";
import VisualResources from "./pages/VisualResources";

const queryClient = new QueryClient();

const AppContent = () => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/copyright-notice" element={<CopyrightNotice />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected Routes - Require subscription */}
        <Route path="/flashcards" element={<ProtectedRoute><Flashcards /></ProtectedRoute>} />
        <Route path="/study/:category" element={<ProtectedRoute><StudyCategory /></ProtectedRoute>} />
        <Route path="/intro-surgical-tech" element={<ProtectedRoute><IntroSurgicalTech /></ProtectedRoute>} />
        <Route path="/principles-practice" element={<ProtectedRoute><PrinciplesPractice /></ProtectedRoute>} />
        <Route path="/medical-terminology" element={<ProtectedRoute><MedicalTerminology /></ProtectedRoute>} />
        <Route path="/fire-quiz" element={<FireQuiz />} />
        <Route path="/missed-questions" element={<ProtectedRoute><MissedQuestions /></ProtectedRoute>} />
        <Route path="/exam-simulation" element={<ProtectedRoute><ExamSimulation /></ProtectedRoute>} />
        <Route path="/account" element={<ProtectedRoute><AccountManagement /></ProtectedRoute>} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/key-term-games" element={<KeyTermGames />} />
        <Route path="/instrumentation-flashcards" element={<InstrumentationFlashcards />} />
        <Route path="/visual-resources" element={<ProtectedRoute><VisualResources /></ProtectedRoute>} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Site-wide Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <FeatureFlagsProvider>
            <AppContent />
          </FeatureFlagsProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
