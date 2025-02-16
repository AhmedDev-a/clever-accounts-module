import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TreeView } from "@/components/accounting/TreeView";

const ChartOfAccounts = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">شجرة الحسابات</h1>
          <p className="text-muted-foreground">
            عرض وإدارة الهيكل المحاسبي للشركة
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>الحسابات</CardTitle>
          </CardHeader>
          <CardContent>
            <TreeView />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChartOfAccounts;