"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RichHeadline } from "@/components/ui/rich-headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

const tintBg = {
  accent1: "bg-accent1",
  accent2: "bg-accent2",
  accent3: "bg-accent3",
} as const;

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
            </Reveal>

            <RichHeadline
              as="h2"
              text={about.headline}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.02]"
            />

            <div className="mt-8 space-y-5 text-lg text-muted text-pretty max-w-xl">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-4 sm:gap-5">
            {about.stickers.map((s) => (
              <RevealItem key={s.label}>
                <StickerCard emoji={s.emoji} label={s.label} rotate={s.rotate} tint={s.tint} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

function StickerCard({
  emoji,
  label,
  rotate,
  tint,
}: {
  emoji: string;
  label: string;
  rotate: number;
  tint: "accent1" | "accent2" | "accent3";
}) {
  return (
    <motion.div
      whileHover={{ rotate: rotate + (rotate > 0 ? -3 : 3), y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.97, rotate: rotate * 0.5 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "relative aspect-square rounded-chunk border-[3px] border-primary p-5 shadow-popSm flex flex-col justify-between",
        tintBg[tint],
      )}
    >
      <span className="text-4xl sm:text-5xl">{emoji}</span>
      <span className="font-display text-base sm:text-lg font-semibold text-primary leading-tight">
        {label}
      </span>
    </motion.div>
  );
}
