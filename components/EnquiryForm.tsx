'use client'

import { useActionState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { submitEnquiry, type EnquiryState } from '@/app/actions/enquiry'

const trackOptions = [
  { value: 'general', label: 'General enquiry' },
  { value: 'talent', label: 'Track A · Join the team' },
  { value: 'grants', label: 'Track B · Fund a lab' },
  { value: 'investment', label: 'Track C · Investment' },
]

export function EnquiryForm() {
  const params = useSearchParams()
  const initialTrack = trackOptions.some((o) => o.value === params.get('track')) ? params.get('track')! : 'general'
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: 'idle' })

  useEffect(() => {
    if (state.status === 'sent') posthog.capture('enquiry_submitted')
  }, [state.status])

  if (state.status === 'sent') {
    return (
      <div className="enquiry sent" role="status">
        <h3>Thank you</h3>
        <p>Your enquiry has reached the executive office. We&apos;ll be in touch to arrange a briefing.</p>
      </div>
    )
  }

  const err = state.status === 'error' ? state.fields ?? {} : {}
  return (
    <form className="enquiry" action={action} noValidate>
      <label htmlFor="enq-track">I&apos;m interested in</label>
      <select id="enq-track" name="track" defaultValue={initialTrack} key={initialTrack}>
        {trackOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <label htmlFor="enq-name">Name</label>
      <input id="enq-name" name="name" autoComplete="name" required aria-invalid={!!err.name} />
      {err.name && <span className="field-error">{err.name}</span>}

      <label htmlFor="enq-email">Email</label>
      <input id="enq-email" name="email" type="email" autoComplete="email" required aria-invalid={!!err.email} />
      {err.email && <span className="field-error">{err.email}</span>}

      <label htmlFor="enq-org">Organisation (optional)</label>
      <input id="enq-org" name="organisation" autoComplete="organization" />

      <label htmlFor="enq-message">Message</label>
      <textarea id="enq-message" name="message" rows={4} required aria-invalid={!!err.message} />
      {err.message && <span className="field-error">{err.message}</span>}

      {state.status === 'error' && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}
      <button className="btn amber" type="submit" disabled={pending}>
        {pending ? 'Sending…' : 'Send enquiry'}
      </button>
    </form>
  )
}
