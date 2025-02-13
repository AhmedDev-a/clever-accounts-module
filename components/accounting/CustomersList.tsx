import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Customer {
  id: string;
  name: string;
  balance: number;
  phone: string;
  email: string;
}

const sampleCustomers: Customer[] = [
  {
    id: "1",
    name: "شركة الأمل التجارية",
    balance: 50000,
    phone: "0501234567",
    email: "info@alamal.com",
  },
  {
    id: "2",
    name: "مؤسسة النور",
    balance: 75000,
    phone: "0559876543",
    email: "contact@alnoor.com",
  },
];

export function CustomersList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>اسم العميل</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead className="text-left">الرصيد</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleCustomers.map((customer) => (
            <TableRow key={customer.id} className="animate-fadeIn">
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell className="text-left">
                {customer.balance.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}