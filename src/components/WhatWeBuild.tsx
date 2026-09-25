import { Container } from "./Container";
import { Reveal } from "./Reveal";
import {
  IconClock,
  IconGlobe,
  IconGrid,
  IconLayers,
  IconLink,
  IconSpark,
  IconUser,
} from "./Icons";

const ITEMS = [
  {
    category: "Websites",
    text: "Websites & high-converting landing pages",
    icon: IconGlobe,
  },
  {
    category: "Lead Systems",
    text: "Lead generation & lead management",
    icon: IconUser,
  },
  {
    category: "CRM",
    text: "CRM & workflow automation",
    icon: IconGrid,
  },
  {
    category: "AI",
    text: "AI-powered business solutions",
    icon: IconSpark,
  },
  {
    category: "Operations",
    text: "Scheduling & operational tools",
    icon: IconClock,
  },
  {
    category: "Applications",
    text: "Custom dashboards & web applications",
    icon: IconLayers,
  },
  {
    category: "Integrations",
    text: "Business integrations & process automation",
    icon: IconLink,
  },
];

export function WhatWeBuild() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[56px]">
            Technology that works around your business.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.category} delay={(i % 4) * 80}>
                <div className="h-full rounded-3xl border border-ink/8 bg-surface p-7 transition-transform duration-500 ease-out hover:-translate-y-1">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ink/[0.05] text-ink/70">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-6 text-[13.5px] font-medium text-ink/40">
                    {item.category}
                  </h3>
                  <p className="mt-1 text-[16.5px] font-bold leading-snug text-ink">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
