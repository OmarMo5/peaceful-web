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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <span className="text-secondary font-semibold text-lg mb-4 block">
              نبذة عنا
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              قصة بدأت برؤية
              <br />
              <span className="text-primary">وتحولت إلى إرث</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                مجموعة السلام (ASG) هي الكيان الأم لمجموعة من الشركات المتخصصة التي تعمل في تناغم تام لتحقيق رسالة واحدة: نشر المعرفة وحفظ التراث الإسلامي بأساليب عصرية مبتكرة.
              </p>
              <p>
                من خلال أربع شركات متكاملة، نقدم حلولاً شاملة تبدأ من البحث العلمي وتنتهي بتقديم تجارب متحفية فريدة تصل إلى ملايين الزوار حول العالم.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 rounded-xl bg-muted border border-border transition-all duration-500 hover:shadow-brand ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-brand-lg">
              <img 
                src={contentImage} 
                alt="ASG - مجموعة السلام" 
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;