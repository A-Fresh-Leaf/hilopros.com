import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Reusable Card component with clean glassmorphism styling and hover states.
 */
export function Card({ children, className, hover = true, glass = true, ...props }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/5 bg-brand-charcoal/30 overflow-hidden transition-all duration-300',
        glass && 'glass',
        hover && 'hover:-translate-y-1 hover:border-brand-teal/20 hover:bg-brand-charcoal/40 hover:shadow-card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.Header = function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pb-4 border-b border-white/5', className)} {...props}>
      {children}
    </div>
  )
}

Card.Body = function CardBody({ children, className, ...props }) {
  return (
    <div className={cn('p-6', className)} {...props}>
      {children}
    </div>
  )
}

Card.Footer = function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-4 border-t border-white/5 bg-white/2', className)} {...props}>
      {children}
    </div>
  )
}
