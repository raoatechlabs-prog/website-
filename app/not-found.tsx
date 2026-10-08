import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="wrap" style={{ minHeight: '100vh', display: 'grid', alignContent: 'center', gap: 28 }}>
      <div className="eyebrow">Error 404</div>
      <h1 style={{ fontSize: 'clamp(48px,8vw,110px)' }}>Off course</h1>
      <p>This page doesn&apos;t exist. Head back to the Innovation Point.</p>
      <Link className="btn amber" href="/" style={{ justifySelf: 'start' }}>
        Return home
      </Link>
    </main>
  )
}
