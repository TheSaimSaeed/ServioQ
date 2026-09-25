import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ButtonGhost, ButtonPrimary } from "./Button";

export function FinalCTA() {
  return (
    <section id="book-a-call" className="py-24 lg:py-32">
      <Container>
        <div className="rounded-[40px] bg-ink px-8 py-20 text-center sm:px-16 sm:py-24 lg:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-bg sm:text-[52px] lg:text-[64px]">
              Ready to make your cleaning business easier to run?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-bg/55 sm:text-[18px]">
              Let&rsquo;s identify the repetitive work, missed opportunities
              and disconnected processes holding your business back.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonPrimary href="#contact" onDark>
                Book a Strategy Call
              </ButtonPrimary>
              <ButtonGhost href="#solutions" onDark>
                Explore Our Solutions
              </ButtonGhost>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
