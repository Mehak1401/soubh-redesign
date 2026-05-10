import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Info } from "lucide-react";

const items = [
  { label: "2-week positioning sprint (3 workshops)", tip: "Workshops 1–3 happen on Zoom, recorded, with async Loom check-ins between." },
  { label: "6-slide pitch deck (source files)", tip: "Editable Figma + Keynote files. You own them outright." },
  { label: "90 days of scheduled content (36 posts)", tip: "Instagram + LinkedIn + one weekly long-form. We schedule, you approve." },
  { label: "Monthly review call", tip: "30 minutes. What landed, what didn't, what to adjust." },
  { label: "Slack access for async revisions", tip: "Same-business-day responses, Mon–Fri AEST." },
];

export function Pricing() {
  return (
    <TooltipProvider delayDuration={120}>
      <section id="pricing" className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14">
            <p className="label-eyebrow mb-6">The investment</p>
            <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px]">
              One price. One scope.<br />
              <span className="text-concrete">No retainer.</span>
            </h2>
          </div>

          <div className="max-w-[640px] mx-auto border border-ink bg-paper relative">
            <div className="absolute -top-3 left-8 bg-forest text-paper px-3 py-1 text-[11px] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-paper inline-block mr-2 animate-pulse" />
              3 founding spots remaining
            </div>

            <div className="p-8 md:p-12">
              <p className="label-eyebrow">Founding price</p>
              <div className="flex items-baseline gap-3 mt-3">
                <span className="font-bold text-6xl md:text-7xl text-ink tracking-tight tabular-nums">
                  $5,000
                </span>
                <span className="text-concrete">AUD</span>
              </div>
              <p className="text-sm text-concrete mt-2">
                ex-GST · For boutique agencies under 10 staff
              </p>

              <div className="my-8 h-px bg-line" />

              <p className="label-eyebrow mb-4">What&apos;s included</p>
              <ul className="space-y-4">
                {items.map((it) => (
                  <li key={it.label} className="flex items-start gap-3 group">
                    <span className="mt-0.5 w-5 h-5 bg-terracotta text-paper flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    <span className="text-ink flex-1">{it.label}</span>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="text-concrete hover:text-ink transition-colors shrink-0">
                          <Info className="w-4 h-4" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-ink text-paper border-0 rounded-none max-w-xs">
                        {it.tip}
                      </TooltipContent>
                    </Tooltip>
                  </li>
                ))}
              </ul>

              <div className="my-8 h-px bg-line" />

              <p className="text-sm text-concrete mb-6">
                Payment: 50% on signing · 50% at start of Week 2
              </p>

              <Button asChild size="xl" variant="terracotta" className="w-full">
                <a href="#">Book a 20-minute qualifying call →</a>
              </Button>
              <p className="text-xs text-concrete text-center mt-4">
                No pitch on the call. Just 20 minutes to confirm fit.
              </p>
              <a
                href="#faq"
                className="block text-center text-sm text-concrete mt-4 underline-draw"
              >
                Not sure? Read the FAQ first →
              </a>
            </div>

            <div className="bg-highlight/50 border-t border-line px-8 md:px-12 py-5 text-sm text-ink">
              <span className="font-medium">From client #4:</span> $8,500 · $14,500 · $22,000.
              <span className="text-concrete"> Founding pricing won&apos;t return.</span>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
