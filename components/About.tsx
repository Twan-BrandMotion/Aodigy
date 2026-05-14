import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function About() {
  const { language } = useLanguage();
  const aboutContent = content[language].about;

  return (
    <section className="section animate-in" id="about" data-reveal>
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
            {aboutContent.heading}
          </div>

          {/* Body Text */}
          <div className="body" style={{ color: "var(--ink)", whiteSpace: "pre-line" }}>
            {aboutContent.bio}
          </div>
        </div>
      </div>
    </section>
  );
}
