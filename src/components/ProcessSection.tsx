import { useEffect, useRef, useState } from "react";
import { Lightbulb, Search, PenTool, Hammer, Settings2, Package, TrendingUp } from "lucide-react";

const steps = [
  { icon: Lightbulb, ar: "الفكرة", en: "Idea" },
  { icon: Search, ar: "البحث", en: "Research" },
  { icon: PenTool, ar: "التصميم", en: "Design" },
  { icon: Hammer, ar: "التنفيذ", en: "Build" },
  { icon: Settings2, ar: "التشغيل", en: "Operate" },
  { icon: Package, ar: "المنتج", en: "Product" },
  { icon: TrendingUp, ar: "النمو", en: "Growth" },
];

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            منهجية العمل
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            من الفكرة <span className="text-primary">إلى الأثر</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4">
            تعمل مجموعة السلام القابضة بمنظور تكاملي يحوّل الأفكار إلى مشاريع ذات قيمة مستدامة، من خلال إدارة منظومة شركات متخصصة تتكامل أدوارها في البحث، والتصميم، والتنفيذ، والتشغيل، وتطوير المنتجات، وبناء فرص النمو.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            وتقود المجموعة هذه الرحلة وفق نموذج عمل مؤسسي يربط بين المعرفة والتطبيق، وبين جودة التنفيذ واستدامة الأثر؛ بما يمكّن العملاء والشركاء من تحويل الرؤى والمبادرات إلى حلول عملية وتجارب مكتملة ومشاريع قابلة للنمو.
          </p>
        </div>

        {/* Steps flow */}
        <div className="flex flex-col md:flex-row items-stretch md:items-start gap-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.en} className="relative flex md:flex-col items-center md:items-center flex-1 gap-4 md:gap-0">
              <div
                className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand-lg shrink-0">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                </div>
                <div className="mt-3 md:mt-4">
                  <p className="font-bold text-foreground text-sm sm:text-base">{step.ar}</p>
                  <p className="text-xs text-muted-foreground">{step.en}</p>
                </div>
              </div>

              {/* Connector line - spans from this icon's center to the next icon's center */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-7 sm:top-8 left-1/2 w-full h-0.5 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--secondary)/0.3) 0%, hsl(var(--secondary)) 100%)",
                    transitionDelay: `${index * 90 + 100}ms`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        <p className={`text-center text-muted-foreground mt-10 sm:mt-14 text-sm sm:text-base transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          من فكرة واعدة إلى مشروع متكامل يصنع أثراً مستداماً
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
