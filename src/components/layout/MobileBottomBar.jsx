import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, FileText, Grid } from 'lucide-react'
import { cn } from '@utils/cn'

export function MobileBottomBar() {
  const location = useLocation()

  // Hide mobile bottom bar on the quote page to avoid redundancy with the quote form
  const isQuotePage = location.pathname === '/quote'

  if (isQuotePage) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-brand-darker/90 backdrop-blur-lg border-t border-white/10 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Quick Call Button */}
        <a
          href="tel:7045550199"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-xs hover:bg-white/10 transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-brand-teal shrink-0" />
          <span className="truncate">Call Us</span>
        </a>

        {/* Explore Services Link */}
        <Link
          to="/services"
          className={cn(
            "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all active:scale-[0.98]",
            location.pathname.startsWith('/services')
              ? "bg-brand-teal/20 border-brand-teal/40 text-brand-teal-light"
              : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
          )}
        >
          <Grid className="w-4 h-4 text-brand-teal shrink-0" />
          <span className="truncate">Services</span>
        </Link>

        {/* Primary CTA - Request Quote */}
        <Link
          to="/quote"
          className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white font-bold text-xs shadow-glow hover:brightness-110 transition-all active:scale-[0.98]"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span className="truncate">Get Quote</span>
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomBar
