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
  id: string;
  role: string;
  icon: LucideIcon;
  accent: string;
  angle: number;
};

// Functional layers — same set as EcosystemArchitecture, shown as a radial graph.
const LAYERS: Layer[] = [
  { id: 'security', role: 'Security', icon: ShieldCheck, accent: '#a78bfa', angle: -90 },
  { id: 'stability', role: 'Stability', icon: Thermometer, accent: '#22d3ee', angle: -30 },
  { id: 'integrity', role: 'Integrity', icon: FileCheck2, accent: '#f5d089', angle: 30 },
  { id: 'sync', role: 'Sync', icon: MonitorPlay, accent: '#c4b5fd', angle: 90 },
  { id: 'network', role: 'Network', icon: Network, accent: '#60a5fa', angle: 150 },
  { id: 'control', role: 'Control', icon: Gamepad2, accent: '#f472b6', angle: 210 },
];

export default function NodeGraph() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  const center = 280;
  const radius = 200;

  return (
    <section
      id="architecture"
      ref={ref}
      className="reveal section-pad relative py-20 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.06), transparent 55%)',
        }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip-gold">Ecosystem Visual</span>
        <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
          The <span className="text-gradient-gold">connection graph</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
          Kronos Core routes every layer. Tap a node to trace its relationship
          to the hub.
        </p>
      </div>

      <div className="mt-12 flex justify-center md:mt-16">
        <div
          className="relative mx-auto"
          style={{ width: 'min(92vw, 560px)', aspectRatio: '1' }}
        >
          <svg
            viewBox="0 0 560 560"
            className="h-full w-full"
            aria-label="Kronos ecosystem node graph"
          >
            <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx={center} cy={center} r={radius * 0.55} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 6" />

            {LAYERS.map((layer) => {
              const rad = (layer.angle * Math.PI) / 180;
              const x = center + radius * Math.cos(rad);
              const y = center + radius * Math.sin(rad);
              const isActive = active === layer.id;
              return (
                <line
                  key={`line-${layer.id}`}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke={isActive ? layer.accent : 'rgba(139,92,246,0.2)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.85 : 0.4}
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}

            <g>
              <circle cx={center} cy={center} r={48} fill="url(#hubGrad)" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
              <circle cx={center} cy={center} r={58} fill="none" stroke="rgba(232,183,90,0.2)" strokeWidth="1" strokeDasharray="2 4" />
              <text
                x={center}
                y={center - 4}
                textAnchor="middle"
                className="font-display"
                fill="#f5d089"
                style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}
              >
                Kronos
              </text>
              <text
                x={center}
                y={center + 14}
                textAnchor="middle"
                className="font-display"
                fill="#fff"
                style={{ fontSize: 17, fontWeight: 700 }}
              >
                CORE
              </text>
            </g>

            <defs>
              <radialGradient id="hubGrad" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#1a2348" />
                <stop offset="100%" stopColor="#070a16" />
              </radialGradient>
            </defs>
          </svg>

          {LAYERS.map((layer) => {
            const rad = (layer.angle * Math.PI) / 180;
            const x = 50 + (radius / 560) * 100 * Math.cos(rad);
            const y = 50 + (radius / 560) * 100 * Math.sin(rad);
            const Icon = layer.icon;
            const isActive = active === layer.id;
            return (
              <button
                key={layer.id}
                onMouseEnter={() => setActive(layer.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(layer.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive((p) => (p === layer.id ? null : layer.id))}
                className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={layer.role}
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-full transition-all duration-300 sm:h-14 sm:w-14"
                  style={{
                    background: isActive
                      ? `rgba(${hexToRgb(layer.accent)},0.18)`
                      : 'rgba(7,10,22,0.85)',
                    border: `1px solid ${isActive ? layer.accent : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isActive ? `0 0 30px -4px ${layer.accent}` : '0 4px 16px -4px rgba(0,0,0,0.6)',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  <Icon
                    className="h-5 w-5 transition-colors sm:h-6 sm:w-6"
                    style={{ color: isActive ? layer.accent : '#cbd5e1' }}
                    strokeWidth={1.7}
                  />
                </div>
                <div
                  className="mt-2 text-center text-[10px] font-medium transition-colors sm:text-xs"
                  style={{ color: isActive ? layer.accent : '#94a3b8' }}
                >
                  {layer.role}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `${r},${g},${b}`;
}
