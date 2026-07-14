import { GOOGLE_FORM_URL } from '@/lib/config'
import { getMemberCount } from '@/lib/members'
import JoinFormButton from './JoinFormButton'
import MemberCount from './MemberCount'
import JoinCTAButtons from './JoinCTAButtons'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default async function JoinCTA() {
  const memberCount = await getMemberCount()

  return (
    <section
      id="join"
      style={{
        background: '#0E1410', color: '#F3EFE4',
        padding: 'clamp(90px,16vh,180px) clamp(20px,5vw,64px)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 80% at 50% 120%,rgba(19,57,43,.7),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 880, margin: '0 auto', position: 'relative' }}>
        <div data-reveal style={{ fontFamily: MONO, fontSize: 11.5, letterSpacing: '.28em', textTransform: 'uppercase', color: '#C29A3F', marginBottom: 30 }}>
          Open · Non-commercial · Creative Commons
        </div>

        <h2
          data-reveal
          data-delay=".08s"
          style={{ fontFamily: SERIF, fontSize: 'clamp(40px,7vw,92px)', lineHeight: .98, letterSpacing: '-.01em' }}
        >
          The movement begins<br />with attention.<br />
          <span style={{ fontStyle: 'italic', color: '#E9DFC4' }}>Add yours.</span>
        </h2>

        <p
          data-reveal
          data-delay=".16s"
          style={{
            marginTop: 28, fontSize: 'clamp(16px,1.5vw,20px)', lineHeight: 1.6, fontWeight: 300,
            color: 'rgba(243,239,228,.74)', maxWidth: '52ch', margin: '28px auto 0',
          }}
        >
          Contribute field notes and creative work, submit to the call for papers, propose a seminar,
          or simply learn to read the living world a little more closely.
        </p>

        <JoinCTAButtons />

        <div data-reveal data-delay=".32s" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 30, marginTop: 54, paddingTop: 46, borderTop: '1px solid rgba(243,239,228,.14)' }}>
          <JoinFormButton href={GOOGLE_FORM_URL} />
          <MemberCount count={memberCount} />
        </div>
      </div>
    </section>
  )
}
