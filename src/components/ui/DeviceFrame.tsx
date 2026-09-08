import React from 'react';
import { cn } from '../../lib/utils';

export interface DeviceFrameProps {
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  blobColor?: 'cyan' | 'blue' | 'yellow' | 'purple' | 'gradient' | 'none';
  blobPosition?: 'left' | 'right' | 'center' | 'top-right' | 'bottom-left';
  className?: string;
  innerClassName?: string;
  notch?: boolean;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  imageSrc,
  imageAlt = "Vyxel Connect platform interface",
  children,
  blobColor = 'cyan',
  blobPosition = 'center',
  className,
  innerClassName,
  notch = true,
}) => {
  // Map blob color to tailwind classes
  const getBlobClasses = () => {
    switch (blobColor) {
      case 'cyan':
        return 'bg-[#01E7DB]/20';
      case 'blue':
        return 'bg-[#007FFB]/20';
      case 'yellow':
        return 'bg-[#ffc21a]/25';
      case 'purple':
        return 'bg-purple-500/20';
      case 'gradient':
        return 'bg-gradient-to-tr from-[#007FFB]/25 to-[#01E7DB]/25';
      case 'none':
        return 'hidden';
      default:
        return 'bg-[#01E7DB]/20';
    }
  };

  // Map blob position
  const getBlobPositionClasses = () => {
    switch (blobPosition) {
      case 'left':
        return '-left-12 -bottom-10 w-[70%] h-[70%]';
      case 'right':
        return '-right-12 -top-10 w-[70%] h-[70%]';
      case 'top-right':
        return '-right-8 -top-12 w-[65%] h-[65%]';
      case 'bottom-left':
        return '-left-16 -bottom-12 w-[75%] h-[75%]';
      case 'center':
      default:
        return 'inset-x-[10%] inset-y-[10%] w-[80%] h-[80%]';
    }
  };

  return (
    <div className={cn("relative mx-auto w-full group", className)}>
      {/* Background Soft Blurred Depth Blob */}
      {blobColor !== 'none' && (
        <div
          aria-hidden="true"
          className={cn(
            "absolute rounded-full blur-[70px] sm:blur-[90px] lg:blur-[110px] pointer-events-none -z-10 transition-all duration-700",
            getBlobClasses(),
            getBlobPositionClasses()
          )}
        />
      )}

      {/* Floating Device Frame (Tablet / Laptop Bezel) */}
      <div className="relative">
        {/* Outer Dark Bezel */}
        <div className="rounded-[1.75rem] sm:rounded-[2.25rem] lg:rounded-[2.75rem] bg-[#0c1421] p-2.5 sm:p-3.5 lg:p-4 border border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55),0_12px_28px_-8px_rgba(15,23,42,0.4)] transition-all duration-300">
          
          {/* Subtle Top Notch / Speaker / Camera Bar */}
          {notch && (
            <div className="flex items-center justify-center pb-1.5 sm:pb-2.5 pt-0.5">
              <div className="w-10 sm:w-16 h-1 sm:h-1.5 rounded-full bg-slate-800/80 border border-slate-700/40 shadow-inner flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900/90 ml-2 sm:ml-4"></div>
              </div>
            </div>
          )}

          {/* Screen Content Container (Inset with matching rounded corners) */}
          <div className={cn(
            "relative rounded-[1.2rem] sm:rounded-[1.6rem] lg:rounded-[2rem] overflow-hidden bg-[#070b14] border border-slate-800/80 shadow-inner",
            innerClassName
          )}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover block select-none"
                loading="lazy"
              />
            ) : (
              children
            )}
          </div>
        </div>

        {/* Bottom Realistic 3D Rim Drop Reflection (DealDesk Reference Detail) */}
        <div
          aria-hidden="true"
          className="mx-auto h-2 sm:h-3 w-[88%] rounded-b-[2rem] bg-gradient-to-b from-slate-400/20 via-slate-600/10 to-transparent blur-sm -mt-1 pointer-events-none"
        />
      </div>
    </div>
  );
};
