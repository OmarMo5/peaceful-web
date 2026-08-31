import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies } from "@/data/companies";

const CompaniesPage = () => {
  useEffect(() => {
    document.title = "شركاتنا – مجموعة السلام القابضة (ASG)";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Page header banner */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-gradient-brand overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block text-accent text-base sm:text-lg font-semibold mb-4 sm:mb-6 tracking-wide">
              شركاتنا
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5 sm:mb-6 text-shadow">
              أربع شركات <span className="text-accent">رؤية واحدة</span>
            </h1>
            <p className="text-primary-foreground/85 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              كيانات المنظومة تشكل سلسلة تكامل تصنع قيمة، وتترك أثراً، وتشكل منهج استدامة
            </p>
          </div>
        </section>

        {/* Companies grid */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {companies.map((company) => (
                <Link
                  key={company.code}
                  to={`/companies/${company.code}`}
                  className="group bg-card rounded-2xl p-6 sm:p-8 shadow-brand card-hover border-t-4 border-t-transparent hover:border-t-secondary transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <div className="h-12 sm:h-14 flex items-center">
                      <img
                        src={company.logo}
                        alt={company.nameAr}
                        className="max-h-12 sm:max-h-14 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {company.role}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2">
                    {company.nameAr}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary mb-3 sm:mb-4 font-semibold">
                    {company.tagline}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm flex-1">
                    {company.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                    {company.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    عرض تفاصيل الشركة
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CompaniesPage;
