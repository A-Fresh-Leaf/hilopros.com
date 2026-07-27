import React from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@components/ui/Button'

export function ContactBanner() {
  return (
    <section className="relative overflow-hidden py-12 md:py-8 bg-gradient-to-r from-brand-teal/20 via-brand-teal-dark/10 to-transparent border-y border-white/5">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-teal/20 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Text Content */}
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Ready to Design Your Technology Infrastructure?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed font-light">
              Get in touch today for a free phone consultation or request a detailed estimate for your smart home, network, or security system.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
            <Button to="tel:7045550199" variant="secondary" size="md" className="group justify-center w-full sm:w-auto">
              <Phone className="mr-2 h-4 w-4 text-brand-teal group-hover:scale-110 transition-transform" />
              (704) 555-0199
            </Button>
            <Button to="/quote" variant="primary" size="md" className="group justify-center w-full sm:w-auto">
              Request Free Estimate
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactBanner
