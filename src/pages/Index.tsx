import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import OrgChartSection from "@/components/OrgChartSection";
import CompaniesSection from "@/components/CompaniesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ImpactSection from "@/components/ImpactSection";
import ValuesSection from "@/components/ValuesSection";
import TechSection from "@/components/TechSection";
import PartnersSection from "@/components/PartnersSection";
import ClosingSection from "@/components/ClosingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = "ASG – مجموعة السلام القابضة | من المعرفة إلى التجربة، ومن التجربة إلى الأثر";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "مجموعة السلام القابضة (ASG) مجموعة قابضة سعودية تقود أربع شركات متخصصة في المعرفة والثقافة والتشغيل والتنفيذ والمنتجات، بما يصنع قيمة مستدامة وأثراً حضارياً ممتداً عبر الأجيال."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ProcessSection />
        <ServicesSection />
        <OrgChartSection />
        <CompaniesSection />
        <ProjectsSection />
        <ImpactSection />
        <ValuesSection />
        <TechSection />
        <PartnersSection />
        <ClosingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
