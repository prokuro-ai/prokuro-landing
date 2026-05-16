import SiteNav from "@/app/components/sections/SiteNav";
import HeroSection from "@/app/components/sections/HeroSection";
import SocialProofSection from "@/app/components/sections/SocialProofSection";
import ProblemSection from "@/app/components/sections/ProblemSection";
import HowItWorksSection from "@/app/components/sections/HowItWorksSection";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import FitSection from "@/app/components/sections/FitSection";
import PitchSection from "@/app/components/sections/PitchSection";
import SampleReportSection from "@/app/components/sections/SampleReportSection";
import PricingSection from "@/app/components/sections/PricingSection";
import SiteFooter from "@/app/components/sections/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeaturesSection />
        <FitSection />
        <PitchSection />
        <SampleReportSection />
        <PricingSection />
      </main>
      <SiteFooter />
    </>
  );
}
