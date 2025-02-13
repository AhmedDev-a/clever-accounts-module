
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Treasury = () => {
  return (
    <div className="p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">الخزينة</h2>
            <p className="text-muted-foreground">إدارة النقد والمدفوعات والإيصالات</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            إضافة معاملة جديدة
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>الرصيد الحالي</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">٥٠,٠٠٠ ريال</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>المدفوعات اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-red-500">-١٠,٠٠٠ ريال</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>المقبوضات اليوم</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-500">+١٥,٠٠٠ ريال</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>سجل المعاملات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center text-muted-foreground">
              لا توجد معاملات حتى الآن
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Treasury;
