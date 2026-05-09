import { HERO } from "@/lib/content";

export function Hero() {
  return (
    <section className="section animate-in" id="hero">
      <div className="container">
        <div className="grid-2-col">
          {/* Left: Headline */}
          <div>
            <h1 className="display-lg serif-display" style={{ color: "var(--ink)" }}>
              {HERO.headline}
            </h1>
          </div>

          {/* Right: Pull Quote */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <blockquote
              className="serif-display"
              style={{
                fontSize: "28px",
                lineHeight: "1.5",
                fontStyle: "italic",
                color: "var(--ink)",
              }}
            >
              &ldquo;{HERO.pullQuote}&rdquo;
            </blockquote>
            <p className="label" style={{ marginTop: "24px", color: "var(--ink)" }}>
              {HERO.pullQuoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
