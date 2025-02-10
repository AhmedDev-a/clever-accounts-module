
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  customerName: z.string().min(2, "اسم العميل مطلوب"),
  customerType: z.string(),
  businessType: z.string(),
  expectedBudget: z.string(),
  requiredServices: z.string(),
  specialRequirements: z.string(),
  preferredTiming: z.string(),
  contactMethod: z.string(),
});

export const CustomerRequirements = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
