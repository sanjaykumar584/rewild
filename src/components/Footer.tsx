'use client'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const PLATFORM_LINKS = [
  { label: 'Ecological Library', href: '#library'  },
  { label: 'Biodiversity Atlas', href: '#atlas'    },
  { label: 'Call for Papers',    href: '#journal'  },
  { label: 'Seminars',           href: '#seminars' },
  { label: 'Podcasts',           href: '#podcast'  },
]

const MOVEMENT_LINKS = [
  { label: 'Manifesto',       href: '#movement' },
  { label: 'Vision & Mission',href: '#'         },
  { label: 'Contribute',      href: '#join'     },
  { label: 'Resource Hub',    href: '#'         },
]

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14.5, color: 'rgba(243,239,228,.72)' }}>
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          style={{ transition: 'color .3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(243,239,228,.72)')}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0F0B', color: '#F3EFE4',
        padding: 'clamp(60px,9vh,90px) clamp(20px,5vw,64px) 40px',
        borderTop: '1px solid rgba(243,239,228,.1)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        {/* Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
          gap: 40, paddingBottom: 50,
          borderBottom: '1px solid rgba(243,239,228,.12)',
        }}>
          {/* Brand col */}
          <div style={{ gridColumn: '1 / -1', maxWidth: 360, marginBottom: 10 }}>
            <div style={{ fontFamily: SERIF, fontSize: 30, letterSpacing: '.14em', marginBottom: 14 }}>REWILD</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, fontWeight: 300, color: 'rgba(243,239,228,.62)' }}>
              An ecological &amp; nature-based literacy movement. Promoting ecological consciousness across
              science, humanities, indigenous knowledge, and technology.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 18 }}>
              Platform
            </div>
            <FooterLinks links={PLATFORM_LINKS} />
          </div>

          {/* Movement */}
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 18 }}>
              Movement
            </div>
            <FooterLinks links={MOVEMENT_LINKS} />
          </div>

          {/* For Designers */}
          <div>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.18em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 18 }}>
              For Designers
            </div>
            <FooterLinks links={[
              { label: 'Design System & Brief →', href: '#' },
              { label: 'Hero Directions →',        href: '#' },
            ]} />
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16,
          paddingTop: 28, fontFamily: MONO, fontSize: 11, letterSpacing: '.1em',
          color: 'rgba(243,239,228,.45)',
        }}>
          <span>© 2025 REWILD — Released under Creative Commons</span>
          <span>An Ecological Effort · ft. Sanjay Kumar &amp; Prasanna Kumar</span>
        </div>
      </div>
    </footer>
  )
}
