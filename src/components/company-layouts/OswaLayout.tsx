import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Gift, Sparkles, Package } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { CompanyLayoutProps } from "./types";

const decorativeIcons = [Gift, Sparkles, Package];

const OswaLayout = ({ company, companyProjects, otherCompanies }: CompanyLayoutProps) => {
  return (
    <>
      {/* Bold hero with decorative icons */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 md:pt-48 md:pb-24 bg-gradient-brand overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {decorativeIcons.map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-primary-foreground w-16 h-16 sm:w-24 sm:h-24"
              style={{
                top: `${15 + i * 25}%`,
                [i % 2 === 0 ? "right" : "left"]: `${5 + i * 8}%`,
                transform: `rotate(${i * 15 - 10}deg)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground text-sm font-medium mb-8 sm:mb-10 transition-colors duration-300 hover-lift"
          >
            <ArrowRight className="w-4 h-4" />
            العودة لكل الشركات
          </Link>

          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center bg-white rounded-full shadow-brand-lg p-6 sm:p-8 mb-6 sm:mb-8">
              <img
                src={company.logo}
                alt={`${company.nameAr} (${company.code})`}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <span className="inline-block text-xs sm:text-sm font-semibold text-accent bg-primary-foreground/10 px-3 py-1.5 rounded-full mb-4 sm:mb-5">
              {company.role}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-3 sm:mb-4 text-shadow">
              {company.nameAr}
            </h1>
            <p className="text-accent text-base sm:text-lg font-semibold">{company.tagline}</p>
          </div>
        </div>
      </section>

      {/* Intro + tags */}
      <section className="py-14 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
              {company.fullIntro}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {company.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories as an accordion */}
      <section className="py-14 sm:py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8 sm:mb-10">
            مجالات العمل والخدمات
          </h2>
          <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border shadow-brand px-5 sm:px-7">
            <Accordion type="single" collapsible defaultValue="item-0">
              {company.categories.map((cat, i) => (
                <AccordionItem key={cat.title} value={`item-${i}`}>
                  <AccordionTrigger className="text-right hover:no-underline py-5 sm:py-6">
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary text-secondary-foreground text-xs sm:text-sm font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-bold text-foreground text-sm sm:text-base">{cat.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pr-10 sm:pr-11">
                    {cat.text}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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

export default OswaLayout;
