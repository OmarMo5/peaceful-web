import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, companyColors } from "@/data/projects";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "مشاريعنا – مجموعة السلام القابضة (ASG)";
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
              أعمالنا
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-5 sm:mb-6 text-shadow">
              مشاريع <span className="text-accent">تصنع أثراً</span>
            </h1>
            <p className="text-primary-foreground/85 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              منظومة من المشاريع الحضارية والموسمية تمتد من المتاحف العالمية إلى المخيمات والمنتجات والمحتوى العلمي
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-16 sm:py-20 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border border-border flex flex-col transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md ${companyColors[project.company]}`}>
                      {project.company}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-muted border border-border">{project.status}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-start gap-1.5 text-xs sm:text-sm text-muted-foreground mb-3">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-secondary" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {project.stats.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border mb-4">
                      {project.stats.map((stat) => (
                        <span key={stat} className="text-[11px] sm:text-xs font-semibold px-2 py-1 rounded-md bg-primary/5 text-primary">
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300 mt-auto">
                    عرض تفاصيل المشروع
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

export default ProjectsPage;
