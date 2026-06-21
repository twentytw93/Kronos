import { ArrowDown, Compass, Boxes } from 'lucide-react';
import SaturnScene from './SaturnScene';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Cinematic Saturn scene as background */}
      <SaturnScene />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="mb-7 animate-fade-in">
          <span className="chip">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-kronos-violet opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-kronos-violetLight" />
            </span>
            Unified Kodi &amp; Raspberry Pi Ecosystem
          </span>
        </div>

        <h1
          className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[8.5rem] animate-rise-in"
          style={{ textShadow: '0 0 80px rgba(139,92,246,0.35)' }}
        >
          KRONOS
        </h1>

        <p
          className="mt-4 font-display text-base font-medium uppercase tracking-[0.4em] text-gradient-gold sm:text-lg md:text-xl animate-rise-in"
          style={{ animationDelay: '0.15s', opacity: 0 }}
        >
          A Unified Kodi Ecosystem
        </p>

        <p
          className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg animate-rise-in"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          Advanced tools, privacy systems, monitoring utilities, and real-time
          control layers for Kodi and Raspberry Pi devices.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-rise-in"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          <a href="#ecosystem" className="btn-primary w-full sm:w-auto">
            <Compass className="h-4 w-4" />
            Explore Ecosystem
          </a>
          <a href="#addons" className="btn-ghost w-full sm:w-auto">
            <Boxes className="h-4 w-4" />
            View Add-ons
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#what-is"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-white"
        >
          <ArrowDown className="h-5 w-5 animate-float-slow" />
        </a>
      </div>
    </section>
  );
}
