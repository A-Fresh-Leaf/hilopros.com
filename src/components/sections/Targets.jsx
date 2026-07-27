import React from 'react'
import { targetCustomers } from '@data/testimonials'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { MobileSlider } from '@components/ui/MobileSlider'

export function Targets() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-darker border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Who We Serve"
          title="Designed for Every Environment"
          align="center"
        />

        <MobileSlider desktopClassName="grid-cols-3 gap-6">
          {targetCustomers.map((target) => (
            <Card
              key={target.label}
              className="h-full group hover:border-brand-teal/20 overflow-hidden border border-white/5 bg-brand-charcoal/20"
              hover={true}
            >
              {/* Target Image Banner — taller on mobile */}
              <div className="relative w-full h-52 sm:h-40 overflow-hidden bg-brand-darker">
                <img
                  src={target.image}
                  alt={target.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
              </div>

              <Card.Body className="p-4 flex flex-col gap-1 text-left">
                <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-brand-teal transition-colors duration-300 target-card-title">
                  {target.label}
                </h3>
                <p className="text-[11px] leading-relaxed text-gray-400">
                  {target.description}
                </p>
              </Card.Body>
            </Card>
          ))}
        </MobileSlider>
      </div>
    </section>
  )
}
export default Targets
