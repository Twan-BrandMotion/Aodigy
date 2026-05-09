"use client";

import { useEffect, useState } from "react";

const themes = [
  { name: "parchment", colors: { ink: "#0e0e0e", paper: "#f7f5f0", rule: "#e0ddd8", accent: "#b8955a" } },
  { name: "burgundy", colors: { ink: "#f0e8e6", paper: "#1f0e12", rule: "#3d1a20", accent: "#c4756a" } },
  { name: "sage", colors: { ink: "#1a1f1a", paper: "#f0f2ee", rule: "#dde0da", accent: "#7a9e7e" } },
  { name: "graphite", colors: { ink: "#1a1a1a", paper: "#f4f2ee", rule: "#ddd9d2", accent: "#8c8070" } },
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    // Initialize theme from localStorage on mount
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("aodigy-theme");
      if (savedTheme) {
        // Migrate old theme names
        if (savedTheme === "slate" || savedTheme === "midnight") {
          localStorage.setItem("aodigy-theme", "burgundy");
          return "burgundy";
        } else if (savedTheme === "bordeaux" || savedTheme === "ocean") {
          localStorage.setItem("aodigy-theme", "graphite");
          return "graphite";
        } else if (themes.some(t => t.name === savedTheme)) {
          return savedTheme;
        }
      }
    }
    return "parchment"; // default
  });

  useEffect(() => {
    // Apply theme to document on mount and theme changes
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Handle navigation clicks
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const main = document.querySelector('main');
        if (main) {
          main.classList.add('is-navigating');
          setTimeout(() => {
            main.classList.remove('is-navigating');
          }, 200);
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, [currentTheme]);

  const switchTheme = (themeName: string) => {
    setCurrentTheme(themeName);
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("aodigy-theme", themeName);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "32px",
        bottom: "32px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {themes.map((theme) => {
        const isActive = currentTheme === theme.name;
        const borderColor = `${theme.colors.ink}66`; // 40% opacity

        return (
          <button
            key={theme.name}
            onClick={() => switchTheme(theme.name)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: `1.5px solid ${borderColor}`,
              backgroundColor: theme.colors.paper,
              cursor: "pointer",
              opacity: isActive ? 1 : 0.5,
              transform: isActive ? "scale(1.4)" : "scale(1)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
            }}
            aria-label={`Switch to ${theme.name} theme`}
          />
        );
      })}
    </div>
  );
}