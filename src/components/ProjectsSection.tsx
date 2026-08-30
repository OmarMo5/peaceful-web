import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const companyColors: Record<string, string> = {
  ASC: "bg-primary/10 text-primary",
  ASCD: "bg-secondary/10 text-secondary",
  ASRD: "bg-brand-blue/10 text-brand-blue",
  OSWA: "bg-accent/20 text-accent-foreground",
};

const projects = [
  {
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "المدينة المنورة — جوار المسجد النبوي",
    status: "دائم",
    year: "2021م",
    stats: ["1800م²", "31 قسماً"],
    description: "يثبت قدرة المجموعة على تشغيل وجهة دائمة في أكثر المواقع حساسية وازدحاماً في العالم.",
  },
  {
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "مكة المكرمة — أبراج الساعة",
    status: "دائم",
    year: "2025م",
    stats: ["31+ قسماً", "200 عرض تفاعلي", "7 لغات"],
    description: "في قلب مهبط الوحي، يقدّم تجربة متكاملة لضيوف الرحمن.",
  },
  {
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "الرباط، المغرب — داكار",
    status: "دائم",
    year: "2022م",
    stats: ["2000م²", "25 قسماً"],
    description: "برعاية ملكية وتعاون مع الإيسيسكو، يثبت قدرة المجموعة على تصدير النموذج دولياً.",
  },
  {
    company: "OSWA",
    title: "هدايا لمعرض تجربة السيرة",
    location: "شركة قصص",
    status: "دائم",
    year: "2025م",
    stats: ["+50 منتج"],
    description: "تقديم هدايا متنوعة لمتجر تجربة السيرة التابع لقصص، إحدى شركات صندوق الاستثمارات العامة.",
  },
  {
    company: "OSWA",
    title: "هدايا من وحي الحرمين",
    location: "وزارة الحج والعمرة",
    status: "موسمي",
    year: "2026م",
    stats: ["+30 منتج"],
    description: "اعتماد هدايا مخصصة للحجاج والمعتمرين من خلال وزارة الحج والعمرة.",
  },
  {
    company: "ASCD",
    title: "مخيمات الخطوط السعودية",
    location: "مشعر عرفات",
    status: "موسمي",
    year: "2026م",
    stats: ["1000م²", "7 خيام", "500 مهندس وفني"],
    description: "تنفيذ وتجهيز المخيمات وتشغيل ميداني متكامل، يجسد قدرة المجموعة على إدارة المشاريع الموسمية الضخمة.",
  },
  {
    company: "ASCD",
    title: "مؤتمر ومعرض الحج والعمرة",
    location: "جدة",
    status: "موسمي",
    year: "2026م",
    stats: ["3 سنوات"],
    description: "تصميم وتنفيذ أجنحة إثراء، الضيافة القابضة، أشرقت، المسافر، وشركة المياه السعودية.",
  },
  {
    company: "ASRD",
    title: "بانوراما البيت الحرام",
    location: "إعداد المحتوى",
    status: "معرض إبداعي",
    year: "2026م",
    stats: [],
    description: "تقديم محتوى علمي محكم ومؤصل من خلال تجربة قصصية وسردية لعرض إبداعي.",
  },
  {
    company: "ASRD",
    title: "بانوراما الحجرة النبوية الشريفة",
    location: "المدينة المنورة",
    status: "إعداد المحتوى",
    year: "2026م",
    stats: [],
    description: "تجهيز المحتوى العلمي بأسلوب علمي مؤصل يناسب العرض المرئي.",
  },
];

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-14 md:mb-20 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            أعمالنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            مشاريع <span className="text-primary">تصنع أثراً</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${project.location}`}
              className={`bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border border-border flex flex-col transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${companyColors[project.company]}`}>
                  {project.company}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-muted border border-border">{project.status}</span>
                  <span>{project.year}</span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                {project.title}
              </h3>

              <div className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground mb-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-secondary" />
                <span>{project.location}</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {project.stats.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {project.stats.map((stat) => (
                    <span key={stat} className="text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-md bg-primary/5 text-primary">
                      {stat}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
