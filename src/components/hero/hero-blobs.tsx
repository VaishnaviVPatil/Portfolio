"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks";
import { HeroBlobsFallback } from "./hero-blobs-fallback";

const HeroBlobsScene = dynamic(
  () => import("./hero-blobs-scene").then((m) => m.HeroBlobsScene),
  { ssr: false, loading: () => <HeroBlobsFallback /> },
);

/**
 * Blob layer. Uses the 3D scene on desktop, CSS gradients on mobile / low
 * power / reduced motion. Lazy-loads three so it never blocks first paint.
 */
export function HeroBlobs() {
  const reduced = useReducedMotion();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    // Desktop-ish devices only. Mobile falls back to CSS for perf + battery.
    const isNarrow = window.matchMedia("(max-width: 768px)").matches;
    if (isNarrow) return;
    // Defer to idle so it doesn't compete with fonts / hero paint.
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const id = idle
      ? idle(() => setEnable3D(true))
      : window.setTimeout(() => setEnable3D(true), 400);
    return () => {
      if (typeof id === "number") window.clearTimeout(id);
    };
  }, [reduced]);

  if (!enable3D) return <HeroBlobsFallback />;
  return <HeroBlobsScene />;
}
