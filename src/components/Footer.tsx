import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { label: "من نحن", href: "#about" },
  { label: "شركاتنا", href: "#companies" },
  { label: "قيمنا", href: "#values" },
  { label: "تواصل معنا", href: "#contact" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-3xl font-bold mb-4 inline-block"
            >
              ASC<span className="text-accent">…</span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed max-w-md mb-6">
              مجموعة السلام - نصنع الإرث الحضاري ونبني جسور المعرفة من خلال تقديم تجارب متحفية استثنائية تجمع بين أصالة التراث وإبداع التقنية.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li dir="ltr" className="text-left">+966 12 345 6789</li>
              <li dir="ltr" className="text-left">info@asc-group.com</li>
              <li>المملكة العربية السعودية، الرياض</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} مجموعة السلام. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
