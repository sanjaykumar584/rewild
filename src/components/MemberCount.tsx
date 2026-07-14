'use client'
import { useEffect, useRef } from 'react'

const MONO  = "var(--font-mono-rw), monospace"
const SERIF = "var(--font-instrument-serif), Georgia, serif"

export default function MemberCount({ count }: { count: number | null }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || count === null) return
    if (!('IntersectionObserver' in window)) { el.textContent = String(count); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        let cur = 0
        const step = Math.max(1, Math.ceil(count / 30))
        const t = setInterval(() => {
          cur += step
          if (cur >= count) { cur = count; clearInterval(t) }
          el.textContent = String(cur)
        }, 38)
        io.unobserve(el)
      })
    }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [count])

  if (count === null) {
    return (
      <div style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(243,239,228,.55)' }}>
        Be one of the first to join
      </div>
    )
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: SERIF, fontSize: 46, lineHeight: 1, color: '#E2C57C' }}>
        <span ref={ref} data-count-to={count}>0</span>
      </div>
      <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(243,239,228,.55)', marginTop: 8 }}>
        People who&rsquo;ve joined the movement
      </div>
    </div>
  )
}
