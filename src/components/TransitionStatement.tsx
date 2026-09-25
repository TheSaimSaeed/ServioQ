import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function TransitionStatement() {
  return (
    <section className="py-16 lg:py-20">
      <Container className="max-w-3xl text-center">
        <Reveal>
          <h2 className="text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[40px] lg:text-[48px]">
            What if the repetitive work handled itself?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-5 text-[17px] font-medium text-ink/45">
            That&rsquo;s where ServioQ comes in.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
