import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { roadmapItems, roadmapCategories } from '@data/roadmap'
import { SectionTitle } from '@components/ui/SectionTitle'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { MobileSlider } from '@components/ui/MobileSlider'

export function Roadmap({ limit = 3 }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? roadmapItems
    : roadmapItems.filter(item => item.category === activeCategory)

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems

  const cards = displayedItems.map((item) => {
    const Icon = item.icon
    return (
      <Card
        key={item.id}
        className="h-full flex flex-col justify-between group overflow-hidden border border-white/5 bg-brand-charcoal/20"
        hover={true}
      >
        {/* Roadmap Image Banner — taller on mobile */}
        <div className="relative w-full h-40 sm:h-40 overflow-hidden bg-brand-darker">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />

          {/* Floating Icon */}
          <div className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg bg-brand-darker/80 border border-white/10 flex items-center justify-center backdrop-blur-sm z-10">
            <Icon size={16} style={{ color: item.categoryColor }} />
          </div>

          {/* Status Badge */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <Badge variant={item.status === 'coming-soon' ? 'teal' : 'outline'}>
              {item.status === 'coming-soon' ? 'Coming Soon' : 'Planned'}
            </Badge>
          </div>
        </div>

        <Card.Body className="p-4 flex flex-col gap-1.5 text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
            {item.category}
          </span>
          <h3 className="font-display font-bold text-base text-white group-hover:text-brand-teal transition-colors duration-300 roadmap-card-title">
            {item.title}
          </h3>
          <p className="text-xs leading-relaxed text-gray-400">
            {item.description}
          </p>
        </Card.Body>
      </Card>
    )
  })

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-brand-darker border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12">
          <SectionTitle
            subtitle="Phase 2 Roadmap"
            title="Future Technology Services"
            align="left"
            className="mb-0 md:mb-0 max-w-2xl"
          />
          {limit && (
            <Button to="/roadmap" variant="outline" size="sm" className="mt-4 md:mt-0 group shrink-0 self-start md:self-auto">
              View Full Roadmap
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          )}
        </div>

        {/* Category Filter Pills (only on full roadmap page) */}
        {!limit && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all border min-h-[36px] ${
                activeCategory === 'All'
                  ? 'bg-brand-teal text-white border-brand-teal'
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              All
            </button>
            {roadmapCategories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all border min-h-[36px] ${
                  activeCategory === cat.name
                    ? 'bg-brand-teal text-white border-brand-teal'
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        <MobileSlider desktopClassName="grid-cols-3 gap-6">
          {cards}
        </MobileSlider>
      </div>
    </section>
  )
}
export default Roadmap
