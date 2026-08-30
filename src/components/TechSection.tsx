import { useEffect, useRef, useState } from "react";
import { Glasses, Sparkles, Cpu, Layers, MonitorSmartphone } from "lucide-react";

const technologies = [
  { icon: Glasses, title: "الواقع الافتراضي والمعزز", subtitle: "VR/AR" },
  { icon: Sparkles, title: "تقنيات الهولوجرام", subtitle: "" },
  { icon: Cpu, title: "الذكاء الاصطناعي", subtitle: "" },
  { icon: Layers, title: "العروض الغامرة متعددة الأبعاد", subtitle: "" },
  { icon: MonitorSmartphone, title: "الشاشات التفاعلية", subtitle: "" },
];

const TechSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            تقنياتنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            نُحوّل المعرفة إلى <span className="text-primary">تجربة حسّية متكاملة</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6 md:gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className={`group flex flex-col items-center text-center transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-muted border border-border flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gradient-brand transition-all duration-300 group-hover:scale-105 group-hover:shadow-brand-lg">
                <tech.icon className="w-7 h-7 sm:w-9 sm:h-9 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                {tech.title}
              </p>
              {tech.subtitle && (
                <p className="text-xs text-muted-foreground mt-1">{tech.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
