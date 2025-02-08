
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PlusIcon, FileText, Send, Pencil } from "lucide-react";

const samplePricing = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    services: [
      { name: "تذاكر طيران", price: 5000 },
      { name: "إقامة فندقية", price: 3000 },
      { name: "تأشيرة", price: 2000 }
    ],
    status: "قيد المراجعة",
    totalAmount: 10000,
    date: "2024-03-25"
  },
  {
    id: "2",
    customerName: "مؤسسة السفر الذهبية",
    services: [
      { name: "باقة VIP", price: 15000 },
      { name: "تذاكر طيران", price: 8000 }
    ],
    status: "موافق عليه",
    totalAmount: 23000,
    date: "2024-03-26"
  }
];

export const Pricing = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          إنشاء عرض سعر جديد
        </Button>
      </div>

      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم العرض</TableHead>
              <TableHead>العميل</TableHead>
              <TableHead>التفاصيل</TableHead>
              <TableHead>المبلغ الإجمالي</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {samplePricing.map((price) => (
              <TableRow key={price.id}>
                <TableCell>#{price.id}</TableCell>
                <TableCell>{price.customerName}</TableCell>
                <TableCell>
                  <ul className="list-disc list-inside">
                    {price.services.map((service, index) => (
                      <li key={index} className="text-sm">
                        {service.name} - {service.price.toLocaleString()} ريال
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>{price.totalAmount.toLocaleString()} ريال</TableCell>
                <TableCell>{price.status}</TableCell>
                <TableCell>{price.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Send className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
