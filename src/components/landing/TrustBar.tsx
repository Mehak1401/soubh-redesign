const logos = [
  "Zammit Real Estate",
  "The SMSF Property Guy",
  "Buyer's Agent Investing",
  "Arum & Co.",
  "Carismatic Inhome Care",
];

export function TrustBar() {
  const items = [...logos, ...logos];
  return (
    <section className="bg-forest text-paper py-6 overflow-hidden border-y border-forest-deep">
      <div className="flex items-center gap-3 max-w-[1280px] mx-auto px-6 lg:px-10">
        <span className="label-eyebrow text-paper/60 shrink-0 hidden md:inline">
          Trusted by principals at
        </span>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex gap-12 animate-marquee whitespace-nowrap will-change-transform">
            {items.map((name, i) => (
              <span
                key={i}
                className="font-serif italic text-paper/90 text-base md:text-lg"
              >
                {name}
                <span className="text-paper/30 ml-12">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
