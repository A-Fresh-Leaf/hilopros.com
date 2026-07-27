import React from 'react'
import { cn } from '../../utils/cn'

/**
 * Reusable full-page or inline Loader component.
 */
export function Loader({ fullPage = false, className }) {
  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-darker">
        <div className="relative flex items-center justify-center">
          {/* Logo Outline or Spinner */}
          <div className="w-16 h-16 border-4 border-brand-teal/20 border-t-brand-teal rounded-full animate-spin" />
          <div className="absolute font-black text-brand-teal text-xs tracking-widest uppercase">
            HiLo
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold tracking-widest text-gray-400 uppercase animate-pulse">
          Loading Tech Standards...
        </p>
      </div>
    )
  }

  return (
    <div className={cn('flex items-center justify-center p-8', className)}>
      <div className="w-10 h-10 border-4 border-brand-teal/20 border-t-brand-teal rounded-full animate-spin" />
    </div>
  )
}
