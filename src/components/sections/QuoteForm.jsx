import React from 'react'
import { useForm } from 'react-hook-form'
import { submitQuoteForm, useFormSubmit } from '@hooks/useFormSubmit'
import { validators } from '@utils/validators'
import { formatPhone } from '@utils/formatPhone'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { CheckCircle2, AlertCircle } from 'lucide-react'

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      addressOrZip: '',
      propertyType: 'residential',
      services: [],
      projectTimeline: 'flexible',
      preferredContact: 'email',
      bestTimeToContact: '',
      referralSource: '',
      details: '',
      consent: false,
    },
  })

  const { onSubmit, status, error, reset: resetStatus } = useFormSubmit(submitQuoteForm)

  const phoneValue = watch('phone')

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted, { shouldValidate: true })
  }

  const serviceOptions = [
    { value: 'smart-home', label: 'Smart Home Automation' },
    { value: 'networking', label: 'Structured Cabling & WiFi' },
    { value: 'security', label: 'Security Cameras & Access Control' },
    { value: 'entertainment', label: 'TV Mounting & Whole-Home Audio' },
    { value: 'consulting', label: 'Technology Consulting' },
  ]

  const handleFormSubmit = async (data) => {
    await onSubmit(data)
    resetForm()
  }

  if (status === 'success') {
    return (
      <Card className="max-w-2xl mx-auto border-brand-teal/30 p-8 text-center animate-fade-in">
        <Card.Body className="flex flex-col items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
            <CheckCircle2 size={36} />
          </div>
          <div>
            <h3 className="font-display font-black text-2xl text-white">Quote Request Received!</h3>
            <p className="text-gray-400 mt-2 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. One of our tech design experts will review your request and contact you within 24 hours to discuss your project.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={resetStatus} className="mt-4">
            Submit Another Request
          </Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className="max-w-3xl mx-auto border-white/5" hover={false} glass={true}>
      <Card.Header>
        <h3 className="font-display font-bold text-xl text-white">Request an Online Quote</h3>
        <p className="text-xs text-gray-500 mt-1">
          Tell us about your low voltage or automation project and get a custom estimate.
        </p>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs flex items-center gap-2">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                placeholder="John Doe"
                {...register('fullName', validators.name)}
              />
              {errors.fullName && (
                <p className="text-xs text-red-400 mt-1.5">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                placeholder="john@example.com"
                {...register('email', validators.email)}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                placeholder="(704) 555-0199"
                {...register('phone', {
                  ...validators.phone,
                  onChange: handlePhoneChange
                })}
              />
              {errors.phone && (
                <p className="text-xs text-red-400 mt-1.5">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="addressOrZip" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Property Address or ZIP Code *
              </label>
              <input
                id="addressOrZip"
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                placeholder="123 Main St or 28201"
                {...register('addressOrZip', {
                  required: 'Property address or ZIP code is required',
                  minLength: {
                    value: 5,
                    message: 'Please enter a valid address or ZIP code (at least 5 characters)'
                  }
                })}
              />
              {errors.addressOrZip && (
                <p className="text-xs text-red-400 mt-1.5">{errors.addressOrZip.message}</p>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="border-t border-white/5 pt-6">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Property Type
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  value="residential"
                  className="accent-brand-teal"
                  {...register('propertyType')}
                />
                Residential
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                <input
                  type="radio"
                  value="commercial"
                  className="accent-brand-teal"
                  {...register('propertyType')}
                />
                Commercial
              </label>
            </div>
          </div>

          {/* Services Checklist */}
          <div className="border-t border-white/5 pt-6">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Requested Services (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((opt) => (
                <label key={opt.value} className="flex items-start gap-2.5 text-sm text-gray-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    value={opt.value}
                    className="mt-1 accent-brand-teal"
                    {...register('services')}
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Project Timeline */}
          <div className="border-t border-white/5 pt-6">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Project Timeline
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['immediate', '1-3 months', 'flexible'].map((time) => (
                <label
                  key={time}
                  className="flex items-center justify-center p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 cursor-pointer text-xs font-medium uppercase tracking-wider text-gray-300 has-[:checked]:border-brand-teal has-[:checked]:bg-brand-teal/10 has-[:checked]:text-white transition-all text-center"
                >
                  <input
                    type="radio"
                    value={time}
                    className="sr-only"
                    {...register('projectTimeline')}
                  />
                  {time}
                </label>
              ))}
            </div>
          </div>

          {/* Contact Preferences & Referral */}
          <div className="border-t border-white/5 pt-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="preferredContact" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Preferred Contact Method *
                </label>
                <select
                  id="preferredContact"
                  className="w-full bg-brand-darker border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                  {...register('preferredContact', { required: 'Please select a preferred contact method' })}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                </select>
                {errors.preferredContact && (
                  <p className="text-xs text-red-400 mt-1.5">{errors.preferredContact.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="bestTimeToContact" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Best Time to Contact
                </label>
                <input
                  id="bestTimeToContact"
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                  placeholder="e.g. Mornings, Afternoons"
                  {...register('bestTimeToContact')}
                />
              </div>
            </div>

            <div>
              <label htmlFor="referralSource" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                How did you hear about us?
              </label>
              <input
                id="referralSource"
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                placeholder="e.g. Google Search, Friend, Social Media"
                {...register('referralSource')}
              />
            </div>
          </div>

          {/* Details */}
          <div className="border-t border-white/5 pt-6">
            <label htmlFor="details" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Project Description
            </label>
            <textarea
              id="details"
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all resize-none"
              placeholder="Tell us about your project requirements, goals, or existing technology..."
              {...register('details')}
            />
          </div>

          {/* Consent Checkbox */}
          <div className="border-t border-white/5 pt-6">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="mt-1 accent-brand-teal rounded"
                {...register('consent', { required: 'You must consent to proceed' })}
              />
              <span className="text-xs text-gray-400 leading-normal text-left">
                I consent to receive calls, texts, or emails from HiLoPros regarding my service request. Message and data rates may apply. *
              </span>
            </label>
            {errors.consent && (
              <p className="text-xs text-red-400 mt-1.5">{errors.consent.message}</p>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={status === 'loading'}>
            Submit Quote Request
          </Button>
        </form>
      </Card.Body>
    </Card>
  )
}
export default QuoteForm
