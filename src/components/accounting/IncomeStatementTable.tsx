import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface IncomeStatementItem {
  id: string;
  category: string;
  account: string;
  amount: number;
}

const sampleRevenues: IncomeStatementItem[] = [
  {
    id: "1",
    category: "الإيرادات التشغيلية",
    account: "المبيعات",
    amount: 200000,
  },
  {
    id: "2",
    category: "الإيرادات الأخرى",
    account: "إيرادات متنوعة",
    amount: 10000,
  },
];

const sampleExpenses: IncomeStatementItem[] = [
  {
    id: "3",
    category: "المصروفات التشغيلية",
    account: "تكلفة المبيعات",
    amount: 120000,
  },
  {
    id: "4",
    category: "المصروفات الإدارية",
    account: "رواتب وأجور",
    amount: 50000,
  },
  {
    id: "5",
    category: "المصروفات التسويقية",
    account: "مصاريف الدعاية",
    amount: 15000,
  },
];

export function IncomeStatementTable() {
  const totalRevenues = sampleRevenues.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = sampleExpenses.reduce((sum, item) => sum + item.amount, 0);
  const netIncome = totalRevenues - totalExpenses;

  return (
    <div className="space-y-8">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={3} className="text-center bg-muted/50">الإيرادات</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>التصنيف</TableHead>
              <TableHead>الحساب</TableHead>
              <TableHead className="text-left">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleRevenues.map((item) => (
              <TableRow key={item.id} className="animate-fadeIn">
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell className="text-left">
                  {item.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold bg-muted/50">
              <TableCell colSpan={2}>إجمالي الإيرادات</TableCell>
              <TableCell className="text-left">{totalRevenues.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={3} className="text-center bg-muted/50">المصروفات</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>التصنيف</TableHead>
              <TableHead>الحساب</TableHead>
              <TableHead className="text-left">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleExpenses.map((item) => (
              <TableRow key={item.id} className="animate-fadeIn">
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell className="text-left">
                  {item.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold bg-muted/50">
              <TableCell colSpan={2}>إجمالي المصروفات</TableCell>
              <TableCell className="text-left">{totalExpenses.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableBody>
            <TableRow className="font-bold text-lg">
              <TableCell colSpan={2}>صافي الربح (الخسارة)</TableCell>
              <TableCell className={`text-left ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {netIncome.toLocaleString()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}