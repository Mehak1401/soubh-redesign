import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { BeforeAfter } from "./BeforeAfter";

const slides = [
  { n: "01", title: "Why we exist", body: "The single sentence that vendors remember three weeks after the appraisal." },
  { n: "02", title: "Who we exist for", body: "The exact vendor profile — including the ones we politely turn away." },
  { n: "03", title: "What only we do", body: "The differentiation slide. The one that ends commission negotiation." },
  { n: "04", title: "Proof", body: "Three case studies, structured to mirror how vendors actually evaluate trust." },
  { n: "05", title: "The process", body: "What the first 30 days look like, written in plain English, not agency jargon." },
  { n: "06", title: "The ask", body: "How to start. Pricing transparency. The exact next step." },
];

export function SampleDeck() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-ink text-paper">
      <div className="max-w-[1280px] mx-auto">
        <BeforeAfter />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="label-eyebrow text-paper/60 mb-6">Deliverable 02 · Preview</p>
            <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-paper text-[36px] md:text-[52px] max-w-3xl">
              The 6-slide deck, slide by slide.
            </h2>
          </div>
          <span className="text-paper/60 text-sm tabular-nums">
            Slide <span className="text-paper">{String(current + 1).padStart(2, "0")}</span> / 06
          </span>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="-ml-4">
            {slides.map((s) => (
              <CarouselItem key={s.n} className="pl-4 md:basis-2/3 lg:basis-1/2">
                <div className="aspect-[4/3] bg-paper text-ink p-8 md:p-12 border border-paper/20 flex flex-col justify-between">
                  <span className="label-eyebrow">Slide {s.n}</span>
                  <div>
                    <div className="w-12 h-px bg-terracotta mb-6" />
                    <h3 className="font-bold text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05]">
                      {s.title}
                    </h3>
                    <p className="font-serif text-ink/70 mt-6 text-base md:text-lg leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-concrete">
                    <span>YOUR AGENCY</span>
                    <span>{s.n} / 06</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-paper text-ink border-0 rounded-none hover:bg-highlight" />
          <CarouselNext className="hidden md:flex -right-4 bg-paper text-ink border-0 rounded-none hover:bg-highlight" />
        </Carousel>

        <div className="flex gap-2 mt-8 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 transition-all ${
                current === i ? "w-10 bg-terracotta" : "w-6 bg-paper/20 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
