import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import حسابات from "./pages/حسابات";
import المبيعات from "./pages/المبيعات";
import الرحلات from "./pages/الرحلات";
import './App.css'; // استيراد ملف CSS

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">الرئيسية</Link></li>
            <li className="nav-item"><Link to="/حسابات">حسابات</Link></li>
            <li className="nav-item"><Link to="/المبيعات">المبيعات</Link></li>
            <li className="nav-item"><Link to="/الرحلات">الرحلات</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/حسابات" element={<حسابات />} />
          <Route path="/المبيعات" element={<المبيعات />} />
          <Route path="/الرحلات" element={<الرحلات />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;