import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Posts your listings on a schedule", soubh: true, freelancer: true },
  { feature: "Decides what makes you the only agency to call", soubh: true, freelancer: false },
  { feature: "Documents the positioning so your team stays aligned", soubh: true, freelancer: false },
  { feature: "Pitch deck for appraisals + onboarding", soubh: true, freelancer: false },
  { feature: "Stops commission negotiation", soubh: true, freelancer: false },
  { feature: "Cheap monthly retainer", soubh: false, freelancer: true },
  { feature: "Real estate-specific frameworks", soubh: true, freelancer: false },
];

export function VsFreelancer() {
  const [view, setView] = useState<"both" | "soubh" | "freelancer">("both");

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
      <div className="max-w-[1100px] mx-auto">
        <p className="label-eyebrow mb-6">The honest comparison</p>
        <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px] max-w-3xl">
          Sprint vs. a $1,500/mo freelancer.
        </h2>
        <p className="font-serif text-lg md:text-xl text-ink/80 mt-8 editorial leading-relaxed">
          A freelancer will post your listings. They won&apos;t decide what makes you the only agency
          a vendor should call. That decision — the positioning — is what stops commission
          negotiation. The 90 days of content is the proof it works.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <span className="text-sm text-concrete">View:</span>
          <ToggleGroup
            type="single"
            value={view}
            onValueChange={(v) => v && setView(v as typeof view)}
            className="border border-line"
          >
            <ToggleGroupItem value="both" className="rounded-none data-[state=on]:bg-ink data-[state=on]:text-paper px-4">
              Both
            </ToggleGroupItem>
            <ToggleGroupItem value="soubh" className="rounded-none data-[state=on]:bg-ink data-[state=on]:text-paper px-4">
              Soubh &amp; Co.
            </ToggleGroupItem>
            <ToggleGroupItem value="freelancer" className="rounded-none data-[state=on]:bg-ink data-[state=on]:text-paper px-4">
              Freelancer
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="mt-8 border border-line bg-paper">
          <div className="grid grid-cols-12 px-6 py-4 border-b border-line label-eyebrow">
            <span className="col-span-6 md:col-span-7">What you get</span>
            {(view === "both" || view === "soubh") && (
              <span className="col-span-3 md:col-span-2.5 text-center text-terracotta">Sprint</span>
            )}
            {(view === "both" || view === "freelancer") && (
              <span className="col-span-3 md:col-span-2.5 text-center">Freelancer</span>
            )}
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-12 items-center px-6 py-5 border-b border-line last:border-0 hover:bg-highlight/30 transition-colors"
            >
              <span className="col-span-6 md:col-span-7 text-ink">{r.feature}</span>
              {(view === "both" || view === "soubh") && (
                <span className="col-span-3 md:col-span-2.5 flex justify-center">
                  {r.soubh ? (
                    <span className="w-7 h-7 bg-terracotta text-paper flex items-center justify-center">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </span>
                  ) : (
                    <X className="w-5 h-5 text-concrete/50" />
                  )}
                </span>
              )}
              {(view === "both" || view === "freelancer") && (
                <span className="col-span-3 md:col-span-2.5 flex justify-center">
                  {r.freelancer ? (
                    <span className="w-7 h-7 border border-ink text-ink flex items-center justify-center">
                      <Check className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  ) : (
                    <X className="w-5 h-5 text-concrete/50" />
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
