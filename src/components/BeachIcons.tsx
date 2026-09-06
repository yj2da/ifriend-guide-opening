import React from 'react';

// Orange & White Striped Lifebuoy Badge from Slide (Pages 13-26)
export const LifebuoyBadge: React.FC<{ number: number | string; size?: number; className?: string }> = ({
  number,
  size = 44,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full font-black text-white shadow-xs shrink-0 select-none ${className}`}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle, #ff8264 30%, #f47758 100%)',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
      >
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" fill="#f07153" stroke="#e06346" strokeWidth="2" />
        
        {/* White Stripes (4 stripes like a classic lifebuoy) */}
        <path d="M 36 6 A 46 46 0 0 1 64 6 L 59 28 A 24 24 0 0 0 41 28 Z" fill="#ffffff" />
        <path d="M 36 94 A 46 46 0 0 0 64 94 L 59 72 A 24 24 0 0 1 41 72 Z" fill="#ffffff" />
        <path d="M 6 36 A 46 46 0 0 1 6 64 L 28 59 A 24 24 0 0 0 28 41 Z" fill="#ffffff" />
        <path d="M 94 36 A 46 46 0 0 0 94 64 L 72 59 A 24 24 0 0 1 72 41 Z" fill="#ffffff" />

        {/* Inner Hole */}
        <circle cx="50" cy="50" r="23" fill="#ffffff" stroke="#f47758" strokeWidth="2" />
      </svg>
      {/* Center Number */}
      <span className="relative z-10 text-[#e06346] font-black text-sm tracking-tighter drop-shadow-2xs">
        {number}
      </span>
    </div>
  );
};

// Cute Starfish from Slide
export const StarfishIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`inline-block ${className}`}
      fill="none"
    >
      <path
        d="M 50 5 
           C 54 28, 68 35, 92 40 
           C 74 54, 70 70, 78 95 
           C 57 84, 43 84, 22 95 
           C 30 70, 26 54, 8 40 
           C 32 35, 46 28, 50 5 Z"
        fill="#ff8a65"
        stroke="#e76b4b"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Subtle dots on starfish */}
      <circle cx="50" cy="48" r="3.5" fill="#ffd1c4" />
      <circle cx="50" cy="26" r="2.5" fill="#ffd1c4" />
      <circle cx="70" cy="45" r="2.5" fill="#ffd1c4" />
      <circle cx="63" cy="72" r="2.5" fill="#ffd1c4" />
      <circle cx="37" cy="72" r="2.5" fill="#ffd1c4" />
      <circle cx="30" cy="45" r="2.5" fill="#ffd1c4" />
    </svg>
  );
};

// Ocean Wave Divider SVG (From Slide Top/Bottom)
export const WaveDivider: React.FC<{ flip?: boolean; className?: string }> = ({
  flip = false,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${className} ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-12"
      >
        <path
          d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
          fill="#ffffff"
          opacity="0.9"
        />
        <path
          d="M0,20 C180,100 400,-10 600,70 C800,130 1000,30 1200,60 L1200,120 L0,120 Z"
          fill="#fef8ee"
        />
      </svg>
    </div>
  );
};
