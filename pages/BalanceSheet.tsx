import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BalanceSheetTable } from "@/components/accounting/BalanceSheetTable";

const BalanceSheet = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">الميزانية العمومية</h1>
          <p className="text-muted-foreground">
            عرض الميزانية العمومية للفترة المحددة
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>الميزانية العمومية</CardTitle>
          </CardHeader>
          <CardContent>
            <BalanceSheetTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BalanceSheet;