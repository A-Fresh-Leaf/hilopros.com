import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Reusable SectionTitle component for standard page headers and section headings.
 */
export function SectionTitle({
  title,
  subtitle,
  align = 'center', // 'left' | 'center'
  className,
  titleClassName,
  subtitleClassName,
  ...props
}) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-6 md:mb-8 animate-fade-in-up',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="text-sm font-bold tracking-widest text-brand-teal uppercase mb-2 block animate-fade-in delay-100">
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight section-title-heading',
          titleClassName
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          'h-1 w-20 bg-brand-teal mt-4 rounded-full',
          align === 'center' ? 'mx-auto' : 'mr-auto'
        )}
      />
    </div>
  )
}
