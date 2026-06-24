'use client'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const SERIES = [
  { code: 'SERIES 01', title: 'Voices of the Land',    desc: 'Interviews with forest communities, farmers, and fisherfolk. 30–45 min.' },
  { code: 'SERIES 02', title: 'Reading the Earth',     desc: 'Literary ecology — how great writers have understood nature. 20–30 min.' },
  { code: 'SERIES 03', title: 'The Science Understory', desc: 'Accessible conversations with ecologists and conservationists. 35–45 min.' },
  { code: 'YOUTH',     title: 'Seedlings',              desc: 'Why do bees matter? The story of seeds. For younger ears. 10–15 min.' },
]

const WAVE_DELAYS = [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1.05, 0.2, 0.5, 0.35, 0.7]

export default function PodcastSection() {
  return (
    <section
      id="podcast"
      style={{
        background: '#13392B', color: '#F3EFE4',
        padding: 'clamp(80px,14vh,150px) clamp(20px,5vw,64px)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{ position: 'absolute', inset: 0, opacity: .5, background: 'radial-gradient(80% 60% at 15% 0%,rgba(194,154,63,.16),transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div data-reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 40, alignItems: 'end', marginBottom: 54 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#E2C57C', marginBottom: 22 }}>
              D / 04 — Podcasts &amp; Digital Storytelling
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(36px,5.5vw,72px)', lineHeight: .98, letterSpacing: '-.01em' }}>
              The most intimate<br />medium we have
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.62, fontWeight: 300, color: 'rgba(243,239,228,.78)', maxWidth: '42ch' }}>
            It reaches those who do not read journals, translates complex ecology into narrative, and
            archives voices — particularly indigenous and community voices — that academic publishing
            often excludes.
          </p>
        </div>

        {/* Animated waveform */}
        <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: 4, height: 54, marginBottom: 46, opacity: .55 }}>
          {WAVE_DELAYS.map((delay, i) => (
            <span
              key={i}
              className="rw-wave-bar"
              style={{
                flex: 1, height: '100%',
                background: 'linear-gradient(#E2C57C,#7FA08A)',
                borderRadius: 4,
                animationDelay: `${delay}s`,
              }}
            />
          ))}
        </div>

        {/* Series cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
          gap: 1, background: 'rgba(243,239,228,.16)', border: '1px solid rgba(243,239,228,.16)',
        }}>
          {SERIES.map((s, i) => (
            <PodcastCard key={s.code} {...s} delay={`${i * 0.06}s`} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PodcastCard({ code, title, desc, delay }: { code: string; title: string; desc: string; delay: string }) {
  return (
    <div
      data-reveal
      data-delay={delay}
      style={{ background: '#13392B', padding: '32px 28px', cursor: 'pointer', transition: 'background .5s' }}
      onMouseEnter={e => (e.currentTarget.style.background = '#164332')}
      onMouseLeave={e => (e.currentTarget.style.background = '#13392B')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 38 }}>
        <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.16em', color: '#E2C57C' }}>{code}</span>
        <span style={{
          width: 34, height: 34, border: '1px solid rgba(243,239,228,.3)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11,
        }}>▶</span>
      </div>
      <h3 style={{ fontFamily: SERIF, fontSize: 26, lineHeight: 1.05, marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'rgba(243,239,228,.66)' }}>{desc}</p>
    </div>
  )
}
