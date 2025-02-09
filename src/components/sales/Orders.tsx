
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, HandshakeIcon, PlayIcon } from "lucide-react";

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
    paidAmount: 0,
    customerType: "خاص",
    customerDetailsComplete: true
  },
  {
    id: 2,
    customerName: "مؤسسة السفر الذهبية",
    status: "payment",
    services: ["باقة VIP", "تذاكر طيران"],
    totalAmount: 25000,
    paidAmount: 12500,
    customerType: "ثابت",
    customerDetailsComplete: false
  }
];

export const Orders = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2" disabled>
          <PlayIcon className="w-4 h-4" />
          إضافة طلب جديد
          <span className="text-xs opacity-75">(يتطلب اكتمال بيانات العميل)</span>
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
                  <Badge variant="outline" className="mt-1">
                    {order.customerType}
                  </Badge>
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

                {!order.customerDetailsComplete && (
                  <div className="bg-yellow-50 p-2 rounded-md">
                    <p className="text-sm text-yellow-700">
                      يجب استكمال بيانات العميل قبل المتابعة
                    </p>
                  </div>
                )}
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
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
