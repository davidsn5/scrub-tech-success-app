
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import StudyCategory from "./pages/StudyCategory";
import Flashcards from "./pages/Flashcards";
import IntroSurgicalTech from "./pages/IntroSurgicalTech";
import PrinciplesPractice from "./pages/PrinciplesPractice";
import MedicalTerminology from "./pages/MedicalTerminology";
import FireQuiz from "./pages/FireQuiz";
import MissedQuestions from "./pages/MissedQuestions";
import ExamSimulation from "./pages/ExamSimulation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/study/:category" element={<StudyCategory />} />
            <Route path="/intro-surgical-tech" element={<IntroSurgicalTech />} />
            <Route path="/principles-practice" element={<PrinciplesPractice />} />
            <Route path="/medical-terminology" element={<MedicalTerminology />} />
            <Route path="/fire-quiz" element={<FireQuiz />} />
            <Route path="/missed-questions" element={<MissedQuestions />} />
            <Route path="/exam-simulation" element={<ExamSimulation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
