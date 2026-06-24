'use client'
import { useEffect, useRef } from 'react'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const STATS = [
  { to: 6,  label: 'Open data APIs' },
  { to: 3,  label: 'Languages at launch' },
  { inf: true, label: 'Community pins' },
]

export default function BiodiversityAtlas() {
  const sectionRef = useRef<HTMLElement>(null)
  const mediaRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current
      const med = mediaRef.current
      if (!sec || !med) return
      const rect = sec.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const prog = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        med.style.transform = `translateY(${(prog - 0.5) * 60}px) scale(1.08)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const nums = Array.from(document.querySelectorAll('[data-count-to]')) as HTMLElement[]
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el  = e.target as HTMLElement
        const to  = parseInt(el.dataset.countTo ?? '0', 10)
        let cur   = 0
        const step = Math.max(1, Math.ceil(to / 30))
        const t = setInterval(() => {
          cur += step
          if (cur >= to) { cur = to; clearInterval(t) }
          el.textContent = String(cur)
        }, 38)
        io.unobserve(el)
      })
    }, { threshold: 0.6 })
    nums.forEach(el => io.observe(el))
  }, [])

  return (
    <section
      id="atlas"
      ref={sectionRef}
      style={{
        background: '#0A0F0B', color: '#F3EFE4',
        padding: 'clamp(80px,14vh,150px) clamp(20px,5vw,64px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Map image parallax */}
      <div
        ref={mediaRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: .32, willChange: 'transform' }}
      >
        <div className="rw-img-atlas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(90deg,rgba(10,15,11,.96) 0%,rgba(10,15,11,.72) 50%,rgba(10,15,11,.55) 100%)',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div data-reveal style={{ maxWidth: 560 }}>
          <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 24 }}>
            Interactive Cartography
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(36px,5.5vw,68px)', lineHeight: 1, letterSpacing: '-.01em', marginBottom: 22 }}>
            The Biodiversity<br />Atlas
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.62, fontWeight: 300, color: 'rgba(243,239,228,.78)', marginBottom: 34 }}>
            A living map of species, ecosystems, and traditional land use — drawing real occurrence data
            from GBIF and iNaturalist, threatened-species layers from the IUCN Red List, and indigenous
            territories from Native Land Digital.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 34, flexWrap: 'wrap' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: SERIF, fontSize: 46, lineHeight: 1, color: '#E2C57C' }}>
                  {s.inf
                    ? '∞'
                    : <span data-count-to={s.to}>0</span>
                  }
                </div>
                <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(243,239,228,.55)', marginTop: 8 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 38,
              fontFamily: MONO, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase',
              color: '#0E1410', background: '#E2C57C', padding: '14px 24px', borderRadius: 40,
              transition: 'transform .4s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
          >
            Explore the atlas →
          </a>
        </div>
      </div>

      {/* Floating pins */}
      <div
        className="rw-float"
        data-reveal
        style={{ position: 'absolute', right: '8%', top: '30%', zIndex: 2 }}
      >
        <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '.1em', color: '#0E1410', background: 'rgba(226,197,124,.92)', padding: '8px 12px', borderRadius: 30, whiteSpace: 'nowrap' }}>
          ◉ Panthera tigris · 21.1°N
        </div>
      </div>
      <div
        className="rw-float-2"
        data-reveal
        data-delay=".2s"
        style={{ position: 'absolute', right: '22%', top: '62%', zIndex: 2 }}
      >
        <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '.1em', color: '#F3EFE4', background: 'rgba(19,57,43,.9)', border: '1px solid rgba(243,239,228,.25)', padding: '8px 12px', borderRadius: 30, whiteSpace: 'nowrap' }}>
          ◉ Western Ghats · Hotspot
        </div>
      </div>
    </section>
  )
}
