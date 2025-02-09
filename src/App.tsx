import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChartOfAccounts from "./pages/ChartOfAccounts";
import JournalEntries from "./pages/JournalEntries";
import TrialBalance from "./pages/TrialBalance";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import BalanceSheet from "./pages/BalanceSheet";
import IncomeStatement from "./pages/IncomeStatement";
import Sales from "./pages/Sales";
import Trips from "./pages/Trips";
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
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/chart-of-accounts">Chart of Accounts</Link></li>
            <li className="nav-item"><Link to="/journal-entries">Journal Entries</Link></li>
            <li className="nav-item"><Link to="/trial-balance">Trial Balance</Link></li>
            <li className="nav-item"><Link to="/customers">Customers</Link></li>
            <li className="nav-item"><Link to="/suppliers">Suppliers</Link></li>
            <li className="nav-item"><Link to="/balance-sheet">Balance Sheet</Link></li>
            <li className="nav-item"><Link to="/income-statement">Income Statement</Link></li>
            <li className="nav-item"><Link to="/sales">Sales</Link></li>
            <li className="nav-item"><Link to="/trips">Trips</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chart-of-accounts" element={<ChartOfAccounts />} />
          <Route path="/journal-entries" element={<JournalEntries />} />
          <Route path="/trial-balance" element={<TrialBalance />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/balance-sheet" element={<BalanceSheet />} />
          <Route path="/income-statement" element={<IncomeStatement />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;