import { Container } from "./Container";
import { ButtonPrimary, ButtonGhost } from "./Button";
import {
  IconArrowRight,
  IconBolt,
  IconCheck,
  IconClock,
  IconGrid,
  IconSpark,
  IconTarget,
  IconUser,
} from "./Icons";

const NODES = [
  {
    key: "lead",
    label: "New Lead",
    icon: IconUser,
    shape: "circle",
    bg: "bg-blue",
    fg: "text-bg",
    accent: "var(--color-blue)",
    x: 6,
    y: 50,
    delay: "0s",
  },
  {
    key: "ai",
    label: "AI Follow-Up",
    icon: IconSpark,
    shape: "square",
    bg: "bg-purple",
    fg: "text-bg",
    accent: "var(--color-purple)",
    x: 25,
    y: 16,
    delay: "0.5s",
  },
  {
    key: "crm",
    label: "CRM",
    icon: IconGrid,
    shape: "square",
    bg: "bg-brown",
    fg: "text-bg",
    accent: "var(--color-brown)",
    x: 34,
    y: 82,
    delay: "1s",
  },
  {
    key: "scheduling",
    label: "Scheduling",
    icon: IconClock,
    shape: "square",
    bg: "bg-yellow",
    fg: "text-ink",
    accent: "var(--color-yellow)",
    x: 66,
    y: 16,
    delay: "1.5s",
  },
  {
    key: "automation",
    label: "Automation",
    icon: IconBolt,
    shape: "square",
    bg: "bg-purple",
    fg: "text-bg",
    accent: "var(--color-purple)",
    x: 75,
    y: 82,
    delay: "2s",
  },
  {
    key: "customer",
    label: "Customer",
    icon: IconTarget,
    shape: "circle",
    bg: "bg-blue",
    fg: "text-bg",
    accent: "var(--color-blue)",
    x: 94,
    y: 50,
    delay: "2.5s",
  },
] as const;

const HUB = { x: 50, y: 45 };

export function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden pt-10 pb-6 lg:min-h-[88vh] lg:pt-12 lg:pb-6">
      <AmbientBackdrop />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-1.5">
          <span className="size-1.5 rounded-full bg-purple" />
          <span className="text-[13px] font-medium text-ink/60">
            AI operations for commercial cleaning
          </span>
        </span>

        <h1 className="mt-5 max-w-5xl text-[44px] font-extrabold leading-[0.95] tracking-tighter text-ink sm:text-[clamp(56px,7vw,110px)] sm:leading-[0.92]">
          <span className="block">AI-powered growth</span>
          <span className="block">for commercial</span>
          <span className="block">cleaning companies</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-ink/55 sm:text-[18px]">
          Turn more opportunities into customers, automate repetitive work,
          and build a cleaning business that&rsquo;s easier to run.
        </p>

        <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonPrimary href="#book-a-call">Book a Strategy Call</ButtonPrimary>
          <ButtonGhost href="#how-it-works">See How It Works</ButtonGhost>
        </div>

        <div className="mt-6 flex flex-col items-center gap-2 text-ink/30">
          <span className="text-[12px] font-medium">Scroll</span>
          <IconArrowRight className="animate-scroll-cue size-4 rotate-90" />
        </div>
      </Container>

      <div className="relative z-10 flex flex-1 items-center justify-center pt-6">
        <HeroGraphic />
      </div>
    </section>
  );
}

function AmbientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[6%] top-[12%] size-72 rounded-full bg-purple/10 blur-3xl" />
      <div className="absolute right-[8%] top-[4%] size-64 rounded-full bg-blue/10 blur-3xl" />
      <div className="absolute left-[18%] bottom-[6%] size-56 rounded-full bg-yellow/10 blur-3xl" />
      <div className="absolute right-[14%] bottom-[2%] size-60 rounded-full bg-red/8 blur-3xl" />
    </div>
  );
}

function HeroGraphic() {
  return (
    <div
      className="relative mx-auto h-36 w-full max-w-3xl sm:h-44 sm:max-w-4xl lg:h-52.5 lg:max-w-5xl"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {NODES.map((node) => {
          const midX = HUB.x + (node.x - HUB.x) * 0.5;
          const midY = HUB.y + (node.y - HUB.y) * 0.5;
          return (
            <g key={node.key}>
              <line
                x1={HUB.x}
                y1={HUB.y}
                x2={node.x}
                y2={node.y}
                stroke="var(--color-ink)"
                strokeOpacity={0.14}
                strokeWidth={0.25}
                vectorEffect="non-scaling-stroke"
              />
              <circle cx={midX} cy={midY} r={0.55} fill="var(--color-ink)" fillOpacity={0.18} />
            </g>
          );
        })}
        {NODES.map((node, i) => (
          <circle key={node.key} r={0.7} fill={node.accent}>
            <animate
              attributeName="cx"
              values={`${HUB.x};${node.x};${HUB.x}`}
              keyTimes="0;0.5;1"
              dur="4.8s"
              begin={`${i * 0.55}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
            />
            <animate
              attributeName="cy"
              values={`${HUB.y};${node.y};${HUB.y}`}
              keyTimes="0;0.5;1"
              dur="4.8s"
              begin={`${i * 0.55}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
            />
          </circle>
        ))}
      </svg>

      {/* Hub */}
      <div
        className="animate-hub-pulse absolute flex size-19 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-purple sm:size-23 sm:rounded-[28px] lg:size-28 lg:rounded-4xl"
        style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}
      >
        <IconSpark className="size-7 text-bg sm:size-8 lg:size-9" />
      </div>

      {/* Floating product-UI fragment */}
      <div
        className="animate-float absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-ink/8 bg-surface px-4 py-3 shadow-[0_16px_40px_-24px_rgba(10,9,8,0.35)] sm:flex"
        style={{ left: "50%", top: "8%", ["--float-delay" as string]: "1.2s" }}
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-blue/15 text-blue">
          <IconCheck className="size-3" strokeWidth={2.6} />
        </span>
        <span className="text-[12px] font-semibold text-ink/70">Lead qualified</span>
      </div>

      {NODES.map((node) => {
        const Icon = node.icon;
        return (
          <div
            key={node.key}
            className={`animate-float absolute flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:size-14 lg:size-16 ${node.bg} ${
              node.shape === "circle" ? "rounded-full" : "rounded-2xl sm:rounded-[20px]"
            }`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              ["--float-delay" as string]: node.delay,
            }}
          >
            <span className="sr-only">{node.label}</span>
            <Icon className={`size-4.5 sm:size-5 lg:size-6 ${node.fg}`} />
          </div>
        );
      })}
    </div>
  );
}
