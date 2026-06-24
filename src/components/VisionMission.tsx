const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default function VisionMission() {
  return (
    <section
      style={{
        background: '#F3EFE4', color: '#1B231C',
        padding: 'clamp(80px,14vh,150px) clamp(20px,5vw,64px)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(40px,7vw,110px)' }}>
          <div data-reveal>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: '#A8542F', marginBottom: 22 }}>
              01 — The Vision
            </div>
            <p style={{
              fontFamily: SERIF,
              fontSize: 'clamp(26px,3vw,40px)', lineHeight: 1.18, letterSpacing: '-.01em',
            }}>
              A world where every individual — regardless of geography, background, or profession —
              understands, values, and actively{' '}
              <span style={{ fontStyle: 'italic' }}>protects the natural world.</span>
            </p>
          </div>

          <div data-reveal data-delay=".12s">
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: '#A8542F', marginBottom: 22 }}>
              02 — The Mission
            </div>
            <p style={{ fontSize: 'clamp(17px,1.5vw,20px)', lineHeight: 1.66, fontWeight: 400, color: '#33402F' }}>
              REWILD is an open, interdisciplinary educational movement that bridges science, humanities,
              indigenous knowledge, and technology to cultivate ecological consciousness.
            </p>
            <p style={{ fontSize: 'clamp(17px,1.5vw,20px)', lineHeight: 1.66, fontWeight: 400, color: '#33402F', marginTop: 18 }}>
              Through a digital platform, call-for-papers, seminars, and podcasts, it creates accessible
              and rigorous spaces for ecological learning and advocacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
