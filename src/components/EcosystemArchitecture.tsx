import { useState } from 'react';
import {
  ShieldCheck,
  Thermometer,
  FileCheck2,
  MonitorPlay,
  Network,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '../hooks/useAnimations';

type Layer = {
  role: string;
  domain: string;
  icon: LucideIcon;
  accent: string;
};

// Functional layers around the Core — described by the concern they own,
// not by product name, so the Addons section remains the single source of truth
// for individual add-on names and details.
const LAYERS: Layer[] = [
  { role: 'Security', domain: 'Privacy enforcement & watchdog', icon: ShieldCheck, accent: '139,92,246' },
  { role: 'Stability', domain: 'Thermal & health monitoring', icon: Thermometer, accent: '34,211,238' },
  { role: 'Integrity', domain: 'File & state validation', icon: FileCheck2, accent: '232,183,90' },
  { role: 'Sync & Control', domain: 'Real-time mirroring & input', icon: MonitorPlay, accent: '167,139,250' },
  { role: 'Network', domain: 'Tunnels & connection validation', icon: Network, accent: '96,165,250' },
  { role: 'Control Interface', domain: 'Remote navigation & playback', icon: Gamepad2, accent: '244,114,182' },
];

export default function EcosystemArchitecture() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="reveal section-pad relative py-20 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip-gold">Ecosystem Architecture</span>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          Six layers, one <span className="text-gradient-gold">Kronos Core</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
          The Core hub orchestrates six functional layers — each owning a
          distinct concern, all communicating through a unified runtime.
        </p>
      </div>

      {/* Hub + radiating layers — responsive: stacked on mobile, radial on desktop */}
      <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        {/* Left layers (desktop) */}
        <div className="flex w-full flex-col gap-3 lg:w-72">
          {LAYERS.slice(0, 3).map((layer, i) => (
            <LayerPill
              key={layer.role}
              layer={layer}
              isActive={active === i}
              onHover={() => setActive(i)}
              onLeave={() => setActive(null)}
              align="right"
            />
          ))}
        </div>

        {/* Center hub */}
        <div className="relative grid shrink-0 place-items-center">
          <div className="relative grid h-40 w-40 place-items-center rounded-full sm:h-48 sm:w-48 lg:h-56 lg:w-56">
            <span
              className="absolute inset-0 rounded-full border border-kronos-violet/30"
              style={{ animation: 'pulse-ring 3s ease-out infinite' }}
            />
            <span
              className="absolute inset-0 rounded-full border border-kronos-gold/30"
              style={{ animation: 'pulse-ring 3s ease-out infinite', animationDelay: '1.5s' }}
            />
            <div
              className="absolute inset-2 rounded-full blur-xl"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)' }}
            />
            <div
              className="relative grid h-28 w-28 place-items-center rounded-full sm:h-32 sm:w-32 lg:h-40 lg:w-40"
              style={{
                background:
                  'radial-gradient(circle at 32% 28%, #1a2348, #0c1226 60%, #070a16 100%)',
                boxShadow:
                  'inset 0 0 30px rgba(139,92,246,0.25), 0 0 60px -10px rgba(139,92,246,0.6)',
                border: '1px solid rgba(139,92,246,0.3)',
              }}
            >
              <div className="text-center">
                <div className="font-display text-[10px] uppercase tracking-[0.3em] text-kronos-gold sm:text-xs">
                  Kronos
                </div>
                <div className="font-display text-lg font-bold text-white sm:text-xl md:text-2xl">
                  CORE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right layers (desktop) */}
        <div className="flex w-full flex-col gap-3 lg:w-72">
          {LAYERS.slice(3).map((layer, i) => (
            <LayerPill
              key={layer.role}
              layer={layer}
              isActive={active === i + 3}
              onHover={() => setActive(i + 3)}
              onLeave={() => setActive(null)}
              align="left"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LayerPill({
  layer,
  isActive,
  onHover,
  onLeave,
  align,
}: {
  layer: Layer;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  align: 'left' | 'right';
}) {
  const Icon = layer.icon;
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onTouchStart={onHover}
      onTouchEnd={onLeave}
      className={`glass flex items-center gap-3 rounded-xl p-3.5 transition-all duration-300 sm:gap-4 sm:p-4 ${
        align === 'right' ? 'lg:flex-row-reverse lg:text-right' : ''
      } ${isActive ? 'scale-[1.03] border-white/20' : ''}`}
      style={
        isActive
          ? { boxShadow: `0 0 30px -8px rgba(${layer.accent},0.5)`, borderColor: `rgba(${layer.accent},0.35)` }
          : undefined
      }
    >
      <div
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg sm:h-10 sm:w-10"
        style={{
          background: `rgba(${layer.accent},0.12)`,
          color: `rgb(${layer.accent})`,
          boxShadow: `inset 0 0 0 1px rgba(${layer.accent},0.3)`,
        }}
      >
        <Icon className="h-5 w-5" strokeWidth={1.7} />
      </div>
      <div className={align === 'right' ? 'lg:text-right' : ''}>
        <div className="font-display text-sm font-semibold text-white">{layer.role}</div>
        <div className="text-xs text-slate-400">{layer.domain}</div>
      </div>
    </div>
  );
}
