import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { FileText, Check, Home } from "lucide-react";

const STORAGE_KEY = "soubh_exit_intent_seen";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let armed = false;
    const armTimer = setTimeout(() => (armed = true), 8000); // wait 8s before arming

    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
        document.removeEventListener("mouseout", onLeave);
      }
    };

    document.addEventListener("mouseout", onLeave);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("That email looks off — give it another go.");
      return;
    }
    setSubmitted(true);
    toast.success("Sent. Check your inbox in the next minute.");
    setTimeout(() => setOpen(false), 2200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-paper border border-ink rounded-none max-w-xl p-0 overflow-hidden gap-0">
        <div className="grid md:grid-cols-5">
          {/* Visual */}
          <div className="md:col-span-2 bg-ink text-paper p-6 md:p-8 relative overflow-hidden">
            <motion.div
              className="absolute -top-6 -right-6 text-paper/10"
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Home className="w-40 h-40" strokeWidth={0.5} />
            </motion.div>
            <span className="label-eyebrow text-paper/60">Free template</span>
            <div className="mt-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-terracotta" strokeWidth={1.75} />
              <span className="font-medium">.fig + .key</span>
            </div>
            <div className="mt-10 space-y-2 relative z-10">
              {["6 slides", "Source files", "Vendor-tested"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-paper/80">
                  <Check className="w-3.5 h-3.5 text-terracotta" strokeWidth={3} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 p-6 md:p-8">
            <DialogTitle className="font-bold text-2xl md:text-[28px] tracking-[-0.02em] leading-tight text-ink">
              Not ready to book?<br />
              <span className="text-concrete">Steal the deck instead.</span>
            </DialogTitle>
            <p className="font-serif text-ink/80 mt-3 text-sm leading-relaxed">
              The exact 6-slide pitch deck template our agencies walk into appraisals with.
              Editable Figma + Keynote. No drip sequence.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-6 space-y-3"
                >
                  <Input
                    type="email"
                    required
                    placeholder="you@youragency.com.au"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-none border-ink bg-paper h-12"
                  />
                  <Button type="submit" variant="terracotta" size="lg" className="w-full">
                    Send me the deck →
                  </Button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="block w-full text-xs text-concrete underline-draw mx-auto w-fit pt-1"
                  >
                    No thanks, I&apos;ll keep reading
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 border border-forest bg-highlight/40 p-5"
                >
                  <div className="flex items-center gap-2 text-forest">
                    <Check className="w-4 h-4" strokeWidth={3} />
                    <span className="font-medium">On its way.</span>
                  </div>
                  <p className="text-sm text-ink/80 mt-2">
                    Check your inbox. Reply to that email if you want to chat.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
