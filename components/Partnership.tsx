import { PARTNERSHIP } from "@/lib/content";

export function Partnership() {
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
            {PARTNERSHIP.intro}
          </p>

          {/* Partner Name */}
          <h2
            className="display-md serif-display"
            style={{ color: "var(--ink)", marginBottom: "48px" }}
          >
            {PARTNERSHIP.partner}
          </h2>

          {/* Testimonial */}
          <blockquote
            className="lead serif-display"
            style={{
              color: "var(--ink)",
              marginBottom: "24px",
            }}
          >
            &ldquo;{PARTNERSHIP.testimonial}&rdquo;
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
              {PARTNERSHIP.testimonialAuthor}
            </p>
            <p className="label" style={{ color: "var(--rule)", marginTop: "8px" }}>
              {PARTNERSHIP.testimonialRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
