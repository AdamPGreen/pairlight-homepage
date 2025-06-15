import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { BenefitsForOrganizers } from "@/components/benefits-for-organizers";
import { AgentSuite } from "@/components/agent-suite";
import { BenefitsForSpeakers } from "@/components/benefits-for-speakers";
import { ProductPreview } from "@/components/product-preview";
import { PricingSection } from "@/components/pricing-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { WhyPairlightSection } from "@/components/why-pairlight-section";
import { WhatIsPairlightSection } from "@/components/what-is-pairlight-section";
import { WhoWeWorkWithSection } from "@/components/who-we-work-with-section";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyPairlightSection />
      <WhatIsPairlightSection />
      <AgentSuite />
      <HowItWorks />
      <WhoWeWorkWithSection />
      <BenefitsForOrganizers />
      <BenefitsForSpeakers />
      <ProductPreview />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}