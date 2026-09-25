import { Container } from "./Container";
import { Reveal } from "./Reveal";

const METRICS = [
  { lead: "More", word: "Opportunities", accent: "bg-yellow" },
  { lead: "Faster", word: "Responses", accent: "bg-blue" },
  { lead: "Less", word: "Manual Work", accent: "bg-brown" },
  { lead: "Better", word: "Visibility", accent: "bg-purple" },
];

export function BusinessImpact() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <p className="mx-auto max-w-xl text-center text-[17px] leading-relaxed text-ink/55 sm:text-[18px]">
            Technology should make your business easier to run — not create
            another system you have to manage.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-ink/8 pt-12 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
          {METRICS.map((metric, i) => (
            <Reveal key={metric.word} delay={i * 90}>
              <span className={`block h-1 w-8 rounded-full ${metric.accent}`} />
              <p className="mt-5 text-[15px] font-semibold uppercase tracking-[0.04em] text-ink/45">
                {metric.lead}
              </p>
              <p className="mt-1 text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-[32px]">
                {metric.word}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
