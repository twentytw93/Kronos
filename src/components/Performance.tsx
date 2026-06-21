import { Cpu, Activity, Feather, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

const PRINCIPLES = [
  {
    icon: Cpu,
    title: 'Raspberry Pi optimized',
    description:
      'Every module is profiled against Pi-class hardware. Low memory ceiling and ARM-native paths are a constraint, not an afterthought.',
  },
  {
    icon: Activity,
    title: 'Kodi native compatibility',
    description:
      'Built to the Kodi Omega add-on contract. No wrapper shims, no fragile injection — native interfaces throughout.',
  },
  {
    icon: Feather,
    title: 'Lightweight execution',
    description:
      'Background watchdogs idle at near-zero cost. Layers sleep until the runtime signals something worth reacting to.',
  },
  {
    icon: ShieldCheck,
    title: 'Stability over speed claims',
    description:
      'No fabricated benchmarks. Kronos is measured by uptime, integrity, and recovery — not raw throughput numbers.',
  },
];

export default function Performance() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="performance"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, rgba(34,211,238,0.05), transparent 50%)',
        }}
      />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div>
          <span className="chip">Performance</span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Measured by what{' '}
            <span className="text-gradient-violet">actually matters</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Kronos doesn't trade in synthetic scores. The platform is judged on
            stability under real Kodi workloads and Pi thermal reality.
          </p>
          <div className="mt-8 flex items-center gap-4 rounded-2xl glass p-5">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-kronos-gold/10 text-kronos-goldLight ring-1 ring-kronos-gold/25">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-white">
                No fabricated benchmarks
              </div>
              <p className="text-xs text-slate-400">
                Honesty about what Kronos is — and isn't — optimized for.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="glass group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/15"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-kronos-violet/10 text-kronos-violetLight ring-1 ring-kronos-violet/20 transition-transform group-hover:scale-110">
                <p.icon className="h-5 w-5" strokeWidth={1.7} />
              </div>
              <h3 className="font-display text-sm font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
