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

type Addon = {
  name: string;
  category: string;
  role: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  accent: string;
};

const ADDONS: Addon[] = [
  {
    name: 'Kronos Cave',
    category: 'Security Layer',
    role: 'Privacy enforcement system for Kodi environments.',
    description:
      'A lightweight background guardian that verifies privacy posture and enforces protection rules across the Kodi runtime.',
    features: [
      'VPN monitoring',
      'Security watchdog',
      'Privacy enforcement',
      'Lightweight background protection',
    ],
    icon: ShieldCheck,
    accent: '139,92,246',
  },
  {
    name: 'Kronos Thermo',
    category: 'Stability Layer',
    role: 'Hardware temperature monitoring system.',
    description:
      'Tracks thermal behavior in real time so Pi-hosted Kodi systems stay within safe operating envelopes.',
    features: [
      'Real-time temperature tracking',
      'Thermal alerts',
      'Raspberry Pi optimization',
      'System health awareness',
    ],
    icon: Thermometer,
    accent: '34,211,238',
  },
  {
    name: 'Kronos Keeper',
    category: 'Integrity Layer',
    role: 'File and system validation tool.',
    description:
      'Validates files and runtime state against known-good hashes to detect drift, corruption, and tampering.',
    features: [
      'File integrity checks',
      'Hash verification',
      'Corruption detection',
      'System health monitoring',
    ],
    icon: FileCheck2,
    accent: '232,183,90',
  },
  {
    name: 'Kronos Mirror',
    category: 'Sync & Control Layer',
    role: 'Real-time media mirroring combined with remote input control.',
    description:
      'Live media mirroring paired with real-time navigation and playback control across connected devices.',
    features: [
      'Real-time media mirroring',
      'Live screen sync',
      'Remote input control (navigation + playback)',
      'Low-latency device connection',
      'Multi-device interaction',
    ],
    icon: MonitorPlay,
    accent: '167,139,250',
  },
  {
    name: 'Kronos Tunnel',
    category: 'Network Layer',
    role: 'VPN and secure connection manager.',
    description:
      'Oversees secure tunnels, validates connections, and surfaces network diagnostics for the whole ecosystem.',
    features: [
      'VPN tunnel monitoring',
      'Connection validation',
      'Network diagnostics',
      'Security integration',
    ],
    icon: Network,
    accent: '96,165,250',
  },
  {
    name: 'Kronos Pro Remote',
    category: 'Control Layer',
    role: 'Advanced Kodi remote control system.',
    description:
      'Full-featured remote with pairing, navigation, and playback control engineered for fast, responsive input.',
    features: [
      'Full remote navigation',
      'Playback control',
      'Device pairing system',
      'Fast response input handling',
    ],
    icon: Gamepad2,
    accent: '244,114,182',
  },
];

export default function Addons() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="addons"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip">Add-ons</span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          A premium suite of{' '}
          <span className="text-gradient-violet">specialized modules</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          Each add-on owns a single concern and connects cleanly to Kronos Core —
          privacy, stability, integrity, sync, network, and control.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ADDONS.map((addon) => (
          <AddonCard key={addon.name} addon={addon} />
        ))}
      </div>
    </section>
  );
}

function AddonCard({ addon }: { addon: Addon }) {
  const Icon = addon.icon;
  return (
    <article
      className="glass group relative flex flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `rgba(${addon.accent},0.3)` }}
      />
      {/* Top border accent on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, rgba(${addon.accent},0.7), transparent)` }}
      />

      <div
        className="mb-5 grid h-12 w-12 place-items-center rounded-xl transition-transform duration-500 group-hover:scale-110"
        style={{
          background: `rgba(${addon.accent},0.12)`,
          color: `rgb(${addon.accent})`,
          boxShadow: `inset 0 0 0 1px rgba(${addon.accent},0.3)`,
        }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.7} />
      </div>

      <div className="mb-1 flex items-center gap-2">
        <h3 className="font-display text-lg font-semibold text-white">{addon.name}</h3>
      </div>
      <div
        className="mb-4 text-[11px] font-semibold uppercase tracking-wider"
        style={{ color: `rgb(${addon.accent})` }}
      >
        {addon.category}
      </div>

      <p className="mb-3 text-sm leading-relaxed text-slate-300">
        {addon.role}
      </p>
      <p className="mb-6 text-xs leading-relaxed text-slate-500">
        {addon.description}
      </p>

      <ul className="mt-auto flex flex-col gap-2">
        {addon.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-xs text-slate-400">
            <span
              className="grid h-4 w-4 place-items-center rounded-full"
              style={{
                background: `rgba(${addon.accent},0.15)`,
                color: `rgb(${addon.accent})`,
              }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path
                  d="M1 4l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}
