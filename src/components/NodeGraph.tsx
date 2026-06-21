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

type Node = {
  id: string;
  name: string;
  icon: LucideIcon;
  accent: string;
  angle: number;
};

const NODES: Node[] = [
  { id: 'cave', name: 'Cave', icon: ShieldCheck, accent: '#a78bfa', angle: -90 },
  { id: 'thermo', name: 'Thermo', icon: Thermometer, accent: '#22d3ee', angle: -30 },
  { id: 'keeper', name: 'Keeper', icon: FileCheck2, accent: '#f5d089', angle: 30 },
  { id: 'mirror', name: 'Mirror', icon: MonitorPlay, accent: '#c4b5fd', angle: 90 },
  { id: 'tunnel', name: 'Tunnel', icon: Network, accent: '#60a5fa', angle: 150 },
  { id: 'proremote', name: 'Pro Remote', icon: Gamepad2, accent: '#f472b6', angle: 210 },
];

export default function NodeGraph() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<string | null>(null);

  const radius = 200;
  const center = 280;

  return (
    <section
      id="architecture"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
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
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          The <span className="text-gradient-gold">connection graph</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Kronos Core routes every layer. Hover a node to trace its relationship
          to the hub.
        </p>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="relative" style={{ width: 560, maxWidth: '100%', aspectRatio: '1' }}>
          <svg
            viewBox="0 0 560 560"
            className="h-full w-full"
            aria-label="Kronos ecosystem node graph"
          >
            {/* Faint orbital rings */}
            <circle cx={center} cy={center} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            <circle cx={center} cy={center} r={radius * 0.55} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="3 6" />

            {/* Connection lines */}
            {NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = center + radius * Math.cos(rad);
              const y = center + radius * Math.sin(rad);
              const isActive = active === node.id;
              return (
                <line
                  key={`line-${node.id}`}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke={isActive ? node.accent : 'rgba(139,92,246,0.2)'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeOpacity={isActive ? 0.8 : 0.4}
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}

            {/* Center hub */}
            <g>
              <circle cx={center} cy={center} r={48} fill="url(#hubGrad)" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
              <circle cx={center} cy={center} r={58} fill="none" stroke="rgba(232,183,90,0.2)" strokeWidth="1" strokeDasharray="2 4" />
              <text
                x={center}
                y={center - 4}
                textAnchor="middle"
                className="font-display"
                fill="#f5d089"
                style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}
              >
                Kronos
              </text>
              <text
                x={center}
                y={center + 12}
                textAnchor="middle"
                className="font-display"
                fill="#fff"
                style={{ fontSize: 16, fontWeight: 700 }}
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

          {/* HTML node icons (interactive) */}
          {NODES.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + (radius / 560) * 100 * Math.cos(rad);
            const y = 50 + (radius / 560) * 100 * Math.sin(rad);
            const Icon = node.icon;
            const isActive = active === node.id;
            return (
              <button
                key={node.id}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(node.id)}
                onBlur={() => setActive(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                style={{ left: `${x}%`, top: `${y}%` }}
                aria-label={node.name}
              >
                <div
                  className="grid h-14 w-14 place-items-center rounded-full transition-all duration-300"
                  style={{
                    background: isActive
                      ? `rgba(${hexToRgb(node.accent)},0.18)`
                      : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${isActive ? node.accent : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isActive ? `0 0 30px -4px ${node.accent}` : 'none',
                    transform: isActive ? 'scale(1.15)' : 'scale(1)',
                  }}
                >
                  <Icon
                    className="h-6 w-6 transition-colors"
                    style={{ color: isActive ? node.accent : '#cbd5e1' }}
                    strokeWidth={1.7}
                  />
                </div>
                <div
                  className="mt-2 text-center text-xs font-medium transition-colors"
                  style={{ color: isActive ? node.accent : '#94a3b8' }}
                >
                  {node.name}
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
