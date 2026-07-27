import React from 'react'
import { useForm } from 'react-hook-form'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { submitContactForm, useFormSubmit } from '@hooks/useFormSubmit'
import { validators } from '@utils/validators'
import { formatPhone } from '@utils/formatPhone'
import { Phone, Mail, Clock, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react'

export function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      subject: '',
      message: '',
    },
  })

  const { onSubmit, status, error, reset: resetStatus } = useFormSubmit(submitContactForm)

  const phoneValue = watch('phone')

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted, { shouldValidate: true })
  }

  const handleFormSubmit = async (data) => {
    await onSubmit(data)
    resetForm()
  }

  if (status === 'success') {
    return (
      <>
        <SEOHead title="Contact Us" description="Get in touch with the low voltage and smart home design crew at HiLoPros." />
        <section className="py-10 flex items-center justify-center">
          <Card className="max-w-md mx-auto border-brand-teal/30 p-8 text-center animate-fade-in">
            <Card.Body className="flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal">
                <CheckCircle2 size={36} />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-white">Message Sent!</h3>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Thank you for contacting HiLoPros. We have received your inquiry and will respond as soon as possible.
                </p>
              </div>
              <Button variant="outline" size="sm" onClick={resetStatus}>
                Send Another Message
              </Button>
            </Card.Body>
          </Card>
        </section>
      </>
    )
  }

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact HiLoPros. Reach out via email, phone, or submit our online contact form to ask about smart home installations or structured network cabling."
      />

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Get In Touch"
            title="We're Here to Assist"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Contact Info cards */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-1">
              <h3 className="font-display font-black text-2xl text-white">
                Contact Details
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Have questions about a pending blueprint pre-wire or want to schedule a WiFi network tune-up? Connect with our crew.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href="tel:7045550199"
                  className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/2 hover:border-brand-teal/20 transition-all text-left"
                >
                  <div className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Call Us</span>
                    <span className="text-sm font-bold text-white block mt-0.5">(704) 555-0199</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@hilopros.com"
                  className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/2 hover:border-brand-teal/20 transition-all text-left"
                >
                  <div className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Email Us</span>
                    <span className="text-sm font-bold text-white block mt-0.5">info@hilopros.com</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/2">
                  <div className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Service Coverage</span>
                    <span className="text-sm font-bold text-white block mt-0.5">Charlotte, NC & Surrounding Cities</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/2">
                  <div className="p-2.5 rounded-lg bg-brand-teal/10 text-brand-teal">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">Operating Hours</span>
                    <span className="text-xs text-gray-300 block mt-1 leading-relaxed">
                      Mon – Fri: 8:00 AM – 6:00 PM <br />
                      Sat: 9:00 AM – 3:00 PM <br />
                      Sun: Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 order-2 lg:order-2">
              <Card className="border-white/5" hover={false} glass={true}>
                <Card.Header>
                  <h4 className="font-display font-bold text-lg text-white">Send Us a Message</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out the form below and we'll route your request to the correct specialist.
                  </p>
                </Card.Header>
                <Card.Body>
                  <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs flex items-center gap-2">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                        placeholder="John Doe"
                        {...register('name', validators.name)}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    </div>

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
                        </select>
                        {errors.preferredContact && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.preferredContact.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Subject *
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all"
                          placeholder="Inquiry about new pre-wire, home automation, etc..."
                          {...register('subject', validators.required('Subject'))}
                        />
                        {errors.subject && (
                          <p className="text-xs text-red-400 mt-1.5">{errors.subject.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all resize-none"
                        placeholder="Please write details about your technology installation or question..."
                        {...register('message', validators.message)}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>
                      )}
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full" isLoading={status === 'loading'}>
                      Submit Message
                    </Button>
                  </form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Contact
