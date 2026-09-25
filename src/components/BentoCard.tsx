import { type ReactNode } from "react";

export function BentoCard({
  children,
  className = "",
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border p-8 transition-all duration-500 ease-out hover:-translate-y-1 sm:p-10 ${
        dark
          ? "border-white/10 bg-ink text-bg"
          : "border-ink/8 bg-surface text-ink shadow-[0_1px_2px_rgba(10,9,8,0.04)] hover:shadow-[0_24px_48px_-28px_rgba(10,9,8,0.22)]"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardEyebrow({
  children,
  className = "text-ink/45",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-[12px] font-semibold uppercase tracking-[0.1em] ${className}`}>
      {children}
    </span>
  );
}
