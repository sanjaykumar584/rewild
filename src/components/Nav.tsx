'use client'
import { useEffect, useRef, useState } from 'react'

const MONO = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const NAV_LINKS = [
  { label: 'Movement', href: '#movement' },
  { label: 'Library',  href: '#library'  },
  { label: 'Atlas',    href: '#atlas'    },
  { label: 'Seminars', href: '#seminars' },
  { label: 'Journal',  href: '#journal'  },
  { label: 'Podcast',  href: '#podcast'  },
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoverCta, setHoverCta] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 90,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `${scrolled ? '14px' : '22px'} clamp(20px,5vw,64px)`,
        background: scrolled ? 'rgba(10,15,11,.86)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(243,239,228,.1)' : 'transparent'}`,
        transition: 'background .5s, padding .5s, border-color .5s',
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.34em', color: '#C29A3F' }}>❋</span>
        <span style={{ fontFamily: SERIF, fontSize: 25, letterSpacing: '.14em', color: '#F3EFE4' }}>REWILD</span>
      </a>

      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 30,
          fontFamily: MONO, fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase',
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a key={label} href={href} style={{ opacity: .82, transition: 'opacity .2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '.82')}
          >{label}</a>
        ))}
      </div>

      <a
        href="#join"
        onMouseEnter={() => setHoverCta(true)}
        onMouseLeave={() => setHoverCta(false)}
        style={{
          fontFamily: MONO, fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
          padding: '10px 20px',
          border: '1px solid rgba(243,239,228,.4)', borderRadius: 40,
          transition: 'background .35s, color .35s, border-color .35s',
          background: hoverCta ? '#F3EFE4' : 'transparent',
          color:      hoverCta ? '#0E1410' : '#F3EFE4',
        }}
      >
        Contribute
      </a>
    </nav>
  )
}
