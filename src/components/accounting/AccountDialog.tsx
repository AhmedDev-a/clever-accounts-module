
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "الاسم يجب أن يكون أكثر من حرفين"),
  type: z.enum(["debit", "credit"]),
  balance: z.string().refine((val) => !isNaN(Number(val)), "يجب إدخال رقم صحيح"),
});

interface AccountDialogProps {
  onSave: (data: {
    name: string;
    type: "debit" | "credit";
    balance: number;
  }) => void;
  trigger?: React.ReactNode;
  defaultValues?: {
    name: string;
    type: "debit" | "credit";
    balance: number;
  };
  title?: string;
}

export function AccountDialog({
  onSave,
  trigger,
  defaultValues,
  title = "إضافة حساب جديد",
}: AccountDialogProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
      ? {
          ...defaultValues,
          balance: defaultValues.balance.toString(),
        }
      : {
          name: "",
          type: "debit",
          balance: "0",
        },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onSave({
      name: values.name,
      type: values.type,
      balance: Number(values.balance),
    });
    setOpen(false);
    form.reset();
    toast.success("تم حفظ الحساب بنجاح");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button variant="outline">إضافة حساب</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الحساب</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع الحساب</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع الحساب" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="debit">مدين</SelectItem>
                      <SelectItem value="credit">دائن</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="balance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الرصيد</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              حفظ
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
