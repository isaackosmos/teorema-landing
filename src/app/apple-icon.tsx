import { ImageResponse } from "next/og";

// Apple touch icon (iOS home-screen bookmark). Same mark as icon.tsx,
// just larger — Apple ignores rounded corners on the source image and
// applies its own mask, so this is intentionally a plain square.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
          background: "#080F1F",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 110,
            fontWeight: 800,
            fontFamily: "sans-serif",
            color: "#8FE000",
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size },
  );
}
