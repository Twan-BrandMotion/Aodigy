"use client";

import { RECRUITMENT } from "@/lib/content";

export function Recruitment() {
  return (
    <section id="recruitment" className="section" data-reveal>
      <div className="container">
        <div style={{ maxWidth: "600px" }}>
          {/* Section Label */}
          <p
            className="label"
            style={{
              fontSize: "var(--label-size)",
              letterSpacing: "var(--label-letter-spacing)",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "32px",
            }}
          >
            {RECRUITMENT.label}
          </p>

          {/* Headline */}
          <h2
            className="serif-display"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: "1.2",
              color: "var(--ink)",
              marginBottom: "48px",
            }}
          >
            {RECRUITMENT.headline}
          </h2>

          {/* CTA Link */}
          <a
            href={`mailto:${RECRUITMENT.email}?subject=${encodeURIComponent(RECRUITMENT.emailSubject)}`}
            style={{
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--ink)",
              textDecoration: "none",
              transition: "color 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--ink)";
            }}
          >
            {RECRUITMENT.emailLabel}
          </a>
        </div>
      </div>
    </section>
  );
}