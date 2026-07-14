const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const MONTHS = [
  { code: 'FEB · WETLANDS DAY', theme: 'Water Ecologies'      },
  { code: 'MAR · WILDLIFE DAY', theme: 'Endangered Species'   },
  { code: 'APR · EARTH DAY',    theme: 'Climate & Grief'      },
  { code: 'MAY · BIODIVERSITY', theme: 'Indigenous Knowledge' },
  { code: 'JUN · ENVIRONMENT',  theme: 'Sustainable Living'   },
  { code: 'SEP · RIVERS DAY',   theme: 'River Ecologies'      },
]

export default function EcologicalCalendar() {
  return (
    <section
      style={{
        background: '#EDE7D8', color: '#1B231C',
        padding: 'clamp(70px,12vh,130px) clamp(20px,5vw,64px)',
        borderTop: '1px solid rgba(27,35,28,.1)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div data-reveal style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.26em', textTransform: 'uppercase', color: '#A8542F', marginBottom: 18 }}>
            An Ecological Year
          </div>
          <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(32px,4.6vw,58px)', lineHeight: 1, letterSpacing: '-.01em', maxWidth: '18ch' }}>
            Content that follows the planet&rsquo;s calendar
          </h2>
        </div>

        <div
          data-reveal
          data-delay=".1s"
          id="calendar-grid"
          style={{
            display: 'grid',
            gap: 1,
            background: 'rgba(27,35,28,.12)',
            border: '1px solid rgba(27,35,28,.12)',
          }}
        >
          {MONTHS.map(m => (
            <div key={m.code} style={{ background: '#EDE7D8', padding: '24px 20px' }}>
              <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.14em', color: '#A8542F', marginBottom: 14 }}>
                {m.code}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 21, lineHeight: 1.1 }}>{m.theme}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
