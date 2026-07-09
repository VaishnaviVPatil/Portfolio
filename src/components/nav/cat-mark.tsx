import type { SVGProps } from "react";

/**
 * Small grey cat used as the nav logo. Colors come from CSS variables so it
 * adapts to the theme: --cat (body) is a warm grey, ears/nose pick up the
 * brand accents so it still feels part of the palette.
 */
export function CatMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
      <path d="M12 22 L20 4 L26 22 Z" fill="var(--cat)" />
      <path d="M52 22 L44 4 L38 22 Z" fill="var(--cat)" />
      <path d="M17 20 L20 11 L23 20 Z" fill="var(--accent-1)" />
      <path d="M47 20 L44 11 L41 20 Z" fill="var(--accent-1)" />
      <ellipse cx="32" cy="38" rx="21" ry="19" fill="var(--cat)" />
      <ellipse cx="24" cy="35" rx="2.6" ry="4.5" fill="var(--accent-3)" />
      <ellipse cx="40" cy="35" rx="2.6" ry="4.5" fill="var(--accent-3)" />
      <path d="M29.5 43 L34.5 43 L32 46.5 Z" fill="var(--accent-1)" />
    </svg>
  );
}
