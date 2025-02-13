
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { CustomerRequirementsFormData } from "@/schemas/customerRequirements";

interface CustomerDetailsFieldsProps {
  form: UseFormReturn<CustomerRequirementsFormData>;
}

export const CustomerDetailsFields = ({ form }: CustomerDetailsFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="customerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>اسم العميل</FormLabel>
            <FormControl>
              <Input {...field} placeholder="أدخل اسم العميل" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="customerType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>نوع العميل</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع العميل" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="individual">فرد</SelectItem>
                <SelectItem value="company">شركة</SelectItem>
                <SelectItem value="government">جهة حكومية</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>نوع النشاط</FormLabel>
            <FormControl>
              <Input {...field} placeholder="أدخل نوع النشاط" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expectedBudget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>الميزانية المتوقعة</FormLabel>
            <FormControl>
              <Input {...field} placeholder="أدخل الميزانية المتوقعة" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
