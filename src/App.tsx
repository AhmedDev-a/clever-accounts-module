
import React from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sales from "./pages/Sales";
import Trips from "./pages/Trips";
import PricingForm from "./pages/PricingForm";
import AccountingDashboard from "./modules/AccountingModule/AccountingDashboard";
import AccountsReceivable from "./modules/AccountingModule/AccountsReceivable";
import FinancialStatements from "./modules/AccountingModule/FinancialStatements";
import GeneralLedger from "./modules/AccountingModule/GeneralLedger";
import ChartOfAccounts from "./modules/AccountingModule/ChartOfAccounts";
import JournalEntries from "./modules/AccountingModule/JournalEntries";
import TrialBalance from "./modules/AccountingModule/TrialBalance";
import Customers from "./modules/AccountingModule/Customers";
import Suppliers from "./modules/AccountingModule/Suppliers";
import Treasury from "./modules/AccountingModule/Treasury";
import './App.css';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <nav className="navbar bg-white shadow-sm">
          <ul className="nav-list flex items-center space-x-6 px-6 py-4 rtl:space-x-reverse">
            <li className="nav-item">
              <a href="/" className="text-gray-700 hover:text-gray-900">الرئيسية</a>
            </li>
            <li className="nav-item">
              <a href="/accounting" className="text-gray-700 hover:text-gray-900">الحسابات</a>
            </li>
            <li className="nav-item">
              <a href="/sales" className="text-gray-700 hover:text-gray-900">المبيعات</a>
            </li>
            <li className="nav-item">
              <a href="/trips" className="text-gray-700 hover:text-gray-900">الرحلات</a>
            </li>
          </ul>
        </nav>
        <main className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/accounting" element={<AccountingDashboard />} />
            <Route path="/accounting/receivable" element={<AccountsReceivable />} />
            <Route path="/accounting/financial" element={<FinancialStatements />} />
            <Route path="/accounting/ledger" element={<GeneralLedger />} />
            <Route path="/accounting/chart" element={<ChartOfAccounts />} />
            <Route path="/accounting/journal" element={<JournalEntries />} />
            <Route path="/accounting/trial-balance" element={<TrialBalance />} />
            <Route path="/accounting/customers" element={<Customers />} />
            <Route path="/accounting/suppliers" element={<Suppliers />} />
            <Route path="/accounting/treasury" element={<Treasury />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/pricing" element={<PricingForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
