import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SuppliersList } from "@/components/accounting/SuppliersList";

const Suppliers = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">الموردين</h1>
          <p className="text-muted-foreground">
            إدارة حسابات وأرصدة الموردين
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>قائمة الموردين</CardTitle>
          </CardHeader>
          <CardContent>
            <SuppliersList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Suppliers;