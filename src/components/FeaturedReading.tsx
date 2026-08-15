const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const ARTICLES = [
  {
    tag:   'Rewilding Narratives',
    title: 'The grammar of a returning forest',
    body:  'On Macfarlane, Kimmerer, and learning the language of land that remembers itself.',
    delay: '0s',
  },
  {
    tag:   'Indigenous Ecology',
    title: 'Sacred groves & the science of restraint',
    body:  'Traditional conservation practices that protected biodiversity centuries before the word existed.',
    delay: '.08s',
  },
  {
    tag:   'Ecological Grief',
    title: 'Solastalgia, and naming what we lose',
    body:  'Climate literature as a way of grieving — and a way of refusing to look away.',
    delay: '.16s',
  },
]

export default function FeaturedReading() {
  return (
    <section
      style={{
        background: '#F3EFE4', color: '#1B231C',
        padding: 'clamp(80px,14vh,150px) clamp(20px,5vw,64px)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        {/* Header */}
        <div
          data-reveal
          style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 20, marginBottom: 50,
            borderBottom: '1px solid rgba(27,35,28,.16)', paddingBottom: 26,
          }}
        >
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.26em', textTransform: 'uppercase', color: '#A8542F', marginBottom: 18 }}>
              From the Library · [Upcoming]
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px,4.6vw,58px)', lineHeight: 1, letterSpacing: '-.01em' }}>
              Where ecology<br />becomes a story
            </h2>
          </div>
          <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(27,35,28,.5)', border: '1px solid rgba(27,35,28,.2)', borderRadius: 30, padding: '6px 14px' }}>
            Library Coming Soon
          </span>
        </div>

        {/* 3-col article grid */}
        <div
          id="articles-grid"
          style={{ display: 'grid', gap: 'clamp(24px,3vw,40px)' }}
        >
          {ARTICLES.map(a => (
            <article
              key={a.title}
              data-reveal
              data-delay={a.delay}
            >
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4, marginBottom: 20 }}>
                <div
                  className="rw-img-article"
                  style={{ width: '100%', height: 'clamp(240px,28vw,380px)', display: 'block', borderRadius: 4 }}
                />
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: '#A8542F', marginBottom: 12 }}>
                {a.tag} · Upcoming
              </div>
              <h3 style={{ fontFamily: SERIF, fontSize: 26, lineHeight: 1.1, marginBottom: 10 }}>{a.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.58, color: '#525C4F' }}>{a.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
