"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouch, useReducedMotion } from "@/lib/hooks";
import { PawIcon } from "./paw-icon";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, summary, [data-cursor='hover']";
const IMAGE_SELECTOR = "img, [data-cursor='image'], picture, video";

type Kind = "idle" | "hover" | "image";

export function CatPawCursor() {
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouch();
  const disabled = reducedMotion || isTouch;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Spring the paw so it eases behind the cursor smoothly.
  const springX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  const [kind, setKind] = useState<Kind>("idle");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Toggle the `has-paw` class on <html> which hides the native cursor.
  useEffect(() => {
    if (disabled) {
      document.documentElement.classList.remove("has-paw");
      return;
    }
    document.documentElement.classList.add("has-paw");
    return () => document.documentElement.classList.remove("has-paw");
  }, [disabled]);

  useEffect(() => {
    if (disabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as Element | null;
      if (!target) return setKind("idle");

      if (target.closest(INTERACTIVE_SELECTOR)) {
        setKind("hover");
      } else if (target.closest(IMAGE_SELECTOR)) {
        setKind("image");
      } else {
        setKind("idle");
      }
    };

    const onDown = (e: MouseEvent) => {
      setPressed(true);
      const target = e.target as Element | null;
      if (target?.closest(IMAGE_SELECTOR)) {
        const id = Date.now() + Math.random();
        setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
        window.setTimeout(() => {
          setRipples((r) => r.filter((rp) => rp.id !== id));
        }, 500);
      }
    };
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [disabled, visible, x, y]);

  if (disabled) return null;

  const scale = pressed ? 1.15 : kind === "hover" ? 1.4 : kind === "image" ? 1.2 : 1;
  const squishX = pressed ? 1.15 : 1;
  const squishY = pressed ? 0.85 : 1;
  const rotate = kind === "hover" ? -12 : kind === "image" ? 6 : -4;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] top-0 left-0"
        style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
      >
        <motion.div
          animate={{ scale, rotate, scaleX: squishX, scaleY: squishY }}
          transition={{ type: "spring", stiffness: 500, damping: 22 }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <PawIcon
            width={28}
            height={28}
            style={{
              transform: "translate(-50%, -50%)",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Tap ripple layer for image interactions */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            aria-hidden
            className="pointer-events-none fixed z-[9998] rounded-full"
            initial={{ opacity: 0.6, scale: 0.2 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              top: r.y,
              left: r.x,
              width: 40,
              height: 40,
              marginLeft: -20,
              marginTop: -20,
              background: "var(--paw)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
