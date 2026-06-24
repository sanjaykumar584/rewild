'use client'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const PRINCIPLES = [
  { n: '01', title: 'Protect Biodiversity',       body: 'Document, celebrate, and campaign for species and ecosystem preservation — from urban green to deep wilderness.' },
  { n: '02', title: 'Promote Ecological Literacy', body: 'Make environmental science accessible and engaging for non-specialists through clear, jargon-free language.' },
  { n: '03', title: 'Preserve Indigenous Knowledge', body: 'Centre the voices of communities whose relationship with the land predates modern conservation.' },
  { n: '04', title: 'Encourage Sustainable Living', body: 'Translate systemic ecological issues into actionable everyday practices — without moralising.' },
  { n: '05', title: 'Evidence-Based Action',       body: 'Ground all advocacy in peer-reviewed science, field data, and scholarly research.' },
  { n: '06', title: 'Connect Ecology with Art',    body: 'Use poetry, fiction, film, and oral tradition as vectors for ecological feeling and knowledge.' },
]

export default function CorePrinciples() {
  return (
    <section
      style={{
        background: '#EDE7D8', color: '#1B231C',
        padding: 'clamp(70px,12vh,130px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(27,35,28,.1)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div data-reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 54 }}>
          <h2 style={{
            fontFamily: SERIF,
            fontSize: 'clamp(34px,5vw,64px)', lineHeight: .98, letterSpacing: '-.01em', maxWidth: '14ch',
          }}>
            Six principles we practice
          </h2>
          <p style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.2em', textTransform: 'uppercase', color: '#6B7468', maxWidth: '30ch' }}>
            What each one means, in practice — not in theory
          </p>
        </div>

        {/* 3-col grid, 2-col at ≤1000px, 1-col at ≤600px */}
        <div
          id="principles-grid"
          style={{
            display: 'grid',
            gap: 1,
            background: 'rgba(27,35,28,.12)',
            border: '1px solid rgba(27,35,28,.12)',
          }}
        >
          {PRINCIPLES.map((p, i) => (
            <PrincipleCard key={p.n} {...p} delay={`${(i % 3) * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({ n, title, body, delay }: { n: string; title: string; body: string; delay: string }) {
  return (
    <div
      data-reveal
      data-delay={delay}
      style={{
        background: '#EDE7D8', padding: '34px 30px',
        transition: 'background .5s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = '#F3EFE4')}
      onMouseLeave={e => (e.currentTarget.style.background = '#EDE7D8')}
    >
      <div style={{ fontFamily: MONO, fontSize: 12, color: '#A8542F', letterSpacing: '.1em', marginBottom: 30 }}>{n}</div>
      <h3 style={{ fontFamily: SERIF, fontSize: 27, lineHeight: 1.05, marginBottom: 14 }}>{title}</h3>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#525C4F' }}>{body}</p>
    </div>
  )
}
