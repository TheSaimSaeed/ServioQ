import Link from "next/link";
import { Container } from "./Container";
import { ButtonPrimary } from "./Button";
import { Logo } from "./Logo";

const SOLUTIONS = [
  "Websites",
  "Lead Systems",
  "CRM & Automation",
  "AI Solutions",
  "Operations",
  "Integrations",
];

const COMPANY = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#book-a-call" },
];

export function Footer() {
  return (
    <footer id="about" className="border-t border-ink/8 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-14 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo size={32} textClassName="text-[22px] font-extrabold tracking-tight text-ink" />
            <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-ink/50">
              AI &amp; automation for commercial cleaning businesses.
            </p>
            <div className="mt-8">
              <ButtonPrimary href="#book-a-call">Book a Strategy Call</ButtonPrimary>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-semibold text-ink/40">Solutions</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {SOLUTIONS.map((item) => (
                  <li key={item}>
                    <Link
                      href="#solutions"
                      className="text-[14.5px] font-medium text-ink/65 transition-colors hover:text-ink"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-semibold text-ink/40">Company</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {COMPANY.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[14.5px] font-medium text-ink/65 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/8 py-8 sm:flex-row">
          <span className="text-[13.5px] font-medium text-ink/40">
            servioq.com
          </span>
          <span className="text-[13.5px] text-ink/40">
            © 2026 ServioQ
          </span>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-[13.5px] text-ink/40 hover:text-ink/70">
              Privacy
            </Link>
            <Link href="#" className="text-[13.5px] text-ink/40 hover:text-ink/70">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
