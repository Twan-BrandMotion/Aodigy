"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";

export function KineticHero() {
  const { language } = useLanguage();
  const heroContent = content[language].hero;

  const [wordsVisible, setWordsVisible] = useState<boolean[]>([]);
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const words = heroContent.headline.split(' ');
    setWordsVisible(new Array(words.length).fill(false));

    // Start animation after 200ms delay
    setTimeout(() => {
      words.forEach((_, index) => {
        setTimeout(() => {
          setWordsVisible(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, index * 80); // 80ms delay between each word
      });

      // Show quote after all words + 200ms
      setTimeout(() => {
        setQuoteVisible(true);
      }, words.length * 80 + 200);
    }, 200);
  }, [heroContent.headline]);

  const words = heroContent.headline.split(' ');

  return (
    <section className="section animate-in" id="hero" style={{ paddingTop: "0" }}>
      <div className="container">
        <div className="grid-2-col">
          {/* Left: Headline */}
          <div>
            <h1
              className="serif-display"
              style={{
                color: "var(--ink)",
                fontSize: "clamp(64px, 8vw, 120px)",
                lineHeight: "0.95",
                fontWeight: 300,
              }}
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  style={{
                    display: 'inline-block',
                    marginRight: '0.25em',
                    opacity: wordsVisible[index] ? 1 : 0,
                    transform: wordsVisible[index] ? 'translateY(0)' : 'translateY(16px)',
                    transition: wordsVisible[index] ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>

          {/* Right: Pull Quote */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <blockquote
              className="serif-display"
              style={{
                fontSize: "28px",
                lineHeight: "1.5",
                fontStyle: "italic",
                color: "var(--ink)",
                opacity: quoteVisible ? 1 : 0,
                transform: quoteVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: quoteVisible ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {heroContent.quote}
            </blockquote>
            <p
              className="label"
              style={{
                marginTop: "24px",
                color: "var(--ink)",
                opacity: quoteVisible ? 1 : 0,
                transition: quoteVisible ? 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              }}
            >
              {heroContent.attribution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}