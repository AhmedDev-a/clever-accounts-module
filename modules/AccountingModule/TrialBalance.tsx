import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrialBalanceTable } from "@/components/accounting/TrialBalanceTable";

const TrialBalance = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">ميزان المراجعة</h1>
          <p className="text-muted-foreground">
            عرض ميزان المراجعة للفترة المحددة
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>ميزان المراجعة</CardTitle>
          </CardHeader>
          <CardContent>
            <TrialBalanceTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrialBalance;