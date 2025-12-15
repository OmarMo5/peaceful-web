import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCompanies = () => {
    const element = document.querySelector("#companies");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Small Label */}
        <span className="animate-fade-up inline-block text-accent text-lg font-medium mb-6 tracking-wide">
          مجموعة السلام
        </span>

        {/* Main Headline */}
        <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8 text-shadow">
          نصنع الإرث الحضاري
          <br />
          <span className="text-accent">ونبني جسور المعرفة</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          مجموعة رائدة في مجال المعارض والمتاحف الدولية،
          <br className="hidden md:block" />
          نجمع بين أصالة التراث وإبداع التقنية
          <br className="hidden md:block" />
          لنقدم تجارب استثنائية تخدم الإنسانية
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up-delay-3">
          <button
            onClick={scrollToCompanies}
            className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1"
          >
            اكتشف شركاتنا
            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
