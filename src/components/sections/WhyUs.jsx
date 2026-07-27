import React from 'react'
import { coreValues } from '@data/coreValues'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { useStaggerAnimation } from '@hooks/useScrollAnimation'
import { Marquee } from '@components/ui/Marquee'

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-darker border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-[0.1] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Core Values"
          title="Why Work With HiLoPros?"
          align="center"
        />

        {/* Moving Core Values Marquee Showcase */}
        <div className="relative w-full overflow-hidden mt-10 py-4">
          {/* Gradient masks on the sides */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-10 sm:w-24 bg-gradient-to-r from-brand-darker to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-10 sm:w-24 bg-gradient-to-l from-brand-darker to-transparent" />

          <Marquee className="[--gap:1.5rem] py-2" pauseOnHover>
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <div
                  className="group flex w-60 sm:w-72 shrink-0 flex-col px-1.5"
                  key={value.id}
                >
                  <Card className="h-48 group hover:border-brand-teal/20" hover={true} glass={true}>
                    <Card.Body className="flex flex-col gap-3.5 text-left h-full justify-between">
                      {/* Icon container */}
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/20 transition-all duration-300"
                        style={{
                          boxShadow: `0 0 10px ${value.color}08`,
                        }}
                      >
                        <Icon className="text-brand-teal transition-transform group-hover:scale-110 duration-300" size={18} style={{ color: value.color }} />
                      </div>

                      <div className="flex-1 flex flex-col justify-end mt-2">
                        <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-teal transition-colors duration-300 whyus-card-title">
                          {value.title}
                        </h3>
                        <p className="text-[11px] leading-relaxed text-gray-400 mt-1">
                          {value.description}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
