import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { QuoteForm } from '@components/sections/QuoteForm'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

export function Quote() {
  return (
    <>
      <SEOHead
        title="Get a Free Quote"
        description="Tell us about your low voltage or smart home automation needs and request a free estimate from HiLoPros tech experts."
      />

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Online Estimate"
            title="Request a Free Custom Quote"
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
            {/* Quote Form Column */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <QuoteForm />
            </div>

            {/* Sidebar Support Column */}
            <div className="lg:col-span-4 space-y-6 order-1 lg:order-2">
              <div className="glass p-6 rounded-xl border border-white/5 space-y-4">
                <h4 className="font-display font-bold text-white text-base">What happens next?</h4>
                
                <div className="space-y-4">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-white">Review</h5>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        Our technicians review your requested services, timeline, and ZIP code parameters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-white">Consultation</h5>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        We reach out via email or phone to confirm details, clarify blueprint specs, or book an onsite walk-through.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3.5 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-white">Estimate</h5>
                      <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                        You receive a detailed breakdown of hardware, cabling runs, labor estimates, and setup configurations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="glass p-6 rounded-xl border border-white/5 space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-brand-teal shrink-0" />
                  <span className="text-xs font-semibold text-white">No-Obligation Estimating</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed">
                  All requests and phone design sessions are 100% free with no commitment required. We suggest only what is required for modular efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Quote
