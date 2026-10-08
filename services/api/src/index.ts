import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { bearerAuth } from 'hono/bearer-auth'
import { HTTPException } from 'hono/http-exception'
import { z } from 'zod'
import { sendSms, smsEnabled } from './twilio.js'

const app = new Hono()

const origins = (process.env.CORS_ORIGINS ?? '').split(',').map((o) => o.trim()).filter(Boolean)
app.use('*', cors({ origin: origins.length ? origins : '*' }))

app.get('/health', (c) => c.json({ ok: true, sms: smsEnabled() }))

const secret = process.env.API_SHARED_SECRET
if (!secret) console.warn('API_SHARED_SECRET is not set; protected routes will reject every request.')
const requireSecret = bearerAuth({ verifyToken: (token) => !!secret && token === secret })

const notifySchema = z.object({
  track: z.enum(['talent', 'grants', 'investment', 'general']),
  name: z.string().min(1).max(120),
  organisation: z.string().max(160).optional(),
})

const trackLabel: Record<z.infer<typeof notifySchema>['track'], string> = {
  talent: 'Join the team',
  grants: 'Fund a lab',
  investment: 'Investment',
  general: 'General',
}

app.post('/enquiries/notify', requireSecret, async (c) => {
  const parsed = notifySchema.safeParse(await c.req.json().catch(() => null))
  if (!parsed.success) return c.json({ error: 'invalid body' }, 400)
  const { track, name, organisation } = parsed.data

  if (!smsEnabled()) return c.json({ sent: false, reason: 'twilio not configured' })
  const who = organisation ? `${name} (${organisation})` : name
  await sendSms(`Raoatech: new ${trackLabel[track]} enquiry from ${who}.`)
  return c.json({ sent: true })
})

app.onError((err, c) => {
  if (err instanceof HTTPException) return err.getResponse()
  console.error(err)
  return c.json({ error: 'internal error' }, 500)
})

const port = Number(process.env.PORT ?? 8787)
serve({ fetch: app.fetch, port }, () => console.log(`raoatech-api listening on :${port}`))
