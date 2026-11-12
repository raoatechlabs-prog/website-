# Raoatech R&D and Innovation Point website

| Part | Where | Tech |
| --- | --- | --- |
| Website | repo root, deployed on **Vercel** | Next.js 16 (App Router), TypeScript |
| Database | `supabase/migrations` | **Supabase** Postgres with row-level security |
| Backend API | `services/api`, deployed on **Railway** | Hono on Node, **Twilio** SMS |
| Enquiry email | server action | **Resend** |
| Analytics | browser | **PostHog** (optional) |
| Errors and session replay | browser and server | **Sentry** (optional) |

Every integration switches on only when its environment variables are set, so the site builds and runs with none of them.

## Run it locally

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000
```

Checks: `npm run lint`, `npm run typecheck`, `npm run build`.

## Editing content

- Page copy lives in `content/site.ts`; each section is a component in `components/`.
- Styles are in `app/globals.css`. Colour tokens at the top:
  - Deep Carbon `#111622`
  - Metallic Amber `#D49A3E`
  - Titanium Silver `#C0C7D1`
- Images are in `public/images`, the brand film in `public/video`.

## Supabase

1. Create a project at supabase.com.
2. Run `supabase/migrations/20261008000000_enquiries.sql` in the SQL editor (or `supabase db push` with the CLI).
3. Copy the project URL and anon key into `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

The contact form writes to `public.enquiries`. Visitors can insert but not read; read enquiries in the Supabase dashboard.

## Enquiry email (Resend)

Every enquiry is emailed to `hello@raoatechlabs.com` (change with `ENQUIRY_TO_EMAIL`). Replying to that email replies to the visitor.

1. Create an account at resend.com using `hello@raoatechlabs.com`, and create an API key.
2. Set `RESEND_API_KEY` on Vercel and redeploy.
3. Optional: verify `raoatechlabs.com` under Domains in Resend, then set `ENQUIRY_FROM_EMAIL` to something like `Raoatech website <enquiries@raoatechlabs.com>`. Until a domain is verified, Resend only delivers to the address the account was created with.

The form works with email alone, Supabase alone, or both.

## Vercel

Import this repo at vercel.com/new. Framework and root directory are detected automatically. Add the variables from `.env.example` under Project Settings, Environment Variables.

## Railway (backend API)

1. New project, deploy from GitHub repo, then set the service **Root Directory** to `services/api`. `railway.json` sets the build, start and health check.
2. Add the variables from `services/api/.env.example`.
3. Generate a domain, then set `API_URL` (that domain) and the same `API_SHARED_SECRET` on Vercel.

Endpoints: `GET /health`, and `POST /enquiries/notify` (bearer `API_SHARED_SECRET`), which texts the office about each new enquiry.

## Twilio

Set `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` and `NOTIFY_TO_NUMBER` on Railway. Without them the API skips SMS.

## PostHog

Set `NEXT_PUBLIC_POSTHOG_KEY` (and `NEXT_PUBLIC_POSTHOG_HOST` for the EU cloud). Page views are captured automatically, plus an `enquiry_submitted` event.

## Sentry

Set `NEXT_PUBLIC_SENTRY_DSN` to turn on error tracking and session replay (10% of sessions, every session with an error). For readable stack traces, also set `SENTRY_ORG`, `SENTRY_PROJECT` and `SENTRY_AUTH_TOKEN` on Vercel so source maps upload at build time.

## Before launch

- Replace the headshots in `public/images` with high-resolution photos (square, at least 400×400).
- Add lab photography if desired.
- Confirm the domain in `content/site.ts` (`site.url`) if it isn't www.raoatechlabs.com.
