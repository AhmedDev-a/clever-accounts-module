
import React from "react";
import { Toaster } from "sonner";
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
import { 
  Home, 
  Calculator, 
  Plane, 
  BookOpen 
} from "lucide-react";
import './App.css';

const queryClient = new QueryClient();

const navigation = [
  { name: "الرئيسية", href: "/", icon: Home },
  { name: "الحسابات", href: "/accounting", icon: Calculator },
  { name: "المبيعات", href: "/sales", icon: BookOpen },
  { name: "الرحلات", href: "/trips", icon: Plane },
];

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-l shadow-sm">
            <div className="p-6">
              <h1 className="text-xl font-bold text-gray-900">نظام ATMS</h1>
            </div>
            <nav className="space-y-1 px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-gray-50">
            <div className="px-8 py-6 border-b bg-white shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900">نظام إدارة وكالات السفر</h1>
              <p className="mt-1 text-gray-500">
                إدارة متكاملة للحجوزات، المبيعات، والحسابات
              </p>
            </div>

            <div className="p-8">
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
            </div>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
