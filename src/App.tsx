
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accounting from "./pages/Accounting";
import Sales from "./pages/Sales";
import Trips from "./pages/Trips";
import './App.css';

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
<<<<<<< HEAD
            <li className="nav-item"><Link to="/accounting">الحسابات</Link></li>
=======
            <li className="nav-item"><Link to="/chart-of-accounts">دليل الحسابات</Link></li>
            <li className="nav-item"><Link to="/journal-entries">قيود اليومية</Link></li>
            <li className="nav-item"><Link to="/trial-balance">ميزان المراجعة</Link></li>
            <li className="nav-item"><Link to="/customers">العملاء</Link></li>
            <li className="nav-item"><Link to="/suppliers">الموردين</Link></li>
            <li className="nav-item"><Link to="/balance-sheet">الميزانية العمومية</Link></li>
            <li className="nav-item"><Link to="/income-statement">قائمة الدخل</Link></li>
>>>>>>> 492fc32779b2664ca2183cf7456600877182477e
            <li className="nav-item"><Link to="/sales">المبيعات</Link></li>
            <li className="nav-item"><Link to="/trips">الرحلات</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounting/*" element={<Accounting />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
