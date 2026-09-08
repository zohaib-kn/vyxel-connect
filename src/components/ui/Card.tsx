import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'dark' | 'interactive' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const baseStyles = "rounded-2xl transition-all duration-200 overflow-hidden";

  const variantStyles = {
    default: "bg-white border border-slate-200/80 shadow-soft-sm",
    glass: "bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-soft-md hover:border-brand-200",
    dark: "bg-slate-900 border border-slate-800 text-white shadow-soft-lg",
    interactive: "bg-white border border-slate-200/80 shadow-soft-sm hover:shadow-soft-lg hover:-translate-y-1 hover:border-brand-300 cursor-pointer",
    bordered: "bg-transparent border border-slate-200",
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
};
