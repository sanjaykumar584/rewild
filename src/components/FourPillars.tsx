const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

const TAGS_LIBRARY  = ['Articles', 'Reading Lists', 'Field Notes']
const TAGS_JOURNAL  = ['Ecological Grief', 'TEK', 'Nature Writing']
const TAGS_SEMINARS = ['Webinars', 'Workshops', 'Summit']

function TagChips({ tags }: { tags: string[] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 26, fontFamily: MONO, fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(243,239,228,.6)' }}>
      {tags.map(t => (
        <span key={t} style={{ border: '1px solid rgba(243,239,228,.16)', borderRadius: 30, padding: '7px 14px' }}>{t}</span>
      ))}
    </div>
  )
}

function CtaLink({ href, label }: { href: string; label: string }) {
  const isUpcoming = label.toLowerCase().includes('soon') || label.toLowerCase().includes('upcoming')
  if (isUpcoming) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 30, fontFamily: MONO, fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(243,239,228,.4)', border: '1px solid rgba(243,239,228,.2)', borderRadius: 30, padding: '6px 14px' }}>
        {label}
      </span>
    )
  }
  return (
    <a href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 30, fontFamily: MONO, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#C29A3F', borderBottom: '1px solid rgba(194,154,63,.4)', paddingBottom: 5 }}>
      {label}
    </a>
  )
}

function PillarImage({ className, label }: { className: string; label: string }) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        className={className}
        style={{ width: '100%', height: 'clamp(300px,34vw,440px)', borderRadius: 4 }}
      />
      <span style={{
        position: 'absolute', bottom: 14, left: 14,
        fontFamily: MONO, fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase',
        color: '#F3EFE4', background: 'rgba(14,20,16,.6)', backdropFilter: 'blur(4px)',
        padding: '6px 12px', borderRadius: 30,
      }}>
        {label}
      </span>
    </div>
  )
}

function PillarRow({
  code, type, title, body, tags, cta, href, imgClass, imgLabel, reverse,
}: {
  code: string; type: string; title: React.ReactNode; body: string
  tags: string[]; cta: string; href: string
  imgClass: string; imgLabel: string; reverse?: boolean
}) {
  return (
    <section style={{ background: '#0E1410', padding: '0 clamp(20px,5vw,64px) clamp(28px,4vh,44px)' }}>
      <div
        data-reveal
        style={{
          maxWidth: 1240, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(28px,4vw,60px)', alignItems: 'center',
          borderTop: '1px solid rgba(243,239,228,.14)',
          paddingTop: 'clamp(36px,5vh,60px)',
        }}
      >
        {/* text side */}
        <div style={{ order: reverse ? 1 : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
            <span style={{ fontFamily: MONO, fontSize: 13, color: '#C29A3F' }}>{code}</span>
            <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(243,239,228,.45)', border: '1px solid rgba(243,239,228,.2)', borderRadius: 30, padding: '5px 13px' }}>
              {type}
            </span>
          </div>
          <h3 style={{ fontFamily: SERIF, fontSize: 'clamp(32px,4.2vw,54px)', lineHeight: 1.02, color: '#F3EFE4', marginBottom: 18 }}>
            {title}
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.62, fontWeight: 300, color: 'rgba(243,239,228,.74)', maxWidth: '46ch' }}>
            {body}
          </p>
          <TagChips tags={tags} />
          <CtaLink href={href} label={cta} />
        </div>

        {/* image side */}
        <div style={{ order: reverse ? 0 : 1 }}>
          <PillarImage className={imgClass} label={imgLabel} />
        </div>
      </div>
    </section>
  )
}

export default function FourPillars() {
  return (
    <>
      {/* Intro header */}
      <section id="library" style={{ background: '#0E1410', padding: 'clamp(80px,14vh,160px) clamp(20px,5vw,64px) clamp(40px,6vh,70px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 16px' }}>
            <div style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 24 }}>
              Movement Architecture
            </div>
            <h2 style={{ fontFamily: SERIF, fontSize: 'clamp(36px,6vw,76px)', lineHeight: 1, letterSpacing: '-.01em', color: '#F3EFE4' }}>
              Four interlocking pillars
            </h2>
            <p style={{ marginTop: 22, fontSize: 'clamp(16px,1.4vw,19px)', lineHeight: 1.6, fontWeight: 300, color: 'rgba(243,239,228,.7)' }}>
              Each pillar is independent — it produces value on its own — and interdependent,
              feeding content, community, and credibility into the others.
            </p>
          </div>
        </div>
      </section>

      {/* Pillar A */}
      <PillarRow
        code="A / 01" type="Web Platform"
        title={<>Ecological Library<br />&amp; Digital Hub</>}
        body="The movement's central nervous system. Articles, essays, and curated reading on biodiversity, climate, and indigenous ecology — for the curious layperson, the researcher, the activist, and the schoolteacher alike."
        tags={TAGS_LIBRARY} cta="Library Coming Soon" href="#"
        imgClass="rw-img-library" imgLabel="Fig. 01 — Repository"
      />

      {/* Pillar B */}
      <PillarRow
        code="B / 02" type="Publications"
        title={<>Call for Papers<br />&amp; Journal</>}
        body="A biannual interdisciplinary journal with open peer review and transparency logs. Research papers, creative nonfiction, poems, photo essays, and field notes — open-access, DOAJ-listed."
        tags={TAGS_JOURNAL} cta="Journal Coming Soon" href="#"
        imgClass="rw-img-journal" imgLabel="Fig. 02 — Peer Review"
        reverse
      />

      {/* Pillar C */}
      <section id="seminars" style={{ background: '#0E1410', padding: '0 clamp(20px,5vw,64px) clamp(28px,4vh,44px)' }}>
        <PillarRow
          code="C / 03" type="Public Events"
          title={<>Seminars<br />&amp; Public Events</>}
          body="Free, recorded, archived. Monthly public webinars with ecologists, writers, and indigenous scholars; quarterly skills workshops; and the flagship annual REWILD Summit."
          tags={TAGS_SEMINARS} cta="Seminars Coming Soon" href="#"
          imgClass="rw-img-seminars" imgLabel="Fig. 03 — Convergence"
        />
      </section>
    </>
  )
}
