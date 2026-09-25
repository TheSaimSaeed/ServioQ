import { Container } from "./Container";
import { Reveal } from "./Reveal";
import {
  IconBolt,
  IconChat,
  IconGear,
  IconPhone,
  IconSearch,
  IconTarget,
} from "./Icons";

const CAPABILITIES = [
  { label: "AI Receptionist", icon: IconPhone },
  { label: "Lead Qualification", icon: IconTarget },
  { label: "Follow-Up Automation", icon: IconBolt },
  { label: "Business Assistant", icon: IconChat },
  { label: "Knowledge Search", icon: IconSearch },
  { label: "Workflow Automation", icon: IconGear },
];

export function PracticalAI() {
  return (
    <section id="why-servioq" className="bg-ink py-24 text-bg lg:py-32">
      <Container className="max-w-4xl text-center">
        <Reveal>
          <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[44px] lg:text-[56px]">
            AI that solves business problems.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-bg/55 sm:text-[18px]">
            AI shouldn&rsquo;t be added just because it&rsquo;s trendy. We use
            it where it can remove repetitive work, improve response times,
            organize information and help your team operate more
            efficiently.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-4 lg:mt-16">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.label} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 sm:px-5 sm:py-3">
                    <Icon className="size-4 text-purple" />
                    <span className="text-[13px] font-semibold sm:text-[14px]">
                      {cap.label}
                    </span>
                  </div>
                  {i < CAPABILITIES.length - 1 && (
                    <span className="text-[20px] font-light text-bg/25">+</span>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-14 border-t border-white/10 pt-10 lg:mt-16">
            <p className="text-[20px] font-bold sm:text-[24px]">
              Practical AI for real business operations.
            </p>
            <p className="mt-2 text-[15px] text-bg/45">
              Less AI hype. More useful automation.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
