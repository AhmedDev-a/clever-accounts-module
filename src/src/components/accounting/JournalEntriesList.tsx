import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface JournalEntry {
  id: string;
  date: string;
  description: string;
  debit: number;
  credit: number;
  account: string;
}

const sampleEntries: JournalEntry[] = [
  {
    id: "1",
    date: "2024-03-20",
    description: "تسجيل مبيعات نقدية",
    debit: 5000,
    credit: 0,
    account: "النقدية",
  },
  {
    id: "2",
    date: "2024-03-20",
    description: "تسجيل مبيعات نقدية",
    debit: 0,
    credit: 5000,
    account: "المبيعات",
  },
];

export function JournalEntriesList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>التاريخ</TableHead>
            <TableHead>البيان</TableHead>
            <TableHead>الحساب</TableHead>
            <TableHead className="text-left">مدين</TableHead>
            <TableHead className="text-left">دائن</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleEntries.map((entry) => (
            <TableRow key={entry.id} className="animate-fadeIn">
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.description}</TableCell>
              <TableCell>{entry.account}</TableCell>
              <TableCell className="text-left">
                {entry.debit > 0 ? entry.debit.toLocaleString() : "-"}
              </TableCell>
              <TableCell className="text-left">
                {entry.credit > 0 ? entry.credit.toLocaleString() : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}