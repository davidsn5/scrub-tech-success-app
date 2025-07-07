
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Study from "./pages/Study";
import StudyCategory from "./pages/StudyCategory";
import FireQuiz from "./pages/FireQuiz";
import MissedQuestions from "./pages/MissedQuestions";
import ExamSimulation from "./pages/ExamSimulation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/study" element={<Study />} />
          <Route path="/study/:category" element={<StudyCategory />} />
          <Route path="/fire-quiz" element={<FireQuiz />} />
          <Route path="/missed-questions" element={<MissedQuestions />} />
          <Route path="/exam-simulation" element={<ExamSimulation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
