import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'

// Page Imports
import { Home } from '../pages/Home'
import { Services } from '../pages/Services'
import { SmartHome } from '../pages/SmartHome'
import { Networking } from '../pages/Networking'
import { Security } from '../pages/Security'
import { Entertainment } from '../pages/Entertainment'
import { Consulting } from '../pages/Consulting'
import { About } from '../pages/About'
import { Roadmap } from '../pages/Roadmap'
import { ServiceAreas } from '../pages/ServiceAreas'
import { Quote } from '../pages/Quote'
import { Contact } from '../pages/Contact'
import { NotFound } from '../pages/NotFound'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Main Landing Route */}
          <Route path="/" element={<Home />} />

          {/* Services Overview & Details */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/smart-home" element={<SmartHome />} />
          <Route path="/services/networking" element={<Networking />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/entertainment" element={<Entertainment />} />
          <Route path="/services/consulting" element={<Consulting />} />

          {/* Auxiliary Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default AppRouter
