'use client'
import { useEffect, useRef, useState } from 'react'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null)
  const [hoverPrimary, setHoverPrimary] = useState(false)

  useEffect(() => {
    const media = mediaRef.current
    const onScroll = () => {
      if (!media) return
      const y = window.scrollY
      if (y < window.innerHeight * 1.4)
        media.style.transform = `translateY(${y * 0.28}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      id="top"
      style={{
        position: 'relative', height: '100vh', minHeight: 680,
        display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
      }}
    >
      {/* Forest image placeholder */}
      <div
        ref={mediaRef}
        style={{
          position: 'absolute', inset: '-8% 0 0 0', zIndex: 0, willChange: 'transform',
        }}
      >
        <div
          className="rw-img-hero"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(180deg,rgba(14,20,16,.55) 0%,rgba(14,20,16,.12) 32%,rgba(14,20,16,.45) 68%,rgba(14,20,16,.96) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(120% 90% at 80% 10%,rgba(14,20,16,0) 40%,rgba(14,20,16,.5) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 clamp(20px,5vw,64px) clamp(40px,7vh,80px)' }}>
        <div data-reveal style={{ maxWidth: 1000 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
            <span style={{ width: 34, height: 1, background: '#C29A3F', display: 'block' }} />
            <span style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#E9DFC4' }}>
              An Ecological Effort · Est. 2025
            </span>
          </div>

          <h1 style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: 'clamp(48px,8.6vw,128px)',
            lineHeight: .96, letterSpacing: '-.01em', color: '#F6F2E7',
          }}>
            Rewilding the way<br />
            <span style={{ fontStyle: 'italic', color: '#E9DFC4' }}>we read the Earth.</span>
          </h1>

          <p style={{
            marginTop: 30, maxWidth: 620,
            fontSize: 'clamp(17px,1.5vw,21px)', lineHeight: 1.55, fontWeight: 300,
            color: 'rgba(243,239,228,.86)',
          }}>
            An open, interdisciplinary movement for ecological &amp; nature-based literacy — bridging
            science, humanities, indigenous knowledge, and technology into one living platform.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginTop: 38 }}>
            <a
              href="#movement"
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                background: hoverPrimary ? '#fff' : '#F3EFE4',
                color: '#0E1410',
                fontFamily: MONO, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
                padding: '15px 26px', borderRadius: 40,
                transform: hoverPrimary ? 'translateY(-2px)' : 'none',
                transition: 'transform .4s, background .4s',
              }}
            >
              Enter the movement <span style={{ fontSize: 15 }}>→</span>
            </a>
            <a
              href="#podcast"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                fontFamily: MONO, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
                color: '#F3EFE4', padding: '15px 4px',
                borderBottom: '1px solid rgba(243,239,228,.35)',
              }}
            >
              ▶ Listen to a story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', left: '50%', bottom: 22, transform: 'translateX(-50%)',
        zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <span style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: '.3em', textTransform: 'uppercase', color: 'rgba(243,239,228,.55)' }}>Scroll</span>
        <span
          className="rw-scroll-dot"
          style={{ display: 'block', width: 1, height: 30, background: 'linear-gradient(#C29A3F,transparent)' }}
        />
      </div>
    </header>
  )
}
