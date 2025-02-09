
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
  MessageSquare, 
  FileText, 
  Calculator,
  HandshakeIcon,
  Check,
  CalendarClock
} from "lucide-react";

// Sample data structure
const sampleNegotiations = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    requestDate: "2024-03-25",
    status: "pricing_review", // pricing_review, negotiation, approved, contract_signed
    services: [
      { name: "تذاكر طيران", initialPrice: 5000, finalPrice: 4800 },
      { name: "إقامة فندقية", initialPrice: 3000, finalPrice: 3000 },
    ],
    lastUpdate: "2024-03-26",
    nextStep: "مراجعة التسعير"
  },
  {
    id: "2",
    customerName: "مؤسسة السفر الذهبية",
    requestDate: "2024-03-24",
    status: "contract_signed",
    services: [
      { name: "باقة VIP", initialPrice: 15000, finalPrice: 14000 },
      { name: "تذاكر طيران", initialPrice: 8000, finalPrice: 7500 },
    ],
    lastUpdate: "2024-03-25",
    nextStep: "تم توقيع العقد"
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig: Record<string, { label: string, className: string }> = {
    pricing_review: { label: "قيد مراجعة التسعير", className: "bg-blue-500" },
    negotiation: { label: "قيد التفاوض", className: "bg-yellow-500" },
    approved: { label: "تمت الموافقة", className: "bg-green-500" },
    contract_signed: { label: "تم توقيع العقد", className: "bg-purple-500" }
  };
  return statusConfig[status] || { label: "غير محدد", className: "bg-gray-500" };
};

export const Negotiations = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <Calculator className="w-4 h-4" />
          تسعير جديد
        </Button>
      </div>

      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>رقم المفاوضة</TableHead>
              <TableHead>العميل</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>التفاصيل</TableHead>
              <TableHead>آخر تحديث</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleNegotiations.map((negotiation) => (
              <TableRow key={negotiation.id}>
                <TableCell>#{negotiation.id}</TableCell>
                <TableCell>{negotiation.customerName}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary" 
                    className={`${getStatusBadge(negotiation.status).className} text-white`}
                  >
                    {getStatusBadge(negotiation.status).label}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    {negotiation.services.map((service, index) => (
                      <div key={index} className="text-sm">
                        {service.name}:{' '}
                        <span className="line-through text-gray-500">
                          {service.initialPrice}
                        </span>{' '}
                        → {service.finalPrice} ريال
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm space-y-1">
                    <div>{negotiation.lastUpdate}</div>
                    <div className="text-muted-foreground">{negotiation.nextStep}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <FileText className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-8">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-bold">دراسة وتسعير</h4>
              <p className="text-sm text-muted-foreground">تحليل المتطلبات والتكلفة</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-yellow-500" />
            <div>
              <h4 className="font-bold">مفاوضات</h4>
              <p className="text-sm text-muted-foreground">مناقشة الأسعار والتفاصيل</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <HandshakeIcon className="w-8 h-8 text-green-500" />
            <div>
              <h4 className="font-bold">موافقة نهائية</h4>
              <p className="text-sm text-muted-foreground">الاتفاق على التفاصيل</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <CalendarClock className="w-8 h-8 text-purple-500" />
            <div>
              <h4 className="font-bold">توقيع العقد</h4>
              <p className="text-sm text-muted-foreground">إتمام الإجراءات الرسمية</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
