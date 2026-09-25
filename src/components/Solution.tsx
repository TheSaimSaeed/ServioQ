import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { BentoCard } from "./BentoCard";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconChart,
  IconClock,
  IconGlobe,
  IconGrid,
  IconLink,
  IconSpark,
} from "./Icons";

export function Solution() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-[34px] font-extrabold leading-[1.08] tracking-[-0.025em] text-ink sm:text-[44px] lg:text-[56px]">
              One smarter system behind your business.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink/60 sm:text-[18px]">
              ServioQ combines websites, lead management, CRM, AI, automation
              and operational tools into practical systems designed around
              how commercial cleaning companies actually work.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" delay={0}>
            <LeadGenerationCard />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={90}>
            <AILeadResponseCard />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0}>
            <CrmCard />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={90}>
            <SchedulingCard />
          </Reveal>
          <Reveal className="lg:col-span-12" delay={0}>
            <AIBusinessCard />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0}>
            <DashboardsCard />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={90}>
            <IntegrationsCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function LeadGenerationCard() {
  const steps = ["Website Visitor", "Inquiry", "Lead Captured", "CRM"];
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        Turn website visitors into opportunities.
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
        Build landing pages and digital experiences designed to capture
        inquiries, qualify prospects and move potential customers into your
        sales pipeline.
      </p>
      <div className="mt-8 flex flex-col gap-0.5">
        {steps.map((step, i, arr) => (
          <div key={step} className="flex items-stretch gap-3">
            <div className="flex w-4 flex-col items-center">
              <span
                className={`mt-1.5 size-2 shrink-0 rounded-full ${
                  i === arr.length - 1 ? "bg-purple" : "bg-ink/25"
                }`}
              />
              {i < arr.length - 1 && <span className="w-px flex-1 bg-ink/12" />}
            </div>
            <span
              className={`pb-4 text-[14px] font-medium ${
                i === arr.length - 1 ? "text-purple" : "text-ink/60"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
      <Link
        href="#solutions"
        className="group mt-2 inline-flex items-center gap-2 text-[14px] font-semibold text-ink"
      >
        Explore Lead Systems
        <IconArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </BentoCard>
  );
}

function AILeadResponseCard() {
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        Respond before the opportunity goes cold.
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
        AI-powered workflows can respond to inquiries, answer common
        questions, qualify prospects and keep conversations moving.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        <div className="max-w-[78%] rounded-2xl rounded-bl-sm bg-ink/[0.045] px-4 py-3 text-[13.5px] leading-snug text-ink/75">
          Can you provide a quote for our office building?
        </div>
        <div className="ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-purple px-4 py-3 text-[13.5px] leading-snug text-bg">
          Absolutely, I can help with that. I&rsquo;ll collect a few details
          and help schedule the next step.
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="flex size-4 items-center justify-center rounded-full bg-blue/15 text-blue">
            <IconCheck className="size-2.5" strokeWidth={2.6} />
          </span>
          <span className="text-[12.5px] font-semibold text-blue">
            Lead qualified
          </span>
        </div>
      </div>
    </BentoCard>
  );
}

function CrmCard() {
  const rows = [
    { name: "ABC Office", status: "New", tone: "bg-blue/12 text-blue" },
    { name: "Metro Plaza", status: "Contacted", tone: "bg-yellow/18 text-[#8a6a1c]" },
    { name: "West Tower", status: "Quote Sent", tone: "bg-purple/12 text-purple" },
    { name: "Prime Mall", status: "Won", tone: "bg-ink text-bg" },
  ];
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        Stop managing your business from memory.
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
        Every lead, customer and job status lives in one connected system —
        updated automatically as work moves forward.
      </p>
      <div className="mt-8 overflow-hidden rounded-2xl border border-ink/8">
        <div className="flex items-center justify-between bg-ink/[0.03] px-4 py-2.5">
          <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink/45">
            New Leads
          </span>
          <IconGrid className="size-3.5 text-ink/30" />
        </div>
        <div className="divide-y divide-ink/6">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between px-4 py-3"
            >
              <span className="text-[13.5px] font-medium text-ink/75">
                {row.name}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${row.tone}`}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function SchedulingCard() {
  const monday = [
    { time: "09:00", label: "Site Visit — ABC Office" },
    { time: "11:30", label: "Proposal Follow-up" },
    { time: "14:00", label: "Team Scheduling" },
  ];
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        Keep jobs and conversations moving.
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
        Site visits, proposals and team scheduling stay organized and
        visible in one calendar.
      </p>
      <div className="mt-8 rounded-2xl border border-ink/8 p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-ink/45">
          <IconClock className="size-3.5" />
          Monday
        </div>
        <div className="mt-3 flex flex-col gap-3">
          {monday.map((item) => (
            <div key={item.time} className="flex items-baseline gap-3">
              <span className="w-11 shrink-0 text-[12px] font-semibold text-ink/40">
                {item.time}
              </span>
              <span className="text-[13.5px] font-medium text-ink/75">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function AIBusinessCard() {
  const branches = [
    { label: "Leads", accent: "text-blue bg-blue/15" },
    { label: "CRM", accent: "text-yellow bg-yellow/15" },
    { label: "Operations", accent: "text-purple bg-purple/20" },
  ];
  return (
    <BentoCard dark className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <h3 className="text-[26px] font-bold leading-tight sm:text-[30px]">
          Put AI to work where it actually matters.
        </h3>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bg/60">
          From intelligent customer communication to internal workflows and
          business assistants, we build AI systems around real operational
          problems.
        </p>
      </div>
      <div className="relative flex flex-col items-center py-4">
        <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-3">
          <IconSpark className="size-4 text-purple" />
          <span className="text-[13px] font-bold tracking-tight">ServioQ</span>
        </div>
        <svg className="h-10 w-40" viewBox="0 0 160 40" preserveAspectRatio="none">
          <line x1="80" y1="0" x2="20" y2="40" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="80" y1="0" x2="80" y2="40" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
          <line x1="80" y1="0" x2="140" y2="40" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        </svg>
        <div className="flex gap-3">
          {branches.map((b) => (
            <span
              key={b.label}
              className={`rounded-xl px-3.5 py-2 text-[12px] font-semibold ${b.accent}`}
            >
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function DashboardsCard() {
  const bars = [
    { label: "Leads", h: 46, tone: "bg-blue" },
    { label: "Site Visits", h: 68, tone: "bg-yellow" },
    { label: "Proposals", h: 54, tone: "bg-brown" },
    { label: "Won", h: 82, tone: "bg-purple" },
  ];
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        See your business at a glance.
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/55">
        Track leads, jobs and performance in one connected view, built
        around how your business actually operates.
      </p>
      <div className="mt-8 rounded-2xl border border-ink/8 p-5">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-ink/45">
          <IconChart className="size-3.5" />
          Pipeline Overview
        </div>
        <div className="flex h-24 items-end gap-4">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className={`flex-1 rounded-t-md ${bar.tone}`}
              style={{ height: `${bar.h}%`, opacity: 0.85 }}
            />
          ))}
        </div>
        <div className="mt-2.5 flex gap-4">
          {bars.map((bar) => (
            <span
              key={bar.label}
              className="flex-1 text-center text-[10px] font-medium text-ink/40"
            >
              {bar.label}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}

function IntegrationsCard() {
  const satellites = [
    { label: "Website", icon: IconGlobe, x: 12, y: 16 },
    { label: "CRM", icon: IconGrid, x: 12, y: 84 },
    { label: "Email", icon: IconLink, x: 88, y: 16 },
    { label: "Calendar", icon: IconClock, x: 88, y: 84 },
  ];
  return (
    <BentoCard className="h-full">
      <h3 className="text-[22px] font-bold leading-tight sm:text-[26px]">
        Connect the tools you already use.
      </h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/55">
        Connect what you already use. Automate what happens between it.
        ServioQ doesn&rsquo;t require replacing your existing software.
      </p>
      <div className="relative mt-8 h-[190px] w-full">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {satellites.map((s) => (
            <line
              key={s.label}
              x1={50}
              y1={50}
              x2={s.x}
              y2={s.y}
              stroke="var(--color-ink)"
              strokeOpacity="0.12"
              strokeWidth="0.4"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-ink/10 bg-bg px-3.5 py-2"
          style={{ left: "50%", top: "50%" }}
        >
          <IconBolt className="size-3.5 text-purple" />
          <span className="text-[11.5px] font-bold">ServioQ</span>
        </div>
        {satellites.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
            >
              <span className="flex size-9 items-center justify-center rounded-full border border-ink/8 bg-surface text-ink/60">
                <Icon className="size-4" />
              </span>
              <span className="text-[10.5px] font-medium text-ink/45">
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}
