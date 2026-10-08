import { tiers } from '@/content/site'

export function Labs() {
  let n = 0
  return (
    <section className="labs" id="labs">
      <div className="wrap">
        <div className="eyebrow">Core infrastructure</div>
        <div className="labs-head reveal">
          <h2>
            12 labs.
            <br />3 tiers.
          </h2>
          <p>Interconnected engineering laboratories, from frontier research through high-impact sectors to systemic validation.</p>
        </div>
        <div className="tiers reveal">
          {tiers.map((t) => (
            <article className="tier" key={t.tier}>
              <header>
                <small>{t.tier}</small>
                <h3>{t.name}</h3>
              </header>
              {t.labs.map((lab) => (
                <div className="lab" key={lab.name}>
                  <i>{String(++n).padStart(2, '0')}</i>
                  <b>{lab.name}</b>
                  <span>{lab.focus}</span>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
