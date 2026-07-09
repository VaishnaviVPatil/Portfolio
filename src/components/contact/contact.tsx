"use client";

import { motion } from "framer-motion";
import { contact } from "@/content/contact";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui/eyebrow";
import { RichHeadline } from "@/components/ui/rich-headline";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/cn";

const tintClass = {
  primary: "bg-primary text-bg",
  accent1: "bg-accent1 text-primary",
  accent2: "bg-accent2 text-primary",
  accent3: "bg-accent3 text-primary",
} as const;

const closingMarquee = [
  "Let's build something lovely",
  "✿",
  "Full-stack roles",
  "✦",
  "Say hi",
  "✿",
  "Chai on me ☕",
  "✦",
];

export function Contact() {
  return (
    <section id="contact" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      {/* Top marquee band */}
      <div className="border-y-[3px] border-primary bg-primary text-bg py-4 mb-20">
        <Marquee items={closingMarquee} itemClassName="text-2xl md:text-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
        </Reveal>
        <RichHeadline
          as="h2"
          text={contact.headline}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]"
        />
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted text-pretty">
            {contact.subline}
          </p>
        </Reveal>

        <RevealGroup className="mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {contact.actions.map((a) => (
            <RevealItem key={a.href}>
              <PillLink action={a} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.3}>
          <p className="mt-16 text-sm text-muted">
            or say hi directly at{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-primary font-semibold hover:underline decoration-2 underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </Reveal>
      </div>

      <SiteFooter />
    </section>
  );
}

function PillLink({
  action,
}: {
  action: { label: string; href: string; tint: keyof typeof tintClass; emoji: string };
}) {
  const external = action.href.startsWith("http");
  return (
    <motion.a
      href={action.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ rotate: [0, -2.5, 2.5, -2, 2, 0], y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ rotate: { duration: 0.55 }, y: { type: "spring", stiffness: 260, damping: 18 } }}
      className={cn(
        "inline-flex items-center gap-3 rounded-full border-[3px] border-primary px-7 py-4 md:px-8 md:py-5 font-display text-lg md:text-xl font-semibold shadow-pop",
        tintClass[action.tint],
      )}
    >
      <span className="text-2xl leading-none">{action.emoji}</span>
      <span>{action.label}</span>
    </motion.a>
  );
}

function SiteFooter() {
  return (
    <footer className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t-2 border-dashed border-primary/30 pt-8 md:flex-row">
        <p className="text-sm text-muted font-medium">{contact.footer}</p>
        <p className="text-xs text-muted uppercase tracking-widest">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
