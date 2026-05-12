import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "#problem", label: "Problem", tip: "Diagnose your positioning in 30 seconds" },
  { href: "#sprint", label: "Sprint", tip: "What lands in your inbox over 14 weeks" },
  { href: "#pricing", label: "Pricing", tip: "$5,000 AUD · founding rate" },
  { href: "#faq", label: "FAQ", tip: "The 8 questions every principal asks" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <TooltipProvider delayDuration={150}>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-8 h-8 bg-ink text-paper inline-flex items-center justify-center"
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.span>
            <span className="font-semibold tracking-tight text-ink">Soubh &amp; Co.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-concrete">
            {navItems.map((n) => (
              <Tooltip key={n.href}>
                <TooltipTrigger asChild>
                  <a href={n.href} className="hover:text-ink transition-colors relative group">
                    {n.label}
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </a>
                </TooltipTrigger>
                <TooltipContent className="bg-ink text-paper rounded-none border-0">
                  {n.tip}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge className="hidden sm:inline-flex bg-forest text-paper hover:bg-forest rounded-none border-0 font-normal cursor-help">
                  <span className="w-1.5 h-1.5 rounded-full bg-paper mr-2 animate-pulse" />
                  3 spots
                </Badge>
              </TooltipTrigger>
              <TooltipContent className="bg-ink text-paper rounded-none border-0">
                3 founding spots remaining for Q2 2026
              </TooltipContent>
            </Tooltip>
            <Button asChild size="sm" variant="terracotta">
              <a href="#pricing">Book a call</a>
            </Button>
          </div>
        </div>
      </motion.header>
    </TooltipProvider>
  );
}
