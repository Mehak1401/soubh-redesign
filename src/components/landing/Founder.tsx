import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import founder from "@/assets/founder.jpg";

export function Founder() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-4">
          <div className="relative">
            <div className="absolute -inset-3 bg-highlight -z-10 translate-x-3 translate-y-3" />
            <img
              src={founder}
              alt="Soubh, founder of Soubh & Co."
              loading="lazy"
              width={768}
              height={768}
              className="w-full h-auto border border-line grayscale"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <p className="label-eyebrow mb-6">Who you&apos;re hiring</p>
          <blockquote className="font-serif text-2xl md:text-3xl text-ink leading-[1.35] tracking-[-0.005em]">
            &ldquo;Every engagement I&apos;ve run for the last four years converged on the same insight:
            positioning has to come before marketing. So I built a sprint that does only that.
            <span className="bg-highlight px-1"> No retainers. No fluff. </span>
            Just the strategic decision your agency is missing.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 max-w-12 bg-ink" />
            <HoverCard openDelay={120}>
              <HoverCardTrigger asChild>
                <button className="text-ink font-medium hover:text-terracotta transition-colors">
                  Soubh
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="bg-paper border border-ink rounded-none w-72 p-5">
                <p className="label-eyebrow mb-3">Track record</p>
                <ul className="space-y-2 text-sm text-ink">
                  <li className="flex justify-between"><span>Years in agency strategy</span><span className="font-medium">4+</span></li>
                  <li className="flex justify-between"><span>Australian agencies served</span><span className="font-medium">14</span></li>
                  <li className="flex justify-between"><span>Average commission lift</span><span className="font-medium">0.4%</span></li>
                  <li className="flex justify-between"><span>Retainers held</span><span className="font-medium text-terracotta">Zero</span></li>
                </ul>
              </HoverCardContent>
            </HoverCard>
            <span className="text-concrete">— Founder, Soubh &amp; Co.</span>
          </div>
          <a
            href="https://iamsoubh.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-sm text-concrete underline-draw"
          >
            Read the long version at iamsoubh.com →
          </a>
        </div>
      </div>
    </section>
  );
}
