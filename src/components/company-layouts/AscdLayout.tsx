import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Layers, Hammer } from "lucide-react";
import type { CompanyLayoutProps } from "./types";

const AscdLayout = ({ company, companyProjects, otherCompanies }: CompanyLayoutProps) => {
  return (
    <>
      {/* Split hero */}
      <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 bg-gradient-brand overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground text-sm font-medium mb-8 sm:mb-10 transition-colors duration-300 hover-lift"
          >
            <ArrowRight className="w-4 h-4" />
            العودة لكل الشركات
          </Link>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-center">
            {/* Left: identity */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-right">
              <div className="inline-flex items-center justify-center bg-white rounded-2xl shadow-brand-lg px-6 py-5 sm:px-7 sm:py-6 mb-5 sm:mb-6">
                <img
                  src={company.logo}
                  alt={`${company.nameAr} (${company.code})`}
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <span className="inline-block text-xs sm:text-sm font-semibold text-accent bg-primary-foreground/10 px-3 py-1.5 rounded-full mb-4">
                {company.role}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-3 text-shadow">
                {company.nameAr}
              </h1>
              <p className="text-accent text-base sm:text-lg font-semibold">{company.tagline}</p>
            </div>

            {/* Right: stat panel */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm p-5 sm:p-6 text-center">
                <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-accent mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-extrabold text-primary-foreground">
                  {company.categories.length}
                </p>
                <p className="text-primary-foreground/75 text-xs sm:text-sm">مجالات عمل</p>
              </div>
              <div className="rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm p-5 sm:p-6 text-center">
                <Hammer className="w-6 h-6 sm:w-7 sm:h-7 text-accent mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-extrabold text-primary-foreground">
                  {companyProjects.length}
                </p>
                <p className="text-primary-foreground/75 text-xs sm:text-sm">مشاريع منفّذة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="border-r-4 border-secondary pr-5 sm:pr-6 mb-10 sm:mb-12">
              <p className="text-foreground/90 leading-relaxed text-base sm:text-lg md:text-xl">
                {company.fullIntro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
              {company.tags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-secondary" />}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories as a vertical timeline */}
      <section className="py-14 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-10 sm:mb-14">
            مجالات العمل والخدمات
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute top-2 bottom-2 right-5 sm:right-6 w-0.5 bg-border" />
            <div className="space-y-8 sm:space-y-10">
              {company.categories.map((cat, i) => (
                <div key={cat.title} className="relative flex items-start gap-4 sm:gap-5">
                  <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-brand text-primary-foreground flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-brand">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1.5 sm:pt-2">
                    <h3 className="font-bold text-foreground text-base sm:text-lg mb-1.5">{cat.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{cat.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* This company's projects */}
      {companyProjects.length > 0 && (
        <section className="py-14 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8 sm:mb-10">
              مشاريع {company.nameAr}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {companyProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border border-border flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-secondary" />
                    <span>{project.location}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other companies */}
      <section className="py-14 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8 sm:mb-10">
            شركات أخرى في المنظومة
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {otherCompanies.map((c) => (
              <Link
                key={c.code}
                to={`/companies/${c.code}`}
                className="group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border border-border flex flex-col items-center text-center"
              >
                <div className="h-10 sm:h-12 flex items-center mb-3 sm:mb-4">
                  <img src={c.logo} alt={c.nameAr} className="max-h-10 sm:max-h-12 w-auto object-contain" />
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">{c.nameAr}</h3>
                <p className="text-xs sm:text-sm text-secondary font-medium">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AscdLayout;
