import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Renders the black-cat favicon at 180×180 for iOS home-screen icons.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fdf6ec",
          borderRadius: 36,
        }}
      >
        <svg viewBox="0 0 64 64" width="130" height="130">
          <path d="M12 22 L20 4 L26 22 Z" fill="#0d0912" />
          <path d="M52 22 L44 4 L38 22 Z" fill="#0d0912" />
          <path d="M17 20 L20 11 L23 20 Z" fill="#f0b6cf" />
          <path d="M47 20 L44 11 L41 20 Z" fill="#f0b6cf" />
          <ellipse cx="32" cy="38" rx="21" ry="19" fill="#0d0912" />
          <ellipse cx="24" cy="35" rx="2.6" ry="4.5" fill="#e8b04b" />
          <ellipse cx="40" cy="35" rx="2.6" ry="4.5" fill="#e8b04b" />
          <path d="M29.5 43 L34.5 43 L32 46.5 Z" fill="#f5b7b1" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
