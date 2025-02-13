import { Routes, Route, Link } from "react-router-dom";
import ChartOfAccounts from "./ChartOfAccounts";
import JournalEntries from "./JournalEntries";
import TrialBalance from "./TrialBalance";
import Customers from "./Customers";
import Suppliers from "./Suppliers";
import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";
import Cash from "./Cash";

const Accounting = () => (
  <div>
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
      <Route path="chart-of-accounts" element={<ChartOfAccounts />} />
      <Route path="journal-entries" element={<JournalEntries />} />
      <Route path="trial-balance" element={<TrialBalance />} />
      <Route path="customers" element={<Customers />} />
      <Route path="suppliers" element={<Suppliers />} />
      <Route path="balance-sheet" element={<BalanceSheet />} />
      <Route path="income-statement" element={<IncomeStatement />} />
      <Route path="cash" element={<Cash />} />
    </Routes>
  </div>
);

export default Accounting;