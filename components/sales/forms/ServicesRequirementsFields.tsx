
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { CustomerRequirementsFormData } from "@/schemas/customerRequirements";

interface ServicesRequirementsFieldsProps {
  form: UseFormReturn<CustomerRequirementsFormData>;
}

export const ServicesRequirementsFields = ({ form }: ServicesRequirementsFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="requiredServices"
        render={({ field }) => (
          <FormItem>
            <FormLabel>الخدمات المطلوبة</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="اذكر الخدمات المطلوبة بالتفصيل"
                className="min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="specialRequirements"
        render={({ field }) => (
          <FormItem>
            <FormLabel>متطلبات خاصة</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="أي متطلبات خاصة أو ملاحظات إضافية"
                className="min-h-[100px]"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
