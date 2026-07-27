/**
 * Form field validators for HiLoPros quote/contact forms
 */

export const validators = {
  required: (label = 'This field') => ({
    required: `${label} is required`,
  }),

  email: {
    required: 'Email address is required',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address',
    },
  },

  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^\(\d{3}\) \d{3}-\d{4}$/,
      message: 'Please enter a valid phone number',
    },
  },

  name: {
    required: 'Full name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
  },

  message: {
    required: 'Message is required',
    minLength: {
      value: 10,
      message: 'Please provide more detail (at least 10 characters)',
    },
    maxLength: {
      value: 1000,
      message: 'Message must be under 1000 characters',
    },
  },

  zipCode: {
    pattern: {
      value: /^\d{5}(-\d{4})?$/,
      message: 'Please enter a valid ZIP code',
    },
  },
}
