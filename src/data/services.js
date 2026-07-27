import {
  Wifi, Shield, Tv2, Lightbulb, Thermometer, Lock,
  Camera, Speaker, Network, Cable, Server, PhoneCall,
  Home, HardDrive, Zap, LayoutGrid,
} from 'lucide-react'

/**
 * HiLoPros Phase 1 Service Definitions
 */
export const services = [
  {
    id: 'smart-home',
    slug: '/services/smart-home',
    title: 'Smart Home',
    tagline: 'Automate and control every aspect of your home.',
    description:
      'From smart lighting and thermostats to full home automation, we design and install systems that make your home work for you — all controllable from your phone or voice.',
    icon: Home,
    color: '#2E9E8A',
    image: '/smarthome.jpg',
    phase: 1,
    features: [
      { label: 'Smart Lighting', icon: Lightbulb, description: 'Automated, schedule-based, and scene-controlled lighting.' },
      { label: 'Smart Switch Retrofits', icon: Zap, description: 'Upgrade existing switches without rewiring.' },
      { label: 'Smart Dimmers', icon: Lightbulb, description: 'Smooth, app-controlled dimming for any room.' },
      { label: 'Smart Outlets', icon: Zap, description: 'Control power remotely and monitor usage.' },
      { label: 'Smart Thermostats', icon: Thermometer, description: 'AI-powered climate control that learns your schedule.' },
      { label: 'Voice Assistant Integration', icon: Speaker, description: 'Works with Alexa, Google Home, and Siri.' },
      { label: 'Home Automation', icon: LayoutGrid, description: 'Full scene and routine automation across all devices.' },
    ],
  },
  {
    id: 'networking',
    slug: '/services/networking',
    title: 'Networking',
    tagline: 'Fast, reliable, whole-home connectivity.',
    description:
      'We design and install enterprise-grade networks for homes and businesses — from full mesh WiFi to structured cabling and clean rack builds.',
    icon: Wifi,
    color: '#3B82F6',
    image: '/networking.jpg',
    phase: 1,
    features: [
      { label: 'WiFi Installation', icon: Wifi, description: 'Full coverage, zero dead zones.' },
      { label: 'WiFi Optimization', icon: Network, description: 'Channel tuning, band steering, and QoS.' },
      { label: 'Mesh Networking', icon: Network, description: 'Seamless roaming across large properties.' },
      { label: 'Structured Cabling', icon: Cable, description: 'Cat6/Cat6A runs, labeled and documented.' },
      { label: 'Network Racks', icon: Server, description: 'Clean, organized patch panel and rack builds.' },
      { label: 'Equipment Organization', icon: HardDrive, description: 'UPS, switches, and cable management.' },
    ],
  },
  {
    id: 'security',
    slug: '/services/security',
    title: 'Security',
    tagline: 'See everything. Protect everyone.',
    description:
      'Professional security camera systems, smart locks, video doorbells, and alarm integrations — all designed to protect what matters most.',
    icon: Shield,
    color: '#EF4444',
    image: '/security.png',
    phase: 1,
    features: [
      { label: 'Security Cameras', icon: Camera, description: '4K IP cameras, NVR/NAS storage, night vision.' },
      { label: 'Video Doorbells', icon: PhoneCall, description: 'See and speak to visitors from anywhere.' },
      { label: 'Smart Locks', icon: Lock, description: 'Keypad, app, and auto-lock functionality.' },
      { label: 'Access Control', icon: Lock, description: 'Fob, PIN, and biometric entry systems.' },
      { label: 'Alarm Integrations', icon: Shield, description: 'Connect existing alarms to smart platforms.' },
    ],
  },
  {
    id: 'entertainment',
    slug: '/services/entertainment',
    title: 'Entertainment',
    tagline: 'Premium audio and video experiences.',
    description:
      'From perfectly mounted TVs to whole-home audio systems and dedicated media rooms — we build entertainment setups that wow.',
    icon: Tv2,
    color: '#8B5CF6',
    image: '/entertainment.png',
    phase: 1,
    features: [
      { label: 'TV Mounting', icon: Tv2, description: 'Articulating, tilt, and fixed mounts with hidden wiring.' },
      { label: 'In-Wall Wiring', icon: Cable, description: 'Clean cable management inside walls.' },
      { label: 'Media Rooms', icon: Tv2, description: 'Projectors, screens, surround sound design.' },
      { label: 'Whole-Home Audio', icon: Speaker, description: 'Multi-zone streaming to every room.' },
    ],
  },
  {
    id: 'consulting',
    slug: '/services/consulting',
    title: 'Consulting',
    tagline: 'Expert guidance before you build or buy.',
    description:
      'Planning a new build or renovation? We help you design a future-ready technology infrastructure before the walls close in.',
    icon: LayoutGrid,
    color: '#F59E0B',
    image: '/consulting.png',
    phase: 1,
    features: [
      { label: 'Smart Home Planning', icon: Home, description: 'Device selection, ecosystem design, and budgeting.' },
      { label: 'New Construction Consulting', icon: LayoutGrid, description: 'Pre-wire specs and tech walk-throughs with builders.' },
      { label: 'Retrofit Consulting', icon: Zap, description: 'Modernize existing homes without major renovation.' },
      { label: 'Technology Upgrades', icon: Server, description: 'Assess and upgrade aging infrastructure.' },
    ],
  },
]

/**
 * Quick-access service cards for home page grid
 */
export const serviceCards = services.map(({ id, slug, title, tagline, icon, color, image, phase }) => ({
  id, slug, title, tagline, icon, color, image, phase,
}))
