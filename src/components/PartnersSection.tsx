import { useEffect, useRef, useState } from "react";

import muslimWorldLeague from "@/assets/partners/muslim-world-league.png";
import ministryCulture from "@/assets/partners/ministry-culture.png";
import hajjUmrah from "@/assets/partners/hajj-umrah.png";
import madinahEmirate from "@/assets/partners/madinah-emirate.png";
import ministryInterior from "@/assets/partners/ministry-interior.png";
import royalCommissionMakkah from "@/assets/partners/royal-commission-makkah.png";
import haramainAffairs from "@/assets/partners/haramain-affairs.png";
import religiousAffairsPresidency from "@/assets/partners/religious-affairs-presidency.png";
import madinahMunicipality from "@/assets/partners/madinah-municipality.png";
import madinahDevelopmentAuthority from "@/assets/partners/madinah-development-authority.png";
import museumsCommission from "@/assets/partners/museums-commission.png";
import awqaf from "@/assets/partners/awqaf.png";
import islamicAffairs from "@/assets/partners/islamic-affairs.png";
import holyMakkahMunicipality from "@/assets/partners/holy-makkah-municipality.png";
import icesco from "@/assets/partners/icesco.png";
import rabitaMohammadia from "@/assets/partners/rabita-mohammadia.png";
import saudia from "@/assets/partners/saudia.png";
import haramainRailway from "@/assets/partners/haramain-railway.png";
import ehsan from "@/assets/partners/ehsan.png";

const partners = [
  { name: "رابطة العالم الإسلامي", logo: muslimWorldLeague },
  { name: "وزارة الشؤون الإسلامية والدعوة والإرشاد", logo: islamicAffairs },
  { name: "وزارة الثقافة", logo: ministryCulture },
  { name: "وزارة الحج والعمرة", logo: hajjUmrah },
  { name: "وزارة الداخلية", logo: ministryInterior },
  { name: "إمارة منطقة المدينة المنورة", logo: madinahEmirate },
  { name: "أمانة منطقة المدينة المنورة", logo: madinahMunicipality },
  { name: "هيئة المتاحف", logo: museumsCommission },
  { name: "أوقاف", logo: awqaf },
  { name: "هيئة تطوير منطقة المدينة المنورة", logo: madinahDevelopmentAuthority },
  { name: "الهيئة الملكية لمدينة مكة المكرمة والمشاعر المقدسة", logo: royalCommissionMakkah },
  { name: "أمانة العاصمة المقدسة", logo: holyMakkahMunicipality },
  { name: "الهيئة العامة للعناية بشؤون المسجد الحرام والمسجد النبوي", logo: haramainAffairs },
  { name: "رئاسة الشؤون الدينية بالمسجد الحرام والمسجد النبوي", logo: religiousAffairsPresidency },
  { name: "منظمة العالم الإسلامي للتربية والعلوم والثقافة (ICESCO)", logo: icesco },
  { name: "الرابطة المحمدية للعلماء", logo: rabitaMohammadia },
  { name: "السعودية", logo: saudia },
  { name: "قطار الحرمين السريع", logo: haramainRailway },
  { name: "إحسان", logo: ehsan },
];

const PartnersSection = () => {
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
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 sm:mb-14 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-4 sm:mb-5 block">
            شركاؤنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            نفخر <span className="text-primary">بشراكاتنا</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            نتعاون مع كبرى الجهات الحكومية والمؤسسية في المملكة والعالم الإسلامي
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`group flex flex-col items-center justify-center gap-3 bg-card rounded-2xl p-4 sm:p-5 border border-border shadow-brand card-hover transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 35}ms` }}
            >
              <div className="h-14 sm:h-16 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-14 sm:max-h-16 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] sm:text-xs text-center text-muted-foreground leading-snug line-clamp-2">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
