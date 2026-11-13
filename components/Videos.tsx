'use client'

import { useState } from 'react'
import { shorts, videos } from '@/content/site'

/** Shows a YouTube thumbnail and loads the player only when clicked, so the page stays fast. */
function Video({ id, vertical }: { id: string; vertical?: boolean }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className={vertical ? 'video short' : 'video'}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title="Raoatech STEM, robotics and drone video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label="Play video">
          {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnails are served by YouTube */}
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" />
          <span className="play" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="wrap">
        <div className="eyebrow">STEM, robotics &amp; drones</div>
        <h2>Hands-on training in action</h2>
        <p className="intro">
          Students and young engineers building, coding and flying with Raoatech: K-12 STEM, robotics and drone
          sessions in Lagos.
        </p>
        <div className="video-grid">
          {videos.map((id) => (
            <Video key={id} id={id} />
          ))}
        </div>
        <div className="short-grid">
          {shorts.map((id) => (
            <Video key={id} id={id} vertical />
          ))}
        </div>
      </div>
    </section>
  )
}
