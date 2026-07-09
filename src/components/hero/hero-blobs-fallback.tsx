/**
 * CSS-only blob backdrop. Rendered while the 3D scene lazy-loads and on
 * reduced-motion / low-power devices.
 *
 * Blob colors are set as CSS vars in globals.css (`--blob-1/2/3`) so light
 * and dark themes can pick distinct hues rather than blending pastels.
 */
export function HeroBlobsFallback() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 h-[42rem] w-[42rem] rounded-full opacity-80 blur-2xl animate-drift mix-blend-multiply dark:mix-blend-screen"
        style={{ background: "radial-gradient(closest-side, var(--blob-1), transparent 68%)" }}
      />
      <div
        className="absolute top-8 right-[-8rem] h-[36rem] w-[36rem] rounded-full opacity-80 blur-2xl animate-drift mix-blend-multiply dark:mix-blend-screen"
        style={{
          background: "radial-gradient(closest-side, var(--blob-2), transparent 68%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-[-6rem] left-[35%] h-[34rem] w-[34rem] rounded-full opacity-75 blur-2xl animate-drift mix-blend-multiply dark:mix-blend-screen"
        style={{
          background: "radial-gradient(closest-side, var(--blob-3), transparent 68%)",
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
