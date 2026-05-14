"use client";

import { CTA } from "@/lib/content";

export function CallToAction() {
  return (
    <section className="section animate-in" id="contact" data-reveal>
      <div className="container">
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Headline */}
          <h2 className="display-lg serif-display" style={{ color: "var(--ink)", marginBottom: "32px" }}>
            {CTA.headline}
          </h2>

          {/* Subheadline */}
          <p className="lead" style={{ color: "var(--ink)", marginBottom: "48px" }}>
            {CTA.subheadline}
          </p>

          {/* Email Link */}
          <a
            href={`mailto:${CTA.email}`}
            className="serif-display-bold"
            style={{
              fontSize: "28px",
              color: "var(--ink)",
              opacity: 1,
              textDecoration: "underline",
              textDecorationColor: "var(--rule)",
              textUnderlineOffset: "6px",
              transition: "color 0.2s ease, text-decoration-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "var(--accent)";
              target.style.textDecorationColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLAnchorElement;
              target.style.color = "var(--ink)";
              target.style.textDecorationColor = "var(--rule)";
            }}
          >
            {CTA.email}
          </a>
        </div>
      </div>
    </section>
  );
}
