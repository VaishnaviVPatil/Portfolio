import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vaishnavi Patil — Full-Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamic OG image (Chai Latte theme). Rendered by Next.js at build/request
 * time via `next/og`'s ImageResponse. Design mirrors the hero: chunky rounded
 * cream background, big display name, serif italic accents, cat mark.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          background: "#fdf6ec",
          color: "#3a2a22",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner blob accents */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -160,
            width: 560,
            height: 560,
            borderRadius: 280,
            background:
              "radial-gradient(closest-side, #ef7fa3, transparent 70%)",
            opacity: 0.75,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -140,
            width: 500,
            height: 500,
            borderRadius: 250,
            background:
              "radial-gradient(closest-side, #f2b544, transparent 70%)",
            opacity: 0.6,
          }}
        />

        {/* Eyebrow pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 22px",
            borderRadius: 999,
            border: "3px solid #6b4a3b",
            background: "#f9e7d2",
            color: "#6b4a3b",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              background: "#f5b7b1",
            }}
          />
          Full-Stack Engineer
        </div>

        {/* Greeting */}
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 44,
            fontStyle: "italic",
            color: "#6b4a3b",
            opacity: 0.8,
          }}
        >
          Hi, I&rsquo;m
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: 8,
            fontSize: 176,
            fontWeight: 800,
            color: "#6b4a3b",
            lineHeight: 0.95,
            letterSpacing: "-0.02em",
          }}
        >
          Vaishnavi Patil
          <div style={{ display: "flex", fontSize: 96 }}>✨</div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            maxWidth: 980,
            color: "#3a2a22",
            fontWeight: 500,
            lineHeight: 1.2,
          }}
        >
          Building calm, scalable, playful products.
        </div>

        {/* Footer row */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#8b6f5f",
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Cat mark */}
            <svg viewBox="0 0 64 64" width="56" height="56">
              <path d="M12 22 L20 4 L26 22 Z" fill="#0d0912" />
              <path d="M52 22 L44 4 L38 22 Z" fill="#0d0912" />
              <path d="M17 20 L20 11 L23 20 Z" fill="#f0b6cf" />
              <path d="M47 20 L44 11 L41 20 Z" fill="#f0b6cf" />
              <ellipse cx="32" cy="38" rx="21" ry="19" fill="#0d0912" />
              <ellipse cx="24" cy="35" rx="2.6" ry="4.5" fill="#e8b04b" />
              <ellipse cx="40" cy="35" rx="2.6" ry="4.5" fill="#e8b04b" />
              <path d="M29.5 43 L34.5 43 L32 46.5 Z" fill="#f5b7b1" />
            </svg>
            <div style={{ display: "flex" }}>Node · TypeScript · React · AWS</div>
          </div>
          <div style={{ display: "flex" }}>vaishnavipatil.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
