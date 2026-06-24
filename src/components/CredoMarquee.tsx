const MONO = "var(--font-mono-rw), monospace"

const ITEMS = ['Open Access', 'Non-Commercial', 'Creative Commons', 'Evidence-Based', 'Community-Driven']

export default function CredoMarquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div style={{
      background: '#0A0F0B',
      borderTop: '1px solid rgba(243,239,228,.08)',
      borderBottom: '1px solid rgba(243,239,228,.08)',
      overflow: 'hidden', whiteSpace: 'nowrap', padding: '16px 0',
    }}>
      <div
        className="rw-marquee-track"
        style={{
          display: 'inline-flex', gap: 46,
          fontFamily: MONO, fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase',
          color: 'rgba(243,239,228,.5)',
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={i % ITEMS.length === (ITEMS.length - 1) ? { color: '#C29A3F' } : {}}>
            {i > 0 && <span style={{ marginRight: 46, color: '#C29A3F' }}>✺</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
