import React from 'react'

/**
 * HiLoPros High-Fidelity SVG Logo Mark
 * Matches the overlapping teal frame and rack-mount server emblem
 */
export function LogoMark({ className = 'w-10 h-10', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        {/* Gradients matching the teal-to-green transition in the logo */}
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E9E8A" />
          <stop offset="100%" stopColor="#1B6B5E" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E9E8A" />
          <stop offset="100%" stopColor="#4BBFAB" />
        </linearGradient>
      </defs>

      {/* Overlapping Background 3D Frames */}
      {/* Bottom-left frame layer */}
      <path
        d="M10 25 V85 H70 V75 H20 V25 H10 Z"
        fill="url(#tealGrad)"
      />
      <path
        d="M20 15 H85 V75 H75 V25 H20 V15 Z"
        fill="url(#greenGrad)"
      />

      {/* Inner Central Dark Block */}
      <rect x="25" y="25" width="45" height="45" fill="#0F172A" rx="2" />
      <rect x="25" y="25" width="45" height="45" stroke="#ffffff" strokeWidth="2.5" rx="2" />

      {/* Server Rack Spine & Bays */}
      {/* Left Vertical Spine */}
      <rect x="30" y="32" width="4" height="31" fill="#ffffff" rx="1" />

      {/* Bay 1 (Top) */}
      <rect x="34" y="34" width="28" height="7" fill="#ffffff" rx="0.5" />
      <rect x="57" y="36.5" width="2" height="2" fill="#0F172A" />

      {/* Bay 2 (Middle) */}
      <rect x="34" y="44" width="28" height="7" fill="#ffffff" rx="0.5" />

      {/* Bay 3 (Bottom) */}
      <rect x="34" y="54" width="28" height="7" fill="#ffffff" rx="0.5" />
      <rect x="54" y="56.5" width="2" height="2" fill="#0F172A" />
      <rect x="58" y="56.5" width="2" height="2" fill="#0F172A" />
    </svg>
  )
}

/**
 * HiLoPros Logo Component
 * Incorporates the emblem, main title, and subtitle tagline
 */
export function Logo({ showTagline = true, className = '', ...props }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 ${className}`} {...props}>
      <LogoMark className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 shrink-0" />
      <div className="flex flex-col justify-center leading-none">
        <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white">
          HiLo<span className="text-brand-teal">Pros</span>
        </span>
        {showTagline && (
          <span className="hidden sm:block text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-1">
            Low Voltage. High Tech Standards.
          </span>
        )}
      </div>
    </div>
  )
}
export default Logo
