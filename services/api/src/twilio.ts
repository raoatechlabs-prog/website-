import twilio from 'twilio'

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, NOTIFY_TO_NUMBER } = process.env

export function smsEnabled() {
  return !!(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN && TWILIO_FROM_NUMBER && NOTIFY_TO_NUMBER)
}

let client: ReturnType<typeof twilio> | undefined

export async function sendSms(body: string) {
  if (!smsEnabled()) return
  client ??= twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  await client.messages.create({ from: TWILIO_FROM_NUMBER, to: NOTIFY_TO_NUMBER!, body })
}
