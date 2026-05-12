import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { GripVertical, X, Check } from "lucide-react";

const before = {
  eyebrow: "About us",
  title: "Your trusted local real estate experts",
  body: "We pride ourselves on delivering exceptional service to vendors and buyers across the area. With decades of combined experience, our passionate team works tirelessly to achieve the best outcomes for every client we serve.",
  bullets: ["Trusted", "Experienced", "Local", "Passionate", "Results-driven"],
};

const after = {
  eyebrow: "Why we exist",
  title: "We hold commission for vendors who refuse to be commoditised.",
  body: "We work with one type of seller: owners of architecturally-considered homes between $1.8M–$4.5M in Sydney's inner-east. We don't list everything. We list the home that deserves a buyer who already understands it.",
  bullets: ["1 vendor profile", "1 price band", "1 postcode cluster"],
};

export function BeforeAfter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(4, Math.min(96, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      update(x);
    };
    const onUp = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [update]);

  return (
    <div className="mb-16 md:mb-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <p className="label-eyebrow text-paper/60 mb-3">Drag to compare</p>
          <h3 className="font-bold text-paper text-2xl md:text-3xl tracking-[-0.02em] leading-tight max-w-2xl">
            What changes between Monday morning and the end of week two.
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-paper/60">
          <span className="inline-flex items-center gap-1.5">
            <X className="w-3.5 h-3.5 text-terracotta" /> Current pitch
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-forest" strokeWidth={3} /> After the sprint
          </span>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="relative aspect-[16/10] md:aspect-[16/8] w-full select-none border border-paper/20 overflow-hidden cursor-ew-resize bg-paper"
        onMouseDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          update(e.touches[0].clientX);
        }}
      >
        {/* AFTER slide (full background) */}
        <SlideCard data={after} variant="after" />

        {/* BEFORE slide (clipped to left of handle) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        >
          <SlideCard data={before} variant="before" />
        </div>

        {/* Divider + handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-paper pointer-events-none"
          style={{ left: `${pct}%` }}
        >
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-terracotta text-paper rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] pointer-events-auto cursor-ew-resize"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ x: 0 }}
          >
            <GripVertical className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Corner labels */}
        <div className="absolute top-3 left-3 bg-ink/90 text-paper px-2.5 py-1 text-[10px] tracking-widest uppercase">
          Before
        </div>
        <div className="absolute top-3 right-3 bg-forest text-paper px-2.5 py-1 text-[10px] tracking-widest uppercase">
          After
        </div>
      </div>

      <p className="text-paper/50 text-xs mt-3 text-center">
        Tip: drag the handle ←→ to reveal each version
      </p>
    </div>
  );
}

function SlideCard({
  data,
  variant,
}: {
  data: typeof before;
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";
  return (
    <div
      className={`absolute inset-0 p-6 md:p-12 flex flex-col justify-between ${
        isAfter ? "bg-paper text-ink" : "bg-[#EFECE6] text-ink/80"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="label-eyebrow">{data.eyebrow}</span>
        <span className="text-[10px] tracking-widest uppercase text-concrete">
          {isAfter ? "Slide 01 / 06" : "Generic agency v.1"}
        </span>
      </div>

      <div>
        <div
          className={`w-12 h-px mb-5 ${isAfter ? "bg-terracotta" : "bg-concrete/40"}`}
        />
        <h4
          className={`font-bold tracking-[-0.02em] leading-[1.05] ${
            isAfter
              ? "text-3xl md:text-5xl text-ink"
              : "text-2xl md:text-4xl text-ink/60 italic font-serif"
          }`}
        >
          {data.title}
        </h4>
        <p
          className={`mt-4 md:mt-6 leading-relaxed text-sm md:text-base max-w-xl ${
            isAfter ? "font-serif text-ink/80" : "text-ink/50"
          }`}
        >
          {data.body}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {data.bullets.map((b) => (
            <span
              key={b}
              className={`text-[11px] px-2 py-1 border ${
                isAfter
                  ? "border-ink text-ink"
                  : "border-concrete/40 text-concrete line-through"
              }`}
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-concrete">
        <span>{isAfter ? "Your agency · post-sprint" : "Every other agency"}</span>
        <span>{isAfter ? "01 / 06" : "—"}</span>
      </div>
    </div>
  );
}
