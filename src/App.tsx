
import React from "react";
import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Calculator, 
  Plane, 
  BookOpen,
  MenuIcon,
  ChevronDown
} from "lucide-react";
import Index from "./pages/Index";
import Sales from "./pages/Sales";
import Trips from "./pages/Trips";
import AccountingDashboard from "./modules/AccountingModule/AccountingDashboard";
import NotFound from "./pages/NotFound";
import { Button } from "./components/ui/button";
import './App.css';

const queryClient = new QueryClient();

const navigation = [
  { 
    name: "الرئيسية", 
    href: "/", 
    icon: Home 
  },
  { 
    name: "المبيعات",
    href: "/sales",
    icon: BookOpen,
    subItems: [
      { name: "الاتصالات", href: "/sales/contacts" },
      { name: "الزيارات", href: "/sales/visits" },
      { name: "العملاء", href: "/sales/customers" },
      { name: "المتطلبات", href: "/sales/requirements" },
      { name: "التسعير", href: "/sales/pricing" },
      { name: "المفاوضات", href: "/sales/negotiations" },
      { name: "الطلبات", href: "/sales/orders" },
    ]
  },
  { 
    name: "الرحلات",
    href: "/trips",
    icon: Plane,
    subItems: [
      { name: "الرحلات الثابتة", href: "/trips/fixed" },
      { name: "الرحلات الخاصة", href: "/trips/custom" },
      { name: "خدمات أخرى", href: "/trips/services" },
    ]
  },
  { 
    name: "الحسابات",
    href: "/accounting",
    icon: Calculator,
    subItems: [
      { name: "شجرة الحسابات", href: "/accounting/chart" },
      { name: "قيود اليومية", href: "/accounting/journal" },
      { name: "ميزان المراجعة", href: "/accounting/trial-balance" },
      { name: "حسابات العملاء", href: "/accounting/customers" },
      { name: "حسابات الموردين", href: "/accounting/suppliers" },
      { name: "الميزانية العمومية", href: "/accounting/balance-sheet" },
      { name: "قائمة الدخل", href: "/accounting/income-statement" },
      { name: "الخزينة", href: "/accounting/treasury" },
    ]
  },
];

const NavigationMenu = () => {
  const location = useLocation();
  const [expanded, setExpanded] = React.useState<string | null>(null);

  return (
    <nav className="space-y-1">
      {navigation.map((item) => {
        const isActive = location.pathname === item.href;
        const isExpanded = expanded === item.name;

        return (
          <div key={item.name} className="space-y-1">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-between px-4 py-2 text-right hover:bg-gray-100",
                isActive && "bg-gray-100"
              )}
              onClick={() => setExpanded(isExpanded ? null : item.name)}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
              {item.subItems && (
                <ChevronDown 
                  className={cn(
                    "w-4 h-4 transition-transform",
                    isExpanded && "transform rotate-180"
                  )} 
                />
              )}
            </Button>

            {item.subItems && isExpanded && (
              <div className="pr-4 space-y-1">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.href}
                    to={subItem.href}
                    className={cn(
                      "block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50",
                      location.pathname === subItem.href && "bg-gray-50 text-primary"
                    )}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside 
              className={cn(
                "bg-white border-l fixed inset-y-0 right-0 z-50 w-64 transform transition-transform duration-200 ease-in-out",
                !sidebarOpen && "translate-x-full"
              )}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-4 border-b">
                  <h1 className="text-xl font-bold">نظام ATMS</h1>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <MenuIcon className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <NavigationMenu />
                </div>
              </div>
            </aside>

            {/* Main content */}
            <main 
              className={cn(
                "flex-1 transition-all duration-200 ease-in-out",
                sidebarOpen ? "mr-64" : "mr-0"
              )}
            >
              {/* Header */}
              <header className="bg-white border-b shadow-sm">
                <div className="flex items-center justify-between px-6 py-4">
                  {!sidebarOpen && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSidebarOpen(true)}
                    >
                      <MenuIcon className="w-5 h-5" />
                    </Button>
                  )}
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      نظام إدارة وكالات السفر
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                      إدارة متكاملة للحجوزات، المبيعات، والحسابات
                    </p>
                  </div>
                </div>
              </header>

              {/* Page content */}
              <div className="p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/sales/*" element={<Sales />} />
                  <Route path="/trips/*" element={<Trips />} />
                  <Route path="/accounting/*" element={<AccountingDashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
