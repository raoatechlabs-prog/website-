'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { submitEnquiry, type EnquiryState } from '@/app/actions/enquiry'
import { labServices, site, ventureStudio } from '@/content/site'

const trackIds = ['talent', 'grants', 'investment', 'general']

const serviceOptions = [
  ...labServices.map((l) => ({ value: l.id, label: `${Number(l.no)}. ${l.name}` })),
  { value: ventureStudio.id, label: `13. ${ventureStudio.name}` },
  { value: 'partnership', label: 'Partnership, sponsorship or donation' },
  { value: 'general', label: 'General enquiry' },
]

/**
 * Sends the form to the server. If the request itself fails (for example the site was
 * updated while this page was open), the visitor sees a message instead of a crashed page.
 */
async function sendEnquiry(prev: EnquiryState, form: FormData): Promise<EnquiryState> {
  try {
    return await submitEnquiry(prev, form)
  } catch {
    return {
      status: 'error',
      message: `Something went wrong sending your enquiry. Refresh the page and try again, or email us at ${site.email}.`,
    }
  }
}

export function EnquiryForm() {
  const params = useSearchParams()
  const form = useRef<HTMLFormElement>(null)
  const track = trackIds.includes(params.get('track') ?? '') ? params.get('track')! : 'general'
  const lab = params.get('lab')
  const initialService = serviceOptions.some((o) => o.value === lab)
    ? lab!
    : track === 'general'
      ? serviceOptions[0].value
      : track === 'investment'
        ? ventureStudio.id
        : 'partnership'
  const [state, action, pending] = useActionState<EnquiryState, FormData>(sendEnquiry, { status: 'idle' })

  useEffect(() => {
    if (state.status === 'sent') posthog.capture('enquiry_submitted')
  }, [state.status])

  if (state.status === 'sent') {
    return (
      <div className="enquiry sent" role="status">
        <h3>Thank you</h3>
        <p>Your inquiry has reached our R&amp;D and venture team. We&apos;ll be in touch shortly.</p>
      </div>
    )
  }

  const err = state.status === 'error' ? state.fields ?? {} : {}
  return (
    <form className="enquiry" action={action} ref={form} noValidate key={`${initialService}-${track}`}>
      <input type="hidden" name="track" value={track} />
      <div className="row">
        <div>
          <label htmlFor="enq-name">Full name *</label>
          <input id="enq-name" name="name" autoComplete="name" placeholder="e.g., Dr. Adebayo Ogunleye" required aria-invalid={!!err.name} />
          {err.name && <span className="field-error">{err.name}</span>}
        </div>
        <div>
          <label htmlFor="enq-org">Organization / Institution *</label>
          <input id="enq-org" name="organisation" autoComplete="organization" placeholder="e.g., Enterprise, University, or Startup" required aria-invalid={!!err.organisation} />
          {err.organisation && <span className="field-error">{err.organisation}</span>}
        </div>
      </div>
      <div className="row">
        <div>
          <label htmlFor="enq-email">Email address *</label>
          <input id="enq-email" name="email" type="email" autoComplete="email" placeholder="name@organization.com" required aria-invalid={!!err.email} />
          {err.email && <span className="field-error">{err.email}</span>}
        </div>
        <div>
          <label htmlFor="enq-phone">Phone / WhatsApp number *</label>
          <input id="enq-phone" name="phone" type="tel" autoComplete="tel" placeholder="+234 800 000 0000" required aria-invalid={!!err.phone} />
          {err.phone && <span className="field-error">{err.phone}</span>}
        </div>
      </div>

      <label htmlFor="enq-service">Select lab / service area *</label>
      <select id="enq-service" name="service" defaultValue={initialService}>
        {serviceOptions.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      <label htmlFor="enq-message">Project scope / inquiry details *</label>
      <textarea
        id="enq-message"
        name="message"
        rows={4}
        placeholder="Briefly describe your R&D requirement, testing scope, partnership goal, or training inquiry…"
        required
        aria-invalid={!!err.message}
      />
      {err.message && <span className="field-error">{err.message}</span>}

      {state.status === 'error' && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}
      <div className="form-actions">
        <button className="btn amber" type="submit" disabled={pending}>
          {pending ? 'Sending…' : 'Submit lab service inquiry'}
        </button>
      </div>
    </form>
  )
}
