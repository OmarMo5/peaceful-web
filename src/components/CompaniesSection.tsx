import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const companies = [
  {
    nameAr: "شركة الإنتاج",
    nameEn: "Production Company",
    description: "متخصصة في إنتاج المحتوى المرئي والوثائقي للمتاحف والمعارض الدولية بأعلى معايير الجودة العالمية.",
  },
  {
    nameAr: "شركة التقنية",
    nameEn: "Technology Company",
    description: "نقدم حلولاً تقنية متطورة للتفاعل الرقمي وتجارب الواقع المعزز في المساحات المتحفية.",
  },
  {
    nameAr: "شركة البحث والتطوير",
    nameEn: "R&D Company",
    description: "مركز متخصص في البحث العلمي وتوثيق التراث الإسلامي بأساليب علمية معاصرة.",
  },
  {
    nameAr: "شركة العمليات",
    nameEn: "Operations Company",
    description: "نضمن سير العمليات بكفاءة عالية من التخطيط إلى التنفيذ وإدارة المعارض الدولية.",
  },
];

const CompaniesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="companies" ref={sectionRef} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-secondary font-semibold text-lg mb-4 block">
            شركاتنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            أربع شركات
            <br />
            <span className="text-primary">رؤية واحدة</span>
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl p-6 shadow-brand card-hover border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Company Number */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                <span className="text-xl font-bold text-primary group-hover:text-secondary-foreground">
                  {index + 1}
                </span>
              </div>

              {/* Company Names */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {company.nameAr}
              </h3>
              <p className="text-sm text-brand-gray-light mb-4 font-medium">
                {company.nameEn}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {company.description}
              </p>

              {/* Link Button */}
              <button className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                زيارة الموقع
                <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ transform: "scaleX(-1)" }} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;