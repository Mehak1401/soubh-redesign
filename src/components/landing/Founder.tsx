import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, Key, TrendingUp, MapPin } from "lucide-react";
import founder from "@/assets/founder.jpg";

const stats = [
  { icon: Home, label: "Agencies served", value: "14", tip: "Boutique Australian agencies under 10 staff." },
  { icon: Key, label: "Listings repositioned", value: "320+", tip: "From appraisal deck to vendor close." },
  { icon: TrendingUp, label: "Avg commission lift", value: "+0.4%", tip: "Held above market for 6+ months post-sprint." },
  { icon: MapPin, label: "Markets covered", value: "NSW · VIC · QLD", tip: "Sydney metro, Melbourne inner-east, Brisbane north." },
];

export function Founder() {
  return (
    <TooltipProvider delayDuration={120}>
      <section className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-3 bg-highlight -z-10"
                initial={{ x: 0, y: 0 }}
                whileInView={{ x: 12, y: 12 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
              />
              <motion.img
                src={founder}
                alt="Soubh, founder of Soubh & Co."
                loading="lazy"
                width={976}
                height={812}
                className="w-full h-auto border border-ink object-cover aspect-[4/5]"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
              />
              {/* Floating real-estate badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-paper border border-ink px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                  <div className="text-[10px] tracking-widest uppercase text-concrete">Available</div>
                </div>
                <div className="text-sm text-ink font-medium mt-1">Q2 2026 · 3 spots</div>
              </motion.div>
              {/* Caption tag */}
              <div className="absolute -top-3 -left-3 bg-ink text-paper px-3 py-1.5 text-[11px] tracking-widest uppercase">
                Founder
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
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

            {/* Real estate stat grid with tooltips */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-line border border-line">
              {stats.map((s, i) => (
                <Tooltip key={s.label}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.45 }}
                      whileHover={{ y: -2 }}
                      className="bg-paper p-5 cursor-help"
                    >
                      <s.icon className="w-4 h-4 text-terracotta mb-3" strokeWidth={1.75} />
                      <div className="font-bold text-2xl text-ink tabular-nums leading-none">
                        {s.value}
                      </div>
                      <div className="label-eyebrow mt-2">{s.label}</div>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-ink text-paper rounded-none border-0 max-w-xs">
                    {s.tip}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <a
              href="https://iamsoubh.com"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 text-sm text-concrete underline-draw"
            >
              Read the long version at iamsoubh.com →
            </a>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
