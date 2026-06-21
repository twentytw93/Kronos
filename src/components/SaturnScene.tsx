import { useMemo } from 'react';

/**
 * SaturnScene — static, CSS-rendered Saturn with banded rings, atmospheric
 * limb glow and a subtle starfield. The planet and rings do not move; only the
 * stars twinkle faintly (per the brief: "NO movement" on the planet/rings).
 *
 * Rendered entirely with layered radial/conic gradients and transformed rings
 * so it stays crisp at any size and has zero network cost.
 */
export default function SaturnScene({ className = '' }: { className?: string }) {
  // Precompute star positions once so they don't reshuffle on re-render.
  const stars = useMemo(
    () =>
      Array.from({ length: 140 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.8 + 0.4,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.7 + 0.25,
      })),
    [],
  );

  const bigStars = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6,
      })),
    [],
  );

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {/* Deep-space backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 55%, #0a1030 0%, #070a1c 45%, #03040a 100%)',
        }}
      />

      {/* Distant nebula veils */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(circle at 22% 35%, rgba(109,40,217,0.18), transparent 38%), radial-gradient(circle at 80% 25%, rgba(34,211,238,0.07), transparent 35%), radial-gradient(circle at 65% 80%, rgba(232,183,90,0.08), transparent 40%)',
        }}
      />

      {/* Twinkling starfield */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
              boxShadow: '0 0 4px rgba(255,255,255,0.6)',
            }}
          />
        ))}
        {bigStars.map((s) => (
          <span
            key={`big-${s.id}`}
            className="absolute animate-twinkle"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: '3px',
              height: '3px',
              animationDelay: `${s.delay}s`,
            }}
          >
            <span
              className="absolute inset-0 rounded-full bg-white"
              style={{ boxShadow: '0 0 6px 1px rgba(255,255,255,0.8)' }}
            />
            <span
              className="absolute left-1/2 top-1/2 h-6 w-px -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)',
              }}
            />
            <span
              className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2"
              style={{
                background:
                  'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
              }}
            />
          </span>
        ))}
      </div>

      {/* Saturn composition */}
      <div
        className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2"
        style={{ width: 'min(78vw, 680px)' }}
      >
        {/* Outer atmospheric halo */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '150%',
            height: '150%',
            background:
              'radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.05) 35%, transparent 60%)',
            filter: 'blur(18px)',
          }}
        />

        {/* BACK ring half (behind the planet) */}
        <SaturnRings side="back" />

        {/* Planet body */}
        <div
          className="relative mx-auto rounded-full"
          style={{
            width: 'min(46vw, 380px)',
            height: 'min(46vw, 380px)',
            background:
              // Banded gradient — creamy gold/violet latitudinal stripes
              'radial-gradient(circle at 32% 26%, #f5e8d0 0%, #e8b75a 12%, #d9a44e 26%, #b8893f 38%, #8a6b2f 52%, #5d4520 66%, #3a2c14 82%)',
            boxShadow:
              'inset -28px -36px 70px rgba(8,4,2,0.7), inset 14px 18px 40px rgba(255,235,200,0.18), 0 0 90px -12px rgba(232,183,90,0.45), 0 0 160px -30px rgba(139,92,246,0.4)',
          }}
        >
          {/* Latitude bands */}
          <div
            className="absolute inset-0 rounded-full mix-blend-overlay opacity-70"
            style={{
              background:
                'repeating-linear-gradient(0deg, transparent 0px, transparent 9px, rgba(60,40,15,0.35) 10px, rgba(60,40,15,0.35) 11px, transparent 12px, transparent 22px, rgba(255,230,180,0.18) 23px, rgba(255,230,180,0.18) 24px)',
            }}
          />
          {/* Subtle violet atmospheric tint */}
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background:
                'radial-gradient(circle at 70% 65%, rgba(109,40,217,0.45), transparent 55%)',
            }}
          />
          {/* Terminator (day/night shadow) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle at 32% 26%, transparent 38%, rgba(3,4,10,0.55) 72%, rgba(3,4,10,0.92) 100%)',
            }}
          />
          {/* Limb glow */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow:
                'inset 0 0 26px 3px rgba(255,220,170,0.35), 0 0 30px 2px rgba(232,183,90,0.3)',
            }}
          />
        </div>

        {/* FRONT ring half (in front of the planet) */}
        <SaturnRings side="front" />
      </div>

      {/* Bottom fade for blending into the page */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: 'linear-gradient(to bottom, transparent, #03040a)',
        }}
      />
    </div>
  );
}

/** Rendered ellipse ring system. `back` sits behind the planet, `front` in front. */
function SaturnRings({ side }: { side: 'back' | 'front' }) {
  // A composite of three concentric ring bands with gaps.
  const bands = [
    { color: 'rgba(232,183,90,0.5)', width: 2.2, gap: 0 },
    { color: 'transparent', width: 1, gap: 0 },
    { color: 'rgba(245,208,137,0.7)', width: 4, gap: 0 },
    { color: 'transparent', width: 1.5, gap: 0 },
    { color: 'rgba(200,149,56,0.55)', width: 6, gap: 0 },
    { color: 'transparent', width: 2, gap: 0 },
    { color: 'rgba(232,183,90,0.4)', width: 3, gap: 0 },
    { color: 'transparent', width: 3, gap: 0 },
    { color: 'rgba(180,135,70,0.3)', width: 2, gap: 0 },
  ];

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        width: '150%',
        height: '150%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: 'rotateZ(-18deg) rotateX(74deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Mask so only the back (top) or front (bottom) half shows */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            clipPath:
              side === 'back'
                ? 'polygon(0 0, 100% 0, 100% 50%, 0 50%)'
                : 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            filter: 'drop-shadow(0 0 10px rgba(232,183,90,0.25))',
          }}
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full">
            {bands.map((b, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: `${280 - i * 22}px`,
                  height: `${280 - i * 22}px`,
                  border: `${b.width}px solid ${b.color}`,
                  opacity: side === 'back' ? 0.65 : 1,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
