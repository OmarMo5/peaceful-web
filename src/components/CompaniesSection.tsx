import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const companies = [
  {
    code: "ASC",
    nameAr: "شركة السلام",
    tagline: "قيادة المشاريع... وصناعة الأثر",
    role: "تُشغّل وتُدير التجربة",
    description:
      "تختص بتطوير وإنشاء وإدارة وتشغيل المتاحف والمعارض والمؤتمرات والفعاليات والمشاريع الثقافية، من بلورة الفكرة وحتى التشغيل المستدام. تمتلك وتدير \"المتحف الدولي للسيرة النبوية\".",
    tags: ["تصميم وتشغيل المشاريع الحضارية", "التحول الرقمي والتقنيات الذكية", "الإعلام والتسويق"],
    fullIntro:
      "تُعدّ شركة السلام صانعة للأثر الثقافي، وتبرز قوتها الحقيقية ومكانتها في امتلاكها وإدارتها لأهم العلامات الرائدة، ويأتي \"المتحف الدولي للسيرة النبوية\" كأبرز علامة تجارية عالمية تفتخر الشركة بامتلاكها، وتطويرها، وتشغيلها. لتعكس من خلال هذه العلامة قدرتها الفائقة على تحويل المشاريع الكبرى إلى تجارب حضارية متكاملة ومستدامة. مما يرسخ ريادتها كذراع تشغيلي يجمع بنجاح بين كفاءة الإدارة، والتطور التقني، والإبداع في قطاع المتاحف.",
    categories: [
      {
        title: "تصميم وتطوير وتشغيل المشاريع الحضارية",
        text: "تختص شركة السلام بتطوير وإنشاء وإدارة وتشغيل المتاحف والمعارض والمؤتمرات والفعاليات والمشاريع الثقافية والمعرفية، بدءاً من بلورة الفكرة وتأسيس المشروع مروراً بتنفيذه وتطويره، وتصميم تجربة الزائر إليه، وانتهاءً بإدارته وتشغيله بما يضمن استدامته وتحقيق أهدافه وتعزيز أثرها.",
      },
      {
        title: "التحول الرقمي والتقنيات الذكية",
        text: "تختص شركة السلام بتطوير المنصات والمواقع الإلكترونية، والتطبيقات الذكية، والبوابات الرقمية، وبناء الأنظمة التشغيلية وأنظمة إدارة المتاحف والفعاليات والزوار، إلى جانب توظيف تقنيات الذكاء الاصطناعي، والواقع الافتراضي والواقع المعزز، والشاشات والتجارب الرقمية الغامرة، وتحليل البيانات، ولوحات المعلومات، والأتمتة، بما يرتقي بكفاءة التشغيل ويثري تجربة المستخدم.",
      },
      {
        title: "الإعلام والتسويق وبناء الحضور",
        text: "تقوم شركة السلام بإنتاج الأفلام الوثائقية والتعريفية والتعليمية، والموشن جرافيك، والتغطيات الإعلامية، إلى جانب تخطيط وتنفيذ الحملات التسويقية الرقمية، وتسويق المحتوى، والإعلانات الرقمية، وإدارة المنصات والمتاجر الإلكترونية، والمجتمعات الرقمية، والمؤتمرات الصحفية، والتواصل المؤسسي، وبناء الصورة الذهنية وإدارة السمعة، بما يعزز حضور المشاريع ويضاعف أثرها واستدامة تأثيرها.",
      },
    ],
  },
  {
    code: "ASCD",
    nameAr: "السلام للمقاولات والديكورات",
    tagline: "نحو مشاريع تنبض بالجودة",
    role: "تُنفّذ وتُجهّز البيئة",
    description:
      "تتخصص في تطوير وتنفيذ المشاريع وتحويل الرؤى التصميمية إلى بيئات متكاملة تجمع بين جودة البناء، ودقة التنفيذ، وجاهزية التشغيل، من المفهوم إلى الصيانة.",
    tags: ["التصميم والتطوير الهندسي", "التنفيذ والتجهيز المتكامل", "الأنظمة والبنية التحتية", "التصنيع والتشغيل"],
    fullIntro:
      "تتخصص شركة السلام للمقاولات والديكورات في تطوير وتنفيذ المشاريع وتحويل الرؤى التصميمية إلى بيئات متكاملة تجمع بين جودة البناء، ودقة التنفيذ، وجاهزية التشغيل. وتقدم الشركة منظومة متكاملة من الحلول الهندسية والتنفيذية التي تبدأ من تطوير المفهوم والتصميم، وتمتد إلى الإنشاء والتجهيز والتصنيع، وتنتهي بالتشغيل والصيانة، بما يضمن تنفيذ المشاريع وفق أعلى معايير الجودة والكفاءة والاستدامة.",
    categories: [
      {
        title: "التصميم والتطوير الهندسي",
        text: "تختص السلام للمقاولات والديكورات بتطوير المفاهيم والدراسات والاستشارات، والتصميم المعماري والداخلي، وتخطيط وتوزيع الفراغات، وتطوير الهوية المكانية، وإعداد الرسومات التنفيذية والنماذج والمحاكاة ثلاثية الأبعاد، بما يحقق التكامل بين الرؤية التصميمية ومتطلبات التنفيذ وتجربة المستخدم.",
      },
      {
        title: "التنفيذ والتجهيز المتكامل",
        text: "تختص السلام للمقاولات والديكورات بتنفيذ أعمال المقاولات والإنشاءات من مرحلة التأسيس وحتى التسليم النهائي، إلى جانب تجهيز المتاحف والمعارض والفنادق والمنشآت التجارية والمكتبية، وتنفيذ أعمال التشطيبات والتجهيزات المتخصصة، بما يضمن جاهزية المشروع للتشغيل وتحقيق أعلى مستويات الجودة.",
      },
      {
        title: "الأنظمة والبنية التحتية",
        text: "تبدع شركة السلام للمقاولات والديكورات بتنفيذ وتكامل الأنظمة الكهربائية والميكانيكية، وأنظمة التكييف والتهوية، وأنظمة السلامة والحماية، إلى جانب تطوير الواجهات المعمارية، والعناصر الزخرفية، واللاندسكيب، والإضاءة الخارجية، بما يعزز كفاءة التشغيل ويرتقي بالهوية المعمارية للمشروع.",
      },
      {
        title: "التصنيع والتشغيل",
        text: "تقوم شركة السلام للمقاولات والديكورات بتصميم وتصنيع الأثاث والتجهيزات المخصصة، والأعمال الخشبية، ووحدات العرض، والمجسمات، والعناصر الخاصة، مع تقديم خدمات تشغيل المرافق، والصيانة الوقائية والتصحيحية، وتشغيل الأنظمة الهندسية، وإدارة عقود التشغيل والصيانة، بما يضمن استدامة الأصول واستمرار كفاءة الأداء.",
      },
    ],
  },
  {
    code: "ASRD",
    nameAr: "السلام للبحث العلمي والتطوير",
    tagline: "من المعرفة يبدأ الأثر",
    role: "تبحث وتُطوّر المعرفة",
    description:
      "المرجعية العلمية والمعرفية للمجموعة، متخصصة في إنتاج المعرفة، وتطوير المحتوى، وبناء المنهجيات، وتصميم التجارب التعليمية والثقافية، وتطوير الحلول المؤسسية.",
    tags: ["البحث والاستشارات العلمية", "صناعة المحتوى المعرفي", "تصميم التجارب التعليمية", "التطوير المؤسسي"],
    fullIntro:
      "تُعد شركة السلام للبحث العلمي والتطوير المرجعية العلمية والمعرفية لمجموعة السلام القابضة، وهي شركة متخصصة في إنتاج المعرفة، وتطوير المحتوى، وبناء المنهجيات، وتصميم التجارب التعليمية والثقافية، وتطوير الحلول المؤسسية. وتتميز الشركة بخبرات تجمع بين البحث العلمي، وصناعة المحتوى، والتطوير المؤسسي، مما يجعلها تسهم في تحويل الأفكار إلى مشاريع ذات أثر مستدام.",
    categories: [
      {
        title: "البحث والاستشارات العلمية",
        text: "تختص شركة السلام للبحث العلمي والتطوير بإعداد الأبحاث والدراسات المتخصصة والقطاعية والمقارنة والاستطلاعية، وتقديم الاستشارات العلمية، وتصميم المنهجيات البحثية، والإشراف والتحكيم العلمي، ومراجعة الدراسات والأبحاث، بما يدعم صناعة القرار، ويعالج التحديات، ويستشرف الفرص وفق أسس علمية موثوقة.",
      },
      {
        title: "صناعة المحتوى المعرفي",
        text: "تقوم شركة السلام للبحث العلمي والتطوير بإعداد وتطوير المحتوى العلمي والثقافي والتعليمي والمؤسسي، وتصميم البرامج والمبادرات، وإنتاج محتوى المنصات الرقمية ووسائل التواصل، إلى جانب التأصيل العلمي، والتوثيق، والتحرير العلمي واللغوي، ومراجعة الإصدارات، والترجمة والتعريب، بما يضمن دقة المحتوى، وموثوقيته، وجاهزيته للنشر بمختلف اللغات والمنصات.",
      },
      {
        title: "تصميم التجارب التعليمية والثقافية",
        text: "تبدع شركة السلام للبحث العلمي والتطوير في تطوير المحتوى التفاعلي، وتصميم التجارب المتحفية وتجارب المعارض، ومراكز الزوار، والرحلات المعرفية، وتجارب التعلم، والسرديات التفاعلية، والمحتوى متعدد الوسائط، بما يحول المعرفة إلى تجربة ثرية تعزز الفهم والتفاعل وترسخ الأثر.",
      },
      {
        title: "التطوير المؤسسي وبناء القدرات",
        text: "تختص شركة السلام للبحث العلمي والتطوير بتصميم منظومات الحوكمة، والأدلة الإجرائية والتشغيلية، والنماذج المؤسسية والإدارية، وإعداد الحقائب والأدلة التدريبية والمواد التعليمية وأدوات التقييم، إلى جانب تطوير مؤشرات الأداء وقياس الأثر وتقييم البرامج والمبادرات، بما يعزز كفاءة المؤسسات ويرسخ ثقافة التحسين المستمر.",
      },
    ],
  },
  {
    code: "OSWA",
    nameAr: "أسوة للهدايا",
    tagline: "نبتكر المنتجات ونصنع أثراً لا يُنسى",
    role: "تُحوّل التجربة إلى منتج",
    description:
      "الامتداد الثقافي والتجاري للمجموعة، تبتكر وتصمم وتنتج المنتجات التعليمية والثقافية والمتحفية والهدايا المؤسسية والتذكارية، وتدير متاجر الهدايا.",
    tags: ["ابتكار المنتجات الإبداعية", "التصنيع والإنتاج", "إدارة المتاجر والاستدامة المالية"],
    fullIntro:
      "تمثل شركة أسوة الامتداد الثقافي والتجاري لمجموعة السلام القابضة، وتتخصص في ابتكار وتصميم وإنتاج المنتجات التعليمية والثقافية والمتحفية، والهدايا المؤسسية والتذكارية، وتحويل هوية المشاريع ورسائلها إلى منتجات تحمل قيمة وقصة وأثراً. كما تقدم حلولاً متكاملة لإدارة المنتجات وتشغيل متاجر الهدايا، بما يعزز تجربة الزائر، ويدعم استدامة المشاريع، ويوسع فرصها التجارية.",
    categories: [
      {
        title: "إبتكار المنتجات الإبداعية",
        text: "تختص شركة أسوة للهدايا بابتكار وتطوير مفاهيم المنتجات، وتصميم المنتجات التعليمية والثقافية والمتحفية، والهدايا المؤسسية والتذكارية، إلى جانب تطوير المجموعات والحقائب المتخصصة، ومنتجات الفعاليات والمعارض، ومنتجات المواسم والمناسبات، بما يحقق التكامل بين هوية المشروع، وأهدافه، واحتياجات الجمهور المستهدف.",
      },
      {
        title: "التصنيع والإنتاج",
        text: "تقوم شركة أسوة للهدايا بإنتاج وتجهيز المنتجات وفق أعلى معايير الجودة، من خلال منظومة متكاملة تشمل التصنيع، والإنتاج، والتجميع، والتغليف، والتعبئة، وضبط الجودة، بما يضمن جاهزية المنتجات بأعلى مستويات الإتقان والتميز.",
      },
      {
        title: "إدارة المتاجر وتحقيق الاستدامة المالية",
        text: "تبدع شركة أسوة للهدايا بتطوير المنتجات الخاصة بالمشاريع والمتاحف والمعارض، وتشغيل متاجر الهدايا وإدارتها، وتوفير المنتجات المناسبة لمنافذ البيع، بما يعزز تجربة الزائر، ويوسع مصادر الدخل، ويسهم في تحقيق الاستدامة المالية للمشاريع الثقافية والمعرفية.",
      },
    ],
  },
];

const CompaniesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openCode, setOpenCode] = useState<string | null>(null);
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

  const openCompany = companies.find((c) => c.code === openCode) ?? null;

  return (
    <section id="companies" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            شركاتنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed sm:leading-relaxed md:leading-tight mb-2">
            <p className="mb-3">أربع شركات</p>
            <span className="text-primary">رؤية واحدة</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            كيانات المنظومة تشكل سلسلة تكامل تصنع قيمة، وتترك أثراً، وتشكل منهج استدامة
          </p>
        </div>

        {/* Companies Grid - Responsive layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={company.code}
              className={`group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-500 ease-out flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Company Code Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary transition-all duration-300">
                <span className="text-sm sm:text-base font-extrabold text-primary group-hover:text-secondary-foreground transition-colors duration-300 tracking-tight">
                  {company.code}
                </span>
              </div>

              {/* Role in the ecosystem */}
              <span className="inline-block w-fit text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mb-3">
                {company.role}
              </span>

              {/* Company Names */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">
                {company.nameAr}
              </h3>
              <p className="text-xs sm:text-sm text-secondary mb-3 sm:mb-4 font-semibold">
                {company.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-5 text-sm flex-1">
                {company.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] sm:text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Full details trigger */}
              <button
                onClick={() => setOpenCode(company.code)}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground rounded-xl py-2.5 transition-all duration-300"
              >
                <FileText className="w-4 h-4" />
                التفاصيل الكاملة
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Full company detail modal */}
      <Dialog open={!!openCompany} onOpenChange={(open) => !open && setOpenCode(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {openCompany && (
            <>
              <DialogHeader>
                <span className="inline-flex w-fit items-center gap-2 text-xs font-extrabold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
                  {openCompany.code}
                </span>
                <DialogTitle className="text-xl sm:text-2xl">{openCompany.nameAr}</DialogTitle>
                <DialogDescription className="text-secondary font-semibold text-sm sm:text-base">
                  {openCompany.tagline}
                </DialogDescription>
              </DialogHeader>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {openCompany.fullIntro}
              </p>

              <div className="space-y-4 sm:space-y-5 mt-2">
                {openCompany.categories.map((cat, i) => (
                  <div key={cat.title} className="rounded-xl bg-muted border border-border p-4 sm:p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{cat.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{cat.text}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CompaniesSection;
