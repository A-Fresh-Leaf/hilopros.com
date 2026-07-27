import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react'
import { Logo } from '@components/ui/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    services: [
      { name: 'Smart Home', path: '/services/smart-home' },
      { name: 'Networking', path: '/services/networking' },
      { name: 'Security Systems', path: '/services/security' },
      { name: 'AV & Entertainment', path: '/services/entertainment' },
      { name: 'Tech Consulting', path: '/services/consulting' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Future Roadmap', path: '/roadmap' },
      { name: 'Service Areas', path: '/service-areas' },
      { name: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
    ],
  }

  return (
    <footer className="border-t border-white/5 bg-brand-dark/50 pt-16 pb-8 text-gray-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="group">
              <Logo showTagline={false} />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Designs, installs, and supports professional smart home and low voltage technology solutions. Engineering future-ready automation.
            </p>
            <div className="flex flex-col gap-3.5 text-sm text-gray-300">
              <a href="tel:7045550199" className="flex items-center gap-3.5 hover:text-brand-teal transition-colors">
                <Phone size={16} className="text-brand-teal" />
                (704) 555-0199
              </a>
              <a href="mailto:info@hilopros.com" className="flex items-center gap-3.5 hover:text-brand-teal transition-colors">
                <Mail size={16} className="text-brand-teal" />
                info@hilopros.com
              </a>
              <div className="flex items-center gap-3.5">
                <MapPin size={16} className="text-brand-teal" />
                Charlotte, NC & Surrounding Areas
              </div>
            </div>
          </div>

          {/* Services + Company Links — side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 md:contents">
          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>

          {/* Standards & Certifications */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-2">
              Our Standard
            </h3>
            <div className="glass p-5 rounded-xl border border-white/5 flex gap-4 items-start">
              <ShieldCheck className="text-brand-teal shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Security by Design</h4>
                <p className="text-xs leading-relaxed text-gray-400">
                  Every installation is configured with secure credentials, guest networks, and network hardening.
                </p>
              </div>
            </div>
            <div className="glass p-5 rounded-xl border border-white/5 flex gap-4 items-start">
              <Cpu className="text-brand-teal-light shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Modular & Upgradable</h4>
                <p className="text-xs leading-relaxed text-gray-400">
                  We use structured wiring standards to ensure future techs can easily upgrade your setup.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
          <p>© {currentYear} HiLoPros. All rights reserved.</p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a key={link.name} href={link.path} className="hover:text-gray-300 transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
