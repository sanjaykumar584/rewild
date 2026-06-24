'use client'
import { useState } from 'react'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default function JoinCTA() {
  const [h1, setH1] = useState(false)
  const [h2, setH2] = useState(false)

  return (
    <section
      id="join"
      style={{
        background: '#0E1410', color: '#F3EFE4',
        padding: 'clamp(90px,16vh,180px) clamp(20px,5vw,64px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 50% 120%,rgba(19,57,43,.7),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
        <div data-reveal style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 30 }}>
          Open · Non-commercial · Creative Commons
        </div>

        <h2
          data-reveal
          data-delay=".08s"
          style={{ fontFamily: SERIF, fontSize: 'clamp(40px,7vw,92px)', lineHeight: .98, letterSpacing: '-.01em' }}
        >
          The movement begins<br />with attention.<br />
          <span style={{ fontStyle: 'italic', color: '#E9DFC4' }}>Add yours.</span>
        </h2>

        <p
          data-reveal
          data-delay=".16s"
          style={{
            marginTop: 28, fontSize: 'clamp(16px,1.5vw,20px)', lineHeight: 1.6, fontWeight: 300,
            color: 'rgba(243,239,228,.74)', maxWidth: '52ch', margin: '28px auto 0',
          }}
        >
          Contribute field notes and creative work, submit to the call for papers, propose a seminar,
          or simply learn to read the living world a little more closely.
        </p>

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
      </div>
    </section>
  )
}
