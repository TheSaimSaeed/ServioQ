"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { ButtonPrimary } from "./Button";
import { Logo } from "./Logo";
import { IconClose, IconMenu } from "./Icons";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Why ServioQ", href: "#why-servioq" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <Container className="pt-5">
        <div className="flex items-center justify-between rounded-full border border-ink/8 bg-surface/80 px-5 py-3 backdrop-blur-md sm:px-6">
          <Link href="#top">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonPrimary href="#book-a-call" className="px-5 py-2.5 text-[14px]">
              Book a Call
            </ButtonPrimary>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 top-0 z-40 bg-bg lg:hidden">
          <Container className="pt-5">
            <div className="flex items-center justify-between rounded-full border border-ink/8 bg-surface px-5 py-3">
              <Logo />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex size-10 items-center justify-center rounded-full text-ink"
              >
                <IconClose className="size-5" />
              </button>
            </div>
          </Container>
          <div className="mt-10 flex flex-col items-center gap-8 px-6">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[28px] font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <ButtonPrimary href="#book-a-call" className="mt-4">
              Book a Strategy Call
            </ButtonPrimary>
          </div>
        </div>
      )}
    </header>
  );
}
