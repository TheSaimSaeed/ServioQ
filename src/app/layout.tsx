import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ServioQ — AI-Powered Growth for Commercial Cleaning Companies",
  description:
    "Turn more opportunities into customers, automate repetitive work, and build a cleaning business that's easier to run. ServioQ is the AI and automation layer behind modern commercial cleaning companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="bg-bg text-ink min-h-full">{children}</body>
    </html>
  );
}
