import { useEffect, useRef, useState } from "react";

const ClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 sm:py-16 md:py-20 bg-section-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl sm:max-w-3xl mx-auto text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-brand mx-auto mb-5 sm:mb-6 rotate-45" />
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            مجموعة السلام القابضة (ASG)
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            منظومة أعمال متكاملة تجمع بين المعرفة والتنفيذ والتشغيل والمنتج، لتبني مشروعات ذات قيمة، وتجارب ذات أثر، وفرصاً قابلة للنمو والاستدامة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
