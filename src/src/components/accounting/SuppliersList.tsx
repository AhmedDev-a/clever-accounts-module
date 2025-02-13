import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Supplier {
  id: string;
  name: string;
  balance: number;
  phone: string;
  email: string;
}

const sampleSuppliers: Supplier[] = [
  {
    id: "1",
    name: "شركة التوريدات الحديثة",
    balance: 120000,
    phone: "0512345678",
    email: "info@modern-supplies.com",
  },
  {
    id: "2",
    name: "مصنع المستقبل",
    balance: 85000,
    phone: "0598765432",
    email: "contact@future-factory.com",
  },
];

export function SuppliersList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>اسم المورد</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>البريد الإلكتروني</TableHead>
            <TableHead className="text-left">الرصيد</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleSuppliers.map((supplier) => (
            <TableRow key={supplier.id} className="animate-fadeIn">
              <TableCell>{supplier.name}</TableCell>
              <TableCell>{supplier.phone}</TableCell>
              <TableCell>{supplier.email}</TableCell>
              <TableCell className="text-left">
                {supplier.balance.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}