import { useState } from 'react'

/**
 * Form submission hook for quote and contact forms.
 * Handles loading, success, and error states.
 *
 * @param {Function} submitFn - Async function that submits the form data
 * @returns {{ onSubmit, status, error, reset }}
 */
export function useFormSubmit(submitFn) {
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    setStatus('loading')
    setError(null)

    try {
      await submitFn(data)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err?.message || 'Something went wrong. Please try again.')
    }
  }

  const reset = () => {
    setStatus('idle')
    setError(null)
  }

  return { onSubmit, status, error, reset }
}

/**
 * Simulated form submission (placeholder until CRM/webhook is configured)
 * Replace with actual API endpoint.
 */
export async function submitQuoteForm(data) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Log to console for now (replace with fetch/axios call to CRM webhook)
  console.log('Quote form submitted:', data)

  // Uncomment and configure when ready:
  // const res = await fetch('https://your-crm-webhook.com/quote', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // if (!res.ok) throw new Error('Submission failed')
}

export async function submitContactForm(data) {
  await new Promise(resolve => setTimeout(resolve, 1200))
  console.log('Contact form submitted:', data)
}
