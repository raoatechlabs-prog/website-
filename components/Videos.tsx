'use client'

import { useState } from 'react'
import type { Clip } from '@/content/site'

/** Shows a YouTube thumbnail and loads the player only when clicked, so the page stays fast. */
function Video({ clip }: { clip: Clip }) {
  const [playing, setPlaying] = useState(false)
  return (
    <figure className={clip.vertical ? 'v-card short' : 'v-card'}>
      <div className="video">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${clip.id}?autoplay=1&rel=0`}
            title={clip.title ?? 'Raoatech lab video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} aria-label={`Play video${clip.title ? `: ${clip.title}` : ''}`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnails are served by YouTube */}
            <img src={`https://i.ytimg.com/vi/${clip.id}/hqdefault.jpg`} alt="" loading="lazy" />
            <span className="play" aria-hidden="true" />
          </button>
        )}
      </div>
      {clip.title && (
        <figcaption>
          <h3>{clip.title}</h3>
          {clip.body && <p>{clip.body}</p>}
        </figcaption>
      )}
    </figure>
  )
}

/** Wide videos in a grid, with YouTube Shorts in a row of tall cards underneath. */
export function VideoGrid({ clips }: { clips: Clip[] }) {
  const wide = clips.filter((c) => !c.vertical)
  const tall = clips.filter((c) => c.vertical)
  return (
    <>
      {wide.length > 0 && (
        <div className={wide.length % 2 === 0 ? 'video-grid two' : 'video-grid'}>
          {wide.map((c) => (
            <Video key={c.id} clip={c} />
          ))}
        </div>
      )}
      {tall.length > 0 && (
        <div className="short-grid">
          {tall.map((c) => (
            <Video key={c.id} clip={c} />
          ))}
        </div>
      )}
    </>
  )
}

type Props = { id: string; eyebrow: string; title: string; intro?: string; note: string; clips: Clip[] }

export function Videos({ id, eyebrow, title, intro, note, clips }: Props) {
  return (
    <section className="videos" id={id}>
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <div className="videos-head">
          <h2>{title}</h2>
          <span className="pill">{note}</span>
        </div>
        {intro && <p className="intro">{intro}</p>}
        <VideoGrid clips={clips} />
      </div>
    </section>
  )
}
