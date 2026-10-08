import Image from 'next/image'
import { advisors, leadership, type Person } from '@/content/site'

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
        <div className="grid-people reveal">
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
