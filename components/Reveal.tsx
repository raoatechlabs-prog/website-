'use client'

import { useEffect } from 'react'

/** Fades `.reveal` blocks in as they scroll into view. Content stays visible without JavaScript. */
export function Reveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.remove('pending')
            io.unobserve(en.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('pending')
        io.observe(el)
      }
    })
    return () => io.disconnect()
  }, [])
  return null
}
