import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustStatement } from "@/components/TrustStatement";
import { ProblemSection } from "@/components/ProblemSection";
import { TransitionStatement } from "@/components/TransitionStatement";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { CleaningWorkflow } from "@/components/CleaningWorkflow";
import { PracticalAI } from "@/components/PracticalAI";
import { BusinessImpact } from "@/components/BusinessImpact";
import { LeadScenario } from "@/components/LeadScenario";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="flex flex-col">
      <Nav />
      <main>
        <Hero />
        <TrustStatement />
        <ProblemSection />
        <TransitionStatement />
        <Solution />
        <HowItWorks />
        <WhatWeBuild />
        <CleaningWorkflow />
        <PracticalAI />
        <BusinessImpact />
        <LeadScenario />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
