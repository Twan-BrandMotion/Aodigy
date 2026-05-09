"use client";

import { useEffect, useState } from "react";

export function PageIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsFading(true);
    }, 600);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`page-intro ${isFading ? 'fade-out' : ''}`}
      style={{
        opacity: isFading ? 0 : 1,
      }}
    />
  );
}