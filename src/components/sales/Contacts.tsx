
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Phone, MessageSquare } from "lucide-react";

const sampleContacts = [
  {
    id: "1",
    customerName: "شركة السياحة العالمية",
    type: "هاتف",
    date: "2024-03-20",
    status: "تم التواصل",
    notes: "مهتم بعرض الرحلات الصيفية",
  },
  {
    id: "2",
    customerName: "مؤسسة السفر الذهبية",
    type: "رسالة",
    date: "2024-03-19",
    status: "متابعة مطلوبة",
    notes: "طلب معلومات عن الرحلات العائلية",
  },
];

export function Contacts() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button>
          <Plus className="w-4 h-4 ml-2" />
          إضافة اتصال جديد
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>العميل</TableHead>
              <TableHead>نوع الاتصال</TableHead>
              <TableHead>التاريخ</TableHead>
              <TableHead>الحالة</TableHead>
              <TableHead>ملاحظات</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.customerName}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {contact.type === "هاتف" ? (
                      <Phone className="w-4 h-4 ml-2" />
                    ) : (
                      <MessageSquare className="w-4 h-4 ml-2" />
                    )}
                    {contact.type}
                  </div>
                </TableCell>
                <TableCell>{contact.date}</TableCell>
                <TableCell>{contact.status}</TableCell>
                <TableCell>{contact.notes}</TableCell>
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
