import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import footerBg from "@/assets/footer-bg.png";
import logo from "@/assets/logo.png";

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
    <footer 
      className="relative text-primary-foreground"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-secondary/90" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block mb-5 sm:mb-6 transition-opacity duration-300 hover:opacity-90"
            >
              <img 
                src={logo} 
                alt="ASG - مجموعة السلام القابضة" 
                className="h-10 sm:h-11 md:h-12 w-auto"
              />
            </a>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-5 sm:mb-6 text-sm sm:text-base">
              مجموعة السلام - نصنع الإرث الحضاري ونبني جسور المعرفة من خلال تقديم تجارب متحفية استثنائية تجمع بين أصالة التراث وإبداع التقنية.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">روابط سريعة</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-sm sm:text-base hover-lift"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">تواصل معنا</h4>
            <ul className="space-y-2 sm:space-y-3 text-primary-foreground/80 text-sm sm:text-base">
              <li dir="ltr" className="text-left">+966 12 345 6789</li>
              <li dir="ltr" className="text-left">info@asc-group.com</li>
              <li>المملكة العربية السعودية، الرياض</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-primary-foreground/60 text-xs sm:text-sm text-center sm:text-right">
              © {new Date().getFullYear()} مجموعة السلام. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">
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