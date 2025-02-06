import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomersList } from "@/components/accounting/CustomersList";

const Customers = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">العملاء</h1>
          <p className="text-muted-foreground">
            إدارة حسابات وأرصدة العملاء
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>قائمة العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomersList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Customers;