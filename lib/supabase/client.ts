import { createBrowserClient } from '@supabase/ssr'

/** Supabase client for Client Components. Returns null until the env vars are set. */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createBrowserClient(url, key)
}
