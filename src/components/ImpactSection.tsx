import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "10M+", label: "زائر حول العالم" },
  { value: "25+", label: "دولة طلبت التوسع" },
  { value: "18+", label: "عاماً من الخبرة" },
  { value: "400+", label: "موسوعة علمية" },
  { value: "50+", label: "شريكاً مؤسسياً" },
  { value: "150+", label: "اتفاقية تعاون" },
  { value: "500K+", label: "صفحة علمية موثقة" },
  { value: "4", label: "فروع دولية قائمة" },
];

const ImpactSection = () => {
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
    <section ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-brand overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-accent font-semibold text-base sm:text-lg mb-3 sm:mb-4 block">
            الأثر والانتشار
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            أرقام تروي قصة الأثر
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-1.5 sm:mb-2 text-shadow">
                {stat.value}
              </div>
              <div className="text-primary-foreground/75 text-xs sm:text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
