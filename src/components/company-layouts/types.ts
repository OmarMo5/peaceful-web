import type { Company } from "@/data/companies";
import type { Project } from "@/data/projects";

export interface CompanyLayoutProps {
  company: Company;
  companyProjects: Project[];
  otherCompanies: Company[];
}
