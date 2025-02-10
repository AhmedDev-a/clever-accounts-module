
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomerRequirements } from "@/components/sales/CustomerRequirements";
import { Negotiations } from "@/components/sales/Negotiations";
import { Orders } from "@/components/sales/Orders";
import { Pricing } from "@/components/sales/Pricing";

const Sales = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">المبيعات</h1>
          <p className="text-muted-foreground">
            إدارة متطلبات العملاء والتسعير والمفاوضات والطلبات
          </p>
        </div>
        <Tabs defaultValue="requirements" className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="requirements">متطلبات العملاء</TabsTrigger>
            <TabsTrigger value="pricing">التسعير</TabsTrigger>
            <TabsTrigger value="negotiations">المفاوضات</TabsTrigger>
            <TabsTrigger value="orders">الطلبات</TabsTrigger>
          </TabsList>
          <TabsContent value="requirements">
            <Card>
              <CardHeader>
                <CardTitle>متطلبات العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <CustomerRequirements />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pricing">
            <Card>
              <CardHeader>
                <CardTitle>التسعير</CardTitle>
              </CardHeader>
              <CardContent>
                <Pricing />
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
