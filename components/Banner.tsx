'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { bannerSlides } from '@/content/site'

const interval = 6000

/** Showcase slideshow under the hero. Advances every few seconds unless paused, hovered, focused or the visitor prefers reduced motion. */
export function Banner() {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [stopped, setStopped] = useState(false)
  const count = bannerSlides.length
  const slide = bannerSlides[index]

  useEffect(() => {
    if (hovered || stopped || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearTimeout(id)
  }, [index, hovered, stopped, count])

  const go = (i: number) => setIndex((i + count) % count)
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <section className="showcase" id="showcase" aria-label="Showcase">
      <div className="wrap">
        <figure
          className="banner-show"
          aria-roledescription="carousel"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="frames">
            {bannerSlides.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(max-width: 900px) 100vw, 60vw"
                priority={i === 0}
                className={i === index ? 'on' : undefined}
                aria-hidden={i !== index}
              />
            ))}
          </div>
          <figcaption aria-live="polite">
            <span className="tag">{slide.tag}</span>
            <h2>{slide.title}</h2>
            <p>{slide.caption}</p>
          </figcaption>
          <div className="controls">
            <div className="dots">
              {bannerSlides.map((s, i) => (
                <button
                  type="button"
                  key={s.src}
                  className={i === index ? 'on' : undefined}
                  onClick={() => go(i)}
                  aria-label={`Slide ${i + 1} of ${count}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <span className="count">
              {pad(index + 1)} / {pad(count)}
            </span>
            <button type="button" className="pause" onClick={() => setStopped((s) => !s)}>
              {stopped ? 'Play auto-slide' : 'Pause auto-slide'}
            </button>
            <button type="button" className="arrow" onClick={() => go(index - 1)} aria-label="Previous slide">
              ‹
            </button>
            <button type="button" className="arrow" onClick={() => go(index + 1)} aria-label="Next slide">
              ›
            </button>
          </div>
        </figure>
      </div>
    </section>
  )
}
