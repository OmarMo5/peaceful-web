import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectById, companyColors, companyFullNames } from "@/data/projects";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} – مجموعة السلام القابضة`;
      window.scrollTo(0, 0);
    }
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 3);

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
              to="/projects"
              className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground text-sm font-medium mb-8 sm:mb-10 transition-colors duration-300 hover-lift"
            >
              <ArrowRight className="w-4 h-4" />
              العودة لكل المشاريع
            </Link>

            <div className="flex flex-col items-center text-center">
              <Link
                to={`/companies/${project.company}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold bg-primary-foreground text-primary px-3 py-1.5 rounded-full mb-5 sm:mb-6 hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
              >
                {project.company} — {companyFullNames[project.company]}
              </Link>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-5 text-shadow max-w-3xl">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-primary-foreground/85 text-sm sm:text-base">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-accent" />
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-accent" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-accent" />
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-14 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8 sm:mb-10">
                {project.description}
              </p>

              {project.stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {project.stats.map((stat) => (
                    <div
                      key={stat}
                      className="text-center p-4 sm:p-5 rounded-xl bg-muted border border-border"
                    >
                      <p className="text-lg sm:text-xl font-extrabold text-primary">{stat}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Other projects */}
        <section className="py-14 sm:py-16 md:py-20 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8 sm:mb-10">
              مشاريع أخرى
            </h2>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="group bg-card rounded-2xl p-5 sm:p-6 shadow-brand card-hover border border-border flex flex-col"
                >
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md w-fit mb-3 ${companyColors[p.company]}`}>
                    {p.company}
                  </span>
                  <h3 className="font-bold text-foreground text-sm sm:text-base mb-1.5 leading-snug">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{p.location}</p>
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

export default ProjectDetailPage;
