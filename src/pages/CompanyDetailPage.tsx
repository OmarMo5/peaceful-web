import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companies, getCompanyByCode } from "@/data/companies";
import { projects } from "@/data/projects";
import AscLayout from "@/components/company-layouts/AscLayout";
import OswaLayout from "@/components/company-layouts/OswaLayout";

// ASC, ASCD and ASRD all share the same layout design; OSWA keeps its own distinct layout.
const layoutByCode = {
  ASC: AscLayout,
  ASCD: AscLayout,
  ASRD: AscLayout,
  OSWA: OswaLayout,
} as const;

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

  const Layout = layoutByCode[company.code as keyof typeof layoutByCode] ?? AscLayout;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Layout company={company} companyProjects={companyProjects} otherCompanies={otherCompanies} />
      </main>
      <Footer />
    </div>
  );
};

export default CompanyDetailPage;
