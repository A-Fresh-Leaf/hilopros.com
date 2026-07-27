import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { ServiceIcon } from '@components/ui/ServiceIcon'
import { services } from '@data/services'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'

export function Services() {
  const { getRef, isVisible } = useStaggerAnimation(services.length, 100)

  return (
    <>
      <SEOHead
        title="Services"
        description="Explore our core low voltage technology services, including smart home automation, structured networking cabling, high-definition security camera systems, and whole-home audio."
      />

      <section className="py-10 relative overflow-hidden">
        {/* Background grids */}
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-teal/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Technology Offerings"
            title="Our Low Voltage Solutions"
            align="center"
          />

          {/* Grid of full detailed services */}
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => {
              const visible = isVisible(index)
              return (
                <div
                  key={service.id}
                  ref={getRef(index)}
                  className={`transition-all duration-700 transform ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                >
                  <Card className="p-6 md:p-10 border-white/5" hover={false}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Metadata and Overview */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <ServiceIcon icon={service.icon} color={service.color} size="md" />
                          <div>
                            <span className="text-[10px] uppercase tracking-widest text-brand-teal font-bold block">
                              Phase 1 Service
                            </span>
                            <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                          {service.description}
                        </p>

                        {/* Showcase Image */}
                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-glow">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="pt-2">
                          <Button to={service.slug} variant="outline" size="sm" className="group">
                            Explore Details
                            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Button>
                        </div>
                      </div>

                      {/* Right: Feature Checklist */}
                      <div className="lg:col-span-7 bg-white/2 rounded-xl p-5 md:p-8 border border-white/5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5 border-b border-white/5 pb-3">
                          What We Install & Integrate
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feat) => {
                            const FeatIcon = feat.icon
                            return (
                              <div key={feat.label} className="flex gap-3 items-start group/feat">
                                <div className="mt-0.5 p-1.5 rounded-md bg-white/5 text-brand-teal group-hover/feat:bg-brand-teal/15 transition-all">
                                  <FeatIcon size={14} />
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-white">{feat.label}</h5>
                                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{feat.description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Services
