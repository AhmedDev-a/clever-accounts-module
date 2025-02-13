
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, MapPin } from "lucide-react";

const sampleVisits = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    date: "2024-03-25",
    time: "10:00 ص",
    location: "مقر الشركة - الرياض",
    status: "مؤكدة",
    purpose: "عرض باقات السفر الجديدة",
  },
  {
    id: "2",
    customerName: "مؤسسة السفر الذهبية",
    date: "2024-03-26",
    time: "02:00 م",
    location: "فرع العميل - جدة",
    status: "قيد التأكيد",
    purpose: "مناقشة التعاون المستقبلي",
  },
];

export function Visits() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button>
          <Plus className="w-4 h-4 ml-2" />
          جدولة زيارة جديدة
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>العميل</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>الوقت</TableHead>
              <TableHead>الموقع</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>الغرض</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleVisits.map((visit) => (
              <TableRow key={visit.id}>
                <TableCell>{visit.customerName}</TableCell>
                <TableCell>{visit.date}</TableCell>
                <TableCell>{visit.time}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 ml-2" />
                    {visit.location}
                  </div>
                </TableCell>
                <TableCell>{visit.status}</TableCell>
                <TableCell>{visit.purpose}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    تفاصيل
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
