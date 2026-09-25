import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function TrustStatement() {
  return (
    <section className="py-24 lg:py-32">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-purple">
            Built for cleaning businesses
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[54px]">
            Your team should be cleaning buildings — not chasing spreadsheets.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/60 sm:text-[18px]">
            ServioQ connects the digital work behind your business so leads,
            follow-ups, scheduling, customer communication, and repetitive
            tasks don&rsquo;t have to be managed manually.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
