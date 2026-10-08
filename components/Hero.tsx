import Image from 'next/image'
import { SiteNav } from './SiteNav'

export function Hero() {
  return (
    <header className="hero" id="top">
      <Image
        src="/images/building-2000.jpg"
        alt="Aerial render of the Raoatech R&D and Innovation Point building in Yaba, Lagos"
        fill
        priority
        sizes="100vw"
        className="hero-img"
      />
      <SiteNav />
      <div className="copy wrap">
        <div className="eyebrow">Yaba, Lagos · Deep-tech incubator &amp; venture studio</div>
        <h1>Engineering Sovereignty</h1>
        <p className="lede">Solving Africa&apos;s healthcare, security and power crises through deep-tech commercialization.</p>
        <div className="ctas">
          <a className="btn" href="#labs">
            Explore the labs
          </a>
          <a className="btn amber" href="#partner">
            Partner with us
          </a>
        </div>
      </div>
      <div className="loc">
        1A Hughes Avenue
        <br />
        Alagomeji, Yaba, Lagos
      </div>
    </header>
  )
}
