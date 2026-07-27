import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Roadmap as RoadmapSection } from '@components/sections/Roadmap'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { HelpCircle, Star, Sparkles, Server } from 'lucide-react'

export function Roadmap() {
  return (
    <>
      <SEOHead
        title="Future Technology Roadmap"
        description="See our upcoming Phase 2 technology offerings including solar integration, home battery backup, residential cybersecurity, and automated robotics."
      />

      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            subtitle="Coming Soon & Planned"
            title="The Future Tech Roadmap"
            align="center"
          />

          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            <p className="text-gray-300 text-center text-base md:text-lg leading-relaxed font-light">
              HiLoPros is engineered to scale. While our Phase 1 services represent robust, ready-to-deploy systems, we are actively testing and planning next-generation integrations to support smart cities, sustainable power grids, and autonomous robotics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-5 border-white/5 text-center" hover={false}>
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-3">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-semibold text-white mb-1.5">Energy Conscious</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Integrating solar arrays, EV chargers, and load balancing circuits into a single responsive panel.
                </p>
              </Card>

              <Card className="p-5 border-white/5 text-center" hover={false}>
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-3">
                  <Server size={20} />
                </div>
                <h4 className="font-semibold text-white mb-1.5">Hardened Cybersecurity</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Active threats require active defense. Future updates will include local network scanning and threat response.
                </p>
              </Card>

              <Card className="p-5 border-white/5 text-center" hover={false}>
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-3">
                  <Star size={20} />
                </div>
                <h4 className="font-semibold text-white mb-1.5">Managed Tech Support</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Remote monitoring and scheduled check-ups keep smart hubs, switches, and APs running without downtime.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Render full Roadmap category list (limit=null) */}
      <RoadmapSection limit={null} />

      {/* Waitlist / Interest Card */}
      <section className="pb-24 relative z-10">
        <div className="mx-auto max-w-3xl px-4">
          <Card className="p-8 md:p-10 border-brand-teal/30 bg-brand-teal/5 text-center" hover={false}>
            <h3 className="font-display font-black text-2xl text-white">Interested in Phase 2 Technologies?</h3>
            <p className="text-xs text-gray-300 max-w-md mx-auto mt-2 leading-relaxed">
              We are currently selecting beta properties for solar load balancing and network cybersecurity tests. Let us know if you want your building included in our next phase.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" size="md">
                Get In Touch
              </Button>
              <Button to="/quote" variant="outline" size="md">
                Request System Planning
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}
export default Roadmap
