import { useRef } from 'react'
import { Reveal } from './effects'

const beliefs = [
  { title: 'Small things matter', lead: 'Most problems start small.', text: 'Things rarely fail because of one big mistake. They fail because little issues were missed early on.' },
  { title: 'It has to work', lead: "Nothing else counts if it breaks.", text: 'A great design or a smart plan means little if the product fails when people actually use it.' },
  { title: 'The hidden parts count too', lead: "What you can't see matters just as much.", text: 'The parts people never notice are usually what everything else depends on.' },
  { title: 'Plan for growth from day one', lead: 'Growing should be easy.', text: "If a product struggles when more people use it, it wasn't built properly." },
  { title: 'Simple means clear', lead: 'Easy to use is the goal.', text: 'The best systems feel effortless, even when they are complex behind the scenes.' },
  { title: 'Keep it working', lead: 'Launch day is just the start.', text: "It should keep working over time, when it's busy, and when things change." },
]

const values = [
  { icon: '🎯', name: 'Execution' },
  { icon: '🛍️', name: 'Entrepreneurship' },
  { icon: '🤝', name: 'Respect' },
  { icon: '✈️', name: 'Dynamism' },
  { icon: '🫂', name: 'Inclusion' },
]

// Card that tilts and glows under the cursor
function BeliefCard({ b }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    const r = el.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    el.style.transform = `perspective(700px) rotateX(${(0.5 - y / r.height) * 9}deg) rotateY(${(x / r.width - 0.5) * 9}deg) translateY(-6px)`
  }
  const leave = () => { ref.current.style.transform = '' }
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-[transform,border-color] duration-150 hover:border-cyan-400"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(260px circle at var(--mx,50%) var(--my,0%), rgba(34,211,238,.2), transparent 70%)' }}
      />
      <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
      <h3 className="relative mb-3 text-2xl font-semibold text-white">{b.title}</h3>
      <p className="relative text-gray-400">
        <strong className="font-semibold text-cyan-300">{b.lead}</strong> {b.text}
      </p>
    </div>
  )
}

export default function CoreBeliefs() {
  return (
    <div className="relative">

      <section id="beliefs" className="py-24">
        <Reveal>
          <h3 className="mb-4 text-4xl font-bold">Our Core <span className="text-cyan-400">Beliefs</span></h3>
          <p className="mb-14 max-w-xl text-lg text-gray-400">
            Six simple ideas shape how we build, and how we decide what to build.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 100}>
              <BeliefCard b={b} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="values" className="py-24">
        <Reveal>
          <h3 className="mb-4 text-4xl font-bold">Our <span className="text-cyan-400">Values</span></h3>
          <p className="mb-14 max-w-xl text-lg text-gray-400">The five things we hold ourselves to every day.</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.name} delay={i * 90}>
              <div className="group rounded-3xl border border-white/10 bg-white/5 px-4 py-10 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_18px_36px_rgba(34,211,238,.2)]">
                <div className="mb-3 text-5xl transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-125">{v.icon}</div>
                <div className="text-lg font-semibold">{v.name}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
