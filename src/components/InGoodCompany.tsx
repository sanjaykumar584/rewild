const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const PARTNERS = ['Emergence Magazine', 'iNaturalist', 'Mongabay India', 'ATREE', 'Dark Mountain', 'GBIF']

export default function InGoodCompany() {
  return (
    <section
      style={{
        background: '#F3EFE4', color: '#1B231C',
        padding: 'clamp(60px,10vh,110px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(27,35,28,.1)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', textAlign: 'center' }}>
        <div data-reveal style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.26em', textTransform: 'uppercase', color: '#6B7468', marginBottom: 34 }}>
          In conversation with the field
        </div>
        <div
          data-reveal
          data-delay=".08s"
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
            gap: 'clamp(24px,4vw,56px)',
            fontFamily: SERIF, fontSize: 'clamp(20px,2.4vw,30px)', color: '#33402F',
          }}
        >
          {PARTNERS.map((p, i) => (
            <span key={p} style={{ display: 'contents' }}>
              {i > 0 && <span style={{ color: '#C29A3F' }}>·</span>}
              <span style={{ opacity: .78 }}>{p}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
