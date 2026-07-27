import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Reusable ServiceIcon component that wraps an SVG or Lucide Icon with styled glowing background.
 */
export function ServiceIcon({
  icon: Icon,
  color = '#2E9E8A',
  className,
  size = 'md', // 'sm' | 'md' | 'lg'
  ...props
}) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-lg',
    lg: 'w-20 h-20 text-2xl',
  }

  const iconSizes = {
    sm: 18,
    md: 24,
    lg: 36,
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 relative group-hover:scale-110 group-hover:border-brand-teal/30',
        sizeClasses[size],
        className
      )}
      style={{
        boxShadow: `0 0 15px ${color}15`,
      }}
      {...props}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: color,
          filter: 'blur(8px)',
        }}
      />
      <Icon
        className="transition-colors duration-300 relative z-10"
        style={{ color }}
        size={iconSizes[size]}
      />
    </div>
  )
}
