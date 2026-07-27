import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEOHead } from '@components/seo/SEOHead'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { ServiceIcon } from '@components/ui/ServiceIcon'
import { services } from '@data/services'

export function Entertainment() {
  const service = services.find((s) => s.id === 'entertainment')
  if (!service) return null

  return (
    <>
      <SEOHead
        title="TV Mounting & Whole-Home Audio"
        description="Premium TV mounting with in-wall wiring, media rooms, and multi-zone whole-home audio installations. Elevate your home entertainment."
      />

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-teal mb-8 group transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <ServiceIcon icon={service.icon} color={service.color} size="lg" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-teal font-bold block">
                    Phase 1 Service
                  </span>
                  <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white">
                    {service.title}
                  </h1>
                </div>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                {service.description} We mount displays cleanly using high-quality hardware, routing cables completely inside walls. We also setup multi-zone audio networks that broadcast high-fidelity sound throughout your home.
              </p>

              {/* Showcase Entertainment Installation Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-glow group bg-brand-charcoal/20">
                <img
                  src="/entertainment.png"
                  alt="Premium Custom Home Theater AV Installation Room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute bottom-4 left-4 z-20 glass-light px-3 py-1.5 rounded-lg border border-brand-teal/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider font-mono">Premium AV Setup</span>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-xl text-white">How We Do It</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-5 border-white/5" hover={false}>
                    <h4 className="font-semibold text-white mb-2">Zero Visible Cables</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We pass all data, fiber, and power runs inside drywall cavities using safe, code-compliant conduits and outlet expansions.
                    </p>
                  </Card>
                  <Card className="p-5 border-white/5" hover={false}>
                    <h4 className="font-semibold text-white mb-2">Multi-Zone Audio Networks</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Control music in the kitchen, patio, and living room simultaneously or independently from a simple app on your phone.
                    </p>
                  </Card>
                </div>
              </div>

              <div className="bg-white/2 rounded-2xl p-6 md:p-8 border border-white/5 space-y-6">
                <h3 className="font-display font-bold text-lg text-white border-b border-white/5 pb-3">
                  Included Sub-Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feat) => {
                    const FeatIcon = feat.icon
                    return (
                      <div key={feat.label} className="flex gap-3.5 items-start">
                        <div className="p-2 rounded-lg bg-white/5 text-purple-400">
                          <FeatIcon size={16} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{feat.label}</h4>
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed">{feat.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 lg:sticky lg:top-28 order-1 lg:order-2">
              <Card className="p-6 border-purple-500/20 bg-purple-500/5" hover={false}>
                <h3 className="font-display font-bold text-xl text-white mb-3">Request AV Setup</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Ready to mount a new TV or plan out a surround sound system? Set up an estimate for clean AV installations.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>In-wall wiring verification</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Display size & mount selector</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                    <span>Whole-home audio channel plan</span>
                  </div>
                </div>
                <Button to="/quote" variant="primary" size="md" className="w-full mt-8 bg-purple-600 hover:bg-purple-700 shadow-purple-600/20 group">
                  Get Free Estimate
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Entertainment
