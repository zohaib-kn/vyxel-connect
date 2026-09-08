import React from 'react';

interface LaptopFrameProps {
  children?: React.ReactNode;
  framedImageSrc?: string;
  className?: string;
  blobColor?: 'blue' | 'cyan' | 'gradient' | 'yellow' | 'purple' | 'none';
  blobPosition?: 'center' | 'left' | 'top-right';
}

export const LaptopFrame: React.FC<LaptopFrameProps> = ({
  children,
  framedImageSrc,
  className = '',
  blobColor = 'none',
  blobPosition = 'center',
}) => {
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* Background ambient lighting blob */}
      {blobColor !== 'none' && (
        <div
          aria-hidden="true"
          className={`absolute -z-10 pointer-events-none rounded-full blur-3xl opacity-35 transition-all duration-700 ${
            blobColor === 'blue'
              ? 'bg-[#007FFB]'
              : blobColor === 'cyan'
              ? 'bg-[#01E7DB]'
              : blobColor === 'yellow'
              ? 'bg-amber-400'
              : blobColor === 'purple'
              ? 'bg-purple-600'
              : 'bg-gradient-to-r from-[#007FFB] to-[#01E7DB]'
          } ${
            blobPosition === 'left'
              ? 'w-72 h-72 -left-12 top-1/4'
              : blobPosition === 'top-right'
              ? 'w-80 h-80 -right-10 -top-10'
              : 'w-96 h-96 left-1/2 -translate-x-1/2 top-1/4'
          }`}
        />
      )}

      {/* Frame Container */}
      <div className="relative w-full select-none">
        {framedImageSrc ? (
          /* Pre-composited pixel-perfect framed screenshot */
          <img
            src={framedImageSrc}
            alt="Vyxel Connect Dashboard"
            className="w-full h-auto block select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
          />
        ) : (
          /* Dynamic viewport overlay (e.g. for interactive code editor) */
          <>
            <div
              className="absolute overflow-hidden z-0 rounded-[2px]"
              style={{
                left: '11.0%',
                top: '2.15%',
                width: '78.2%',
                height: '86.5%',
              }}
            >
              {children}
            </div>

            <img
              src="/frames/laptop-frame.png"
              alt=""
              aria-hidden="true"
              className="relative w-full h-auto block pointer-events-none select-none z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
            />
          </>
        )}
      </div>
    </div>
  );
};

