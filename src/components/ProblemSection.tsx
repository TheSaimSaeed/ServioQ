import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BentoCard } from "./BentoCard";
import { IconCheck } from "./Icons";

const ADMIN_TASKS = [
  "Enter customer information",
  "Send a follow-up message",
  "Update the job record",
  "Confirm the appointment",
];

export function ProblemSection() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[56px]">
            The work behind the work adds up.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7" delay={0}>
            <BentoCard className="h-full">
              <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
                Missed Leads
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/55">
                A prospect calls after hours. Nobody responds. The
                opportunity disappears.
              </p>
              <div className="mt-8 flex flex-col gap-0.5">
                {[
                  { label: "Missed Call", tone: "text-ink/60" },
                  { label: "Potential Customer", tone: "text-ink/60" },
                  { label: "No Response", tone: "text-ink/60" },
                  { label: "Lost Opportunity", tone: "text-red" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-stretch gap-3">
                    <div className="flex w-4 flex-col items-center">
                      <span
                        className={`mt-1.5 size-2 shrink-0 rounded-full ${
                          i === arr.length - 1 ? "bg-red" : "bg-ink/25"
                        }`}
                      />
                      {i < arr.length - 1 && (
                        <span className="w-px flex-1 bg-ink/12" />
                      )}
                    </div>
                    <span
                      className={`pb-4 text-[14px] font-medium ${step.tone}`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <BentoCard className="h-full">
              <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
                Slow Follow-Up
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                Leads need fast responses. Manual follow-ups make it easy for
                opportunities to slip through.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {["Lead", "AI Response", "Follow-Up", "Booked Conversation"].map(
                  (step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-3.5 py-2 text-[12.5px] font-semibold ${
                          i === arr.length - 1
                            ? "bg-blue/12 text-blue"
                            : "bg-ink/[0.04] text-ink/55"
                        }`}
                      >
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-ink/25">→</span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0}>
            <BentoCard className="h-full">
              <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
                Disconnected Systems
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                Customer information, schedules, communication and workflows
                often live in different places.
              </p>
              <div className="relative mt-10 grid grid-cols-2 gap-4">
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="25"
                    y1="18"
                    x2="75"
                    y2="18"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.14"
                    strokeWidth="0.6"
                    strokeDasharray="2.5 3"
                  />
                  <line
                    x1="25"
                    y1="18"
                    x2="25"
                    y2="82"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.14"
                    strokeWidth="0.6"
                    strokeDasharray="2.5 3"
                  />
                  <line
                    x1="75"
                    y1="18"
                    x2="75"
                    y2="82"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.14"
                    strokeWidth="0.6"
                    strokeDasharray="2.5 3"
                  />
                  <line
                    x1="25"
                    y1="82"
                    x2="75"
                    y2="82"
                    stroke="var(--color-ink)"
                    strokeOpacity="0.14"
                    strokeWidth="0.6"
                    strokeDasharray="2.5 3"
                  />
                </svg>
                {["CRM", "Calendar", "Website", "Messages"].map((label) => (
                  <div
                    key={label}
                    className="relative z-10 rounded-2xl border border-ink/8 bg-bg px-4 py-4 text-center text-[13px] font-semibold text-ink/70"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </BentoCard>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <BentoCard className="h-full">
              <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
                Repetitive Admin
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/55">
                The same tasks happen every day: entering information,
                sending messages, updating records and following up.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {ADMIN_TASKS.map((task, i) => (
                  <div key={task} className="flex items-center gap-3">
                    <span
                      className="animate-check flex size-5 shrink-0 items-center justify-center rounded-full bg-purple text-bg"
                      style={{ ["--check-delay" as string]: `${i * 1.1}s` }}
                    >
                      <IconCheck className="size-3" strokeWidth={2.4} />
                    </span>
                    <span className="text-[14.5px] font-medium text-ink/65">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </BentoCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
