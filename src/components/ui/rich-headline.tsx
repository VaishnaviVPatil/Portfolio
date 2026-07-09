import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLElement> & {
  text: string;
  as?: ElementType;
  italicClassName?: string;
};

/**
 * Renders a headline string, replacing [[bracketed]] words with serif italic.
 * Used across hero, about, and contact for consistent accent styling.
 */
export function RichHeadline({
  text,
  as: Tag = "h2",
  className,
  italicClassName,
  ...rest
}: Props) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g).filter(Boolean);
  return (
    <Tag className={cn("font-display font-semibold text-balance", className)} {...rest}>
      {parts.map((chunk, i) => {
        const italic = chunk.startsWith("[[") && chunk.endsWith("]]");
        const raw = italic ? chunk.slice(2, -2) : chunk;
        return italic ? (
          <span key={i} className={cn("font-serif-italic text-primary", italicClassName)}>
            {raw}
          </span>
        ) : (
          <span key={i}>{raw}</span>
        );
      })}
    </Tag>
  );
}
