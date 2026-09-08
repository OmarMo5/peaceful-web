import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Quote, BookOpen, PenTool, Lightbulb, Users } from "lucide-react";
import type { CompanyLayoutProps } from "./types";

const categoryIcons = [BookOpen, PenTool, Lightbulb, Users];

const AsrdLayout = ({ company, companyProjects, otherCompanies }: CompanyLayoutProps) => {
  return (
    <>
      {/* Light editorial hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-section-light overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium mb-8 sm:mb-10 transition-colors duration-300 hover-lift"
          >
            <ArrowRight className="w-4 h-4" />
            العودة لكل الشركات
          </Link>

          <div className="flex flex-col items-center text-center">
            <img
              src={company.logo}
              alt={`${company.nameAr} (${company.code})`}
              className="h-16 sm:h-20 w-auto object-contain mb-6 sm:mb-8 drop-shadow-sm"
            />

            <span className="inline-block text-xs sm:text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full mb-4 sm:mb-5">
              {company.role}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-3 sm:mb-4">
              {company.nameAr}
            </h1>
            <p className="text-primary text-base sm:text-lg font-semibold">{company.tagline}</p>
          </div>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="py-14 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Quote className="w-9 h-9 sm:w-10 sm:h-10 text-secondary/30 mx-auto mb-4 sm:mb-5" />
            <p className="text-foreground/90 leading-loose text-lg sm:text-xl md:text-2xl font-medium mb-10 sm:mb-12">
              {company.fullIntro}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
              {company.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-secondary/30 text-secondary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories as an icon grid */}
      <section className="py-14 sm:py-16 md:py-20 bg-section-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-10 sm:mb-14">
            مجالات العمل والخدمات
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {company.categories.map((cat, i) => {
              const Icon = categoryIcons[i % categoryIcons.length];
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl bg-card border border-border p-5 sm:p-6 card-hover"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cat.text}</p>
                </div>
              );
            })}
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

export default AsrdLayout;
