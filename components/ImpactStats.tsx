import { impactStats } from '@/content/site'

export function ImpactStats() {
  return (
    <section className="impact" aria-label="Track record">
      <div className="wrap">
        <div className="impact-grid reveal">
          {impactStats.map((s) => (
            <div className="impact-stat" key={s.value}>
              <b>{s.value}</b>
              <h3>{s.label}</h3>
              <p>
                {s.body}
                {s.links?.map((l, i, all) => (
                  <span key={l.url}>
                    {i === 0 ? ' ' : i === all.length - 1 ? ', and ' : ', '}
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.name}
                    </a>
                  </span>
                ))}
                {s.links && '.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
