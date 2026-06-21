import { useEffect, useState } from 'react';
import { Menu, X, Orbit as SaturnIcon } from 'lucide-react';

const LINKS = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'Add-ons', href: '#addons' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Roadmap', href: '#timeline' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-space-base/70 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-full">
            <SaturnIcon className="h-8 w-8 text-kronos-violet" strokeWidth={1.4} />
            <span className="absolute inset-0 rounded-full bg-kronos-violet/20 blur-md transition-opacity group-hover:opacity-100 opacity-60" />
          </span>
          <span className="font-display text-lg font-semibold tracking-wide text-white">
            KRONOS
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.04] opacity-0 transition-all hover:opacity-100 hover:scale-100" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a href="#ecosystem" className="btn-gold !py-2 !px-5 !text-xs">
            Explore Ecosystem
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="section-pad flex flex-col gap-1 border-t border-white/[0.06] bg-space-base/95 py-4 backdrop-blur-xl">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#ecosystem"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 !text-xs"
          >
            Explore Ecosystem
          </a>
        </div>
      </div>
    </header>
  );
}
