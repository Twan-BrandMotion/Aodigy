import { BRAND_NAME, NAV_LINKS } from "@/lib/content";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--rule)" }}>
      <div className="container" style={{ padding: "var(--gutter-desktop) var(--gutter-desktop)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "var(--gutter-desktop)" }}>
          {/* Logo */}
          <div className="serif-display" style={{ fontSize: "var(--display-sm)" }}>
            {BRAND_NAME}
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "var(--gutter-desktop)" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="label nav-link" style={{ color: "var(--ink)" }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
