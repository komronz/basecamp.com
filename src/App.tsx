import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/hooks/use-cart";
import { CartDrawer } from "@/components/cart/CartDrawer";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Clothing from "./pages/Clothing";
import Equipment from "./pages/Equipment";
import SizeGuide from "./pages/SizeGuide";
import Safety from "./pages/Safety";
import Tips from "./pages/Tips";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <CartDrawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
