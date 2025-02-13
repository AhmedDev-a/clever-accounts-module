import React from "react";

interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: JSX.Element;
  [key: string]: any;
}

const Toast: React.FC<ToastProps> = ({ id, title, description, action, ...props }) => {
  return (
    <div {...props}>
      <div className="grid gap-1">
        {title && <div>{title}</div>}
        {description && <div>{description}</div>}
      </div>
      {action}
    </div>
  );
};

export default Toast;