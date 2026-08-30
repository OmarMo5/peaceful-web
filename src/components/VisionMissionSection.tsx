import { useEffect, useRef, useState } from "react";
import { Eye, Compass } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "رؤيتنا",
    description:
      "أن نكون مجموعة قابضة رائدة في بناء منظومة متكاملة تصنع قيمة معرفية وثقافية وتشغيلية وتجارية مستدامة، وتسهم في تطوير قطاعات وتجارب ذات أثر محلي ودولي.",
  },
  {
    icon: Compass,
    title: "رسالتنا",
    description:
      "نقود ونمكّن شركاتنا المتخصصة لتقديم حلول وخدمات ومنتجات مبتكرة وموثوقة، ترتقي بالتجربة، وتعزز القيمة، وتدعم النمو المؤسسي، وتحقق أثراً مستداماً للمستفيدين والشركاء والمجتمع.",
  },
];

const VisionMissionSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 md:p-10 bg-card shadow-brand border border-border transition-all duration-700 ease-out hover:shadow-brand-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-accent/10" />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-brand-lg mb-5 sm:mb-6">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 relative">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base relative">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
