"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { CatMark } from "./cat-mark";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-expo",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
            "transition-all duration-300 ease-expo",
          )}
        >
          <a
            href="#top"
            className={cn(
              "group flex items-center gap-2 rounded-full border-2 border-primary/70 bg-surface/90 px-3 py-1.5",
              "backdrop-blur-md shadow-popSm transition-transform hover:-translate-y-[1px] active:translate-y-0",
            )}
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-bg border-2 border-primary/30 shrink-0">
              <CatMark className="h-5 w-5" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-sm font-semibold text-text">{site.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted">{site.role}</span>
            </span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border-2 border-primary/60 bg-surface/80 px-2 py-1.5 backdrop-blur-md shadow-popSm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-full px-3 py-1.5 text-sm font-medium text-text/80 transition-colors hover:bg-primary hover:text-bg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden h-11 w-11 rounded-full border-2 border-primary/60 bg-surface flex items-center justify-center shadow-popSm"
            >
              <motion.svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
                strokeLinecap="round"
                animate={open ? "open" : "closed"}
              >
                <motion.path
                  variants={{
                    closed: { d: "M4 7 L20 7" },
                    open: { d: "M5 5 L19 19" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.path
                  d="M4 12 L20 12"
                  variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  variants={{
                    closed: { d: "M4 17 L20 17" },
                    open: { d: "M5 19 L19 5" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-bg"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="mt-24 flex flex-col items-center gap-6 px-6"
            >
              {site.nav.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl font-semibold text-text hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
