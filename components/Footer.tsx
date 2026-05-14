import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function Footer() {
  const { language } = useLanguage();
  const footerContent = content[language].footer;

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
            Aodigy
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
            <a href="#" className="label" style={{ color: "var(--ink)" }}>
              {footerContent.imprint}
            </a>
            <a href="#" className="label" style={{ color: "var(--ink)" }}>
              {footerContent.privacy}
            </a>
          </div>

          {/* Social Right */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "24px" }}>
            <a href="https://linkedin.com" className="label" style={{ color: "var(--ink)" }} target="_blank" rel="noopener noreferrer">
              {footerContent.linkedin}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
