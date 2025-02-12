import React from 'react';

interface TooltipProviderProps {
  children: React.ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <div className="tooltip-provider">{children}</div>;
};