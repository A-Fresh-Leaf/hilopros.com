import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'
import { useMobileMenu } from '@hooks/useMobileMenu'
import { Button } from '@components/ui/Button'
import { Logo } from '@components/ui/Logo'
import { cn } from '@utils/cn'

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu()
  const location = useLocation()

  // Prevent background scroll when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Future Roadmap', path: '/roadmap' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Navigation Top Bar with Translucency */}
      <div className="w-full border-b border-white/5 bg-brand-darker/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" onClick={close} className="group flex items-center shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 hover:text-white',
                    isActive(link.path) ? 'text-brand-teal font-semibold' : 'text-gray-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button to="/quote" variant="primary" size="sm" className="group">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Mobile Header Action Controls */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Header Direct Call Button */}
              <a
                href="tel:7045550199"
                className="inline-flex items-center justify-center p-2 rounded-lg bg-brand-teal/15 border border-brand-teal/30 text-brand-teal hover:bg-brand-teal/25 transition-colors min-h-[44px] min-w-[44px]"
                aria-label="Call HiLoPros"
              >
                <Phone className="h-4 h-4" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={toggle}
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-white/5 hover:text-white focus:outline-none min-h-[44px] min-w-[44px]"
                aria-expanded={isOpen}
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Panel */}
      <div
        className={cn(
          'fixed inset-0 top-16 sm:top-20 z-30 w-full bg-brand-darker/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 md:hidden overflow-y-auto',
          isOpen ? 'translate-x-0 visible opacity-100' : 'translate-x-full invisible opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col h-[calc(100dvh-64px)] sm:h-[calc(100dvh-80px)] justify-between p-6 pb-24">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={close}
                className={cn(
                  'text-lg font-medium transition-colors duration-200 py-2 border-b border-white/5 pl-3',
                  isActive(link.path)
                    ? 'text-brand-teal border-l-2 border-l-brand-teal -ml-3 pl-[calc(0.75rem+2px)]'
                    : 'text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Drawer Bottom Info & Primary CTA */}
          <div className="flex flex-col gap-5 pt-6 border-t border-white/10 mt-auto">
            <div className="flex flex-col gap-3 text-xs text-gray-400">
              <a href="tel:7045550199" className="flex items-center gap-3 text-gray-300 hover:text-brand-teal transition-colors py-1">
                <Phone size={14} className="text-brand-teal shrink-0" />
                <span>(704) 555-0199</span>
              </a>
              <a href="mailto:info@hilopros.com" className="flex items-center gap-3 text-gray-300 hover:text-brand-teal transition-colors py-1">
                <Mail size={14} className="text-brand-teal shrink-0" />
                <span>info@hilopros.com</span>
              </a>
            </div>

            <Button to="/quote" onClick={close} variant="primary" size="lg" className="w-full justify-center text-sm font-bold shadow-glow py-3.5">
              Request Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

