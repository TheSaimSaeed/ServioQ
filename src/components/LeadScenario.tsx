import { Container } from "./Container";
import { Reveal } from "./Reveal";

const EVENTS = [
  {
    time: "8:42 AM",
    text: "A potential commercial client submits a website inquiry.",
  },
  { time: "8:42 AM", text: "Lead automatically enters the CRM." },
  { time: "8:43 AM", text: "AI sends an initial response." },
  {
    time: "8:45 AM",
    text: "Prospect answers qualification questions.",
  },
  { time: "9:10 AM", text: "Site visit is scheduled." },
  {
    time: "10:00 AM",
    text: "Sales team sees the qualified opportunity.",
  },
];

export function LeadScenario() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-3xl">
        <Reveal>
          <h2 className="text-center text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[52px]">
            Imagine this workflow.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 rounded-[28px] border border-ink/8 bg-surface p-8 sm:p-10 lg:mt-16">
            {EVENTS.map((event, i, arr) => (
              <div key={i} className="grid grid-cols-[68px_20px_1fr] gap-4 sm:grid-cols-[92px_24px_1fr]">
                <span className="pt-0.5 text-[12.5px] font-bold text-ink/40 sm:text-[13.5px]">
                  {event.time}
                </span>
                <div className="flex flex-col items-center">
                  <span className="mt-1 size-2.5 shrink-0 rounded-full bg-purple" />
                  {i < arr.length - 1 && (
                    <span className="w-px flex-1 bg-ink/10" />
                  )}
                </div>
                <p className="pb-8 text-[14.5px] font-medium leading-relaxed text-ink/75 sm:text-[15.5px]">
                  {event.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-md text-center text-[16px] font-medium text-ink/50">
            The system keeps working while your team focuses on the
            business.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
