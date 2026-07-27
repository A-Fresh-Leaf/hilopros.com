import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { serviceCards } from '@data/services'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { ServiceIcon } from '@components/ui/ServiceIcon'
import { MobileSlider } from '@components/ui/MobileSlider'

export function Services() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-darker border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="What We Offer"
          title="Professional Low Voltage Services"
          align="center"
        />

        <MobileSlider desktopClassName="grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <Card
              key={service.id}
              className="h-full flex flex-col justify-between group overflow-hidden border border-white/5 bg-brand-charcoal/30"
            >
              {/* Service Image Banner — taller on mobile so image is clearly visible */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
                <span className="absolute top-3 right-3 text-[9px] uppercase font-bold tracking-widest text-brand-teal bg-brand-teal/15 px-2 py-0.5 rounded border border-brand-teal/20 backdrop-blur-sm z-10">
                  Phase 1
                </span>
              </div>

              <Card.Body className="flex flex-col gap-3 pt-5 relative">
                {/* Floating Icon */}
                <div className="absolute -top-7 left-5 z-20">
                  <ServiceIcon icon={service.icon} color={service.color} size="sm" className="bg-brand-darker border-white/10" />
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-teal transition-colors duration-300 service-card-title">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-400 mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              </Card.Body>

              <Card.Footer className="flex items-center justify-between mt-auto">
                <Link
                  to={service.slug}
                  className="text-xs font-bold text-brand-teal hover:text-brand-teal-light inline-flex items-center gap-1.5 transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </MobileSlider>
      </div>
    </section>
  )
}
export default Services
