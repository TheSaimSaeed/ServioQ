import { Container } from "./Container";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    text: "We identify where leads, customers and operations get stuck.",
    flow: ["Business", "Processes", "Bottlenecks"],
  },
  {
    number: "02",
    title: "Build",
    text: "We design and implement the digital system around your actual workflow.",
    flow: ["Website", "CRM", "AI", "Automation", "Integrations"],
  },
  {
    number: "03",
    title: "Grow",
    text: "Your team spends less time on repetitive work and more time serving customers and winning business.",
    flow: ["Less Manual Work", "Faster Response", "Better Operations", "Growth"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[56px]">
            From everyday friction to automated workflows.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="h-full rounded-[28px] border border-ink/8 bg-surface p-8 sm:p-9">
                <span className="text-[13px] font-bold tracking-[0.06em] text-purple">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[24px] font-bold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
                  {step.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {step.flow.map((item, idx, arr) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="rounded-full bg-ink/[0.04] px-3 py-1.5 text-[12px] font-semibold text-ink/60">
                        {item}
                      </span>
                      {idx < arr.length - 1 && (
                        <span className="text-ink/20">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
