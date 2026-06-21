import { useReveal } from '../hooks/useAnimations';

type Milestone = {
  title: string;
  description: string;
};

type Phase = {
  label: string;
  status: 'past' | 'present' | 'future';
  milestones: Milestone[];
};

const PHASES: Phase[] = [
  {
    label: 'Past',
    status: 'past',
    milestones: [
      { title: 'Initial Kronos development', description: 'Foundational architecture and the first Core hub prototype.' },
      { title: 'First add-ons created', description: 'Cave, Thermo, and Keeper established the original triad of layers.' },
    ],
  },
  {
    label: 'Present',
    status: 'present',
    milestones: [
      { title: 'Active ecosystem expansion', description: 'Mirror and Pro Remote extended the platform into real-time control.' },
      { title: 'Stability improvements', description: 'Hardening passes across thermal handling, integrity, and network layers.' },
    ],
  },
  {
    label: 'Future',
    status: 'future',
    milestones: [
      { title: 'Automation systems', description: 'Self-monitoring and self-healing behaviors across the module graph.' },
      { title: 'Advanced remote control', description: 'Deeper multi-device interaction and richer input handling.' },
      { title: 'Smarter integrations', description: 'Adaptive integrations that learn from runtime signals.' },
    ],
  },
];

const STATUS_STYLES = {
  past: { dot: 'bg-slate-500', ring: 'ring-slate-500/30', text: 'text-slate-400', line: 'bg-slate-600' },
  present: { dot: 'bg-kronos-violet', ring: 'ring-kronos-violet/30', text: 'text-kronos-violetLight', line: 'bg-kronos-violet/40' },
  future: { dot: 'bg-kronos-gold', ring: 'ring-kronos-gold/30', text: 'text-kronos-goldLight', line: 'bg-kronos-gold/40' },
};

export default function Timeline() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="timeline"
      ref={ref}
      className="reveal section-pad relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="chip-gold">Roadmap</span>
        <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
          From foundation to{' '}
          <span className="text-gradient-gold">frontier</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          A measured path — where Kronos came from, where it stands, and where
          it's headed.
        </p>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {PHASES.map((phase) => {
          const styles = STATUS_STYLES[phase.status];
          return (
            <div key={phase.label} className="relative" data-stagger>
              {/* Vertical line */}
              <div className="absolute left-6 top-2 h-full w-px md:hidden" style={{ background: 'rgba(255,255,255,0.06)' }} />

              <div className="mb-6 flex items-center gap-3">
                <span className={`grid h-12 w-12 place-items-center rounded-full bg-space-navy ring-2 ${styles.ring}`}>
                  <span className={`h-3 w-3 rounded-full ${styles.dot}`}>
                    {phase.status === 'present' && (
                      <span className="block h-3 w-3 animate-ping rounded-full bg-kronos-violet opacity-75" />
                    )}
                  </span>
                </span>
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Phase
                  </div>
                  <div className={`font-display text-xl font-semibold ${styles.text}`}>
                    {phase.label}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 border-l border-white/[0.06] pl-6">
                {phase.milestones.map((m) => (
                  <div key={m.title} className="relative">
                    <span
                      className={`absolute -left-[31px] top-1.5 h-2 w-2 rounded-full ${styles.dot}`}
                    />
                    <h3 className="font-display text-sm font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
