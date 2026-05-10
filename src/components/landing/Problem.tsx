import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const items = [
  "Your team describes the agency 5 different ways in vendor meetings.",
  "Your social posts are listings, market updates, and the occasional team photo.",
  "Vendors negotiate your commission because they see you as interchangeable.",
  "You've hired a marketing person, but the output still feels generic.",
  "Your website talks about you, not what you actually do differently.",
  "Every appraisal feels like starting from zero on what makes you, you.",
];

function verdict(n: number) {
  if (n === 0) return "Tick what's true. We'll diagnose as you go.";
  if (n <= 2) return "Mild. Worth a sharper positioning pass.";
  if (n <= 4) return "This is a positioning problem, not a posting problem.";
  return "Critical. Vendors literally can't tell you apart. Book a call.";
}

export function Problem() {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));
  const count = checked.filter(Boolean).length;

  useEffect(() => {
    if (count === 4) {
      toast("Sounds like a positioning problem.", {
        description: "Want 20 minutes to talk it through? No pitch.",
        action: {
          label: "Book a call",
          onClick: () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" }),
        },
      });
    }
  }, [count]);

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="problem" className="py-24 md:py-32 px-6 lg:px-10 bg-paper">
      <div className="max-w-[1100px] mx-auto">
        <p className="label-eyebrow mb-6">The diagnosis</p>
        <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px] max-w-4xl">
          You don&apos;t have a marketing problem.<br />
          <span className="text-concrete">You have a positioning problem.</span>
        </h2>
        <p className="font-serif text-lg md:text-xl text-ink/80 mt-8 editorial leading-relaxed">
          Most agencies hire a marketing person to post more. But if your team describes the
          agency five different ways, more posts just mean more noise. The sprint fixes the
          description first. Everything else follows.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-line border border-line">
          {items.map((text, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`group text-left p-6 md:p-8 transition-colors ${
                checked[i] ? "bg-highlight" : "bg-paper hover:bg-paper/60"
              }`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`mt-0.5 w-6 h-6 border flex items-center justify-center shrink-0 transition-colors ${
                    checked[i]
                      ? "bg-terracotta border-terracotta text-paper"
                      : "bg-paper border-ink/40 text-transparent group-hover:border-ink"
                  }`}
                >
                  {checked[i] && (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 animate-draw-check">
                      <path
                        d="M5 12l5 5 9-11"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-ink leading-relaxed">{text}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-line pt-8">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-bold text-5xl text-ink tabular-nums">{count}</span>
              <span className="text-concrete text-lg">/ {items.length} checked</span>
            </div>
            <p className="font-serif italic text-ink/80 mt-2 text-lg">{verdict(count)}</p>
          </div>
          <Button asChild size="lg" variant="terracotta">
            <a href="#sprint">See how the sprint fixes this →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
