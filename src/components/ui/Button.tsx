import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'dark' | 'gradient' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  icon,
  iconRight,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 shadow-sm",
    lg: "text-base px-6 py-3.5 gap-2.5 shadow-md",
  };

  const variantStyles = {
    primary: "bg-[#007FFB] text-white hover:bg-[#006bd1] hover:shadow-glow-blue focus-visible:ring-[#007FFB]",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 shadow-soft-sm focus-visible:ring-slate-900",
    gradient: "bg-gradient-to-r from-[#007FFB] to-[#01E7DB] text-slate-950 font-bold hover:opacity-95 hover:shadow-glow-cyan focus-visible:ring-[#01E7DB]",
    cyan: "bg-[#01E7DB] text-slate-950 font-bold hover:bg-[#00d0c5] hover:shadow-glow-cyan focus-visible:ring-[#01E7DB]",
    whatsapp: "bg-[#007FFB] text-white font-bold hover:bg-[#006bd1] hover:shadow-glow-blue focus-visible:ring-[#007FFB]",
    outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-slate-400",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 focus-visible:ring-slate-300",
    dark: "border border-slate-700/80 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:border-slate-600 focus-visible:ring-slate-600",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('#')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {iconRight && <span className="shrink-0">{iconRight}</span>}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
};
