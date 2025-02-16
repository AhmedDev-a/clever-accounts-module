import { Routes, Route, Link, Navigate } from "react-router-dom";
import ChartOfAccounts from "./ChartOfAccounts";
import JournalEntries from "./JournalEntries";
import TrialBalance from "./TrialBalance";
import Customers from "./Customers";
import Suppliers from "./Suppliers";
import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";
import Cash from "./Cash";
import AccountsReceivable from "./AccountsReceivable";  // ✅ Add this

const Accounting = () => (
  <div>
    <h1>الحسابات</h1>
    <nav className="sub-navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="chart-of-accounts">شجرة الحسابات</Link></li>
        <li className="nav-item"><Link to="journal-entries">قيود اليومية</Link></li>
        <li className="nav-item"><Link to="trial-balance">ميزان المراجعة</Link></li>
        <li className="nav-item"><Link to="customers">حسابات العملاء</Link></li>
        <li className="nav-item"><Link to="suppliers">حسابات الموردين</Link></li>
        <li className="nav-item"><Link to="balance-sheet">الميزانية العمومية</Link></li>
        <li className="nav-item"><Link to="income-statement">قائمة الدخل</Link></li>
        <li className="nav-item"><Link to="cash">الخزنة</Link></li>
      </ul>
    </nav>
    
    <Routes>
    <Routes>
  <Route path="/accounting/chart-of-accounts" element={<ChartOfAccounts />} />
  <Route path="/accounting/journal-entries" element={<JournalEntries />} />
  <Route path="/accounting/trial-balance" element={<TrialBalance />} />
  <Route path="/accounting/customers" element={<Customers />} />
  <Route path="/accounting/suppliers" element={<Suppliers />} />
  <Route path="/accounting/balance-sheet" element={<BalanceSheet />} />
  <Route path="/accounting/income-statement" element={<IncomeStatement />} />
  <Route path="/accounting/cash" element={<Cash />} />
</Routes>

    </Routes>
  </div>
);

export default Accounting;
