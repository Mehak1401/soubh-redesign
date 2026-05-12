import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Problem } from "@/components/landing/Problem";
import { Deliverables } from "@/components/landing/Deliverables";
import { SampleDeck } from "@/components/landing/SampleDeck";
import { VsFreelancer } from "@/components/landing/VsFreelancer";
import { Quiz } from "@/components/landing/Quiz";
import { Founder } from "@/components/landing/Founder";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { StickyCTA, Footer } from "@/components/landing/StickyCTA";
import { ReadingProgress } from "@/components/landing/ReadingProgress";
import { ExitIntent } from "@/components/landing/ExitIntent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Positioning Sprint for Boutique Real Estate Agencies | Soubh & Co." },
      {
        name: "description",
        content:
          "A 2-week positioning sprint plus 90 days of executed content for Australian real estate agencies. Founding price $5,000 AUD. 3 spots remaining.",
      },
      { property: "og:title", content: "Soubh & Co. — Positioning Sprint for Real Estate" },
      {
        property: "og:description",
        content:
          "Stop sounding like every other agency on the high street. 2 weeks of positioning, 90 days of content. $5,000 AUD.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-paper text-ink">
      <ReadingProgress />
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Deliverables />
      <SampleDeck />
      <VsFreelancer />
      <Quiz />
      <Founder />
      <Pricing />
      <Testimonials />
      <FAQ />
      <StickyCTA />
      <Footer />
      <ExitIntent />
    </main>
  );
}
