import { BentoSection } from "@/components/sections/bento-section";
import { FAQSection } from "@/components/sections/faq-section";
import FeaturesSection from "@/components/sections/features-section";
import { HeroSection } from "@/components/sections/hero-section";
import { QuoteSection } from "@/components/sections/quote-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center divide-y divide-border min-h-screen w-full">
      <HeroSection />
      <BentoSection />
      <QuoteSection />
      <FeaturesSection />
      <FAQSection />
    </main>
  );
}
