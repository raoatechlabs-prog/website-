'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { bannerSlides } from '@/content/site'

const interval = 6000

/** Photo slideshow in the hero. Advances every few seconds unless the visitor hovers, focuses it or prefers reduced motion. */
export function Banner() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = bannerSlides.length

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearTimeout(id)
  }, [index, paused, count])

  const go = (i: number) => setIndex((i + count) % count)

  return (
    <figure
      className="banner-show"
      aria-roledescription="carousel"
      aria-label="Raoatech in the community"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="frames">
        {bannerSlides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.caption}
            width={s.width}
            height={s.height}
            sizes="(max-width: 1199px) 100vw, 560px"
            priority={i === 0}
            className={i === index ? 'on' : undefined}
            aria-hidden={i !== index}
          />
        ))}
      </div>
      <figcaption aria-live="polite">{bannerSlides[index].caption}</figcaption>
      <div className="controls">
        <button type="button" onClick={() => go(index - 1)} aria-label="Previous picture">
          ‹
        </button>
        <div className="dots">
          {bannerSlides.map((s, i) => (
            <button
              type="button"
              key={s.src}
              className={i === index ? 'on' : undefined}
              onClick={() => go(i)}
              aria-label={`Picture ${i + 1} of ${count}`}
              aria-current={i === index}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(index + 1)} aria-label="Next picture">
          ›
        </button>
      </div>
    </figure>
  )
}
