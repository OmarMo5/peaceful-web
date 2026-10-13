import { useEffect, useRef, useState } from "react";
import { TrendingUp, Link2, Award, Lightbulb, ShieldCheck, Infinity as InfinityIcon } from "lucide-react";

const values = [
  {
    icon: TrendingUp,
    title: "الأثر",
    description: "نقيس نجاحنا بما نتركه من قيمة مستدامة للمستفيدين والشركاء والمجتمع.",
  },
  {
    icon: Link2,
    title: "التكامل",
    description: "نعمل كمنظومة واحدة، تتكامل فيها خبرات شركاتنا لتحقيق نتائج أكبر من مجموع أجزائها.",
  },
  {
    icon: Award,
    title: "الجودة",
    description: "نلتزم بتقديم حلول وخدمات ومنتجات موثوقة ترتقي بتجربة المستفيد وتلبي أعلى المعايير.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "نطوّر أفكاراً وحلولاً متجددة تعزز التميز وتفتح آفاقاً جديدة للنمو.",
  },
  {
    icon: ShieldCheck,
    title: "الموثوقية",
    description: "نبني علاقاتنا على الالتزام والشفافية والمسؤولية في كل ما نقدمه.",
  },
  {
    icon: InfinityIcon,
    title: "الاستدامة",
    description: "نوازن بين النمو والأثر، ونبني أعمالاً قادرة على الاستمرار وخلق قيمة طويلة الأمد.",
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
    <section id="values" ref={sectionRef} className="py-12 sm:py-20 md:py-24 lg:py-28 bg-section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-14 md:mb-20 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            قيمنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug sm:leading-relaxed md:leading-tight mb-4 sm:mb-8">
            <span className="block mb-3 sm:mb-6">المبادئ التي تقودنا</span>
            <span className="text-primary">نحو التميز</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto px-2 leading-relaxed">
            قيمنا هي البوصلة التي توجه كل خطوة نخطوها، وكل قرار نتخذه في رحلتنا نحو تحقيق رسالتنا
          </p>
        </div>

        {/* Values Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 text-right sm:block sm:text-center rounded-2xl bg-card/70 border border-border/60 sm:bg-transparent sm:border-0 p-4 sm:p-6 transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon Container */}
              <div className="relative inline-block shrink-0 mb-0 sm:mb-8 group">
                <div className="w-12 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand-lg transition-transform duration-300 group-hover:scale-105">
                  <value.icon className="w-6 h-6 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary-foreground" />
                </div>
                {/* Decorative Ring */}
                <div className="absolute inset-0 w-12 h-12 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl border-2 border-accent/50 transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Title */}
              <div className="min-w-0"><h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed sm:max-w-sm sm:mx-auto text-[13px] sm:text-base">
                {value.description}
              </p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;