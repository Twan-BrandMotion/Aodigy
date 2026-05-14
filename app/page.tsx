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

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        <KineticHero />
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

