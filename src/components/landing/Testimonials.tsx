import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type T = { quote: string; longer: string; name: string; role: string; agency: string; initials: string };

const testimonials: T[] = [
  {
    quote: "His work is unforgettable. Soubh took our scattered brand and turned it into the reason vendors stop negotiating on commission.",
    longer:
      "We'd worked with three agencies before Soubh. None of them understood that our problem wasn't traffic, it was the way we were describing ourselves. Two weeks in, we had a deck that every team member could pitch from. Six months later, our average commission held 0.5% above market in our patch. That's the only metric that matters.",
    name: "Mark Zammit",
    role: "Director",
    agency: "Zammit Real Estate",
    initials: "MZ",
  },
  {
    quote: "He helped streamline our workflows in ways we didn't know we needed. The deck alone has paid for the engagement five times over.",
    longer:
      "Onboarding new agents used to take a fortnight of side-by-side training. Now they read the deck on day one and can sit a vendor meeting by day three. Same for the appraisals — we walk in with one story, not five versions of it.",
    name: "Priya N.",
    role: "Principal",
    agency: "The SMSF Property Guy",
    initials: "PN",
  },
  {
    quote: "The clearest two weeks of strategic work I've ever bought. No fluff. No retainer pressure. Just the decision we'd been avoiding.",
    longer:
      "I'd been telling myself we'd 'get to positioning eventually' for three years. Soubh got us through it in two weeks, and the 90 days of content that followed was the proof we'd actually committed to it. Worth every dollar.",
    name: "James O.",
    role: "Co-founder",
    agency: "Arum & Co.",
    initials: "JO",
  },
];

export function Testimonials() {
  const [open, setOpen] = useState<T | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
      <div className="max-w-[1280px] mx-auto">
        <p className="label-eyebrow mb-6">Said about the work</p>
        <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px] max-w-3xl">
          From principals who made the call.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <button
              key={t.name}
              onClick={() => setOpen(t)}
              className="text-left bg-paper border border-line border-l-4 border-l-highlight p-8 transition-all hover:border-ink hover:border-l-terracotta hover:-translate-y-0.5"
            >
              <p className="font-serif italic text-ink/90 text-lg leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-line">
                <span className="w-10 h-10 bg-ink text-paper flex items-center justify-center text-xs font-medium">
                  {t.initials}
                </span>
                <div className="text-sm">
                  <div className="font-medium text-ink">{t.name}</div>
                  <div className="text-concrete">{t.role}, {t.agency}</div>
                </div>
              </div>
              <span className="block text-xs text-concrete mt-4 underline-draw w-fit">
                Read the full story →
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="bg-paper border border-ink rounded-none max-w-2xl p-10">
          {open && (
            <>
              <DialogTitle className="sr-only">{open.name}'s testimonial</DialogTitle>
              <p className="label-eyebrow mb-6">Full story</p>
              <p className="font-serif italic text-2xl text-ink leading-snug">
                &ldquo;{open.quote}&rdquo;
              </p>
              <p className="font-serif text-ink/80 mt-6 text-lg leading-relaxed">
                {open.longer}
              </p>
              <div className="mt-8 pt-6 border-t border-line flex items-center gap-3">
                <span className="w-12 h-12 bg-ink text-paper flex items-center justify-center text-sm font-medium">
                  {open.initials}
                </span>
                <div>
                  <div className="font-medium text-ink">{open.name}</div>
                  <div className="text-sm text-concrete">{open.role}, {open.agency}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
