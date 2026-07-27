import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { MapPin, ShieldAlert, Sparkles } from 'lucide-react'

export function ServiceAreas() {
  return (
    <>
      <SEOHead
        title="Service Areas — Expansion Pending"
        description="HiLoPros local low voltage and smart home installations are expanding soon. Read about our pending on-site territory and active remote consulting options."
      />

      <section className="py-20 flex items-center justify-center relative overflow-hidden min-h-[75vh]">
        <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-teal/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionTitle
            subtitle="Coverage Details"
            title="Service Territory Expansion"
            align="center"
          />

          <Card className="border-brand-teal/20 bg-brand-teal/5 p-8 md:p-12 text-center" hover={false}>
            <Card.Body className="flex flex-col items-center gap-6">
              {/* Animated Map/Pending Icon */}
              <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal mb-2">
                <MapPin size={40} className="animate-bounce" />
                <div className="absolute inset-0 rounded-full border-2 border-brand-teal/30 animate-ping opacity-75" />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal-light bg-brand-teal/20 px-3 py-1 rounded-full border border-brand-teal/30">
                  Installation Coverage: Pending
                </span>
                <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                  Local On-Site Services Coming Soon
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
                  We are currently finalizing our local low voltage contractor licenses and setting up our headquarters in Charlotte, NC. Local on-site smart home, networking, and camera installations are pending and scheduled to open soon.
                </p>
              </div>

              {/* Blueprints and Remote Handoff */}
              <div className="w-full bg-white/2 rounded-xl p-5 border border-white/5 text-left max-w-lg mt-2">
                <div className="flex gap-3.5 items-start">
                  <div className="p-2 rounded-lg bg-white/5 text-brand-teal shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">Remote Design & Blueprints Active</h4>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                      While on-site cabling and terminations are pending, our **Smart Home Design Planning** and **Pre-Construction Consulting** services are fully active! We provide remote blueprints, hardware specifications, and contractor coordination nationwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button to="/contact" variant="primary" size="md">
                  Inquire Online
                </Button>
                <Button to="/quote" variant="outline" size="md">
                  Request Remote Planning
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  )
}
export default ServiceAreas
