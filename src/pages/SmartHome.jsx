import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { ServiceIcon } from '@components/ui/ServiceIcon'
import { services } from '@data/services'

export function SmartHome() {
  const service = services.find((s) => s.id === 'smart-home')
  if (!service) return null

  return (
    <>
      <SEOHead
        title="Smart Home Installation"
        description="Transform your home with smart lighting, retrofitted smart switches, voice assistants, and whole-home automation. Discover our expert residential integration."
      />

      <section className="py-10 relative overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-teal/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb / Back button */}
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-brand-teal mb-8 group transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
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
                {service.description} Our customized setups unify your home's ecosystem, allowing you to regulate lighting, climate, power outlets, and voice assistants through a single, secure control panel or app.
              </p>

              {/* Showcase Smart Home Installation Image */}
              <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-glow group bg-brand-charcoal/20">
                <img
                  src="/smarthome.jpg"
                  alt="Wall-Mounted Crestron Smart Home Control Panel"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute bottom-4 left-4 z-20 glass-light px-3 py-1.5 rounded-lg border border-brand-teal/20 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
                  <span className="text-[10px] text-white font-bold uppercase tracking-wider font-mono">Crestron Home Integration</span>
                </div>
              </div>

              {/* In-Depth Tech Pillars */}
              <div className="space-y-6">
                <h3 className="font-display font-bold text-xl text-white">How We Do It</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-5 border-white/5" hover={false}>
                    <h4 className="font-semibold text-white mb-2">Retrofits Without Ruin</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We install smart dimmer retrofits and switch systems within your existing wall boxes, avoiding costly wall-cutting and wiring overhauls.
                    </p>
                  </Card>
                  <Card className="p-5 border-white/5" hover={false}>
                    <h4 className="font-semibold text-white mb-2">Unbreakable Integrations</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We configure secure local integration for platforms like Apple Home, Google Assistant, or Alexa, ensuring your devices talk to each other without interruption.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Full Features list */}
              <div className="bg-white/2 rounded-2xl p-6 md:p-8 border border-white/5 space-y-6">
                <h3 className="font-display font-bold text-lg text-white border-b border-white/5 pb-3">
                  Included Sub-Services
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feat) => {
                    const FeatIcon = feat.icon
                    return (
                      <div key={feat.label} className="flex gap-3.5 items-start">
                        <div className="p-2 rounded-lg bg-white/5 text-brand-teal">
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

            {/* Sidebar CTA Card — shown first on mobile */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 order-1 lg:order-2">
              <Card className="p-6 border-brand-teal/20 bg-brand-teal/5 shadow-glow" hover={false}>
                <h3 className="font-display font-bold text-xl text-white mb-3">Request a Smart Home Assessment</h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  Need expert planning for your smart light switch retrofits or automated thermostat setup? Contact us for an onsite assessment.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                    <span>Detailed on-site diagnostics</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                    <span>Ecosystem selection & planning</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-300">
                    <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                    <span>Secure setup & network tuning</span>
                  </div>
                </div>
                <Button to="/quote" variant="primary" size="md" className="w-full mt-8 group">
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
export default SmartHome
