import { cn } from "@/lib/cn";

/** Small pill-style section label with a pulsing dot. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border-2 border-primary/60 bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary shadow-popSm",
        className,
      )}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent1" />
      {children}
    </span>
  );
}
