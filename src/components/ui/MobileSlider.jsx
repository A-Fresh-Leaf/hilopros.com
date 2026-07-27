import React, { useState, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * MobileSlider — displays cards one at a time on mobile with arrow buttons,
 * dot indicators, and touch swipe support.
 * On md+ screens renders children normally (pass className
 * for the desktop grid layout via `desktopClassName`).
 *
 * Props:
 *  - children: array of React nodes (cards)
 *  - desktopClassName: class string applied to the wrapper on md+ (e.g. grid layout)
 */
export function MobileSlider({ children, desktopClassName = 'grid grid-cols-2 lg:grid-cols-3 gap-6' }) {
  const [current, setCurrent] = useState(0)
  const items = React.Children.toArray(children)
  const count = items.length

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count])
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count])

  // Touch swipe support
  const touchStartX = useRef(null)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <>
      {/* ── Mobile Slider (hidden on md+) ── */}
      <div className="md:hidden">
        {/* Card Stage */}
        <div
          className="relative overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-400 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {items.map((child, i) => (
              <div
                key={i}
                className="w-full shrink-0"
                aria-hidden={i !== current}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {/* Controls row: prev arrow · dots · next arrow */}
        <div className="flex items-center justify-center gap-4 mt-5">
          {/* Prev — min 44px touch target */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 active:bg-brand-teal/20 transition-all"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dot indicators — padded for easier tapping */}
          <div className="flex gap-1 items-center">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="p-2 flex items-center justify-center"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-brand-teal' : 'w-1.5 bg-white/25'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next — min 44px touch target */}
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 active:bg-brand-teal/20 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter */}
        <p className="text-center text-[11px] text-gray-500 mt-1">
          {current + 1} / {count}
        </p>
      </div>

      {/* ── Desktop Grid (hidden on mobile) ── */}
      <div className={`hidden md:grid ${desktopClassName}`}>
        {items}
      </div>
    </>
  )
}

export default MobileSlider
