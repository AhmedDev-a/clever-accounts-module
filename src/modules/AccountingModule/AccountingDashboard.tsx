
import React from "react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  BarChart3,
  BookOpen,
  Users,
  Truck,
  Wallet,
  PieChart,
  Receipt,
} from "lucide-react";

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, description, path }) => {
  const navigate = useNavigate();
  
  return (
    <Card 
      className="p-6 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(path)}
    >
      <div className="flex items-start space-x-4 rtl:space-x-reverse">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};

const AccountingDashboard: React.FC = () => {
  const menuItems = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "دليل الحسابات",
      description: "إدارة الحسابات وتصنيفاتها",
      path: "/accounting/chart",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "قيود اليومية",
      description: "تسجيل وإدارة القيود المحاسبية",
      path: "/accounting/journal",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "ميزان المراجعة",
      description: "عرض وتحليل ميزان المراجعة",
      path: "/accounting/trial-balance",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "العملاء",
      description: "إدارة حسابات وأرصدة العملاء",
      path: "/accounting/customers",
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "الموردين",
      description: "إدارة حسابات وأرصدة الموردين",
      path: "/accounting/suppliers",
    },
    {
      icon: <Wallet className="w-6 h-6 text-primary" />,
      title: "الخزينة",
      description: "إدارة النقد والمدفوعات والإيصالات",
      path: "/accounting/treasury",
    },
    {
      icon: <PieChart className="w-6 h-6 text-primary" />,
      title: "القوائم المالية",
      description: "الميزانية وقائمة الدخل",
      path: "/accounting/financial",
    },
    {
      icon: <Receipt className="w-6 h-6 text-primary" />,
      title: "الذمم المدينة",
      description: "متابعة وتحصيل الذمم المدينة",
      path: "/accounting/receivable",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">النظام المحاسبي</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountingDashboard;
