
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FixedTrips } from "@/components/trips/FixedTrips";
import { CustomTrips } from "@/components/trips/CustomTrips";
import { FlightBookings } from "@/components/trips/FlightBookings";

const Trips = () => {
  return (
    <div className="min-h-screen bg-background p-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">الرحلات</h1>
          <p className="text-muted-foreground">
            إدارة الرحلات الثابتة والخاصة وخدمات أخرى
          </p>
        </div>
        <Tabs defaultValue="fixed" className="space-y-4">
          <TabsList>
            <TabsTrigger value="fixed">الرحلات الثابتة</TabsTrigger>
            <TabsTrigger value="custom">الرحلات الخاصة</TabsTrigger>
            <TabsTrigger value="flights">خدمات أخرى</TabsTrigger>
          </TabsList>
          <TabsContent value="fixed">
            <Card>
              <CardHeader>
                <CardTitle>الرحلات الثابتة</CardTitle>
              </CardHeader>
              <CardContent>
                <FixedTrips />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="custom">
            <Card>
              <CardHeader>
                <CardTitle>الرحلات الخاصة</CardTitle>
              </CardHeader>
              <CardContent>
                <CustomTrips />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="flights">
            <Card>
              <CardHeader>
                <CardTitle>حجوزات الطيران</CardTitle>
              </CardHeader>
              <CardContent>
                <FlightBookings />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Trips;
