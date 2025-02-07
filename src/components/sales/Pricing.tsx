
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

export const Pricing = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <PlusIcon className="w-4 h-4" />
          إضافة تسعير جديد
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((price) => (
          <Card key={price} className="p-4">
            <div className="space-y-2">
              <h3 className="font-bold">تسعير {price}</h3>
              <p className="text-sm text-muted-foreground">تفاصيل التسعير</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
