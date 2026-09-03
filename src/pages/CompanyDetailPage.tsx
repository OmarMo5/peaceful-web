import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies, getCompanyByCode } from "@/data/companies";
import { projects } from "@/data/projects";

const CompanyDetailPage = () => {
  const { code } = useParams<{ code: string }>();
  const company = getCompanyByCode(code);

  useEffect(() => {
    if (company) {
      document.title = `${company.nameAr} (${company.code}) – مجموعة السلام القابضة`;
      window.scrollTo(0, 0);
    }
  }, [company]);

  if (!company) {
    return <Navigate to="/companies" replace />;
  }

  const otherCompanies = companies.filter((c) => c.code !== company.code);
  const companyProjects = projects.filter((p) => p.company === company.code);

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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              to="/companies"
              className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground text-sm font-medium mb-8 sm:mb-10 transition-colors duration-300 hover-lift"
            >
              <ArrowRight className="w-4 h-4" />
              العودة لكل الشركات
            </Link>

            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center gap-3 sm:gap-4 bg-white rounded-2xl sm:rounded-3xl shadow-brand-lg px-6 py-5 sm:px-9 sm:py-7 mb-6 sm:mb-8"
                role="img"
                aria-label={`${company.nameAr} (${company.code})`}
              >
                <div className="flex items-end gap-1 sm:gap-1.5 h-9 sm:h-11 md:h-12 shrink-0">
                  <span className="w-1.5 sm:w-2 h-full rounded-sm bg-gradient-brand" />
                  <span className="w-1.5 sm:w-2 h-2/3 rounded-sm bg-gradient-brand" />
                  <span className="w-1.5 sm:w-2 h-full rounded-sm bg-gradient-brand" />
                </div>
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-brand text-transparent tracking-tight leading-none"
                  style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
                >
                  {company.code}
                </span>
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

        {/* Details */}
        <section className="py-14 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4">
                {company.fullIntro}
              </p>

              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
                {company.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
                مجالات العمل والخدمات
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {company.categories.map((cat, i) => (
                  <div
                    key={cat.title}
                    className="rounded-2xl bg-muted border border-border p-5 sm:p-6 md:p-7 card-hover"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">{cat.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{cat.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* This company's projects */}
        {companyProjects.length > 0 && (
          <section className="py-14 sm:py-16 md:py-20 bg-muted">
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
        <section className="py-14 sm:py-16 md:py-20 bg-background">
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
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetailPage;
