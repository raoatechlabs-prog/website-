import { tracks } from '@/content/site'

export function Partner() {
  return (
    <section className="partner" id="partner">
      <div className="wrap">
        <div className="eyebrow">Partnership pathways</div>
        <h2>Build African technology autonomy with us</h2>
        <div className="tracks reveal">
          {tracks.map((t) => (
            <article className="track" key={t.id}>
              <small>{t.label}</small>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <a className={`btn${t.id === 'grants' ? ' amber' : ''}`} href={`?track=${t.id}#contact`}>
                {t.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
