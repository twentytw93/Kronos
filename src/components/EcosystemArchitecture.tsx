import { useState } from 'react';
import {
  ShieldCheck,
  Thermometer,
  FileCheck2,
  MonitorPlay,
  Network,
  Gamepad2,
} from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

type Layer = {
  name: string;
  role: string;
  icon: typeof ShieldCheck;
  blurb: string;
  accent: string;
};

const LAYERS: Layer[] = [
  {
    name: 'Kronos Cave',
    role: 'Security',
    icon: ShieldCheck,
    blurb: 'Privacy enforcement system for Kodi environments.',
    accent: '139,92,246',
  },
  {
    name: 'Kronos Thermo',
    role: 'Stability',
    icon: Thermometer,
    blurb: 'Hardware temperature monitoring system.',
    accent: '34,211,238',
  },
  {
    name: 'Kronos Keeper',
    role: 'Integrity',
    icon: FileCheck2,
    blurb: 'File and system validation tool.',
    accent: '232,183,90',
  },
  {
    name: 'Kronos Mirror',
    role: 'Sync & Control',
    icon: MonitorPlay,
    blurb: 'Real-time media mirroring and remote input control.',
    accent: '167,139,250',
  },
  {
    name: 'Kronos Tunnel',
    role: 'Network',
    icon: Network,
    blurb: 'VPN and secure connection manager.',
    accent: '96,165,250',
  },
  {
    name: 'Kronos Pro Remote',
    role: 'Control Interface',
    icon: Gamepad2,
    blurb: 'Advanced Kodi remote control system.',
    accent: '244,114,182',
  },
];

export default function EcosystemArchitecture() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip-gold">Ecosystem Architecture</span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          Six layers, one <span className="text-gradient-gold">Kronos Core</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          The Kronos Core hub orchestrates six specialized layers — each owning
          a distinct concern, all communicating through a unified runtime.
        </p>
      </div>

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr]">
        {/* Left column layers */}
        <div className="flex flex-col gap-3">
          {LAYERS.slice(0, 3).map((layer, i) => (
            <LayerRow
              key={layer.name}
              layer={layer}
              index={i}
              isActive={active === i}
              onHover={() => setActive(i)}
              onLeave={() => setActive(null)}
              align="right"
            />
          ))}
        </div>

        {/* Center hub */}
        <div className="relative mx-auto grid place-items-center">
          <div className="relative grid h-44 w-44 place-items-center rounded-full md:h-56 md:w-56">
            {/* Pulsing rings */}
            <span
              className="absolute inset-0 rounded-full border border-kronos-violet/30"
              style={{ animation: 'pulse-ring 3s ease-out infinite' }}
            />
            <span
              className="absolute inset-0 rounded-full border border-kronos-gold/30"
              style={{ animation: 'pulse-ring 3s ease-out infinite', animationDelay: '1.5s' }}
            />
            {/* Glow */}
            <div
              className="absolute inset-2 rounded-full blur-xl"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)' }}
            />
            {/* Hub surface */}
            <div
              className="relative grid h-32 w-32 place-items-center rounded-full md:h-40 md:w-40"
              style={{
                background:
                  'radial-gradient(circle at 32% 28%, #1a2348, #0c1226 60%, #070a16 100%)',
                boxShadow:
                  'inset 0 0 30px rgba(139,92,246,0.25), 0 0 60px -10px rgba(139,92,246,0.6)',
                border: '1px solid rgba(139,92,246,0.3)',
              }}
            >
              <div className="text-center">
                <div className="font-display text-xs uppercase tracking-[0.3em] text-kronos-gold">
                  Kronos
                </div>
                <div className="font-display text-xl font-bold text-white md:text-2xl">
                  CORE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column layers */}
        <div className="flex flex-col gap-3">
          {LAYERS.slice(3).map((layer, i) => (
            <LayerRow
              key={layer.name}
              layer={layer}
              index={i + 3}
              isActive={active === i + 3}
              onHover={() => setActive(i + 3)}
              onLeave={() => setActive(null)}
              align="left"
            />
          ))}
        </div>
      </div>

      {/* Mobile / stacked grid (visible below lg) */}
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:hidden">
        {LAYERS.map((layer, i) => (
          <LayerRow
            key={layer.name}
            layer={layer}
            index={i}
            isActive={active === i}
            onHover={() => setActive(i)}
            onLeave={() => setActive(null)}
            align="left"
            compact
          />
        ))}
      </div>
    </section>
  );
}

function LayerRow({
  layer,
  isActive,
  onHover,
  onLeave,
  align,
  compact = false,
}: {
  layer: Layer;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  align: 'left' | 'right';
  compact?: boolean;
}) {
  const Icon = layer.icon;
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`glass flex items-center gap-4 rounded-xl p-4 transition-all duration-300 ${
        align === 'right' ? 'flex-row-reverse text-right' : ''
      } ${isActive ? 'scale-[1.03] border-white/20' : ''}`}
      style={
        isActive
          ? { boxShadow: `0 0 30px -8px rgba(${layer.accent},0.5)`, borderColor: `rgba(${layer.accent},0.35)` }
          : undefined
      }
    >
      <div
        className="grid h-10 w-10 shrink-0 place-items-center rounded-lg"
        style={{
          background: `rgba(${layer.accent},0.12)`,
          color: `rgb(${layer.accent})`,
          boxShadow: `inset 0 0 0 1px rgba(${layer.accent},0.3)`,
        }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </div>
      {!compact && (
        <div className={align === 'right' ? 'text-right' : ''}>
          <div className="font-display text-sm font-semibold text-white">{layer.name}</div>
          <div className="text-xs text-slate-400">{layer.blurb}</div>
        </div>
      )}
      {compact && (
        <div>
          <div className="font-display text-sm font-semibold text-white">{layer.name}</div>
          <div className="text-xs text-slate-400">{layer.role}</div>
        </div>
      )}
    </div>
  );
}
