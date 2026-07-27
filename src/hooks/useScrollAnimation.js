import { useEffect, useRef, useState } from 'react'

/**
 * Hook that triggers an animation class when the element enters the viewport.
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - 0–1 visibility threshold (default 0.15)
 * @param {string} options.rootMargin - Root margin (default '0px')
 * @returns {{ ref, isVisible }} - Attach ref to element, isVisible drives animation
 */
export function useScrollAnimation({ threshold = 0.15, rootMargin = '0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

/**
 * Stagger animation for a list of elements.
 * Returns an array of { ref, isVisible } for each item index.
 */
export function useStaggerAnimation(count, delay = 100) {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const refs = useRef([])

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, i]))
            }, i * delay)
            observer.unobserve(el)
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
      return observer
    })

    return () => observers.forEach(obs => obs?.disconnect())
  }, [count, delay])

  return {
    getRef: (i) => (el) => { refs.current[i] = el },
    isVisible: (i) => visibleItems.has(i),
  }
}
