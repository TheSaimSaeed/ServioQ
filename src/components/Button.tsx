import Link from "next/link";
import { type ReactNode } from "react";
import { IconArrowRight } from "./Icons";

export function ButtonPrimary({
  href,
  children,
  className = "",
  onDark = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 ${
        onDark
          ? "bg-bg text-ink hover:bg-purple hover:text-bg"
          : "bg-ink text-bg hover:bg-purple"
      } ${className}`}
    >
      <span>{children}</span>
      <IconArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className = "",
  onDark = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 ${
        onDark
          ? "border-white/20 text-bg hover:border-white/40"
          : "border-ink/15 text-ink hover:border-ink/40"
      } ${className}`}
    >
      <span>{children}</span>
      <IconArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </Link>
  );
}
