import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function Partnership() {
  const { language } = useLanguage();
  const partnershipContent = content[language].partnership;

  return (
    <section className="section animate-in" id="partnership" data-reveal>
      <div className="container">
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {/* "Exclusive Partner" label */}
          <p className="label" style={{ color: "var(--accent)", marginBottom: "24px" }}>
            {partnershipContent.label}
          </p>

          {/* Partner Name */}
          <h2
            className="display-md serif-display"
            style={{ color: "var(--ink)", marginBottom: "48px" }}
          >
            {partnershipContent.heading}
          </h2>

          {/* Testimonial */}
          <blockquote
            className="lead serif-display"
            style={{
              color: "var(--ink)",
              marginBottom: "24px",
            }}
          >
            {partnershipContent.quote}
          </blockquote>

          {/* Author */}
          <div>
            <p
              className="label attribution"
              style={{
                color: "var(--ink)",
                opacity: 1,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase"
              }}
            >
              {partnershipContent.attribution}
            </p>
            <p className="label" style={{ color: "var(--rule)", marginTop: "8px" }}>
              {partnershipContent.company}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
