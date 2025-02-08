
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, FileText, UserCheck, Calculator, HandshakeIcon, CreditCard, PlayIcon, CheckCircle } from "lucide-react";

const orderStatuses = {
  new: { label: "طلب جديد", color: "bg-blue-500" },
  pricing: { label: "قيد التسعير", color: "bg-yellow-500" },
  negotiation: { label: "قيد التفاوض", color: "bg-purple-500" },
  contract: { label: "في مرحلة العقد", color: "bg-orange-500" },
  payment: { label: "في مرحلة الدفع", color: "bg-green-500" },
  execution: { label: "قيد التنفيذ", color: "bg-indigo-500" },
  completed: { label: "مكتمل", color: "bg-gray-500" }
};

const sampleOrders = [
  {
    id: 1,
    customerName: "شركة السياحة العالمية",
    status: "new",
    services: ["تذاكر طيران", "حجز فندق", "تأشيرة"],
    totalAmount: 15000,
    paidAmount: 0
  },
  {
    id: 2,
    customerName: "مؤسسة السفر الذهبية",
    status: "payment",
    services: ["باقة VIP", "تذاكر طيران"],
    totalAmount: 25000,
    paidAmount: 12500
  }
];

export const Orders = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          إضافة طلب جديد
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleOrders.map((order) => (
          <Card key={order.id} className="p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{order.customerName}</h3>
                  <p className="text-sm text-muted-foreground">طلب #{order.id}</p>
                </div>
                <Badge variant="secondary" className={`${orderStatuses[order.status].color} text-white`}>
                  {orderStatuses[order.status].label}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {order.services.map((service, index) => (
                    <Badge key={index} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-1">
                  <p className="text-sm">
                    المبلغ الكلي: {order.totalAmount.toLocaleString()} ريال
                  </p>
                  <p className="text-sm">
                    المدفوع: {order.paidAmount.toLocaleString()} ريال
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <FileText className="w-4 h-4" />
                  التفاصيل
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <HandshakeIcon className="w-4 h-4" />
                  التفاوض
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <PlayIcon className="w-4 h-4" />
                  بدء التنفيذ
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-bold mb-4">مراحل تنفيذ الطلب</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <UserCheck className="w-8 h-8 text-blue-500" />
              <div>
                <h4 className="font-bold">استلام الطلب</h4>
                <p className="text-sm text-muted-foreground">تسجيل متطلبات العميل</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Calculator className="w-8 h-8 text-yellow-500" />
              <div>
                <h4 className="font-bold">التسعير والتفاوض</h4>
                <p className="text-sm text-muted-foreground">دراسة وتحديد الأسعار</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-green-500" />
              <div>
                <h4 className="font-bold">الدفع والتعاقد</h4>
                <p className="text-sm text-muted-foreground">توقيع العقد والدفعة الأولى</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-indigo-500" />
              <div>
                <h4 className="font-bold">التنفيذ والتسليم</h4>
                <p className="text-sm text-muted-foreground">تنفيذ الخدمات وتسليمها</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
