'use server'

import { z } from 'zod'
import * as Sentry from '@sentry/nextjs'
import { createClient } from '@/lib/supabase/server'
import { site } from '@/content/site'

const schema = z.object({
  track: z.enum(['talent', 'grants', 'investment', 'general']),
  name: z.string().trim().min(1, 'Enter your name').max(200),
  email: z.email('Enter a valid email address').max(320),
  organisation: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, 'Tell us a little about your interest').max(5000),
})

export type EnquiryState =
  | { status: 'idle' }
  | { status: 'sent' }
  | { status: 'error'; message: string; fields?: Record<string, string> }

export async function submitEnquiry(_prev: EnquiryState, form: FormData): Promise<EnquiryState> {
  const parsed = schema.safeParse({
    track: form.get('track') || 'general',
    name: form.get('name'),
    email: form.get('email'),
    organisation: form.get('organisation') || undefined,
    message: form.get('message'),
  })
  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const issue of parsed.error.issues) fields[String(issue.path[0])] ??= issue.message
    return { status: 'error', message: 'Please check the highlighted fields.', fields }
  }

  // Each enquiry is emailed to the office inbox and, when Supabase is set up, also saved to the database.
  const supabase = await createClient()
  const emailOn = !!process.env.RESEND_API_KEY
  if (!supabase && !emailOn) {
    return {
      status: 'error',
      message: `Online enquiries aren't switched on yet. Email us at ${site.email} instead.`,
    }
  }

  const [stored, emailed] = await Promise.all([
    supabase ? storeEnquiry(supabase, parsed.data) : false,
    emailOn ? emailEnquiry(parsed.data) : false,
  ])
  if (!stored && !emailed) {
    return {
      status: 'error',
      message: `Your enquiry could not be sent. Please try again or email us at ${site.email}.`,
    }
  }

  await notifyBackend(parsed.data)
  return { status: 'sent' }
}

type Enquiry = z.infer<typeof schema>

async function storeEnquiry(supabase: NonNullable<Awaited<ReturnType<typeof createClient>>>, enquiry: Enquiry) {
  const { error } = await supabase.from('enquiries').insert(enquiry)
  if (error) Sentry.captureException(error)
  return !error
}

const trackLabel: Record<Enquiry['track'], string> = {
  talent: 'Track A · Join the team',
  grants: 'Track B · Fund a lab',
  investment: 'Track C · Investment',
  general: 'General enquiry',
}

/** Emails the enquiry to the office inbox through Resend. Replying to the email replies to the visitor. */
async function emailEnquiry(enquiry: Enquiry) {
  const oneLine = (v: string) => v.replace(/\s+/g, ' ').trim()
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      body: JSON.stringify({
        from: process.env.ENQUIRY_FROM_EMAIL || 'Raoatech website <onboarding@resend.dev>',
        to: [process.env.ENQUIRY_TO_EMAIL || site.email],
        reply_to: enquiry.email,
        subject: `Website enquiry from ${oneLine(enquiry.name)} (${trackLabel[enquiry.track]})`,
        text: [
          `Interested in: ${trackLabel[enquiry.track]}`,
          `Name: ${oneLine(enquiry.name)}`,
          `Email: ${enquiry.email}`,
          `Organisation: ${enquiry.organisation ? oneLine(enquiry.organisation) : 'Not given'}`,
          '',
          'Message:',
          enquiry.message,
        ].join('\n'),
      }),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`)
    return true
  } catch (err) {
    Sentry.captureException(err)
    console.error('Enquiry email failed', err)
    return false
  }
}

/** Tells the Railway backend about a new enquiry so it can text the team. Never blocks the visitor. */
async function notifyBackend(enquiry: Enquiry) {
  const url = process.env.API_URL
  const secret = process.env.API_SHARED_SECRET
  if (!url || !secret) return
  try {
    await fetch(new URL('/enquiries/notify', url), {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${secret}` },
      body: JSON.stringify({ track: enquiry.track, name: enquiry.name, organisation: enquiry.organisation }),
      signal: AbortSignal.timeout(4000),
    })
  } catch (err) {
    Sentry.captureException(err)
  }
}
