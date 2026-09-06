import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40, showText = false }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div 
        className="relative flex items-center justify-center select-none group-hover:scale-105 transition-transform duration-300"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(88,166,255,0.25)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* S-curves Gradient */}
            <linearGradient id="logo-s-gradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" /> {/* Purple */}
              <stop offset="50%" stopColor="#6366F1" /> {/* Indigo */}
              <stop offset="100%" stopColor="#3B82F6" /> {/* Blue */}
            </linearGradient>

            {/* Lightning Gradient */}
            <linearGradient id="logo-lightning-gradient" x1="40" y1="30" x2="60" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F0FF" /> {/* Cyan */}
              <stop offset="100%" stopColor="#3B82F6" /> {/* Royal Blue */}
            </linearGradient>

            {/* Speed Lines Gradients */}
            <linearGradient id="speed-left" x1="40" y1="0" x2="15" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="speed-right" x1="60" y1="0" x2="85" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Speed Lines - Left */}
          <path d="M 40,58 L 15,58" stroke="url(#speed-left)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 37,62 L 20,62" stroke="url(#speed-left)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Speed Lines - Right */}
          <path d="M 60,38 L 85,38" stroke="url(#speed-right)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 63,42 L 80,42" stroke="url(#speed-right)" strokeWidth="1.2" strokeLinecap="round" />

          {/* Upper "S" Segment */}
          <path
            d="M 28,45 C 28,34 36,26 48,26 L 67,26 C 69,26 70,27.5 68.5,29 L 57.5,41 C 55.5,43 51,44 47,44 L 28,44 Z"
            fill="url(#logo-s-gradient)"
          />

          {/* Lower "S" Segment */}
          <path
            d="M 72,55 C 72,66 64,74 52,74 L 33,74 C 31,74 30,72.5 31.5,71 L 42.5,59 C 44.5,57 49,56 53,56 L 72,56 Z"
            fill="url(#logo-s-gradient)"
          />

          {/* Central Lightning Bolt */}
          <path
            d="M 67,26 L 37,60 L 52,60 L 33,74 L 63,40 L 48,40 L 67,26 Z"
            fill="url(#logo-lightning-gradient)"
            className="group-hover:animate-pulse"
            style={{ transformOrigin: 'center' }}
          />

          {/* Sparkle Star - Top Right */}
          <path
            d="M 74,21 Q 74,25 78,25 Q 74,25 74,29 Q 74,25 70,25 Q 74,25 74,21 Z"
            fill="#A855F7"
          />

          {/* Sparkle Star - Bottom Left */}
          <path
            d="M 26,71 Q 26,75 30,75 Q 26,75 26,79 Q 26,75 22,75 Q 26,75 26,71 Z"
            fill="#00F0FF"
          />
        </svg>
      </div>

      {showText && (
        <div>
          <span className="font-display font-bold text-lg tracking-wider text-white block leading-none">
            Spark Station
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#58A6FF] font-semibold mt-1 block">
            Digital Agency
          </span>
        </div>
      )}
    </div>
  );
};
