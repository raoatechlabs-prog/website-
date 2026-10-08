import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'

/** Supabase client for Server Components, Route Handlers and Server Actions. Returns null until the env vars are set. */
export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null

  const cookieStore = await cookies()
  return createServerClient(url, key, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Called from a Server Component, where cookies are read-only. Safe to ignore.
        }
      },
    },
  })
}
