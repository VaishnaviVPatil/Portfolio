"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/hero";

/**
 * Hero headline block. Structured so the name is the hero moment (image-filled,
 * huge, on its own line) and the tagline sits below as a clearly distinct
 * subhead — no more running-together reads.
 *
 * The tagline supports [[bracketed]] words rendered as serif italic accents.
 */
export function HeroHeadline() {
  const parts = hero.headline.split(/(\[\[[^\]]+\]\])/g).filter(Boolean);
  const words = parts.flatMap((chunk, chunkIndex) => {
    const italic = chunk.startsWith("[[") && chunk.endsWith("]]");
    const raw = italic ? chunk.slice(2, -2) : chunk;
    return raw.split(/(\s+)/).map((w, i) => ({
      text: w,
      italic,
      key: `${chunkIndex}-${i}`,
    }));
  });

  return (
    <div className="font-display leading-[0.92] tracking-tight text-text">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 inline-flex items-center gap-3 rounded-full border-2 border-primary/60 bg-surface px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.25em] text-primary shadow-popSm"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-accent1 animate-pulse" />
        Available for full-stack roles
      </motion.p>

      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="font-serif-italic text-primary/80 leading-none"
        style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)" }}
      >
        {hero.greeting}
      </motion.p>

      {/* Name — the hero moment. Image-filled, oversized. Sparkle is locked
          inline via inline-flex so it can never wrap onto the next line. */}
      <h1
        className="font-display font-bold mt-2"
        style={{ fontSize: "clamp(3.75rem, 11vw, 8.5rem)", lineHeight: 0.9 }}
      >
        <span className="inline-flex items-center gap-3 whitespace-nowrap">
          <motion.span
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="name-fill inline-block"
          >
            {hero.name}
          </motion.span>
          <motion.span
            aria-hidden
            initial={{ opacity: 0, rotate: -25, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 0.55, type: "spring", stiffness: 240, damping: 12 }}
            className="inline-block -translate-y-[0.05em]"
            style={{ fontSize: "0.42em" }}
          >
            {hero.sparkle}
          </motion.span>
        </span>
      </h1>

      {/* Tagline — subhead sizing so it clearly separates from the name */}
      <h2
        className="mt-6 font-display font-medium text-text/90 text-balance"
        style={{ fontSize: "clamp(1.35rem, 3.4vw, 2.6rem)", lineHeight: 1.15 }}
      >
        {words.map((w, i) => (
          <motion.span
            key={w.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.45 + i * 0.025,
            }}
            className={w.italic ? "font-serif-italic text-primary" : "inline-block"}
          >
            {w.text}
          </motion.span>
        ))}
      </h2>
    </div>
  );
}
