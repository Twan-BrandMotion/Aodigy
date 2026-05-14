"use client";

import {
  Nav,
  KineticHero,
  About,
  Services,
  Partnership,
  CallToAction,
  Recruitment,
  Footer,
  ThemeSwitcher,
  ScrollReveal,
} from "@/components";
import { useLanguage } from "@/lib/language-context";
import { HERO, ABOUT, SERVICES, PARTNERSHIP, CTA, RECRUITMENT } from "@/lib/content";

export default function Home() {
  const { language } = useLanguage();

  return (
    <>
      <ScrollReveal />
      <Nav language={language} />
      <main>
        <KineticHero
          headline={HERO.headline}
          pullQuote={HERO.pullQuote}
          pullQuoteAuthor={HERO.pullQuoteAuthor}
        />
        <About />
        <Services />
        <Partnership />
        <CallToAction />
        <Recruitment />
        <Footer />
      </main>
      <ThemeSwitcher />
    </>
  );
}

