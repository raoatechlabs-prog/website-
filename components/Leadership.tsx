import Image from 'next/image'
import { advisors, leadership, profiles, type Person } from '@/content/site'

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="person">
      <Image src={`/images/${p.photo}.jpg`} alt="" width={96} height={96} />
      <div>
        <b>{p.name}</b>
        <span>{p.role}</span>
        {p.org && <em>{p.org}</em>}
      </div>
    </div>
  )
}

export function Leadership() {
  return (
    <section className="people" id="leadership">
      <div className="wrap">
        <div className="eyebrow">Leadership</div>
        <h2>Directed by builders, researchers and regulators</h2>
        <div className="profiles">
          {profiles.map((p) => (
            <article className="profile reveal" key={p.name}>
              <Image src={`/images/${p.photo}.jpg`} alt={p.name} width={480} height={600} sizes="(max-width: 820px) 100vw, 280px" />
              <div>
                <h3>{p.name}</h3>
                <span className="profile-role">{p.role}</span>
                {p.bio.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="sub-h">Executives & lab directors</div>
        <div className="grid-people reveal" style={{ marginTop: 36 }}>
          {leadership.map((p) => (
            <PersonCard key={p.name} p={p} />
          ))}
        </div>
        <div className="sub-h">Advisory board</div>
        <div className="grid-people reveal" style={{ marginTop: 36 }}>
          {advisors.map((p) => (
            <PersonCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
