"use client";

import { useEffect, useState } from "react";

export function PageIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [textVisible, setTextVisible] = useState(false);
  const [lineVisible, setLineVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Animation sequence using setTimeout
    const timer1 = setTimeout(() => {
      setTextVisible(true);
    }, 100);

    const timer2 = setTimeout(() => {
      setLineVisible(true);
    }, 900);

    const timer3 = setTimeout(() => {
      setIsFading(true);
    }, 1600);

    const timer4 = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    // Main content fade-in
    const timer5 = setTimeout(() => {
      const main = document.querySelector('main');
      if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 600ms ease';
        requestAnimationFrame(() => {
          main.style.opacity = '1';
        });
      }
    }, 1800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`page-intro ${isFading ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--ink)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isFading ? 0 : 1,
        transition: isFading ? 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontStyle: 'italic',
          fontSize: 'clamp(32px, 6vw, 72px)',
          color: 'var(--paper)',
          fontWeight: 300,
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: textVisible ? 'opacity 600ms ease, transform 600ms ease' : 'none',
        }}
      >
        Aodigy
      </div>
      <div
        style={{
          width: '40px',
          height: '1px',
          background: 'var(--accent)',
          margin: '20px auto 0',
          opacity: lineVisible ? 1 : 0,
          transition: lineVisible ? 'opacity 400ms ease' : 'none',
        }}
      />
    </div>
  );
}