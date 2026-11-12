import { adoptLabs, givingTiers, nairaPerDollar, site } from '@/content/site'

const usd = (n: number) => `$${n.toLocaleString('en-US')}`
const naira = (n: number) => `₦${(n * nairaPerDollar).toLocaleString('en-US')}`
const nairaLabel = `Budget (NGN @ ₦${nairaPerDollar.toLocaleString('en-US')}/$1)`

export function Donate() {
  const total = adoptLabs.reduce((sum, lab) => sum + lab.usd, 0)
  return (
    <section className="donate" id="donate">
      <div className="wrap">
        <div className="eyebrow">Support deep-tech &amp; STEM</div>
        <h2>Fuel Africa&apos;s next generation of deep-tech innovators</h2>
        <p className="intro">
          Support {site.name} in equipping our Yaba research laboratories and sponsoring hands-on STEM excursions,
          hardware prototyping, and AI/robotics training for students and researchers.
        </p>

        <div className="gifts reveal">
          {givingTiers.map((g) => (
            <article className="gift" key={g.title}>
              <div className="amt">
                {g.naira}
                <span>{g.usd}</span>
              </div>
              <h3>{g.title}</h3>
              <p>{g.body}</p>
            </article>
          ))}
        </div>

        <div className="donate-cta">
          <a className="btn amber" href="?track=grants#contact">
            Donate now
          </a>
          <p>
            Custom amounts are welcome. Every contribution directly accelerates indigenous hardware and software
            commercialization in Nigeria. Looking to sponsor an entire laboratory? See the{' '}
            <a className="inline" href="#adopt-a-lab">
              lab infrastructure sponsorship breakdown
            </a>{' '}
            below.
          </p>
        </div>

        <div id="adopt-a-lab">
          <div className="sub-h">Institutional &amp; grant partnerships</div>
          <h3 className="adopt-h">Adopt-a-Lab: corporate &amp; grant sponsorship opportunities</h3>
          <p className="intro">
            {site.name} is outfitting <b>{adoptLabs.length} specialized research and commercialization laboratories</b>{' '}
            in Yaba, Lagos. Corporate partners, diaspora angel donors, and grant organizations can co-fund or fully
            sponsor individual laboratories below.
          </p>

          <table className="budget reveal">
            <thead>
              <tr>
                <th scope="col">Lab ref</th>
                <th scope="col">Laboratory name</th>
                <th scope="col">Core research &amp; training focus</th>
                <th scope="col" className="num">
                  Budget (USD)
                </th>
                <th scope="col" className="num">
                  {nairaLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {adoptLabs.map((lab, i) => (
                <tr key={lab.name}>
                  <td className="ref">Lab {i + 1}</td>
                  <th scope="row" className="name">
                    {lab.name}
                  </th>
                  <td className="focus">{lab.focus}</td>
                  <td className="num" data-label="Budget (USD)">
                    {usd(lab.usd)}
                  </td>
                  <td className="num" data-label={nairaLabel}>
                    {naira(lab.usd)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="ref">Total</td>
                <th scope="row" className="name">
                  Consolidated innovation center outfitting
                </th>
                <td className="focus">All {adoptLabs.length} specialized R&amp;D laboratories</td>
                <td className="num" data-label="Budget (USD)">
                  {usd(total)}
                </td>
                <td className="num" data-label={nairaLabel}>
                  {naira(total)}
                </td>
              </tr>
            </tfoot>
          </table>

          <p className="note">
            Full line-by-line technical specifications and vendor quotations are available upon request for
            institutional donors, corporate CSR teams, and grant evaluators. Contact{' '}
            <a className="inline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{' '}
            to request the complete Bill of Materials (BOM) or schedule a tour of our Yaba facility.
          </p>
        </div>
      </div>
    </section>
  )
}
