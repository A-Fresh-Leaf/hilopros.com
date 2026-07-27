import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * Usage: cn('px-4 py-2', condition && 'bg-teal-500', props.className)
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
