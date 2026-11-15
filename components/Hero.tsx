import Image from 'next/image'
import { heroCopy } from '@/content/site'
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
        <div className="eyebrow">{heroCopy.eyebrow}</div>
        <h1>{heroCopy.title}</h1>
        <p className="lede">{heroCopy.lede}</p>
        <div className="ctas">
          <a className="btn amber" href="#labs">
            Explore our 12 labs &amp; services
          </a>
          <a className="btn" href="#contact">
            Partner or request R&amp;D consultation
          </a>
        </div>
      </div>
    </header>
  )
}
