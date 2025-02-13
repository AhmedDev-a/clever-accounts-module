import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TrialBalanceEntry {
  id: string;
  account: string;
  debit: number;
  credit: number;
}

const sampleTrialBalance: TrialBalanceEntry[] = [
  {
    id: "1",
    account: "النقدية",
    debit: 100000,
    credit: 0,
  },
  {
    id: "2",
    account: "المدينون",
    debit: 50000,
    credit: 0,
  },
  {
    id: "3",
    account: "الدائنون",
    debit: 0,
    credit: 30000,
  },
];

export function TrialBalanceTable() {
  const totalDebit = sampleTrialBalance.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = sampleTrialBalance.reduce((sum, entry) => sum + entry.credit, 0);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>الحساب</TableHead>
            <TableHead className="text-left">مدين</TableHead>
            <TableHead className="text-left">دائن</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleTrialBalance.map((entry) => (
            <TableRow key={entry.id} className="animate-fadeIn">
              <TableCell>{entry.account}</TableCell>
              <TableCell className="text-left">
                {entry.debit > 0 ? entry.debit.toLocaleString() : "-"}
              </TableCell>
              <TableCell className="text-left">
                {entry.credit > 0 ? entry.credit.toLocaleString() : "-"}
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="font-bold bg-muted/50">
            <TableCell>الإجمالي</TableCell>
            <TableCell className="text-left">{totalDebit.toLocaleString()}</TableCell>
            <TableCell className="text-left">{totalCredit.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}