import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Reusable Badge component for categorizing services or milestones.
 */
export function Badge({
  children,
  className,
  variant = 'teal', // 'teal' | 'blue' | 'purple' | 'red' | 'yellow' | 'outline'
  ...props
}) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider'

  const variants = {
    teal: 'bg-brand-teal/10 text-brand-teal-light border border-brand-teal/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    red: 'bg-red-500/10 text-red-400 border border-red-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    outline: 'border border-gray-500/30 text-gray-400',
  }

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  )
}
