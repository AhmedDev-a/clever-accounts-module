
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Customers } from "@/components/sales/Customers";
import { Contacts } from "@/components/sales/Contacts";
import { Visits } from "@/components/sales/Visits";
import { CustomerRequirements } from "@/components/sales/CustomerRequirements";
import { Negotiations } from "@/components/sales/Negotiations";
import { Orders } from "@/components/sales/Orders";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">المبيعات</h1>
          <p className="text-muted-foreground">
            إدارة العملاء والمبيعات وعمليات التفاوض
          </p>
        </div>
        <Tabs defaultValue="customers" className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="customers">العملاء</TabsTrigger>
            <TabsTrigger value="contacts">الاتصالات</TabsTrigger>
            <TabsTrigger value="visits">الزيارات</TabsTrigger>
            <TabsTrigger value="requirements">متطلبات العميل</TabsTrigger>
            <TabsTrigger value="negotiations">المفاوضات</TabsTrigger>
            <TabsTrigger value="orders">الطلبات</TabsTrigger>
          </TabsList>
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>قائمة العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <Customers />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>سجل الاتصالات</CardTitle>
              </CardHeader>
              <CardContent>
                <Contacts />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="visits">
            <Card>
              <CardHeader>
                <CardTitle>الزيارات</CardTitle>
              </CardHeader>
              <CardContent>
                <Visits />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>متطلبات العميل</CardTitle>
              </CardHeader>
              <CardContent>
                <CustomerRequirements />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="negotiations">
            <Card>
              <CardHeader>
                <CardTitle>المفاوضات</CardTitle>
              </CardHeader>
              <CardContent>
                <Negotiations />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>الطلبات</CardTitle>
              </CardHeader>
              <CardContent>
                <Orders />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Sales;
