import type { NextConfig } from 'next'
import { withSentryConfig } from '@sentry/nextjs/config'

// The domain points at this site, so the hosting shortcut for webmail is forwarded to the mail server's login.
const webmailLogin = 'https://server359.web-hosting.com:2096/'

const nextConfig: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/webmail', destination: webmailLogin, permanent: false },
      { source: '/webmail/:path*', destination: webmailLogin, permanent: false },
    ]
  },
}

// Source maps upload only when SENTRY_AUTH_TOKEN, SENTRY_ORG and SENTRY_PROJECT are set.
export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
})
