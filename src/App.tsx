import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";
import Winners from "./pages/Winners";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Show loader until page + assets are fully loaded
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    // When the page is already loaded (like fast navigation)
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // ✅ On route change: scroll to top + show loader briefly while switching
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);

    // Simulate small delay just for smooth transition
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Loading show={loading} />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <AppContent />
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
