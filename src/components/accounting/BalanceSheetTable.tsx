import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface BalanceSheetItem {
  id: string;
  category: string;
  account: string;
  amount: number;
}

const sampleAssets: BalanceSheetItem[] = [
  {
    id: "1",
    category: "الأصول المتداولة",
    account: "النقدية",
    amount: 100000,
  },
  {
    id: "2",
    category: "الأصول المتداولة",
    account: "المدينون",
    amount: 50000,
  },
  {
    id: "3",
    category: "الأصول الثابتة",
    account: "المباني",
    amount: 500000,
  },
];

const sampleLiabilities: BalanceSheetItem[] = [
  {
    id: "4",
    category: "الخصوم المتداولة",
    account: "الدائنون",
    amount: 30000,
  },
  {
    id: "5",
    category: "حقوق الملكية",
    account: "رأس المال",
    amount: 620000,
  },
];

export function BalanceSheetTable() {
  const totalAssets = sampleAssets.reduce((sum, item) => sum + item.amount, 0);
  const totalLiabilities = sampleLiabilities.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="space-y-8">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={3} className="text-center bg-muted/50">الأصول</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>التصنيف</TableHead>
              <TableHead>الحساب</TableHead>
              <TableHead className="text-left">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleAssets.map((item) => (
              <TableRow key={item.id} className="animate-fadeIn">
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell className="text-left">
                  {item.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold bg-muted/50">
              <TableCell colSpan={2}>إجمالي الأصول</TableCell>
              <TableCell className="text-left">{totalAssets.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead colSpan={3} className="text-center bg-muted/50">الخصوم وحقوق الملكية</TableHead>
            </TableRow>
            <TableRow>
              <TableHead>التصنيف</TableHead>
              <TableHead>الحساب</TableHead>
              <TableHead className="text-left">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleLiabilities.map((item) => (
              <TableRow key={item.id} className="animate-fadeIn">
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.account}</TableCell>
                <TableCell className="text-left">
                  {item.amount.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold bg-muted/50">
              <TableCell colSpan={2}>إجمالي الخصوم وحقوق الملكية</TableCell>
              <TableCell className="text-left">{totalLiabilities.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}