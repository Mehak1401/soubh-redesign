import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Why us, not a marketing agency?",
    a: "Most agencies adapt a B2B SaaS playbook to your industry and hope it sticks. We've built our intake form, positioning frameworks, and content templates around how Australian boutique agencies actually win listings. The deeper the niche, the sharper the work.",
  },
  {
    q: "Why not just hire a $1,500/month freelancer?",
    a: "A freelancer will post your listings. They won't decide what makes you the only agency a vendor should call. That decision — the positioning — is what stops commission negotiation. The 90 days of content is the proof it works.",
  },
  {
    q: "What if we don't like the positioning options?",
    a: "Then we workshop again. We commit to a direction in workshop two; if it doesn't feel right by the end of week one, we re-run options at no extra cost. The sprint is fixed-scope, but the strategy lands when it lands.",
  },
  {
    q: "Do we own the work?",
    a: "Yes. All files, templates, deck source files, voice guides, and the content calendar are yours at the end of the engagement. No lock-in. No ongoing license.",
  },
  {
    q: "What happens after 90 days?",
    a: "Most agencies take the playbook in-house. Some keep us on a light retainer for ongoing content. Most don't need to — that's the point. We tell you which path makes sense in your final review call.",
  },
  {
    q: "Is this only for Australian agencies?",
    a: "Yes. The frameworks are built for the Australian market — from commission structures to vendor psychology to how appraisals actually work in Sydney, Melbourne, and Brisbane. We'll happily refer you to someone in your market if you're outside AU.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 px-6 lg:px-10 bg-paper border-t border-line">
      <div className="max-w-[900px] mx-auto">
        <p className="label-eyebrow mb-6">Honest answers</p>
        <h2 className="font-bold tracking-[-0.025em] leading-[1.05] text-ink text-[36px] md:text-[52px]">
          Frequently asked, frankly answered.
        </h2>

        <Accordion type="single" collapsible className="mt-12 border-t border-ink">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-line"
            >
              <AccordionTrigger className="py-7 text-left text-lg md:text-xl font-medium text-ink hover:text-terracotta hover:no-underline [&[data-state=open]]:text-terracotta">
                <span className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-concrete font-mono text-sm tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7 pl-10 md:pl-14 font-serif text-base md:text-lg text-ink/80 leading-relaxed editorial">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 border border-ink bg-highlight/40 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-serif italic text-ink text-lg md:text-xl max-w-md">
            Still have questions? The fastest way to get answers is on a 20-minute call.
            No pitch. Just qualification.
          </p>
          <Button asChild size="lg" variant="terracotta">
            <a href="#pricing">Book a call →</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
