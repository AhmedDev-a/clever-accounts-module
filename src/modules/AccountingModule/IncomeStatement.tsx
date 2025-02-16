import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IncomeStatementTable } from "@/components/accounting/IncomeStatementTable";

const IncomeStatement = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">قائمة الدخل</h1>
          <p className="text-muted-foreground">
            عرض قائمة الأرباح والخسائر للفترة المحددة
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>قائمة الدخل</CardTitle>
          </CardHeader>
          <CardContent>
            <IncomeStatementTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IncomeStatement;