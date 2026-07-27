import React, { useState } from 'react'
import { testimonials } from '@data/testimonials'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const active = testimonials[activeIndex]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-darker border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Success Stories"
          title="What Our Clients Say"
          align="center"
        />

        {/* Carousel Container */}
        <div className="relative min-h-[320px] flex items-center justify-center">
          {/* Main Slide Card */}
          <div className="w-full max-w-3xl animate-fade-in">
            <Card className="border-white/5 relative p-6 md:p-10" hover={false}>
              <Card.Body className="flex flex-col gap-6 relative z-10">
                {/* Quote Icon */}
                <Quote className="text-brand-teal/20 absolute -top-4 -left-4 w-16 h-16 pointer-events-none" />
                
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-teal text-brand-teal" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic">
                  "{active.text}"
                </p>

                {/* Author Info */}
                <div className="flex justify-between items-end mt-4 pt-6 border-t border-white/5">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">{active.name}</h4>
                    <span className="text-xs text-gray-500 mt-0.5 block">{active.location}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded">
                    {active.service}
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* Nav Buttons - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 z-20">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 z-20">
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile controls (arrows + dots) */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 active:bg-white/10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-1 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="p-2 flex items-center justify-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all ${
                    i === activeIndex ? 'w-4 bg-brand-teal' : 'w-1.5 bg-white/20'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 active:bg-white/10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Desktop indicator dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === activeIndex ? 'bg-brand-teal w-6' : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials
