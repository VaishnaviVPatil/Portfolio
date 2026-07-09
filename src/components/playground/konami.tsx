"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { konamiSequence, konamiMessage } from "@/content/playground";
import { useReducedMotion } from "@/lib/hooks";

const NORMALIZE: Record<string, string> = {
  arrowup: "ArrowUp",
  arrowdown: "ArrowDown",
  arrowleft: "ArrowLeft",
  arrowright: "ArrowRight",
};

function normalize(key: string) {
  const lower = key.toLowerCase();
  return NORMALIZE[lower] ?? lower;
}

export function Konami() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);

  const fire = useCallback(() => {
    setVisible(true);
    if (reduced) return;
    // Two rapid bursts from bottom corners.
    const shared = { spread: 70, ticks: 200, gravity: 0.9, scalar: 1.1 };
    confetti({
      ...shared,
      particleCount: 90,
      angle: 60,
      origin: { x: 0, y: 0.9 },
      colors: ["#F5B7B1", "#FFCBA4", "#E8B04B", "#6B4A3B", "#F0B6CF", "#BFA8E8"],
    });
    confetti({
      ...shared,
      particleCount: 90,
      angle: 120,
      origin: { x: 1, y: 0.9 },
      colors: ["#F5B7B1", "#FFCBA4", "#E8B04B", "#6B4A3B", "#F0B6CF", "#BFA8E8"],
    });
    window.setTimeout(() => {
      confetti({
        ...shared,
        particleCount: 60,
        angle: 90,
        origin: { x: 0.5, y: 0.35 },
        startVelocity: 40,
      });
    }, 250);
  }, [reduced]);

  useEffect(() => {
    let progress = 0;
    const onKey = (e: KeyboardEvent) => {
      // Ignore typing in inputs.
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) {
        return;
      }
      const pressed = normalize(e.key);
      const expected = konamiSequence[progress];
      if (pressed.toLowerCase() === expected.toLowerCase()) {
        progress += 1;
        if (progress === konamiSequence.length) {
          fire();
          progress = 0;
        }
      } else {
        // Restart, but allow the mispressed key to also count as a valid first step.
        progress = pressed.toLowerCase() === konamiSequence[0].toLowerCase() ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fire]);

  useEffect(() => {
    if (!visible) return;
    const id = window.setTimeout(() => setVisible(false), 5500);
    return () => window.clearTimeout(id);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          role="status"
          className="fixed bottom-6 left-1/2 z-[9997] -translate-x-1/2 rounded-full border-[3px] border-primary bg-bg px-5 py-3 shadow-pop"
        >
          <p className="font-display text-sm md:text-base font-semibold text-primary text-center max-w-[92vw]">
            {konamiMessage}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
