import { useEffect, useRef, useState } from 'react'

// Fades an element in once it scrolls into view
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  )
}

// Thin bar at the top that fills as you scroll
export function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (ref.current) ref.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return <div ref={ref} className="fixed left-0 top-0 z-50 h-[3px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500" />
}

// Soft light that follows the cursor
export function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const on = (e) => {
      if (ref.current) ref.current.style.background = `radial-gradient(380px circle at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,.14), transparent 70%)`
    }
    window.addEventListener('mousemove', on)
    return () => window.removeEventListener('mousemove', on)
  }, [])
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-[5]" />
}

// Counts up to a number when it scrolls into view
export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{n}{suffix}</span>
}
