import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ChartOfAccounts from "./ChartOfAccounts";
import JournalEntries from "./JournalEntries";
import TrialBalance from "./TrialBalance";
import Customers from "./Customers";
import Suppliers from "./Suppliers";
import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";

const حسابات = () => (
  <BrowserRouter>
    <nav className="sub-navbar">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/حسابات/دليل-الحسابات">دليل الحسابات</Link></li>
        <li className="nav-item"><Link to="/حسابات/قيود-اليومية">قيود اليومية</Link></li>
        <li className="nav-item"><Link to="/حسابات/ميزان-المراجعة">ميزان المراجعة</Link></li>
        <li className="nav-item"><Link to="/حسابات/العملاء">العملاء</Link></li>
        <li className="nav-item"><Link to="/حسابات/الموردين">الموردين</Link></li>
        <li className="nav-item"><Link to="/حسابات/الميزانية">الميزانية</Link></li>
        <li className="nav-item"><Link to="/حسابات/بيان-الدخل">بيان الدخل</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/حسابات/دليل-الحسابات" element={<ChartOfAccounts />} />
      <Route path="/حسابات/قيود-اليومية" element={<JournalEntries />} />
      <Route path="/حسابات/ميزان-المراجعة" element={<TrialBalance />} />
      <Route path="/حسابات/العملاء" element={<Customers />} />
      <Route path="/حسابات/الموردين" element={<Suppliers />} />
      <Route path="/حسابات/الميزانية" element={<BalanceSheet />} />
      <Route path="/حسابات/بيان-الدخل" element={<IncomeStatement />} />
    </Routes>
  </BrowserRouter>
);

export default حسابات;