import {
  Nav,
  Hero,
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
      <main style={{ paddingTop: "80px" }}>
        <Hero />
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

