import type { SVGProps } from "react";

/**
 * Chunky black cat paw. Filled with `--paw`, with an optional outline
 * (`--paw-outline`) that only shows in dark mode via the CSS variable.
 */
export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Outline layer — invisible in light, subtle in dark */}
      <g fill="none" stroke="var(--paw-outline)" strokeWidth={3} strokeLinejoin="round">
        <ellipse cx="32" cy="42" rx="16" ry="13" />
        <ellipse cx="12" cy="26" rx="6.5" ry="8" />
        <ellipse cx="52" cy="26" rx="6.5" ry="8" />
        <ellipse cx="22" cy="14" rx="5.5" ry="7" />
        <ellipse cx="42" cy="14" rx="5.5" ry="7" />
      </g>
      {/* Fill layer */}
      <g fill="var(--paw)">
        <ellipse cx="32" cy="42" rx="16" ry="13" />
        <ellipse cx="12" cy="26" rx="6.5" ry="8" />
        <ellipse cx="52" cy="26" rx="6.5" ry="8" />
        <ellipse cx="22" cy="14" rx="5.5" ry="7" />
        <ellipse cx="42" cy="14" rx="5.5" ry="7" />
      </g>
    </svg>
  );
}
