import { site } from "./site";

export const contact = {
  eyebrow: "Contact",
  headline: "Let's build something [[lovely]].",
  subline:
    "Open to full-stack roles. If it involves clean UI systems, real-time data, or shipping things that don't wobble in prod — I'm in.",
  actions: [
    { label: "Email me", href: `mailto:${site.email}`, tint: "primary" as const, emoji: "✉️" },
    { label: "LinkedIn", href: site.socials.linkedin, tint: "accent1" as const, emoji: "🔗" },
    { label: "GitHub", href: site.socials.github, tint: "accent2" as const, emoji: "🐙" },
    { label: "Resume", href: site.resume, tint: "accent3" as const, emoji: "📄" },
  ],
  footer: "⚡ Built with curiosity, clean code, and a lot of coffee.",
} as const;

export type Contact = typeof contact;
