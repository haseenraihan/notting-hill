import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UKVisa from "./pages/UKVisa";
import StudentVisa from "./pages/StudentVisa";
import VisaServices from "./pages/VisaServices";
import HajjUmrah from "./pages/HajjUmrah";
import SummerSchools from "./pages/SummerSchools";
import TravelPackages from "./pages/TravelPackages";
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
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uk-visa" element={<UKVisa />} />
          <Route path="/student-visa" element={<StudentVisa />} />
          <Route path="/visa-services" element={<VisaServices />} />
          <Route path="/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/summer-schools" element={<SummerSchools />} />
          <Route path="/travel-packages" element={<TravelPackages />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
