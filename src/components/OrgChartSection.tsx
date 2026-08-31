import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import waqfLogo from "@/assets/org/waqf.png";
import asgLogo from "@/assets/logo-colored.png";
import oswaLogo from "@/assets/org/oswa.png";
import asrdLogo from "@/assets/org/asrd.png";
import ascdLogo from "@/assets/org/ascd.png";
import ascLogo from "@/assets/org/asc.png";
import museumLogo from "@/assets/org/museum.png";

const children = [
  { name: "أسوة للهدايا", logo: oswaLogo, code: "OSWA" },
  { name: "السلام للبحث العلمي والتطوير", logo: asrdLogo, code: "ASRD" },
  { name: "السلام للمقاولات والديكورات", logo: ascdLogo, code: "ASCD" },
  { name: "شركة السلام", logo: ascLogo, code: "ASC", child: { name: "المعرض والمتحف الدولي للسيرة النبوية", logo: museumLogo } },
];

const Node = ({
  logo,
  name,
  size = "md",
  to,
}: {
  logo: string;
  name: string;
  size?: "sm" | "md" | "lg";
  to?: string;
}) => {
  const heights = { sm: "h-10 sm:h-11", md: "h-11 sm:h-14", lg: "h-14 sm:h-16" };
  const classes =
    "flex flex-col items-center bg-card rounded-xl sm:rounded-2xl border border-border shadow-brand px-4 sm:px-5 py-3 sm:py-4 card-hover";
  const img = (
    <img src={logo} alt={name} className={`${heights[size]} w-auto max-w-[150px] sm:max-w-[180px] object-contain`} />
  );

  if (to) {
    return (
      <Link to={to} className={`${classes} hover:border-secondary/40 transition-colors duration-300`}>
        {img}
      </Link>
    );
  }

  return <div className={classes}>{img}</div>;
};

const VLine = ({ h = "h-6 sm:h-8" }: { h?: string }) => (
  <div className={`w-px ${h} bg-border`} />
);

const OrgChartSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            المنظومة
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            هيكل <span className="text-primary">المنظومة</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            تمتلك مجموعة السلام القابضة عدداً من الكيانات لتشكل سلسلة متكاملة تبدأ بالمعرفة، وتمتد إلى التصميم والتنفيذ والتشغيل، وتنتهي بإنتاج المنتجات الحضارية والتجارب التي تحقق أثراً مستداماً. ويمنح هذا التكامل للمجموعة القدرة على تنفيذ المشاريع الكبرى من خلال منظومة واحدة تجمع الخبرات العلمية، والهندسية، والتقنية، والتشغيلية، والتجارية.
          </p>
        </div>

        <div
          className={`overflow-x-auto pb-2 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col items-center min-w-[720px] sm:min-w-0 w-full max-w-3xl mx-auto">
            {/* Root: Waqf */}
            <Node logo={waqfLogo} name="وقف الكتاب والحكمة" size="sm" />
            <VLine />

            {/* ASG */}
            <Node logo={asgLogo} name="مجموعة السلام القابضة" size="lg" />

            {/* Connector down to horizontal bar */}
            <VLine h="h-6 sm:h-8" />

            {/* Horizontal bar spanning the 4 children, with a drop line to each */}
            <div className="relative w-full flex items-start">
              <div
                className="absolute top-0 h-px bg-border"
                style={{ left: `${100 / (children.length * 2)}%`, right: `${100 / (children.length * 2)}%` }}
              />
              {children.map((child) => (
                <div key={child.code} className="flex-1 flex flex-col items-center px-2 sm:px-3">
                  <VLine />
                  <Node logo={child.logo} name={child.name} to={`/companies/${child.code}`} />

                  {child.child && (
                    <>
                      <VLine h="h-6 sm:h-8" />
                      <Node logo={child.child.logo} name={child.child.name} size="sm" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground rounded-xl px-6 py-3 transition-all duration-300"
          >
            تعرّف على شركاتنا بالتفصيل
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrgChartSection;
