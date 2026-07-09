/**
 * Hero copy. Edit here — the component reads from this file so content
 * changes don't require touching JSX.
 *
 * `headline` supports inline serif-italic accents via [[bracketed]] words.
 * Example: "building [[calm]], scalable, [[playful]] products."
 */
export const hero = {
  greeting: "Hi, I'm",
  name: "Vaishnavi",
  sparkle: "✨",
  headline: "Full-stack engineer building [[calm]], scalable, [[playful]] products.",
  subline:
    "Node.js · TypeScript · Python · React / Next.js · AWS · GraphQL. Currently Lead AI Engineer at 24x7 ESI — enterprise insurance systems, ETL pipelines, and cloud infrastructure.",
  ctas: [
    { label: "See my journey", href: "#experience", variant: "primary" as const },
    { label: "Grab resume", href: "/resume.pdf", variant: "ghost" as const },
  ],
  marquee: [
    "Full-Stack Engineer",
    "React",
    "TypeScript",
    "Node",
    "AWS",
    "GraphQL",
    "Neo4j",
    "Java · Spring Boot",
    "Chai-powered ☕",
  ],
  metrics: [
    { value: "5+", label: "years shipping" },
    { value: "50+", label: "prod releases" },
    { value: "-81%", label: "defect reduction" },
    { value: "+60%", label: "engagement lift" },
  ],
  portraitAlt: "Vaishnavi Patil",
} as const;

export type Hero = typeof hero;
