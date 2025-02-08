
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
  ArrowUpDown,
  FileCheck,
  CreditCard,
  CheckCircle,
  AlertCircle
} from "lucide-react";

// Sample data structure
const sampleTrips = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    orderStatus: "pending_payment_review",
    paymentStatus: "under_review",
    paymentDetails: {
      totalAmount: 50000,
      paidAmount: 25000,
      remainingAmount: 25000,
      reviewNotes: "في انتظار مراجعة قسم الحسابات"
    },
    operations: [
      { type: "visa", status: "pending", title: "إصدار التأشيرة", order: 1 },
      { type: "flight", status: "pending", title: "حجز تذاكر الطيران", order: 2 },
      { type: "hotel", status: "pending", title: "حجز الفنادق", order: 3 },
      { type: "transport", status: "pending", title: "ترتيب الانتقالات", order: 4 },
      { type: "exhibition", status: "pending", title: "حجز معرض الوحي", order: 5 }
    ],
    additionalServices: [
      { type: "restaurant", status: "pending", title: "حجوزات مطاعم" },
      { type: "tour", status: "pending", title: "جولات سياحية" },
      { type: "vip", status: "pending", title: "خدمات VIP" }
    ],
    notifications: {
      delegateNotified: false,
      customerServiceNotified: false,
      whatsappGroupCreated: false
    }
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
    cancelled: "bg-red-500",
    under_review: "bg-purple-500"
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
                  {trip.paymentStatus === "under_review" ? "قيد مراجعة الدفع" : "تم تأكيد الدفع"}
                </Badge>
              </div>
            </div>

            {/* Payment Status Section */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                حالة الدفع
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">المبلغ الكلي</p>
                  <p className="font-medium">{trip.paymentDetails.totalAmount} ريال</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">المدفوع</p>
                  <p className="font-medium">{trip.paymentDetails.paidAmount} ريال</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">المتبقي</p>
                  <p className="font-medium">{trip.paymentDetails.remainingAmount} ريال</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ملاحظات المراجعة</p>
                  <p className="font-medium">{trip.paymentDetails.reviewNotes}</p>
                </div>
              </div>
            </div>

            {/* Primary Operations */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                أوامر التشغيل الأساسية
              </h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>الترتيب</TableHead>
                    <TableHead>العملية</TableHead>
                    <TableHead>الحالة</TableHead>
                    <TableHead>الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trip.operations.sort((a, b) => a.order - b.order).map((op, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{op.order}</TableCell>
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

            {/* Additional Services */}
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Crown className="w-5 h-5" />
                الخدمات الإضافية
              </h4>
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

            {/* Notifications and Management Section */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="w-4 h-4" />
                إشعار المناديب
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
                تعديل ترتيب العمليات
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

