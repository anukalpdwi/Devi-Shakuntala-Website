import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

import Home from "@/pages/Home";
import ProgramDetails from "@/pages/ProgramDetails";
import GalleryPage from "@/pages/Gallery";
import DownloadsPage from "@/pages/Downloads";
import AllPrograms from "@/pages/AllPrograms";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsApp from "@/components/home/WhatsApp";
import BackToTop from "@/components/layout/BackToTop";

// Scroll to top component
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programs" component={AllPrograms} />
          <Route path="/programs/:id" component={ProgramDetails} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/downloads" component={DownloadsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <WhatsApp />
      <BackToTop />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
