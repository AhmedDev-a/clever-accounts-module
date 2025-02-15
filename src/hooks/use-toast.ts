
import { useState } from 'react';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: JSX.Element;
  [key: string]: any;
}

export interface ToastOptions {
  title?: string;
  description?: string;
  action?: JSX.Element;
  [key: string]: any;
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (options: ToastOptions) => {
    const id = Math.random().toString(36).slice(2);
    const newToast = { id, ...options };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return {
    toast,
    toasts,
    dismissToast,
  };
}

export { type Toast, type ToastOptions };
