import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Q = { id: string; q: string; options: { v: string; label: string; weight: number }[] };

const questions: Q[] = [
  {
    id: "size",
    q: "How big is your agency?",
    options: [
      { v: "solo", label: "Solo principal", weight: 1 },
      { v: "small", label: "2–10 staff", weight: 2 },
      { v: "mid", label: "11–25 staff", weight: 1 },
      { v: "large", label: "25+", weight: 0 },
    ],
  },
  {
    id: "location",
    q: "Where do you operate?",
    options: [
      { v: "au", label: "Australia", weight: 2 },
      { v: "nz", label: "New Zealand", weight: 1 },
      { v: "other", label: "Elsewhere", weight: 0 },
    ],
  },
  {
    id: "pain",
    q: "What hurts most right now?",
    options: [
      { v: "commission", label: "Vendors negotiate commission", weight: 2 },
      { v: "invisible", label: "We feel invisible online", weight: 2 },
      { v: "team", label: "Team isn't aligned on the story", weight: 2 },
      { v: "leads", label: "We need more leads, not strategy", weight: 0 },
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { v: string; weight: number }>>({});
  const done = step >= questions.length;
  const score = useMemo(
    () => Object.values(answers).reduce((s, a) => s + a.weight, 0),
    [answers],
  );
  const progress = done ? 100 : (step / questions.length) * 100;

  const select = (qid: string, opt: { v: string; weight: number }) => {
    setAnswers((a) => ({ ...a, [qid]: opt }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  const verdict = (() => {
    if (score >= 5) return { tone: "fit", title: "Strong fit.", body: "You're the agency this sprint was built for. Book the call — we'll confirm the details in 20 minutes." };
    if (score >= 3) return { tone: "maybe", title: "Probably a fit.", body: "Worth a 20-minute call to confirm. No pitch, just qualification." };
    return { tone: "no", title: "Probably not us.", body: "If you're outside Australia or need a media buyer, the sprint isn't the right shape. We'll happily refer you." };
  })();

  return (
    <section className="py-24 md:py-32 px-6 lg:px-10 bg-highlight/40 border-y border-line">
      <div className="max-w-[820px] mx-auto">
        <p className="label-eyebrow mb-6">90-second qualifier</p>
        <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[32px] md:text-[44px]">
          Three questions before we both spend 20 minutes on a call.
        </h2>

        <div className="mt-10 border border-ink bg-paper">
          <div className="px-6 md:px-8 py-4 border-b border-line flex items-center gap-4">
            <span className="label-eyebrow shrink-0">
              {done ? "Result" : `Question ${step + 1} of ${questions.length}`}
            </span>
            <Progress
              value={progress}
              className="h-1 bg-line [&>*]:bg-terracotta rounded-none flex-1"
            />
          </div>

          <div className="p-6 md:p-10 min-h-[280px]">
            {!done ? (
              <div key={step} className="animate-fade-up">
                <h3 className="font-semibold text-2xl md:text-3xl text-ink leading-tight">
                  {questions[step].q}
                </h3>
                <RadioGroup
                  value={answers[questions[step].id]?.v ?? ""}
                  className="mt-8 grid sm:grid-cols-2 gap-3"
                >
                  {questions[step].options.map((opt) => (
                    <Label
                      key={opt.v}
                      htmlFor={`${questions[step].id}-${opt.v}`}
                      onClick={() => select(questions[step].id, opt)}
                      className="cursor-pointer flex items-center gap-3 border border-line p-4 hover:border-ink hover:bg-highlight transition-colors"
                    >
                      <RadioGroupItem
                        value={opt.v}
                        id={`${questions[step].id}-${opt.v}`}
                        className="border-ink text-terracotta"
                      />
                      <span className="text-ink">{opt.label}</span>
                    </Label>
                  ))}
                </RadioGroup>
              </div>
            ) : (
              <div className="animate-fade-up">
                <span
                  className={`inline-block label-eyebrow mb-4 ${
                    verdict.tone === "fit"
                      ? "text-forest"
                      : verdict.tone === "maybe"
                      ? "text-terracotta"
                      : "text-concrete"
                  }`}
                >
                  {verdict.tone === "no" ? "Honest answer" : "You're a fit"}
                </span>
                <h3 className="font-bold text-3xl md:text-4xl text-ink tracking-tight">{verdict.title}</h3>
                <p className="font-serif text-lg text-ink/80 mt-4 leading-relaxed">{verdict.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {verdict.tone !== "no" && (
                    <Button asChild size="lg" variant="terracotta">
                      <a href="#pricing">Book the 20-minute call →</a>
                    </Button>
                  )}
                  <Button onClick={reset} size="lg" variant="outline">
                    Retake
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
