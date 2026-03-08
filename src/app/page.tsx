import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import LanguagesSection from "@/components/LanguagesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      <LanguagesSection />
      <ProjectsSection />
      <ExperienceSection />
      <PublicationsSection />
      <Footer />
    </>
  );
}
