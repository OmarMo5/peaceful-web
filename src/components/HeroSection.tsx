import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCompanies = () => {
    const element = document.querySelector("#companies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-brand overflow-hidden">
      {/* Background Pattern - Responsive sizing */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-accent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20 md:py-0">
        {/* Small Label */}
        <span className="animate-fade-up inline-block text-accent text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">
          مجموعة السلام
        </span>

        {/* Main Headline - Responsive typography */}
        <h1 className="animate-fade-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-snug sm:leading-snug md:leading-tight mb-8 sm:mb-10 text-shadow">
          نصنع الإرث الحضاري
          <br />
          <span className="text-accent">ونبني جسور المعرفة</span>
        </h1>

        {/* Supporting Paragraph - Responsive text */}
        <p className="animate-fade-up-delay-2 text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 leading-loose sm:leading-relaxed px-2">
          مجموعة رائدة في مجال المعارض والمتاحف الدولية،
          <br className="hidden sm:block" />
          نجمع بين أصالة التراث وإبداع التقنية
          <br className="hidden sm:block" />
          لنقدم تجارب استثنائية تخدم الإنسانية
        </p>

        {/* CTA Button - Responsive sizing */}
        <div className="animate-fade-up-delay-3">
          <button
            onClick={scrollToCompanies}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-primary-foreground text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-brand-lg hover:-translate-y-1 btn-glow"
          >
            اكتشف شركاتنا
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator - Subtle animation */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;