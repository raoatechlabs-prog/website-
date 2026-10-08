import { stats } from '@/content/site'

export function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="wrap">
        <div className="eyebrow">Mission</div>
        <p className="big">
          An applied engineering sandbox where research, technology and talent become commercially viable hardware and
          software enterprises.
        </p>
        <p className="sub">
          Founded and operated by Raoatech IT-Electromech Limited, the Innovation Point unifies specialized laboratory
          infrastructure, ecosystem partnerships and a proprietary Venture Studio Sandbox to tackle national security,
          energy resilience, healthcare telemetry, software quality assurance and spatial AI data infrastructure. We work
          in strategic partnership with Yaba College of Technology (Yabatech) on human capital development, joint technical
          training and collaborative research.
        </p>
        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
