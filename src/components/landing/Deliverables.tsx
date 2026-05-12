import { useState } from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUpRight, ClipboardList, Presentation, Calendar } from "lucide-react";

type Deliverable = {
  n: string;
  phase: string;
  week: string;
  title: string;
  body: string;
  meta: string[];
  detail: string;
};

const deliverables: Deliverable[] = [
  {
    n: "01",
    phase: "Sprint",
    week: "Week 1–2",
    title: "3–4 positioning strategies, ranked by risk",
    body:
      "Built from a deep audit of your last 90 days of marketing, your recent listings, your team's intake responses, and 5 competing agencies in your market.",
    meta: ["Safe", "Stretch", "Bold"],
    detail:
      "You walk out with a Safe option (defensible, low-risk), a Stretch option (rewards conviction), and a Bold option (changes the market conversation). Each is mapped to vendor psychology, your team's natural strengths, and the realistic content you can sustain. We pick one together in workshop two.",
  },
  {
    n: "02",
    phase: "Sprint",
    week: "Week 1–2",
    title: "A documented 6-slide pitch deck",
    body:
      "The deck your director walks into every appraisal with. Your new hires read in their first week. One source of truth, used everywhere.",
    meta: ["Appraisals", "Onboarding", "Alignment"],
    detail:
      "Six slides. Not sixty. Why you exist, who you exist for, what you sell that no one else does, the proof, the process, and the ask. Editable source files (Figma + Keynote) handed over. Your team can change a logo without breaking the system.",
  },
  {
    n: "03",
    phase: "Proof",
    week: "Week 3–14",
    title: "3 months of content, scheduled in your voice",
    body:
      "36 pieces across Instagram, LinkedIn, and weekly long-form. Mapped to your new positioning. Reviewed monthly.",
    meta: ["90 days", "3 posts/week", "Scheduled by us"],
    detail:
      "We write it in your voice (captured in workshop one). We schedule it. You approve it weekly via Slack. Monthly review call to look at what's landing and adjust the next month's themes. You own every file at the end.",
  },
];

export function Deliverables() {
  const [open, setOpen] = useState<Deliverable | null>(null);
  const icons = [ClipboardList, Presentation, Calendar];

  return (
    <TooltipProvider delayDuration={150}>
    <section id="sprint" className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label-eyebrow mb-6">The deliverables</p>
            <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px] max-w-3xl">
              Two weeks of strategy.<br />
              <span className="text-concrete">Twelve weeks of proof.</span>
            </h2>
          </div>
          <p className="text-sm text-concrete max-w-xs md:text-right">
            Click any card for the full breakdown of what lands in your inbox.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-line" aria-hidden />
          <div className="space-y-6">
            {deliverables.map((d, i) => {
              const phaseChange = i === 0 || d.phase !== deliverables[i - 1].phase;
              const Icon = icons[i] ?? ClipboardList;
              return (
                <div key={d.n}>
                  {phaseChange && (
                    <div className="flex items-center gap-4 pl-12 md:pl-16 mb-6 mt-2">
                      <span className="label-eyebrow text-forest">
                        {d.phase === "Sprint" ? "Phase 01 — The Sprint" : "Phase 02 — The Proof"}
                      </span>
                      <span className="flex-1 h-px bg-line" />
                    </div>
                  )}
                  <motion.button
                    onClick={() => setOpen(d)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    whileHover={{ x: 4 }}
                    className="group relative w-full text-left flex gap-6 md:gap-10 pl-0"
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="relative z-10 shrink-0 w-9 h-9 md:w-12 md:h-12 bg-paper border border-ink text-ink font-semibold flex items-center justify-center text-sm md:text-base group-hover:bg-ink group-hover:text-paper transition-colors">
                          {d.n}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-ink text-paper rounded-none border-0">
                        Click for the full breakdown
                      </TooltipContent>
                    </Tooltip>
                    <div className="flex-1 border border-line bg-paper p-6 md:p-10 transition-all duration-300 group-hover:border-ink group-hover:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.3)]">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <span className="label-eyebrow inline-flex items-center gap-2">
                          <Icon className="w-3.5 h-3.5 text-terracotta" strokeWidth={1.75} />
                          {d.week} · Deliverable {d.n}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-concrete group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <h3 className="font-semibold text-ink text-2xl md:text-[28px] tracking-tight leading-tight mb-3">
                        {d.title}
                      </h3>
                      <p className="font-serif text-ink/80 text-base md:text-lg leading-relaxed editorial">
                        {d.body}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {d.meta.map((m) => (
                          <Tooltip key={m}>
                            <TooltipTrigger asChild>
                              <span className="text-xs px-2.5 py-1 border border-line text-concrete bg-paper hover:border-ink hover:text-ink transition-colors cursor-help">
                                {m}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="bg-ink text-paper rounded-none border-0">
                              {m} option included
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Sheet open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl bg-paper border-l border-line p-8 md:p-12 overflow-y-auto"
        >
          {open && (
            <>
              <SheetHeader className="text-left space-y-3 mb-8">
                <span className="label-eyebrow">{open.week} · Deliverable {open.n}</span>
                <SheetTitle className="text-3xl font-bold tracking-tight leading-tight">
                  {open.title}
                </SheetTitle>
                <SheetDescription className="font-serif text-lg text-ink/80 leading-relaxed">
                  {open.body}
                </SheetDescription>
              </SheetHeader>
              <div className="border-t border-line pt-6">
                <p className="label-eyebrow mb-3">What you actually get</p>
                <p className="text-ink leading-relaxed">{open.detail}</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {open.meta.map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1 border border-ink text-ink">
                    {m}
                  </span>
                ))}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
    </TooltipProvider>
  );
}
