import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroDeck from "@/assets/hero-deck.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: -6, y: 8 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 10 - 4, y: px * 14 + 6 });
  };
  const onLeave = () => setTilt({ x: -6, y: 8 });

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-10 grain">
      <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="label-eyebrow mb-6">
            Positioning Sprint · Boutique Australian Real Estate
          </p>
          <h1 className="font-sans font-bold text-ink tracking-[-0.03em] leading-[1.02] text-[44px] sm:text-[58px] lg:text-[72px]">
            The last marketing decision you&apos;ll make before your next listing.
          </h1>
          <p className="font-serif text-lg md:text-xl text-ink/80 mt-8 editorial leading-relaxed">
            A 2-week positioning sprint plus 90 days of executed content for Australian
            real estate agencies tired of sounding like every other agency on the high
            street. Built by someone who only works with agencies. Not SaaS. Not e-commerce.
            Just real estate.
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-10">
            <Button asChild size="lg" variant="terracotta">
              <a href="#pricing">Book a 20-minute qualifying call →</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#sprint">See the sprint breakdown</a>
            </Button>
          </div>
          <p className="text-sm text-concrete mt-6">
            Founding price: <span className="text-ink font-medium">$5,000 AUD</span> ·
            <span className="text-forest font-medium"> 3 spots remaining</span> · Next call: Tuesday
          </p>
        </div>

        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="lg:col-span-5 [perspective:1200px] hidden lg:block"
        >
          <div
            className="tilt-card relative"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className="absolute -inset-6 bg-highlight/40 -z-10 translate-x-6 translate-y-6" />
            <img
              src={heroDeck}
              alt="Sample positioning deck and content calendar laid out on a desk"
              width={1024}
              height={1024}
              className="w-full h-auto border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            />
            <div className="absolute -bottom-4 -left-4 bg-ink text-paper px-3 py-1.5 text-[11px] tracking-widest uppercase">
              Sample deliverable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
