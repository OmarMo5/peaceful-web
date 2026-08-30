import { useEffect, useRef, useState } from "react";
import {
  Landmark,
  CalendarDays,
  BookOpen,
  Building,
  Cpu,
  Gift,
  Megaphone,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "المتاحف والوجهات",
    items: [
      "إنشاء وتطوير المتاحف والوجهات والمعارض",
      "تصميم التجارب ومسارات الزوار",
      "إدارة وتشغيل المواقع الدائمة والمؤقتة",
      "تطوير المحتوى العلمي والرقمي والتفاعلي",
    ],
  },
  {
    icon: CalendarDays,
    title: "الفعاليات والمؤتمرات",
    items: [
      "تخطيط وتنظيم وإدارة الفعاليات والمؤتمرات",
      "إدارة المعارض والملتقيات والبرامج المصاحبة",
      "الدعم التشغيلي واللوجستي والتقني",
      "التسويق والإعلام والعلاقات العامة للفعاليات",
    ],
  },
  {
    icon: BookOpen,
    title: "البحث وتطوير المحتوى",
    items: [
      "إعداد الدراسات والأبحاث المتخصصة",
      "التأصيل العلمي وتوثيق المحتوى",
      "تطوير المحتوى العلمي والثقافي والتعليمي والمؤسسي",
      "الترجمة والتعريب وتطوير التجارب المعرفية",
    ],
  },
  {
    icon: Building,
    title: "التصميم والتنفيذ",
    items: [
      "تطوير المفاهيم والتصميم المعماري والداخلي",
      "تنفيذ أعمال المقاولات والإنشاءات والتشطيبات",
      "تجهيز المتاحف والمعارض والوجهات والمنشآت",
      "تنفيذ الأنظمة الهندسية والتصنيع المتخصص",
    ],
  },
  {
    icon: Cpu,
    title: "التقنية والحلول الرقمية",
    items: [
      "تطوير المنصات والتطبيقات والأنظمة الرقمية",
      "بناء أنظمة إدارة المتاحف والفعاليات والزوار",
      "تطوير تقنيات الواقع الافتراضي والمعزز",
      "تحليل البيانات ولوحات المعلومات ومؤشرات الأداء",
    ],
  },
  {
    icon: Gift,
    title: "المنتجات والهدايا والتجزئة",
    items: [
      "تصميم وتطوير المنتجات التعليمية والثقافية والمتحفية",
      "إنتاج الهدايا المؤسسية والتذكارية والتحف",
      "تطوير منتجات الفعاليات والمعارض والمواسم",
      "التغليف والتجهيز وضبط الجودة",
    ],
  },
  {
    icon: Megaphone,
    title: "الإعلام والتسويق الرقمي",
    items: [
      "الإنتاج المرئي والمسموع والتغطيات الإعلامية",
      "تخطيط وتنفيذ الحملات التسويقية الرقمية",
      "إدارة المنصات والمواقع والمتاجر الإلكترونية",
      "العلاقات الإعلامية والتواصل المؤسسي",
    ],
  },
  {
    icon: Wrench,
    title: "التشغيل والصيانة وإدارة المرافق",
    items: [
      "تشغيل المرافق والمنشآت",
      "إدارة عقود التشغيل والصيانة",
      "الصيانة الوقائية والتصحيحية",
      "تشغيل وصيانة الأنظمة الهندسية والخدمات المساندة",
    ],
  },
];

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-14 md:mb-20 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            حلولنا وخدماتنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            منظومة متكاملة <span className="text-primary">من الخدمات</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            نقدّم منظومة متكاملة من الحلول والخدمات من خلال إدارة مجموعة كيانات متخصصة
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-secondary transition-all duration-300">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 leading-snug">
                {service.title}
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
