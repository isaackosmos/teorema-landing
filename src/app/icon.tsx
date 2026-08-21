import { ImageResponse } from "next/og";

// Site-wide favicon (browser tab). Generated from the same brand mark
// used in the V3ndor Praxis logo (public/logos/vendor-praxis-logo.jpg):
// the lime-to-blue "V" on the dark ink-deep surface.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
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
