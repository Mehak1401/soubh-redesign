import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShow(ratio > 0.4 && ratio < 0.95);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-forest text-paper border-t border-forest-deep transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-3 md:py-4 flex items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          <span className="hidden md:inline">Ready to stop being invisible? </span>
          <span className="font-medium">3 spots</span>
          <span className="text-paper/70"> at $5,000 AUD.</span>
        </p>
        <Button asChild size="sm" variant="terracotta" className="shrink-0">
          <a href="#pricing">Book a call →</a>
        </Button>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-16 px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-semibold text-lg">Soubh &amp; Co.</div>
          <p className="text-paper/60 text-sm mt-3 max-w-xs leading-relaxed">
            A marketing consultancy built for boutique Australian real estate agencies.
            Sydney-based. Working AU-wide.
          </p>
        </div>
        <div>
          <p className="label-eyebrow text-paper/50 mb-4">The page</p>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><a href="#problem" className="hover:text-terracotta">The diagnosis</a></li>
            <li><a href="#sprint" className="hover:text-terracotta">The sprint</a></li>
            <li><a href="#pricing" className="hover:text-terracotta">Pricing</a></li>
            <li><a href="#faq" className="hover:text-terracotta">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="label-eyebrow text-paper/50 mb-4">Elsewhere</p>
          <ul className="space-y-2 text-sm text-paper/80">
            <li><a href="https://iamsoubh.com" className="hover:text-terracotta" target="_blank" rel="noreferrer">iamsoubh.com</a></li>
            <li><a href="mailto:hello@soubh.co" className="hover:text-terracotta">hello@soubh.co</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto border-t border-paper/10 mt-12 pt-6 text-xs text-paper/40 flex flex-col md:flex-row gap-2 md:justify-between">
        <span>© {new Date().getFullYear()} Soubh &amp; Co. — All prices AUD, ex-GST. Invoiced from Sydney.</span>
        <span>Built as a strategy brief, not a brochure.</span>
      </div>
    </footer>
  );
}
