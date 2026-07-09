"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/hero";
import { HeroBlobs } from "./hero-blobs";
import { HeroPortrait } from "./hero-portrait";
import { HeroHeadline } from "./hero-headline";
import { ScrollHint } from "./scroll-hint";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden pb-16 pt-28 md:pt-32">
      <HeroBlobs />
      <div className="grain absolute inset-0 pointer-events-none" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 relative z-10">
          <HeroHeadline />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg text-muted text-pretty"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target={cta.href.startsWith("http") ? "_blank" : undefined}
                rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-display text-base font-semibold transition-all duration-200",
                  "hover:-translate-y-0.5 hover:rotate-[-1deg] active:translate-y-0 active:rotate-0",
                  cta.variant === "primary"
                    ? "bg-primary text-bg shadow-pop hover:shadow-[8px_8px_0_0_var(--accent-1)]"
                    : "bg-surface text-primary shadow-popSm hover:bg-accent2/40",
                )}
              >
                {cta.label}
                <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </motion.div>

          <motion.dl
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } },
            }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {hero.metrics.map((m) => (
              <motion.div
                key={m.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="rounded-chunk border-2 border-primary/70 bg-surface/80 px-4 py-3 backdrop-blur-sm shadow-popSm"
              >
                <dt className="font-display text-2xl font-semibold text-primary">{m.value}</dt>
                <dd className="text-xs text-muted uppercase tracking-widest">{m.label}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <div className="flex-1 relative z-10 flex flex-col items-center gap-6">
          <HeroPortrait />
          <ScrollHint />
        </div>
      </div>

      {/* Marquee band */}
      <div className="relative z-10 mt-16">
        <div className="border-y-[3px] border-primary bg-primary text-bg py-4">
          <Marquee
            items={hero.marquee}
            itemClassName="text-2xl md:text-3xl"
          />
        </div>
      </div>
    </section>
  );
}
