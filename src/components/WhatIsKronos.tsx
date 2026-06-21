import { ShieldCheck, Gauge, Cpu, Layers } from 'lucide-react';
import { useCountUp, useReveal } from '../hooks/useAnimations';

const PILLARS = [
  {
    icon: Gauge,
    title: 'Stability',
    description: 'Continuous health monitoring keeps Kodi and Pi systems responsive under load.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy',
    description: 'Enforcement layers guard tunnels, connections, and runtime behavior by default.',
  },
  {
    icon: Cpu,
    title: 'Performance',
    description: 'Lightweight execution paths engineered for low-power ARM hardware.',
  },
  {
    icon: Layers,
    title: 'Simplicity',
    description: 'A modular architecture where each layer does one thing and composes cleanly.',
  },
];

const STATS = [
  { label: 'Active Modules', value: 6, suffix: '' },
  { label: 'System Layers', value: 4, suffix: '' },
  { label: 'Integrations', value: 12, suffix: '+' },
  { label: 'Development Scope', value: 3, suffix: ' phases' },
];

export default function WhatIsKronos() {
  const sectionRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="what-is"
      ref={sectionRef}
      className="reveal section-pad relative py-28 md:py-36"
    >
      {/* Ambient gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.10), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <span className="chip">What is Kronos</span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          A modular ecosystem designed to{' '}
          <span className="text-gradient-violet">extend Kodi</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Kronos unifies privacy protection, stability monitoring, media
          synchronization, network control, and remote device interaction into
          a single coherent platform — built around four engineering principles.
        </p>
      </div>

      {/* Pillars */}
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            data-stagger
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-kronos-violet/30"
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'rgba(139,92,246,0.25)' }}
            />
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-kronos-violet/10 text-kronos-violetLight ring-1 ring-kronos-violet/25 transition-all group-hover:bg-kronos-violet/20">
              <p.icon className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <h3 className="font-display text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {p.description}
            </p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:p-8 md:grid-cols-4 md:gap-8 md:p-10">
        {STATS.map((s) => (
          <StatTile key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function StatTile({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  const { ref, value: animated } = useCountUp(value, { duration: 1600 });
  return (
    <div className="text-center" data-stagger>
      <div className="font-display text-4xl font-bold tracking-tight text-gradient-aurora md:text-5xl">
        <span ref={ref}>{animated}</span>
        <span>{suffix}</span>
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </div>
    </div>
  );
}
