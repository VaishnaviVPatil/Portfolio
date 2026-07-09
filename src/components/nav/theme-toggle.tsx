"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useMounted } from "@/lib/hooks";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-11 w-11 rounded-full border-2 border-primary/60 bg-surface",
        "flex items-center justify-center overflow-hidden",
        "transition-transform duration-300 ease-bounce hover:scale-110 active:scale-95",
        "shadow-popSm",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ y: 20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <MoonSvg /> : <SunSvg />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function SunSvg() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <path d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8" />
    </svg>
  );
}

function MoonSvg() {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a.75.75 0 0 0-1.1-.7A9.5 9.5 0 1 0 20.7 15.6a.75.75 0 0 0-.7-1.1Z" />
    </svg>
  );
}
