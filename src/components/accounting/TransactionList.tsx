import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense";
}

interface TransactionListProps {
  transactions: Transaction[];
  className?: string;
}

export function TransactionList({ transactions, className }: TransactionListProps) {
  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>التاريخ</TableHead>
            <TableHead>الوصف</TableHead>
            <TableHead className="text-right">المبلغ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id} className="animate-fadeIn">
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell className={cn(
                "text-right font-medium",
                transaction.type === "income" ? "text-success" : "text-destructive"
              )}>
                {transaction.type === "income" ? "+" : "-"}
                {transaction.amount.toLocaleString()} ريال
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}