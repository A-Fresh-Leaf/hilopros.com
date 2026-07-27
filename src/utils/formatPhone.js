/**
 * Format a phone number string to (XXX) XXX-XXXX
 * @param {string} value - Raw phone number input
 * @returns {string} Formatted phone number
 */
export function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

/**
 * Returns the raw digit string from a formatted phone number
 */
export function rawPhone(formatted) {
  return formatted.replace(/\D/g, '')
}
