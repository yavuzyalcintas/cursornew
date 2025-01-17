import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") || "og";

    const width = type === "twitter" ? 1200 : 1200;
    const height = type === "twitter" ? 600 : 630;

    console.log("Generating image response...");
    const imageResponse = new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to bottom right, #000000, #111111)",
            fontFamily: "inter",
          }}
        >
          {/* Background Grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #222 2%, transparent 0%)",
              backgroundSize: "50px 50px",
              opacity: 0.3,
            }}
          />

          {/* Gradient Orb */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              background:
                "radial-gradient(circle at center, rgba(130, 119, 89, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              borderRadius: "50%",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              zIndex: 10,
            }}
          >
            {/* Logo/Icon */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 100,
                fontWeight: 800,
                marginBottom: "1rem",
                filter: "drop-shadow(0 0 30px rgba(130, 119, 89, 0.3))",
                letterSpacing: "-0.05em",
              }}
            >
              <span style={{ color: "white" }}>cursor</span>
              <span style={{ color: "hsl(82.7, 78%, 55.5%)" }}>.new</span>
            </div>

            <div
              style={{
                fontSize: 60,
                textAlign: "center",
                marginBottom: "1rem",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.025em",
              }}
            >
              Intelligent Project Scaffolding
            </div>

            {/* Feature Pills */}
            <div style={{ display: "flex", gap: "12px", marginTop: "1rem" }}>
              {["AI-Powered", "Modern Stack", "Best Practices"].map(
                (text, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "8px 20px",
                      borderRadius: "20px",
                      fontSize: 24,
                      color: "hsl(82.7, 78%, 55.5%)",
                      border: "2px solid hsl(82.7, 78%, 55.5%)",
                      background: "rgba(130, 119, 89, 0.1)",
                      fontWeight: 500,
                    }}
                  >
                    {text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      ),
      {
        width,
        height,
      }
    );

    console.log("Image generated successfully");
    return imageResponse;
  } catch (error: unknown) {
    console.error("Error generating image:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      console.error("Error stack:", error.stack);
    }
    return new Response(
      JSON.stringify({
        error: "Failed to generate the image",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
