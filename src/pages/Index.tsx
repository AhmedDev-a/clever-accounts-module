import { MetricCard } from "@/components/accounting/MetricCard";
import { Transaction, TransactionList } from "@/components/accounting/TransactionList";
import { useState } from "react";

const Index = () => {
  // Sample data - replace with real data later
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2024-03-20",
      description: "مبيعات المنتج أ",
      amount: 5000,
      type: "income",
    },
    {
      id: "2", 
      date: "2024-03-19",
      description: "مصاريف التشغيل",
      amount: 2000,
      type: "expense",
    },
    {
      id: "3",
      date: "2024-03-18", 
      description: "مبيعات المنتج ب",
      amount: 3500,
      type: "income",
    },
  ]);

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">لوحة الحسابات</h1>
          <p className="text-muted-foreground">
            تتبع الإيرادات والمصروفات وإدارة الحسابات
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <MetricCard
            title="إجمالي الإيرادات"
            value={`${totalIncome.toLocaleString()} ريال`}
            className="bg-success/10"
            trend={{ value: 12, isPositive: true }}
          />
          <MetricCard
            title="إجمالي المصروفات"
            value={`${totalExpenses.toLocaleString()} ريال`}
            className="bg-destructive/10"
            trend={{ value: 5, isPositive: false }}
          />
          <MetricCard
            title="صافي الدخل"
            value={`${netIncome.toLocaleString()} ريال`}
            className="bg-primary/10"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">المعاملات الأخيرة</h2>
          <TransactionList 
            transactions={transactions}
            className="bg-card"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;