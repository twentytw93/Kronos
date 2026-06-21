import { Orbit as SaturnIcon, Github, MessageCircle, Send } from 'lucide-react';

const ECOSYSTEM_LINKS = [
  { label: 'Kronos Core', href: '#ecosystem' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Roadmap', href: '#timeline' },
  { label: 'Performance', href: '#performance' },
];

const ADDON_LINKS = [
  { label: 'Kronos Cave', href: '#addons' },
  { label: 'Kronos Thermo', href: '#addons' },
  { label: 'Kronos Keeper', href: '#addons' },
  { label: 'Kronos Mirror', href: '#addons' },
  { label: 'Kronos Tunnel', href: '#addons' },
  { label: 'Kronos Pro Remote', href: '#addons' },
];

const SOCIAL = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: MessageCircle, label: 'Community', href: '#ecosystem' },
  { icon: Send, label: 'Telegram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-space-deep/60">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(232,183,90,0.3), transparent)',
        }}
      />
      <div className="section-pad py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <SaturnIcon className="h-8 w-8 text-kronos-violet" strokeWidth={1.4} />
              <span className="font-display text-lg font-semibold tracking-wide text-white">
                KRONOS
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A unified ecosystem of premium Kodi add-ons and Raspberry Pi
              utilities — privacy, stability, and real-time control.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-400 transition-all hover:-translate-y-0.5 hover:border-kronos-violet/40 hover:text-kronos-violetLight"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-500">
              Ecosystem
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {ECOSYSTEM_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-ons */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-500">
              Add-ons
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {ADDON_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-500">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { label: 'Documentation', href: '#ecosystem' },
                { label: 'Community Hub', href: '#ecosystem' },
                { label: 'Release Notes', href: '#timeline' },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kronos Ecosystem. Built for Kodi Omega &amp; Raspberry Pi.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <span className="text-slate-700">/</span>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <span className="text-slate-700">/</span>
            <a href="#" className="transition-colors hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
