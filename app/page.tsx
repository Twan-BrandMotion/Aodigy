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
} from "@/components";

export default function Home() {
  return (
    <>
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

