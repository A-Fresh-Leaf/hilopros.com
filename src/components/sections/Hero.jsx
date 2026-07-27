import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Shield, Zap, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@components/ui/Button'

export function Hero() {
  const images = [
    { src: '/hero.jpg', alt: 'Luxury Smart Home Living Room & Control4 Tablet', system: 'System Active: Control4' },
    { src: '/networking.jpg', alt: 'Structured Cabling and Professional Network Rack', system: 'Hardware: UniFi Enterprise' },
    { src: '/security.png', alt: 'Outdoor 4K Security Camera & Video Doorbell', system: 'Security: Hardened IP Cameras' },
    { src: '/entertainment.png', alt: 'Premium Custom Home Theater AV Installation', system: 'Audio: Multi-Zone Hifi' },
    { src: '/consulting.png', alt: 'Low Voltage Design Plan & Blueprints', system: 'Design: Blueprint Schematics' }
  ]

  const [currentIdx, setCurrentIdx] = useState(0)
  const touchStartX = useRef(null)
  const touchEndX = useRef(null)

  // Minimum swipe distance threshold (in px)
  const minSwipeDistance = 40

  const handleTouchStart = (e) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    } else if (isRightSwipe) {
      setCurrentIdx((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] md:min-h-[85vh] flex items-center bg-brand-darker py-12 sm:py-16 md:py-24 select-none"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-brand-teal/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* MOBILE-ONLY: Full-Bleed Background Image Carousel (< md viewports) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 block md:hidden overflow-hidden">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              idx === currentIdx ? 'opacity-75 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-[5000ms]`}
          />
        ))}
        {/* Mobile Dark Gradient Overlay for Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-brand-darker/30 z-10" />
        <div className="absolute inset-0 bg-brand-darker/20 z-10" />
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Responsive Desktop & Mobile Layout */}
      {/* ========================================================================= */}
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 md:px-8 relative z-20 my-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center">
          
          {/* Left Column: Text & CTAs (Desktop Left-Aligned / Mobile Centered Overlay) */}
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left gap-3.5 sm:gap-4 animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-teal-light text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Zap size={12} className="animate-pulse text-brand-teal" />
              Low Voltage. High Tech Standards.
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Future-Ready Smart Home &{' '}
              <span className="text-gradient">Low Voltage Solutions</span>
            </h1>

            {/* Mobile Live Active System Badge Pill & Indicators */}
            <div className="flex md:hidden flex-col items-center gap-2 my-1">
              <div className="inline-flex items-center gap-2 glass-light px-3 py-1 rounded-full border border-brand-teal/30 backdrop-blur-md shadow-glow">
                <div className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
                <span className="text-[10px] text-white font-mono font-bold uppercase tracking-wider">
                  {images[currentIdx].system}
                </span>
              </div>

              {/* Mobile Dots Indicator */}
              <div className="flex items-center gap-1.5 mt-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? 'w-5 bg-brand-teal' : 'w-1.5 bg-white/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed max-w-xl font-light">
              Professional smart home, networking, security, and AV entertainment setups. Delivering clean, reliable, and scalable installations for residential & commercial clients.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1 sm:mt-2">
              <Button to="/quote" variant="primary" size="sm" className="group justify-center text-xs py-3.5 px-5 font-bold shadow-glow">
                Request Free Quote
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button to="/services" variant="outline" size="sm" className="justify-center text-xs py-3.5 px-5 backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10">
                Explore Services
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 pt-3 mt-1 border-t border-white/10 w-full text-gray-300 text-xs">
              <div className="flex items-center gap-1.5">
                <Zap size={14} className="text-brand-teal shrink-0" />
                <span className="text-xs font-medium">Clean Wiring</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-brand-teal shrink-0" />
                <span className="text-xs font-medium">Secure Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-brand-teal shrink-0" />
                <span className="text-xs font-medium">Modular Design</span>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Spacer */}
          <div className="md:col-span-6 hidden md:block">
            {/* Desktop spacer - right side desktop image panel rendered below */}
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP-ONLY: Full-Height Right-Side Showcase Panel (md:block) */}
      {/* ========================================================================= */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden md:block border-l border-white/5 bg-brand-charcoal/10">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover object-left transition-opacity duration-1000 ${
              idx === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-darker to-transparent z-10" />
        <div className="absolute bottom-6 left-8 z-20 glass-light px-3.5 py-2 rounded-lg border border-brand-teal/20 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
          <span className="text-[10px] text-white font-bold uppercase tracking-wider font-mono">
            {images[currentIdx].system}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero

