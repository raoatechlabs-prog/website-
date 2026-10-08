'use client'

import { useEffect, useRef, useState } from 'react'

export function BrandFilm() {
  const film = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    // No autoplay for visitors who ask for reduced motion.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) film.current?.pause()
  }, [])

  const label = paused ? 'Play' : 'Pause'
  return (
    <section className="film" aria-label="Brand film">
      <video
        ref={film}
        src="/video/logo-film.mp4"
        poster="/images/building-1200.jpg"
        autoPlay
        muted
        loop
        playsInline
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      <div className="cap">Raoatech · R&amp;D and Innovation Point</div>
      <button
        className="toggle"
        aria-label={`${label} brand film`}
        onClick={() => (film.current?.paused ? film.current.play() : film.current?.pause())}
      >
        {label}
      </button>
    </section>
  )
}
