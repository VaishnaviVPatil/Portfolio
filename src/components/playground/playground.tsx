"use client";

import { Eyebrow } from "@/components/ui/eyebrow";
import { RichHeadline } from "@/components/ui/rich-headline";
import { Reveal } from "@/components/ui/reveal";
import { DraggableStickers } from "./draggable-stickers";
import { EggWheel } from "./egg-wheel";
import { Konami } from "./konami";

export function Playground() {
  return (
    <section id="playground" className="relative py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Eyebrow>Playground</Eyebrow>
          </Reveal>
          <RichHeadline
            as="h2"
            text="Mostly for [[fun]]."
            className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.02]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-muted text-pretty">
              Drag the stickers. Spin the egg. Hit ↑ ↑ ↓ ↓ ← → ← → B A anywhere on the page.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <DraggableStickers />
          </Reveal>
          <Reveal delay={0.1}>
            <EggWheel />
          </Reveal>
        </div>
      </div>

      <Konami />
    </section>
  );
}
