import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  badge?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  badge,
  className,
}) => {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === 'center' ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <div className={cn("flex items-center gap-2 mb-3", align === 'center' ? "justify-center" : "justify-start")}>
        {eyebrow && (
          <p className="eyebrow text-brand-600 font-extrabold tracking-[0.14em]">
            {eyebrow}
          </p>
        )}
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-slate-900 leading-[1.12]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};
