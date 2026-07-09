"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { stickers } from "@/content/playground";

const positions = [
  { top: "12%", left: "8%", rotate: -14 },
  { top: "18%", left: "62%", rotate: 8 },
  { top: "42%", left: "22%", rotate: -6 },
  { top: "38%", left: "78%", rotate: 12 },
  { top: "62%", left: "10%", rotate: 6 },
  { top: "68%", left: "48%", rotate: -10 },
  { top: "72%", left: "82%", rotate: 4 },
  { top: "14%", left: "38%", rotate: -3 },
];

export function DraggableStickers() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={constraintsRef}
      className="relative aspect-[4/3] w-full rounded-chunk border-[3px] border-primary bg-surface overflow-hidden shadow-chunk"
      style={{
        backgroundImage:
          "radial-gradient(var(--primary) 1.2px, transparent 1.4px)",
        backgroundSize: "22px 22px",
        backgroundPosition: "0 0",
      }}
    >
      <span className="pointer-events-none absolute left-5 top-5 rounded-full border-2 border-primary/60 bg-bg/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
        drag me around ✦
      </span>

      {stickers.map((s, i) => {
        const pos = positions[i % positions.length];
        return (
          <motion.button
            key={s.id}
            type="button"
            aria-label={`Drag ${s.label}`}
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.15}
            dragMomentum={false}
            whileHover={{ scale: 1.1, rotate: pos.rotate + 6 }}
            whileTap={{ scale: 0.92, cursor: "grabbing" }}
            whileDrag={{ scale: 1.12, zIndex: 20 }}
            initial={{ opacity: 0, scale: 0.5, rotate: pos.rotate - 20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: pos.rotate }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 260, damping: 16, delay: i * 0.06 }}
            style={{ top: pos.top, left: pos.left }}
            className="absolute flex items-center gap-2 rounded-full border-[3px] border-primary bg-bg px-3 py-2 font-display text-lg font-semibold shadow-popSm select-none cursor-grab active:cursor-grabbing"
          >
            <span className="text-2xl leading-none">{s.emoji}</span>
            <span className="text-primary text-sm uppercase tracking-widest">{s.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
