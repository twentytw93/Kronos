import {
  Cpu,
  Disc,
  Feather,
  Lock,
  Activity,
  Boxes,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Cpu,
    title: 'Built for Raspberry Pi 4/5',
    description:
      'Engineered against real Pi hardware constraints — thermals, memory, and ARM runtime behavior.',
  },
  {
    icon: Disc,
    title: 'Designed for Kodi Omega',
    description:
      'Targets the Kodi Omega release line with native add-on interfaces and current API surfaces.',
  },
  {
    icon: Feather,
    title: 'Lightweight and efficient',
    description:
      'Lean modules that stay out of the way — minimal footprint, no background bloat.',
  },
  {
    icon: Lock,
    title: 'Privacy-first architecture',
    description:
      'Privacy is enforced as a structural layer, not an after-the-fact toggle.',
  },
  {
    icon: Activity,
    title: 'Stability-focused design',
    description:
      'Monitoring and integrity checks keep long-running media sessions healthy.',
  },
  {
    icon: Boxes,
    title: 'Modular ecosystem structure',
    description:
      'Each layer composes independently — adopt one add-on or the full stack.',
  },
];

export default function WhyKronos() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="why"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip">Why Kronos</span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          Engineered with{' '}
          <span className="text-gradient-violet">intention</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Six engineering principles that every Kronos layer is held against
          before it ships.
        </p>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FeatureCell key={f.title} feature={f} index={i} />
        ))}
      </div>
    </section>
  );
}

function FeatureCell({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <div className="group relative bg-space-deep/40 p-8 transition-colors duration-300 hover:bg-white/[0.025]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute left-0 top-0 h-px w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
          }}
        />
      </div>
      <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-kronos-violet/10 text-kronos-violetLight ring-1 ring-kronos-violet/20 transition-all duration-500 group-hover:bg-kronos-violet/20 group-hover:scale-110">
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </div>
      <div className="mb-2 flex items-center gap-3">
        <span className="font-mono text-xs text-slate-600">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="font-display text-base font-semibold text-white">
          {feature.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">
        {feature.description}
      </p>
    </div>
  );
}
