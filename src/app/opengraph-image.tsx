import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

export const runtime = "edge";

export const alt = `${RESUME_DATA.name} - ${RESUME_DATA.about}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "80px",
            borderRadius: "24px",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(to bottom right, #1e293b, #475569)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            {RESUME_DATA.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#64748b",
              margin: "0 0 30px 0",
              textAlign: "center",
              maxWidth: "900px",
            }}
          >
            {RESUME_DATA.about}
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "900px",
            }}
          >
            {RESUME_DATA.skills.slice(0, 8).map((skill) => (
              <span
                key={skill}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#f1f5f9",
                  borderRadius: "6px",
                  fontSize: "20px",
                  color: "#475569",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
