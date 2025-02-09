
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

export const RequestForm = () => {
  const form = useForm({
    defaultValues: {
      customerName: "",
      customerType: "",
      services: "",
      requirements: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم العميل</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="أدخل اسم العميل" />
                </FormControl>
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
                    <SelectItem value="private">خاص</SelectItem>
                    <SelectItem value="fixed">ثابت</SelectItem>
                    <SelectItem value="services">خدمات</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="services"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الخدمات المطلوبة</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="حدد الخدمات المطلوبة (تذاكر، فنادق، تأشيرات، الخ)"
                    className="min-h-[100px]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>متطلبات إضافية</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="أي متطلبات أو ملاحظات إضافية"
                    className="min-h-[100px]"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            تقديم الطلب
          </Button>
        </form>
      </Form>
    </Card>
  );
};
