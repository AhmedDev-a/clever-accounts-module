
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
  Plane, 
  Hotel, 
  Car, 
  Building, 
  UtensilsCrossed, 
  MapPin,
  Crown,
  Bell,
  Users,
  MessageSquare,
  ArrowUpDown
} from "lucide-react";

// Sample data structure
const sampleTrips = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    status: "pending_payment",
    paymentStatus: "awaiting_review",
    operations: [
      { type: "visa", status: "pending", title: "إصدار التأشيرة" },
      { type: "flight", status: "pending", title: "حجز تذاكر الطيران" },
      { type: "hotel", status: "pending", title: "حجز الفنادق" },
      { type: "transport", status: "pending", title: "ترتيب الانتقالات" },
      { type: "exhibition", status: "pending", title: "حجز معرض الوحي" }
    ],
    additionalServices: [
      { type: "restaurant", status: "pending", title: "حجوزات مطاعم" },
      { type: "tour", status: "pending", title: "جولات سياحية" },
      { type: "vip", status: "pending", title: "خدمات VIP" }
    ]
  }
];

const getStatusIcon = (type: string) => {
  switch (type) {
    case "visa": return "📄";
    case "flight": return <Plane className="w-4 h-4" />;
    case "hotel": return <Hotel className="w-4 h-4" />;
    case "transport": return <Car className="w-4 h-4" />;
    case "exhibition": return <Building className="w-4 h-4" />;
    case "restaurant": return <UtensilsCrossed className="w-4 h-4" />;
    case "tour": return <MapPin className="w-4 h-4" />;
    case "vip": return <Crown className="w-4 h-4" />;
    default: return "🔄";
  }
};

const getStatusBadge = (status: string) => {
  const statusStyles = {
    pending: "bg-yellow-500",
    in_progress: "bg-blue-500",
    completed: "bg-green-500",
    cancelled: "bg-red-500"
  };
  return statusStyles[status as keyof typeof statusStyles] || "bg-gray-500";
};

export const CustomTrips = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          إضافة رحلة خاصة
        </Button>
      </div>

      {sampleTrips.map((trip) => (
        <Card key={trip.id} className="p-4">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{trip.customerName}</h3>
                <p className="text-sm text-muted-foreground">رحلة #{trip.id}</p>
              </div>
              <div className="flex gap-2">
                <Badge variant="secondary" className={getStatusBadge(trip.paymentStatus)}>
                  {trip.paymentStatus === "awaiting_review" ? "في انتظار مراجعة الدفع" : "تم تأكيد الدفع"}
                </Badge>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">أوامر التشغيل الأساسية</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>العملية</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trip.operations.map((op, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(op.type)}
                          {op.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusBadge(op.status)}>
                          {op.status === "pending" ? "قيد الانتظار" : "مكتمل"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          تحديث
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div>
              <h4 className="font-semibold mb-2">الخدمات الإضافية</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الخدمة</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trip.additionalServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(service.type)}
                          {service.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusBadge(service.status)}>
                          {service.status === "pending" ? "قيد الانتظار" : "مكتمل"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          تحديث
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="w-4 h-4" />
                إرسال تنبيه للمناديب
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Users className="w-4 h-4" />
                إدارة المناديب
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                مجموعة الواتساب
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="w-4 h-4" />
                تعديل الترتيب
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
