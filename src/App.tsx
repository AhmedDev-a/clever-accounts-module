import React from "react";
import { Toaster } from "@/components/ui/Toaster";
import { Sonner } from "@/components/ui/Sonner";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sales from "./pages/Sales";
import Trips from "./pages/Trips";
import PricingForm from "./pages/PricingForm";
import AccountsReceivable from "./modules/AccountingModule/AccountsReceivable";
import FinancialStatements from "./modules/AccountingModule/FinancialStatements";
import GeneralLedger from "./modules/AccountingModule/GeneralLedger";
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/">الرئيسية</Link></li>
            <li className="nav-item"><Link to="/accounting">الحسابات</Link></li>
            <li className="nav-item"><Link to="/sales">المبيعات</Link></li>
            <li className="nav-item"><Link to="/trips">الرحلات</Link></li>
            <li className="nav-item"><Link to="/pricing">التسعير</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accounting/receivable" element={<AccountsReceivable />} />
          <Route path="/accounting/financial" element={<FinancialStatements />} />
          <Route path="/accounting/ledger" element={<GeneralLedger />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/pricing" element={<PricingForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;