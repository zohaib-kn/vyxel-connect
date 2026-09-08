import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'whatsapp' | 'instagram' | 'messenger' | 'warning' | 'outline' | 'blue' | 'purple';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  icon,
}) => {
  const baseStyles = "inline-flex items-center font-bold tracking-tight rounded-full";

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
  };

  const variantStyles = {
    default: "bg-slate-100 text-slate-700 border border-slate-200/80",
    whatsapp: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    instagram: "bg-pink-50 text-pink-700 border border-pink-200",
    messenger: "bg-blue-50 text-blue-700 border border-blue-200",
    warning: "bg-amber-50 text-amber-800 border border-amber-200",
    outline: "bg-transparent text-slate-600 border border-slate-300",
    blue: "bg-brand-50 text-brand-700 border border-brand-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
