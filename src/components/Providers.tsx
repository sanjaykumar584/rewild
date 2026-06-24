'use client'
import { useEffect } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]

    els.forEach(el => {
      const delay = el.dataset.delay ?? '0s'
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = `opacity 1.1s cubic-bezier(.2,.7,.2,1) ${delay}, transform 1.1s cubic-bezier(.2,.7,.2,1) ${delay}`
    })

    const show = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) { show(e.target as HTMLElement); io.unobserve(e.target) } }),
        { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
      )
      els.forEach(el => io.observe(el))
    }

    const safety = setTimeout(() => els.forEach(show), 2000)
    return () => clearTimeout(safety)
  }, [])

  return <>{children}</>
}
