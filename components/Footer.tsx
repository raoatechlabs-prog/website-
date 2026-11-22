import Image from 'next/image'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-top">
        <div>
          <Image src="/images/logo-wide.png" alt="Raoatech" width={552} height={157} />
          <b>{site.legalName}</b>
          <span>
            {site.name} · Sabo–Yaba Innovation District, Lagos, Nigeria
          </span>
        </div>
        <div className="foot-links">
          <a className="mail" href={`mailto:${site.publicEmail}`}>
            {site.publicEmail}
          </a>
          <a className="tel" href={`tel:${site.phone.tel}`}>
            {site.phone.display}
          </a>
          <a className="mail" href={site.url}>
            www.raoatechlabs.com
          </a>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </span>
        <span>16+ Years of Deep-Tech Engineering, Commercialization &amp; Workforce Impact.</span>
      </div>
    </footer>
  )
}
