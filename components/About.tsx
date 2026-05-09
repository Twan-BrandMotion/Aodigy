import { ABOUT } from "@/lib/content";

export function About() {
  return (
    <section className="section animate-in" id="about">
      <div className="container">
        <div
          style={{
            gridColumn: "1 / -1",
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Watermark */}
          <div
            className="watermark serif-display"
            style={{
              fontSize: "120px",
              top: "-20px",
              left: "-40px",
              lineHeight: "1",
            }}
          >
            {ABOUT.watermark}
          </div>

          {/* Body Text */}
          <div className="body" style={{ color: "var(--ink)", whiteSpace: "pre-line" }}>
            {ABOUT.text}
          </div>
        </div>
      </div>
    </section>
  );
}
