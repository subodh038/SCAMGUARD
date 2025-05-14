
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import DashboardPage from "./pages/DashboardPage";
import CallSimulatorPage from "./pages/CallSimulatorPage";
import ScamDatabasePage from "./pages/ScamDatabasePage";
import EducationCenterPage from "./pages/EducationCenterPage";
import SettingsPage from "./pages/SettingsPage";
import { ThemeProvider } from "./components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="scamguard-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 pb-20"> {/* Added bottom padding for the nav bar */}
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/call-simulator" element={<CallSimulatorPage />} />
                <Route path="/scam-database" element={<ScamDatabasePage />} />
                <Route path="/education-center" element={<EducationCenterPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <BottomNav />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
