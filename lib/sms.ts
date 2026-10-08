const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, NOTIFY_TO_NUMBER } = process.env

export function smsEnabled() {
  return !!(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM_NUMBER && NOTIFY_TO_NUMBER)
}

/** Texts the office through Twilio's REST API. Does nothing until all four Twilio variables are set. */
export async function sendSms(body: string) {
  if (!smsEnabled()) return
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
    method: 'POST',
    headers: {
      authorization: `Basic ${Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64')}`,
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ From: TWILIO_FROM_NUMBER!, To: NOTIFY_TO_NUMBER!, Body: body }),
    signal: AbortSignal.timeout(4000),
  })
  if (!res.ok) throw new Error(`Twilio responded ${res.status}: ${await res.text()}`)
}
