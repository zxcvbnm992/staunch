import { useEffect, useRef, useState } from 'react'

const services = [
  { icon: '💻', title: 'Full Stack App Development', text: 'We build complete apps, from the screens people use to the system behind them, shaped around how your business works.' },
  { icon: '🌐', title: 'Website Development', text: 'We design and build fast, good-looking websites that work on phones and computers, and help customers find and trust you.' },
  { icon: '🛟', title: 'Support', text: 'We keep things running. When something breaks or someone needs help, we fix it quickly and work to stop it happening again.' },
  { icon: '⚡', title: 'Power Apps Development', text: 'We build custom apps and automated approvals on Microsoft Power Platform, so your team spends less time on manual work.' },
  { icon: '🛠️', title: 'Technical Support Engineering', text: 'We look after your IT setup, from the service desk to Microsoft 365 and cloud systems, so your staff can keep working.' },
  { icon: '🧩', title: 'Solution Engineering', text: 'We turn a business problem into a clear, working solution, and make sure all the parts fit together and last.' },
]

const perViewNow = () => (typeof window === 'undefined' ? 3 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)

export default function ServicesCarousel() {
  const [perView, setPerView] = useState(perViewNow)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const max = services.length - perView
  const at = Math.min(index, max)

  useEffect(() => {
    const on = () => setPerView(perViewNow())
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (Math.min(i, max) >= max ? 0 : Math.min(i, max) + 1)), 4000)
    return () => clearInterval(id)
  }, [paused, max])

  const go = (n) => setIndex(Math.max(0, Math.min(n, max)))
  const arrow = 'absolute top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white backdrop-blur transition hover:border-cyan-400 hover:text-cyan-400 disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white'

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const d = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(d) > 40) go(at + (d < 0 ? 1 : -1))
        touchX.current = null
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${(at * 100) / perView}%)` }}
        >
          {services.map((s) => (
            <div key={s.title} className="shrink-0 px-3" style={{ flexBasis: `${100 / perView}%` }}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,.25)]">
                <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-125">{s.icon}</div>
                <h4 className="mb-4 text-2xl font-bold">{s.title}</h4>
                <p className="leading-relaxed text-gray-400">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button aria-label="Previous service" className={`${arrow} -left-4 hidden md:flex`} disabled={at === 0} onClick={() => go(at - 1)}>‹</button>
      <button aria-label="Next service" className={`${arrow} -right-4 hidden md:flex`} disabled={at === max} onClick={() => go(at + 1)}>›</button>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: max + 1 }, (_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === at ? 'w-8 bg-cyan-400' : 'w-2 bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}
