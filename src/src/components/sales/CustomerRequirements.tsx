
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { customerRequirementsSchema, type CustomerRequirementsFormData } from "@/schemas/customerRequirements";
import { CustomerDetailsFields } from "./forms/CustomerDetailsFields";
import { ServicesRequirementsFields } from "./forms/ServicesRequirementsFields";
import { TimingContactFields } from "./forms/TimingContactFields";

export const CustomerRequirements = () => {
  const { toast } = useToast();
  const form = useForm<CustomerRequirementsFormData>({
    resolver: zodResolver(customerRequirementsSchema),
    defaultValues: {
      customerName: "",
      customerType: "",
      businessType: "",
      expectedBudget: "",
      requiredServices: "",
      specialRequirements: "",
      preferredTiming: "",
      contactMethod: "",
    },
  });

  const onSubmit = async (values: CustomerRequirementsFormData) => {
    console.log(values);
    toast({
      title: "تم إرسال متطلبات العميل",
      description: "سيتم مراجعة الطلب وإعداد التسعير المناسب",
    });
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomerDetailsFields form={form} />
              <ServicesRequirementsFields form={form} />
              <TimingContactFields form={form} />
            </div>

            <div className="mt-6">
              <Button type="submit" className="w-full">
                إرسال متطلبات العميل
              </Button>
            </div>
          </Card>
        </form>
      </Form>
    </div>
  );
};
