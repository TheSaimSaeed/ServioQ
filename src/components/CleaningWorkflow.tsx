import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { IconBolt } from "./Icons";

const STAGES = [
  { label: "New Inquiry", x: 50, y: 12 },
  { label: "Lead Capture", x: 74, y: 21 },
  { label: "Qualification", x: 87, y: 43 },
  { label: "Site Visit", x: 83, y: 69 },
  { label: "Proposal", x: 63, y: 86 },
  { label: "Customer", x: 37, y: 86 },
  { label: "Service Delivery", x: 17, y: 69 },
  { label: "Follow-Up", x: 13, y: 43 },
  { label: "Repeat Business", x: 26, y: 21 },
];

export function CleaningWorkflow() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[56px]">
            Built for the way commercial cleaning companies actually work.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="relative mx-auto mt-16 h-[300px] w-full max-w-xl sm:h-[400px] lg:mt-20 lg:h-[540px] lg:max-w-2xl"
            aria-hidden="true"
          >
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="var(--color-ink)"
                strokeOpacity="0.08"
                strokeWidth="0.35"
              />
              {STAGES.map((s) => (
                <line
                  key={s.label}
                  x1="50"
                  y1="50"
                  x2={s.x}
                  y2={s.y}
                  stroke="var(--color-ink)"
                  strokeOpacity="0.08"
                  strokeWidth="0.3"
                />
              ))}
            </svg>

            <div
              className="animate-hub-pulse absolute flex size-[92px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-purple/20 bg-surface text-center sm:size-[112px] lg:size-[128px]"
              style={{ left: "50%", top: "50%" }}
            >
              <IconBolt className="size-4 text-purple sm:size-5" />
              <span className="text-[10px] font-bold tracking-tight sm:text-[12px]">
                ServioQ
              </span>
            </div>

            {STAGES.map((s, i) => (
              <div
                key={s.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-ink/8 bg-surface px-2.5 py-1.5 text-[9px] font-semibold text-ink/65 sm:px-3 sm:py-2 sm:text-[11px] lg:text-[12px]"
                style={{ left: `${s.x}%`, top: `${s.y}%` }}
              >
                <span className="mr-1 text-ink/30">{i + 1}</span>
                {s.label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-3">
            {STAGES.map((s, i, arr) => (
              <span key={s.label} className="flex items-center gap-2">
                <span className="text-[13px] font-medium text-ink/55">
                  {s.label}
                </span>
                {i < arr.length - 1 && <span className="text-ink/20">→</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
