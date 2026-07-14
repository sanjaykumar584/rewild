'use client'
import { useState } from 'react'

const MONO = "var(--font-mono-rw), monospace"

export default function JoinFormButton({ href }: { href: string }) {
  const [hover, setHover] = useState(false)
  const configured = Boolean(href)

  return (
    <a
      href={configured ? href : undefined}
      target={configured ? '_blank' : undefined}
      rel={configured ? 'noopener noreferrer' : undefined}
      aria-disabled={!configured}
      onMouseEnter={() => configured && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: MONO, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
        padding: '16px 34px', borderRadius: 40,
        background: hover ? '#fff' : '#F3EFE4',
        color: '#0E1410',
        opacity: configured ? 1 : 0.5,
        cursor: configured ? 'pointer' : 'not-allowed',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform .4s, background .4s, opacity .4s',
        display: 'inline-block',
      }}
    >
      {configured ? 'Join the movement →' : 'Form coming soon'}
    </a>
  )
}
