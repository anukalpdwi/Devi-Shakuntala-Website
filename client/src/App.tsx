import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Home from "@/pages/Home";
import ProgramDetails from "@/pages/ProgramDetails";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsApp from "@/components/home/WhatsApp";
import BackToTop from "@/components/layout/BackToTop";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programs/:id" component={ProgramDetails} />
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
