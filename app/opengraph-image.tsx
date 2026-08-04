import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Digital Vision – Webseiten, SEO und Verwaltungssysteme";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#020611",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(66,169,255,0.35) 0%, rgba(2,6,17,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,107,255,0.28) 0%, rgba(2,6,17,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", gap: 14, marginBottom: 36 }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 6,
              background: "linear-gradient(135deg, #46e6ff, #8d5cff)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "linear-gradient(135deg, #46e6ff, #8d5cff)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 7,
              background: "linear-gradient(135deg, #46e6ff, #8d5cff)",
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#f5fbff",
            letterSpacing: -2,
          }}
        >
          Digital Vision
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 24,
            color: "#9be4ff",
            fontWeight: 500,
          }}
        >
          Webseiten · SEO · Verwaltungssysteme
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 40,
            color: "rgba(245,251,255,0.6)",
          }}
        >
          digitalvision.site
        </div>
      </div>
    ),
    { ...size },
  );
}
