
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { CustomerRequirementsFormData } from "@/schemas/customerRequirements";

interface TimingContactFieldsProps {
  form: UseFormReturn<CustomerRequirementsFormData>;
}

export const TimingContactFields = ({ form }: TimingContactFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="preferredTiming"
        render={({ field }) => (
          <FormItem>
            <FormLabel>التوقيت المفضل</FormLabel>
            <FormControl>
              <Input {...field} placeholder="متى يفضل العميل تنفيذ الخدمة" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="contactMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>طريقة التواصل المفضلة</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="اختر طريقة التواصل" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="phone">هاتف</SelectItem>
                <SelectItem value="email">بريد إلكتروني</SelectItem>
                <SelectItem value="whatsapp">واتساب</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
