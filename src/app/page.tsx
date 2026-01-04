import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Work } from "@/components/sections/Work";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <WorkProcess />
        <Work />
        <TechStack />
        <Testimonials />
      </main>
      <ContactFooter />
    </>
  );
}
