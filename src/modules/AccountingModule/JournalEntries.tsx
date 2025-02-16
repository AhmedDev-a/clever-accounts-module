import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JournalEntriesList } from "@/components/accounting/JournalEntriesList";

const JournalEntries = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">القيود المحاسبية</h1>
          <p className="text-muted-foreground">
            إدارة وعرض القيود المحاسبية
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>القيود</CardTitle>
          </CardHeader>
          <CardContent>
            <JournalEntriesList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JournalEntries;