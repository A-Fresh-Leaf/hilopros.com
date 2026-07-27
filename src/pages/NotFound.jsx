import React from 'react'
import { SEOHead } from '@components/seo/SEOHead'
import { Button } from '@components/ui/Button'
import { HelpCircle, RefreshCw } from 'lucide-react'

export function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you are looking for does not exist." />
      <section className="py-10 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden min-h-[75vh]">
        {/* Background grids */}
        <div className="absolute inset-0 bg-grid opacity-[0.25] pointer-events-none" />
        
        <div className="relative z-10 max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full bg-brand-teal/15 border border-brand-teal/30 flex items-center justify-center text-brand-teal mx-auto mb-4 animate-bounce">
            <HelpCircle size={44} />
          </div>

          <h1 className="font-display font-black text-6xl text-white tracking-tight">404</h1>
          
          <div>
            <h2 className="font-display font-bold text-xl text-white">System Endpoint Not Found</h2>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              The requested address does not resolve to an active technology route. It might have been moved or doesn't exist.
            </p>
          </div>

          <div className="pt-4 flex gap-4 justify-center">
            <Button to="/" variant="primary" size="md">
              Return Home
            </Button>
            <Button to="/services" variant="outline" size="md">
              Browse Services
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
export default NotFound
