import { ImageResponse } from "next/og";

export const alt = "Higher Marketing Plus";
export const contentType = "image/png";
export const size = {
  height: 630,
  width: 1200
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050816 0%, #0b1329 48%, #111c3a 100%)",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          height: "100%",
          justifyContent: "space-between",
          padding: "68px 72px",
          width: "100%"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              color: "#f59e0b",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            Higher Marketing Plus
          </span>
          <span style={{ color: "#bfdbfe", fontSize: 24 }}>Strategy-first websites, SEO, Google growth, and AI voice.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 940 }}>
          <span style={{ fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95 }}>
            See your business from a different altitude.
          </span>
          <span style={{ color: "#dbeafe", fontSize: 30, lineHeight: 1.35 }}>
            Websites that convert. Local SEO that ranks. Google systems that grow. AI that answers when you can't.
          </span>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {[
            "Websites That Convert",
            "Rank Where It Matters",
            "24/7 Call Coverage"
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 999,
                display: "flex",
                padding: "18px 24px"
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 600 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
