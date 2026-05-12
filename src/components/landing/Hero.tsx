import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Home, Key, MapPin, TrendingUp } from "lucide-react";
import heroDeck from "@/assets/hero-deck.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 14 });
  const [hovering, setHovering] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setHovering(false);
  };

  return (
    <TooltipProvider delayDuration={150}>
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-10 grain relative overflow-hidden">
        {/* Decorative real-estate icons */}
        <motion.div
          className="absolute top-32 right-12 text-line/80 hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Home className="w-16 h-16" strokeWidth={0.75} />
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-8 text-line/80 hidden lg:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Key className="w-12 h-12 -rotate-12" strokeWidth={0.75} />
        </motion.div>

        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.p
              className="label-eyebrow mb-6 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <MapPin className="w-3 h-3 text-terracotta" />
              Positioning Sprint · Boutique Australian Real Estate
            </motion.p>

            <h1 className="font-sans font-bold text-ink tracking-[-0.03em] leading-[1.02] text-[44px] sm:text-[58px] lg:text-[72px]">
              {"The last marketing decision you'll make before your next listing."
                .split(" ")
                .map((w, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.22em]"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.04, duration: 0.5 }}
                  >
                    {w}
                  </motion.span>
                ))}
            </h1>

            <motion.p
              className="font-serif text-lg md:text-xl text-ink/80 mt-8 editorial leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A 2-week positioning sprint plus 90 days of executed content for Australian
              real estate agencies tired of sounding like every other agency on the high
              street. Built by someone who only works with agencies. Not SaaS. Not e-commerce.
              Just real estate.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 mt-10"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild size="lg" variant="terracotta">
                    <a href="#pricing">Book a 20-minute qualifying call →</a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-ink text-paper rounded-none border-0">
                  No pitch. Just 20 mins to confirm fit.
                </TooltipContent>
              </Tooltip>
              <Button asChild size="lg" variant="outline">
                <a href="#sprint">See the sprint breakdown</a>
              </Button>
            </motion.div>

            {/* Real estate stat strip */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 items-center text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-2 text-concrete cursor-help">
                    <TrendingUp className="w-4 h-4 text-terracotta" />
                    <span className="text-ink font-medium">+0.4%</span> avg commission held
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-ink text-paper rounded-none border-0 max-w-xs">
                  Across 14 agencies, 6 months post-sprint.
                </TooltipContent>
              </Tooltip>
              <span className="text-concrete">Founding price: <span className="text-ink font-medium">$5,000 AUD</span></span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-2 text-forest font-medium cursor-help">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                    3 spots remaining
                  </span>
                </TooltipTrigger>
                <TooltipContent className="bg-ink text-paper rounded-none border-0">
                  After these, founding pricing won't return.
                </TooltipContent>
              </Tooltip>
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={onLeave}
            className="lg:col-span-5 [perspective:1200px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <motion.div
              className="relative"
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute -inset-6 bg-highlight/40 -z-10"
                animate={{ x: hovering ? 12 : 24, y: hovering ? 12 : 24 }}
                transition={{ duration: 0.5 }}
              />
              <img
                src={heroDeck}
                alt="Sample positioning deck and content calendar laid out on a desk"
                width={1024}
                height={1024}
                className="w-full h-auto border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
              />
              <motion.div
                className="absolute -bottom-4 -left-4 bg-ink text-paper px-3 py-1.5 text-[11px] tracking-widest uppercase"
                style={{ transform: "translateZ(40px)" }}
              >
                Sample deliverable
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 bg-terracotta text-paper px-3 py-2 text-xs"
                style={{ transform: "translateZ(60px)" }}
                animate={{ rotate: hovering ? 0 : -3 }}
              >
                <div className="flex items-center gap-1.5">
                  <Home className="w-3 h-3" />
                  <span className="font-medium">Real Estate Only</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
}
