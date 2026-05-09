"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Optional: stop observing after it's visible
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all sections with data-reveal attribute
    const sections = document.querySelectorAll("[data-reveal]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
}
