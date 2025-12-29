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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="values" ref={sectionRef} className="py-24 bg-section-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-secondary font-semibold text-lg mb-4 block">
            قيمنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            المبادئ التي تقودنا
            <br />
            <span className="text-primary">نحو التميز</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            قيمنا هي البوصلة التي توجه كل خطوة نخطوها، وكل قرار نتخذه في رحلتنا نحو تحقيق رسالتنا
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="relative inline-block mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand-lg">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 w-20 h-20 rounded-2xl border-2 border-accent/50 transform rotate-6" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {value.description}
              </p>

              {/* Separator Line */}
              {index < values.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-0 w-px h-32 bg-border transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;