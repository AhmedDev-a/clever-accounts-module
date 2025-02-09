
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
import { Badge } from "@/components/ui/badge";
import { 
  PlusIcon, 
  FileText, 
  Send, 
  Pencil,
  Calculator,
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const samplePricing = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    services: [
      { name: "تذاكر طيران", price: 5000, status: "pending" },
      { name: "إقامة فندقية", price: 3000, status: "approved" },
      { name: "تأشيرة", price: 2000, status: "pending" }
    ],
    status: "pending_review",
    totalAmount: 10000,
    paymentStatus: {
      initialPayment: false,
      fullPayment: false,
      reviewNotes: "في انتظار الدفعة الأولى"
    },
    date: "2024-03-25"
  },
  {
    id: "2",
    customerName: "مؤسسة السفر الذهبية",
    services: [
      { name: "باقة VIP", price: 15000, status: "approved" },
      { name: "تذاكر طيران", price: 8000, status: "approved" }
    ],
    status: "approved",
    totalAmount: 23000,
    paymentStatus: {
      initialPayment: true,
      fullPayment: false,
      reviewNotes: "تم استلام الدفعة الأولى"
    },
    date: "2024-03-26"
  }
];

const getStatusBadge = (status: string) => {
  const statusStyles = {
    pending: "bg-yellow-500",
    pending_review: "bg-purple-500",
    approved: "bg-green-500",
    rejected: "bg-red-500"
  };
  return statusStyles[status as keyof typeof statusStyles] || "bg-gray-500";
};

export const Offers = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <Calculator className="w-4 h-4" />
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
              <TableHead>حالة الدفع</TableHead>
              <TableHead>المبلغ الإجمالي</TableHead>
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
                  <ul className="list-disc list-inside space-y-1">
                    {price.services.map((service, index) => (
                      <li key={index} className="text-sm">
                        {service.name} - {service.price.toLocaleString()} ريال
                        <Badge 
                          variant="outline" 
                          className={`mr-2 ${
                            service.status === 'approved' ? 'bg-green-500' : 'bg-yellow-500'
                          } text-white`}
                        >
                          {service.status === 'approved' ? 'معتمد' : 'قيد المراجعة'}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <Badge variant="outline" className={
                      price.paymentStatus.initialPayment ? 'bg-green-500' : 'bg-yellow-500'
                    }>
                      {price.paymentStatus.initialPayment ? 'تم الدفع الأولي' : 'في انتظار الدفع'}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {price.paymentStatus.reviewNotes}
                    </p>
                  </div>
                </TableCell>
                <TableCell>{price.totalAmount.toLocaleString()} ريال</TableCell>
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
