import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { Hero } from '@components/sections/Hero'
import { Services } from '@components/sections/Services'
import { WhyUs } from '@components/sections/WhyUs'
import { Roadmap } from '@components/sections/Roadmap'
import { Targets } from '@components/sections/Targets'
import { Testimonials } from '@components/sections/Testimonials'
import { ContactBanner } from '@components/sections/ContactBanner'

export function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="HiLoPros designs, installs, and supports professional smart home, networking, security, and low voltage technology solutions for residential and commercial customers."
      />
      
      {/* Page Hero */}
      <Hero />

      {/* Services Overview */}
      <Services />

      {/* Why Us / Core Values */}
      <WhyUs />

      {/* Phase 2 Roadmap Teaser (Limit to 3 items) */}
      <Roadmap limit={3} />

      {/* Target Audiences */}
      <Targets />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Banner CTA */}
      <ContactBanner />
    </>
  )
}
export default Home
