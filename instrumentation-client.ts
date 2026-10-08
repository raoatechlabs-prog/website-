// Runs in the browser before the app becomes interactive.
// Sentry (errors + session replay) and PostHog (analytics) each start only when their key is set.
import * as Sentry from '@sentry/nextjs'
import posthog from 'posthog-js'

const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN
if (sentryDsn) {
  Sentry.init({
    dsn: sentryDsn,
    integrations: [Sentry.replayIntegration()],
    tracesSampleRate: 0.1,
    // Record 10% of sessions, and every session that hits an error.
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })
}

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
    defaults: '2025-05-24',
    // Sentry already records sessions; avoid recording twice.
    disable_session_recording: true,
  })
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
