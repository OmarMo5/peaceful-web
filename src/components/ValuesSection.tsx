import { useEffect, useRef, useState } from "react";
import { Heart, Target, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "الأصالة والتراث",
    description: "نحافظ على جذورنا الإسلامية العريقة ونقدمها بأساليب عصرية تليق بعظمة تراثنا وتصل إلى الأجيال الجديدة.",
  },
  {
    icon: Target,
    title: "الابتكار والتميز",
    description: "نسعى دائماً لتقديم حلول إبداعية ومبتكرة تجمع بين التقنية الحديثة والمحتوى الثري لخلق تجارب لا تُنسى.",
  },
  {
    icon: Users,
    title: "العمل الجماعي",
    description: "نؤمن بقوة الفريق الواحد، حيث تتكامل جهود شركاتنا الأربع لتحقيق رسالتنا في نشر المعرفة والحضارة.",
  },
];

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="values" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-14 md:mb-20 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            قيمنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed sm:leading-relaxed md:leading-tight mb-6 sm:mb-8">
            المبادئ التي تقودنا
            <br />
            <span className="text-primary">نحو التميز</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 leading-relaxed">
            قيمنا هي البوصلة التي توجه كل خطوة نخطوها، وكل قرار نتخذه في رحلتنا نحو تحقيق رسالتنا
          </p>
        </div>

        {/* Values Grid - Responsive layout */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon Container */}
              <div className="relative inline-block mb-6 sm:mb-8 group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand-lg transition-transform duration-300 group-hover:scale-105">
                  <value.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl border-2 border-accent/50 transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm mx-auto text-sm sm:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;