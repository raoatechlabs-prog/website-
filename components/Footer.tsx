import Image from 'next/image'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <Image src="/images/logo-wide.png" alt="Raoatech" width={552} height={157} />
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <a href={site.url} style={{ textDecoration: 'none' }}>
          www.raoatechlabs.com
        </a>
      </div>
    </footer>
  )
}
