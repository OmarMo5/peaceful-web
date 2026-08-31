export interface Project {
  id: string;
  company: "ASC" | "ASCD" | "ASRD" | "OSWA";
  title: string;
  location: string;
  status: string;
  year: string;
  stats: string[];
  description: string;
}

export const companyColors: Record<string, string> = {
  ASC: "bg-primary/10 text-primary",
  ASCD: "bg-secondary/10 text-secondary",
  ASRD: "bg-brand-blue/10 text-brand-blue",
  OSWA: "bg-accent/20 text-accent-foreground",
};

export const companyFullNames: Record<string, string> = {
  ASC: "شركة السلام",
  ASCD: "السلام للمقاولات والديكورات",
  ASRD: "السلام للبحث العلمي والتطوير",
  OSWA: "أسوة للهدايا",
};

export const projects: Project[] = [
  {
    id: "asc-madinah-museum",
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "المدينة المنورة — جوار المسجد النبوي",
    status: "دائم",
    year: "2021م",
    stats: ["1800م²", "31 قسماً"],
    description: "يثبت قدرة المجموعة على تشغيل وجهة دائمة في أكثر المواقع حساسية وازدحاماً في العالم.",
  },
  {
    id: "asc-makkah-museum",
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "مكة المكرمة — أبراج الساعة",
    status: "دائم",
    year: "2025م",
    stats: ["31+ قسماً", "200 عرض تفاعلي", "7 لغات"],
    description: "في قلب مهبط الوحي، يقدّم تجربة متكاملة لضيوف الرحمن.",
  },
  {
    id: "asc-rabat-museum",
    company: "ASC",
    title: "المتحف الدولي للسيرة النبوية",
    location: "الرباط، المغرب — داكار",
    status: "دائم",
    year: "2022م",
    stats: ["2000م²", "25 قسماً"],
    description: "برعاية ملكية وتعاون مع الإيسيسكو، يثبت قدرة المجموعة على تصدير النموذج دولياً.",
  },
  {
    id: "oswa-qasas-gifts",
    company: "OSWA",
    title: "هدايا لمعرض تجربة السيرة",
    location: "شركة قصص",
    status: "دائم",
    year: "2025م",
    stats: ["+50 منتج"],
    description: "تقديم هدايا متنوعة لمتجر تجربة السيرة التابع لقصص، إحدى شركات صندوق الاستثمارات العامة.",
  },
  {
    id: "oswa-hajj-gifts",
    company: "OSWA",
    title: "هدايا من وحي الحرمين",
    location: "وزارة الحج والعمرة",
    status: "موسمي",
    year: "2026م",
    stats: ["+30 منتج"],
    description: "اعتماد هدايا مخصصة للحجاج والمعتمرين من خلال وزارة الحج والعمرة.",
  },
  {
    id: "ascd-arafat-camps",
    company: "ASCD",
    title: "مخيمات الخطوط السعودية",
    location: "مشعر عرفات",
    status: "موسمي",
    year: "2026م",
    stats: ["1000م²", "7 خيام", "500 مهندس وفني"],
    description: "تنفيذ وتجهيز المخيمات وتشغيل ميداني متكامل، يجسد قدرة المجموعة على إدارة المشاريع الموسمية الضخمة في واحدة من أكثر البيئات التشغيلية كثافةً وحساسية.",
  },
  {
    id: "ascd-hajj-expo",
    company: "ASCD",
    title: "مؤتمر ومعرض الحج والعمرة",
    location: "جدة",
    status: "موسمي",
    year: "2026م",
    stats: ["3 سنوات"],
    description: "تصميم وتنفيذ الأجنحة والبوثات، حلول تنفيذية متكاملة. نفّذت المجموعة أجنحة إثراء، الضيافة القابضة، أشرقت، المسافر، وشركة المياه السعودية.",
  },
  {
    id: "asrd-kaaba-panorama",
    company: "ASRD",
    title: "بانوراما البيت الحرام",
    location: "إعداد المحتوى",
    status: "معرض إبداعي",
    year: "2026م",
    stats: [],
    description: "تقديم محتوى علمي محكم ومؤصل لمشروع بانوراما البيت الحرام من خلال تجربة قصصية وسردية لعرض إبداعي.",
  },
  {
    id: "asrd-hujra-panorama",
    company: "ASRD",
    title: "بانوراما الحجرة النبوية الشريفة",
    location: "المدينة المنورة",
    status: "إعداد المحتوى",
    year: "2026م",
    stats: [],
    description: "تجهيز المحتوى العلمي لبانوراما الحجرة النبوية الشريفة بأسلوب علمي مؤصل يناسب العرض المرئي.",
  },
];

export const getProjectById = (id: string | undefined) => projects.find((p) => p.id === id);
