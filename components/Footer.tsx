import { FOOTER } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="section"
      style={{
        borderTop: "1px solid var(--rule)",
        borderBottom: "none",
        paddingTop: "var(--vertical-padding-desktop)",
      }}
    >
      <div className="container">
        <div
          style={{
            gridColumn: "1 / -1",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            gap: "var(--gutter-desktop)",
          }}
        >
          {/* Logo Left */}
          <div className="serif-display" style={{ fontSize: "18px", color: "var(--ink)" }}>
            {FOOTER.brand}
          </div>

          {/* Legal Links Center */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {FOOTER.links.map((link) => (
              <a key={link.href} href={link.href} className="label" style={{ color: "var(--ink)" }}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Right */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px" }}>
            {FOOTER.socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="label" style={{ color: "var(--ink)" }} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
