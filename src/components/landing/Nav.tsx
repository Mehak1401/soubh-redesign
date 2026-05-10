import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-ink text-paper inline-flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
          <span className="font-semibold tracking-tight text-ink">Soubh &amp; Co.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-concrete">
          <a href="#problem" className="hover:text-ink transition-colors">Problem</a>
          <a href="#sprint" className="hover:text-ink transition-colors">Sprint</a>
          <a href="#pricing" className="hover:text-ink transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Badge className="hidden sm:inline-flex bg-forest text-paper hover:bg-forest rounded-none border-0 font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-paper mr-2 animate-pulse" />
            3 spots
          </Badge>
          <Button asChild size="sm" variant="terracotta">
            <a href="#pricing">Book a call</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
