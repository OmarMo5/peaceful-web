import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title and meta for SEO
    document.title = "ASC – مجموعة السلام | نصنع الإرث الحضاري";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "مجموعة السلام - رائدة في مجال المعارض والمتاحف الدولية، نجمع بين أصالة التراث وإبداع التقنية لنقدم تجارب استثنائية تخدم الإنسانية"
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CompaniesSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
