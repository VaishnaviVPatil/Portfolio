import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  separator?: string;
  speed?: "normal" | "slow";
};

export function Marquee({
  items,
  className,
  itemClassName,
  separator = "✦",
  speed = "normal",
}: MarqueeProps) {
  const rendered = [...items, ...items];
  return (
    <div className={cn("no-scrollbar overflow-hidden select-none", className)}>
      <div
        className={cn(
          "flex w-max shrink-0",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
        )}
      >
        {rendered.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={cn(
              "flex items-center gap-6 pr-6 whitespace-nowrap font-display font-semibold",
              itemClassName,
            )}
          >
            <span>{item}</span>
            <span className="opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
