'use client'

import { useState } from 'react'
import { clusters, labServices, ventureStudio, type Cluster } from '@/content/site'

export function Labs() {
  const [filter, setFilter] = useState<Cluster | 'all'>('all')
  const count = (id: Cluster | 'all') =>
    id === 'all' ? labServices.length + 1 : id === 'studio' ? 1 : labServices.filter((l) => l.cluster === id).length
  const shown = filter === 'all' ? labServices : labServices.filter((l) => l.cluster === filter)
  const showStudio = filter === 'all' || filter === 'studio'

  return (
    <section className="labs" id="labs">
      <div className="wrap">
        <div className="eyebrow">Commercial R&amp;D · Engineering · Venture building</div>
        <h2 className="labs-title">Specialized Innovation Laboratories &amp; Venture Studio Services</h2>
        <p className="intro">
          Organized into four strategic clusters, each laboratory operates as both an applied R&amp;D unit and a
          commercial engineering, testing, training, and advisory practice serving enterprises, government institutions,
          researchers, and founders.
        </p>

        <div className="filters" role="group" aria-label="Filter labs by cluster">
          {clusters.map((c) => (
            <button
              type="button"
              key={c.id}
              className={filter === c.id ? 'on' : undefined}
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label} ({count(c.id)})
            </button>
          ))}
        </div>

        {shown.length > 0 && (
          <div className="lab-grid">
            {shown.map((lab) => (
              <article className={`lab-card ${lab.cluster}`} key={lab.id}>
                <div className="lab-tags">
                  <small>
                    Lab {lab.no} · {lab.clusterLabel}
                  </small>
                  {lab.badge && <small className="badge">{lab.badge}</small>}
                </div>
                <h3>{lab.name}</h3>
                <p>{lab.body}</p>
                <ul>
                  {lab.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <a className="lab-cta" href={`?lab=${lab.id}#contact`}>
                  Request service / Book lab →
                </a>
              </article>
            ))}
          </div>
        )}

        {showStudio && (
          <article className="studio-card" id="venture-studio">
            <div>
              <div className="lab-tags">
                <small className="solid">{ventureStudio.tag}</small>
                <small className="badge">{ventureStudio.badge}</small>
              </div>
              <h3>{ventureStudio.name}</h3>
              <p>{ventureStudio.body}</p>
              <div className="studio-pillars">
                {ventureStudio.pillars.map((p) => (
                  <div key={p.title}>
                    <b>{p.title}</b>
                    <span>{p.body}</span>
                  </div>
                ))}
              </div>
            </div>
            <a className="btn amber" href={`?lab=${ventureStudio.id}#contact`}>
              Apply / Partner with Venture Studio →
            </a>
          </article>
        )}
      </div>
    </section>
  )
}
