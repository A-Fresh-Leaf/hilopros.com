import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { MobileBottomBar } from './MobileBottomBar'

/**
 * Global Layout wrapper component with Navbar, Footer, MobileBottomBar, and scroll-to-top handler on path change.
 */
export function Layout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative flex min-h-screen flex-col bg-brand-darker text-white antialiased overflow-x-hidden pb-16 md:pb-0">
      {/* Mesh Background Graphic */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-teal/5 rounded-full filter blur-[150px] pointer-events-none z-0" />

      {/* Navbar header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer footer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar />
    </div>
  )
}
export default Layout

