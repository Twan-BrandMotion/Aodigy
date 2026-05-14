"use client";

import { BRAND_NAME, NAV_LINKS, NAV_LINKS_DE } from "@/lib/content";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/lib/language-context";

interface NavProps {
  language?: 'en' | 'de';
}

export function Nav({ language: propLanguage }: NavProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;
  const links = language === 'en' ? NAV_LINKS : NAV_LINKS_DE;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--rule)" }}>
      <div className="container" style={{ padding: "var(--gutter-desktop) var(--gutter-desktop)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "var(--gutter-desktop)" }}>
          {/* Logo */}
          <div className="serif-display" style={{ fontSize: "var(--display-sm)" }}>
            {BRAND_NAME}
          </div>

          {/* Nav Links + Language Toggle */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "var(--gutter-desktop)" }}>
            {/* Nav Links */}
            <div style={{ display: "flex", gap: "var(--gutter-desktop)" }}>
              {links.map((link) => (
                <a key={link.href} href={link.href} className="label nav-link" style={{ color: "var(--ink)" }}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Separator */}
            <div style={{ width: "1px", height: "12px", backgroundColor: "var(--rule)" }}></div>

            {/* Language Toggle */}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
