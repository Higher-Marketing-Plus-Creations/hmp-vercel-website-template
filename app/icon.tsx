import { ImageResponse } from "next/og";

export const contentType = "image/png";
export const size = {
  height: 64,
  width: 64
};

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #1d4ed8, #f59e0b)",
          borderRadius: 18,
          color: "white",
          display: "flex",
          fontFamily: "Arial",
          fontSize: 28,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        H+
      </div>
    ),
    size
  );
}
