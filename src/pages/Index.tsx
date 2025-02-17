
import { MetricCard } from "@/components/accounting/MetricCard";
import { Transaction, TransactionList } from "@/components/accounting/TransactionList";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Users, 
  Plane,
  Receipt,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      date: "2024-03-20",
      description: "حجز رحلة عمرة",
      amount: 15000,
      type: "income",
    },
    {
      id: "2", 
      date: "2024-03-19",
      description: "مصاريف تشغيلية",
      amount: 5000,
      type: "expense",
    },
    {
      id: "3",
      date: "2024-03-18", 
      description: "حجز فندق",
      amount: 8000,
      type: "income",
    },
  ]);

  const stats = [
    {
      title: "إجمالي الإيرادات",
      value: "23,000",
      change: "+12%",
      changeType: "positive",
      icon: ArrowUpRight,
    },
    {
      title: "إجمالي المصروفات",
      value: "5,000",
      change: "-5%",
      changeType: "negative",
      icon: ArrowDownRight,
    },
    {
      title: "الطلبات النشطة",
      value: "12",
      change: "+3",
      changeType: "positive",
      icon: Receipt,
    },
    {
      title: "العملاء الجدد",
      value: "8",
      change: "+2",
      changeType: "positive",
      icon: Users,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          طلب جديد
        </Button>
        <Button variant="outline" className="gap-2">
          <Plane className="w-4 h-4" />
          حجز رحلة
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className={`text-sm mt-1 ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`p-3 rounded-full ${
                stat.changeType === "positive" ? "bg-green-50" : "bg-red-50"
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                }`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Transactions */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">المعاملات الأخيرة</h2>
        <TransactionList 
          transactions={transactions}
          className="bg-white"
        />
      </Card>
    </div>
  );
};

export default Index;
