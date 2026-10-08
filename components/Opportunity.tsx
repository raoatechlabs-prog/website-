import { pillars } from '@/content/site'

export function Opportunity() {
  return (
    <section className="opp">
      <div className="wrap split reveal">
        <div>
          <div className="eyebrow">The opportunity</div>
          <h2>Bridging the deep-tech gap</h2>
          <p className="intro">
            Across West Africa, technical talent is underused because skill building and industrialization are
            disconnected. Consumer software and payments have scaled, yet the region still imports almost all of its
            hardware, industrial control systems and AI data infrastructure.
          </p>
        </div>
        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
