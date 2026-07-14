'use client'
import { useState } from 'react'

const MONO = "var(--font-mono-rw), monospace"

export default function JoinCTAButtons() {
  const [h1, setH1] = useState(false)
  const [h2, setH2] = useState(false)

  return (
    <div data-reveal data-delay=".24s" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 42 }}>
      <a
        href="#"
        onMouseEnter={() => setH1(true)}
        onMouseLeave={() => setH1(false)}
        style={{
          fontFamily: MONO, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
          padding: '16px 30px', borderRadius: 40,
          background: h1 ? '#fff' : '#F3EFE4',
          color: '#0E1410',
          transform: h1 ? 'translateY(-2px)' : 'none',
          transition: 'transform .4s, background .4s',
        }}
      >
        Contribute your work
      </a>
      <a
        href="#"
        onMouseEnter={() => setH2(true)}
        onMouseLeave={() => setH2(false)}
        style={{
          fontFamily: MONO, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
          padding: '16px 30px', borderRadius: 40,
          border: '1px solid rgba(243,239,228,.4)',
          background: h2 ? '#F3EFE4' : 'transparent',
          color: h2 ? '#0E1410' : '#F3EFE4',
          transition: 'background .35s, color .35s',
        }}
      >
        Join the newsletter
      </a>
    </div>
  )
}
