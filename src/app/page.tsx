import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape"

import { AboutSection } from "@/sections/About"
import ContactSection from "@/sections/Contact"
import { Footer } from "@/sections/Footer"
import { OverviewSection } from "@/sections/overview-section"
import { ExperienceSection } from "@/sections/experience-section"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <OverviewSection></OverviewSection>
      <ExperienceSection></ExperienceSection>
      <TapeSection />
    
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
