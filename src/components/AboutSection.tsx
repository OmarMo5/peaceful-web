import { useEffect, useRef, useState } from "react";
import { Building2, Globe, Award } from "lucide-react";
import contentImage from "@/assets/content.png";

const stats = [
  { icon: Building2, value: "٤", label: "شركات متخصصة" },
  { icon: Globe, value: "١٠+", label: "متاحف عالمية" },
  { icon: Award, value: "١٥+", label: "سنوات من التميز" },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <span className="text-secondary font-semibold text-base sm:text-lg mb-3 sm:mb-4 block">
              نبذة عنا
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8 leading-tight">
              قصة بدأت برؤية
              <br />
              <span className="text-primary">وتحولت إلى إرث</span>
            </h2>
            <div className="space-y-4 sm:space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                مجموعة السلام (ASG) هي الكيان الأم لمجموعة من الشركات المتخصصة التي تعمل في تناغم تام لتحقيق رسالة واحدة: نشر المعرفة وحفظ التراث الإسلامي بأساليب عصرية مبتكرة.
              </p>
              <p>
                من خلال أربع شركات متكاملة، نقدم حلولاً شاملة تبدأ من البحث العلمي وتنتهي بتقديم تجارب متحفية فريدة تصل إلى ملايين الزوار حول العالم.
              </p>
            </div>

            {/* Stats - Responsive grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-3 sm:p-4 rounded-xl bg-muted border border-border transition-all duration-500 ease-out hover:shadow-brand hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-secondary mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-brand-lg">
              <img 
                src={contentImage} 
                alt="ASG - مجموعة السلام" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative Elements - Responsive sizing */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-secondary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;