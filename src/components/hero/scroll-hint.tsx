"use client";

import { motion } from "framer-motion";

export function ScrollHint() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll down"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="hidden md:flex flex-col items-center gap-2 text-muted"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">scroll</span>
      <motion.span
        aria-hidden
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="grid h-10 w-6 place-items-start rounded-full border-2 border-primary/60 pt-1.5"
      >
        <span className="block h-2 w-1 rounded-full bg-primary" />
      </motion.span>
    </motion.a>
  );
}
