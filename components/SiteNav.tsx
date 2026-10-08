'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { nav } from '@/content/site'

export function SiteNav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <nav className={`nav${solid ? ' solid' : ''}${open ? ' open' : ''}`} aria-label="Main">
      <a href="#top">
        <Image src="/images/logo-badge.png" alt="Raoatech R&D and Innovation Point" width={274} height={123} priority />
      </a>
      <div className="right">
        <ul id="menu" onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn amber" href="#partner">
          Partner with us
        </a>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>
    </nav>
  )
}
