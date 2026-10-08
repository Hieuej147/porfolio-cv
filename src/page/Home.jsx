import { Navbar } from "@/components/Narbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StartBackground } from "@/components/StartBackground";
import { HeroSection } from "@/components/Herosection";
import { AboutMe } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle*/}
      <ThemeToggle />
      {/*Background Effects */}
      <StartBackground />
      {/*Navabar */}
      <Navbar />
      {/*Main content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
