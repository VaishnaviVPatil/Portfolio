export const about = {
  eyebrow: "About",
  headline: "I build products that feel [[premium]] and run reliably in production.",
  paragraphs: [
    "Software engineer with 5+ years building and maintaining complex, production-grade systems using Node.js, Python, TypeScript, React, and AWS. Currently Lead AI Engineer at 24x7 ESI — leading client-facing solution delivery, ETL pipelines, and cloud infrastructure for enterprise insurance.",
    "I care about the boring stuff that keeps a product alive: clean architecture, resilient UX states, real-time integrations that don't fall over, and CI/CD that catches regressions before users do. MS CS, Illinois Institute of Technology.",
  ],
  stickers: [
    { emoji: "☕", label: "Runs on chai", rotate: -6, tint: "accent1" as const },
    { emoji: "🍳", label: "Cooks eggs 20 ways", rotate: 4, tint: "accent2" as const },
    { emoji: "🌱", label: "Learning Vue + AWS", rotate: -3, tint: "accent3" as const },
    { emoji: "🎨", label: "Loves clean UX", rotate: 5, tint: "accent1" as const },
    { emoji: "🐈‍⬛", label: "Cat cursor believer", rotate: -4, tint: "accent2" as const },
    { emoji: "🚀", label: "50+ prod releases", rotate: 3, tint: "accent3" as const },
  ],
} as const;

export type About = typeof about;
