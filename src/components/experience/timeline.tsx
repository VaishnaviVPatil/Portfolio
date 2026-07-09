"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experience, type Role } from "@/content/experience";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RichHeadline } from "@/components/ui/rich-headline";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <Eyebrow>Experience</Eyebrow>
          </Reveal>
          <RichHeadline
            as="h2"
            text="Five+ years shipping [[production]] full-stack systems."
            className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.02]"
          />
        </div>

        <div ref={containerRef} className="relative pl-12 md:pl-0">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-3 md:left-1/2 w-[3px] -translate-x-[1.5px] rounded-full bg-primary/15"
          />
          {/* Drawing line — scaled by scroll progress */}
          <motion.div
            aria-hidden
            style={{ scaleY, originY: 0 }}
            className="absolute top-2 bottom-2 left-3 md:left-1/2 w-[3px] -translate-x-[1.5px] rounded-full bg-primary"
          />

          <ol className="relative flex flex-col gap-14 md:gap-20">
            {experience.map((role, i) => (
              <TimelineRow key={role.company + role.start} role={role} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ role, index }: { role: Role; index: number }) {
  const isRight = index % 2 === 0;
  return (
    <li className="relative md:grid md:grid-cols-2 md:gap-14">
      {/* Dot */}
      <motion.span
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.1 }}
        className="absolute left-3 md:left-1/2 top-6 h-6 w-6 -translate-x-1/2 rounded-full border-[3px] border-primary bg-bg shadow-popSm z-10"
      >
        <span className="absolute inset-[3px] rounded-full bg-accent1" />
      </motion.span>

      {/* Meta rail (dates on the empty side, hidden on mobile) */}
      <div
        className={cn(
          "hidden md:flex md:items-start md:pt-4",
          isRight ? "md:order-1 md:justify-end md:pr-14 md:text-right" : "md:order-2 md:pl-14",
        )}
      >
        <div className={cn("max-w-xs", isRight ? "text-right" : "text-left")}>
          <div className="font-display text-lg font-semibold text-primary">
            {role.start} — {role.end}
          </div>
          <div className="text-sm text-muted">{role.location}</div>
        </div>
      </div>

      {/* Card */}
      <motion.article
        initial={{ opacity: 0, x: isRight ? 40 : -40, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={cn(
          "ml-4 md:ml-0 rounded-chunk border-[3px] border-primary bg-surface p-6 md:p-8 shadow-chunk",
          isRight ? "md:order-2 md:ml-14" : "md:order-1 md:mr-14",
        )}
      >
        {/* Mobile-only date */}
        <div className="md:hidden mb-2 text-xs uppercase tracking-widest text-muted">
          {role.start} — {role.end} · {role.location}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-text">
          {role.title}
        </h3>
        <p className="mt-1 text-primary font-semibold">{role.company}</p>

        <ul className="mt-5 space-y-3 text-[15px] text-text/85">
          {role.outcomes.map((o, i) => (
            <li key={i} className="flex gap-2">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent1" />
              <span>{o}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {role.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border-2 border-primary/40 bg-bg/70 px-3 py-1 text-xs font-medium text-primary"
            >
              {s}
            </li>
          ))}
        </ul>
      </motion.article>
    </li>
  );
}
