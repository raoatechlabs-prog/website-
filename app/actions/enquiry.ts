'use server'

import { z } from 'zod'
import * as Sentry from '@sentry/nextjs'
import { createClient } from '@/lib/supabase/server'

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

  const supabase = await createClient()
  if (!supabase) {
    return {
      status: 'error',
      message: `Online enquiries aren't switched on yet. Email us at oludare.olarewaju@raoatech.com instead.`,
    }
  }

  const { error } = await supabase.from('enquiries').insert(parsed.data)
  if (error) {
    Sentry.captureException(error)
    return { status: 'error', message: 'Your enquiry could not be sent. Please try again or email us.' }
  }

  await notifyBackend(parsed.data)
  return { status: 'sent' }
}

/** Tells the Railway backend about a new enquiry so it can text the team. Never blocks the visitor. */
async function notifyBackend(enquiry: z.infer<typeof schema>) {
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
