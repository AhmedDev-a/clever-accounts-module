import { useToast } from "@/hooks/use-toast";
import Toast from "@/components/ui/toast/Toast";
import ToastClose from "@/components/ui/toast/ToastClose";
import ToastDescription from "@/components/ui/toast/ToastDescription";
import { ToastProvider } from "@/components/ui/toast/ToastProvider";
import ToastTitle from "@/components/ui/toast/ToastTitle";
import ToastViewport from "@/components/ui/toast/ToastViewport";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}