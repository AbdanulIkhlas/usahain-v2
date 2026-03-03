import { Navbar } from "@/components/organisms/Navbar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { ProblemSection } from "@/components/organisms/ProblemSection";
import { ShiftSection } from "@/components/organisms/ShiftSection";
import { HowItWorksSection } from "@/components/organisms/HowItWorksSection";
import { ScorePreviewSection } from "@/components/organisms/ScorePreviewSection";
import { SocialProofSection } from "@/components/organisms/SocialProofSection";
import { PricingSection } from "@/components/organisms/PricingSection";
import { FinalCTASection } from "@/components/organisms/FinalCTASection";
import { Footer } from "@/components/organisms/Footer";
import { brandConfig } from "@/config/brand.config";

const Index = () => {
  return (
    <>
      <head>
        <title>{brandConfig.name} — {brandConfig.tagline}</title>
        <meta name="description" content={brandConfig.description} />
      </head>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ShiftSection />
        <HowItWorksSection />
        <ScorePreviewSection />
        <SocialProofSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
