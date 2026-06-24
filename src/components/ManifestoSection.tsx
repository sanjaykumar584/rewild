const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default function ManifestoSection() {
  return (
    <section
      id="movement"
      style={{
        background: '#0E1410',
        padding: 'clamp(90px,16vh,180px) clamp(20px,5vw,64px)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div
          data-reveal
          style={{
            fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase',
            color: '#C29A3F', marginBottom: 40, display: 'flex', gap: 14, alignItems: 'center',
          }}
        >
          <span style={{ width: 28, height: 1, background: '#C29A3F', display: 'block' }} />
          The Manifesto
        </div>

        <blockquote
          data-reveal
          data-delay=".08s"
          style={{
            fontFamily: SERIF, fontWeight: 400,
            fontSize: 'clamp(30px,4.6vw,62px)', lineHeight: 1.14,
            letterSpacing: '-.01em', color: '#F3EFE4',
          }}
        >
          REWILD begins not with a platform but with a commitment:{' '}
          <span style={{ fontStyle: 'italic', color: '#C29A3F' }}>to pay attention.</span>{' '}
          Before the first article is published or the first line of code is written, we must spend time
          in a forest, beside a river, in a field — and listen.
        </blockquote>

        <p
          data-reveal
          data-delay=".18s"
          style={{
            marginTop: 34, fontFamily: MONO, fontSize: 12,
            letterSpacing: '.16em', color: 'rgba(243,239,228,.5)',
          }}
        >
          — Every great ecological movement has begun with that act of witnessing. The rest is infrastructure.
        </p>
      </div>
    </section>
  )
}
