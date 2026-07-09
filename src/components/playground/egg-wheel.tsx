"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { eggWays } from "@/content/playground";

const SPIN_DURATION = 2.4;

export function EggWheel() {
  const [current, setCurrent] = useState<string>(eggWays[0]);
  const [spinning, setSpinning] = useState(false);
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const rotationRef = useRef(0);
  const cycleTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (cycleTimer.current) window.clearInterval(cycleTimer.current);
    };
  }, []);

  const spin = useCallback(async () => {
    if (spinning) return;
    setSpinning(true);

    // Rapidly cycle the visible egg while spinning for slot-machine vibes.
    let idx = 0;
    cycleTimer.current = window.setInterval(() => {
      idx = (idx + 1) % eggWays.length;
      setCurrent(eggWays[idx]);
    }, 90);

    const winner = eggWays[Math.floor(Math.random() * eggWays.length)];
    const extra = 720 + Math.floor(Math.random() * 360);
    rotationRef.current += extra;

    await controls.start({
      rotate: rotationRef.current,
      transition: { duration: SPIN_DURATION, ease: [0.16, 1, 0.3, 1] },
    });

    if (cycleTimer.current) {
      window.clearInterval(cycleTimer.current);
      cycleTimer.current = null;
    }
    setCurrent(winner);
    setCount((c) => c + 1);
    setSpinning(false);
  }, [controls, spinning]);

  return (
    <div className="relative flex flex-col items-center justify-between rounded-chunk border-[3px] border-primary bg-surface p-6 md:p-8 shadow-chunk">
      <div className="w-full flex items-center justify-between">
        <span className="rounded-full border-2 border-primary/60 bg-bg/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
          egg wheel
        </span>
        <span className="text-xs text-muted uppercase tracking-widest">
          spun {count}×
        </span>
      </div>

      {/* Wheel */}
      <div className="relative my-8 grid place-items-center">
        {/* pointer */}
        <div
          aria-hidden
          className="absolute -top-2 z-20 h-0 w-0 border-l-[10px] border-r-[10px] border-t-[16px] border-l-transparent border-r-transparent border-t-primary"
        />
        <motion.div
          animate={controls}
          className="relative grid h-56 w-56 sm:h-64 sm:w-64 place-items-center rounded-full border-[3px] border-primary shadow-chunk"
          style={{
            background:
              "conic-gradient(from 0deg, var(--accent-1) 0deg, var(--accent-2) 90deg, var(--accent-3) 180deg, var(--accent-1) 270deg, var(--accent-2) 360deg)",
          }}
        >
          {/* Inner disc */}
          <div className="absolute inset-3 rounded-full bg-bg border-2 border-primary/40" />
          {/* Spokes */}
          {[0, 45, 90, 135].map((deg) => (
            <span
              key={deg}
              aria-hidden
              className="absolute inset-3 rounded-full border border-primary/20"
              style={{ transform: `rotate(${deg}deg)`, borderStyle: "dashed" }}
            />
          ))}
        </motion.div>

        {/* Center label (counter-rotates so it stays readable) */}
        <div className="pointer-events-none absolute grid h-40 w-40 place-items-center rounded-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="px-2 text-center font-display text-base sm:text-lg font-semibold leading-tight text-primary"
            >
              {current}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        onClick={spin}
        disabled={spinning}
        className="rounded-full border-[3px] border-primary bg-primary text-bg px-8 py-3 font-display text-lg font-semibold shadow-pop transition-all hover:-translate-y-0.5 hover:rotate-[-1deg] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {spinning ? "cracking…" : count > 0 ? "spin again 🍳" : "cook me an egg 🍳"}
      </button>
    </div>
  );
}
