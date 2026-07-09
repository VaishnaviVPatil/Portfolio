"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { hero } from "@/content/hero";

/**
 * 4:5 photo card with mouse-parallax tilt.
 *
 * Portrait: /public/hero.png — same image is used across both themes.
 * If the file is missing the gradient placeholder shows through automatically
 * (via `onError`) so the page never breaks.
 */
const PORTRAIT_SRC = "/hero.png";

export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 250, damping: 22 });
  const ry = useSpring(useMotionValue(0), { stiffness: 250, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;

  const [failed, setFailed] = useState(false);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 14);
    rx.set(-py * 14);
  };
  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className="relative w-full max-w-[22rem] mx-auto lg:ml-auto"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        style={{ transform }}
        className="relative aspect-[4/5] w-full rounded-chunk border-[3px] border-primary shadow-chunk overflow-hidden bg-surface"
      >
        {/* Gradient placeholder — always present so the card never looks empty */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 20% 15%, var(--accent-2) 0%, transparent 55%), radial-gradient(100% 80% at 90% 90%, var(--accent-1) 0%, transparent 60%), linear-gradient(160deg, var(--accent-3) 0%, var(--surface) 70%)",
          }}
        />

        {/* Real photo — sits on top of the gradient */}
        {!failed && (
          <Image
            src={PORTRAIT_SRC}
            alt={hero.portraitAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 22rem"
            className="object-cover"
            priority
            onError={() => setFailed(true)}
          />
        )}

        <span
          aria-hidden
          className="absolute bottom-4 left-4 rounded-full bg-bg/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md"
        >
          {hero.portraitAlt}
        </span>
        <span
          aria-hidden
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-primary text-bg font-display text-lg"
        >
          ✦
        </span>
      </motion.div>

      {/* Chunky sticker badges around portrait */}
      <motion.span
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 14 }}
        className="absolute -left-6 top-10 rotate-[-8deg] rounded-full border-2 border-primary bg-bg px-4 py-2 font-display text-sm font-semibold text-primary shadow-popSm"
      >
        ☕ chai-powered
      </motion.span>
      <motion.span
        initial={{ opacity: 0, scale: 0.6, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 14 }}
        className="absolute -right-4 -bottom-3 rotate-[6deg] rounded-full border-2 border-primary bg-accent1 px-4 py-2 font-display text-sm font-semibold text-primary shadow-popSm"
      >
        open to roles ✿
      </motion.span>
    </motion.div>
  );
}
