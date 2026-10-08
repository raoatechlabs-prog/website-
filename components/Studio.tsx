import { revenue, studioSteps } from '@/content/site'

export function Studio() {
  return (
    <section className="studio" id="studio">
      <div className="wrap">
        <div className="eyebrow">Commercial model</div>
        <h2>Not a passive research centre. A venture studio.</h2>
        <div className="flow reveal">
          {studioSteps.map((s) => (
            <div className="step" key={s.stage}>
              <i>{s.stage}</i>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="revenue reveal">
          {revenue.map((r) => (
            <div key={r.title}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
