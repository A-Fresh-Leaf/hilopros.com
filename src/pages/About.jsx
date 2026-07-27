import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { WhyUs } from '@components/sections/WhyUs'
import { Targets } from '@components/sections/Targets'
import { HelpCircle, Eye, Rocket, ShieldCheck } from 'lucide-react'

export function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about the HiLoPros mission, vision, and core low voltage values. Find out why we deliver the clean, reliable standards in smart technology."
      />

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Who We Are"
            title="Low Voltage. High Tech Standards."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                Our Story
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                HiLoPros was founded to bridge the gap between complex home technology and reliable day-to-day utility. We believe that technology should serve your routine, not complicate it.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                Every installation we configure is built using structured, future-proof standards. This means that as wireless, computing, and automation technologies progress, your underlying system infrastructure is ready to upgrade, not require replacement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Mission */}
              <Card className="p-6 border-white/5" hover={false}>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal shrink-0">
                    <Rocket size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">Our Mission</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Deliver clean, reliable, and scalable technology systems that improve everyday life while creating a solid foundation for future automation, energy management, and intelligent configurations.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Vision */}
              <Card className="p-6 border-white/5" hover={false}>
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-brand-teal/10 rounded-lg text-brand-teal shrink-0">
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">Our Vision</h4>
                    <p className="text-xs text-gray-400 leading-relaxed mt-2">
                      Build a company recognized for quality workmanship, thoughtful engineering, and long-term customer relationships. We build systems that evolve with future technologies.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <WhyUs />

      {/* Who We Serve Section */}
      <Targets />
    </>
  )
}
export default About
