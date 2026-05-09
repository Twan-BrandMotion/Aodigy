"use client";

import { RECRUITMENT } from "@/lib/content";

export function Recruitment() {
  return (
    <section id="recruitment" className="section">
      <div className="container">
        <div className="col-center" style={{ maxWidth: "600px" }}>
          <h2
            className="display-md serif-display"
            style={{
              color: "var(--ink)",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            {RECRUITMENT.headline}
          </h2>
          <p
            className="lead"
            style={{
              color: "var(--ink)",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            {RECRUITMENT.body}
          </p>
          <a
            href={`mailto:${RECRUITMENT.email}?subject=${encodeURIComponent(RECRUITMENT.emailSubject)}`}
            className="label"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              border: "1px solid var(--accent)",
              padding: "12px 24px",
              borderRadius: "4px",
              display: "inline-block",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent)";
              e.currentTarget.style.color = "var(--paper)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            {RECRUITMENT.emailLabel}
          </a>
        </div>
      </div>
    </section>
  );
}