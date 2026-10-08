import type { Metadata, Viewport } from 'next'
import { site } from '@/content/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Deep-Tech Incubator & Venture Studio, Lagos`,
  description: site.description,
  alternates: { canonical: '/' },
  icons: { icon: '/images/icon-32.png', apple: '/images/icon-180.png' },
  openGraph: {
    type: 'website',
    title: site.name,
    description:
      "Engineering sovereignty: solving Africa's healthcare, security and power crises through deep-tech commercialization.",
    images: ['/images/og-image.jpg'],
  },
  twitter: { card: 'summary_large_image' },
}

export const viewport: Viewport = { themeColor: '#111622', viewportFit: 'cover' }

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/images/icon-512.png`,
  email: site.email,
  telephone: site.phone.tel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1A Hughes Avenue, Alagomeji',
    addressLocality: 'Yaba, Lagos',
    addressCountry: 'NG',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a className="skip" href="#mission">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
