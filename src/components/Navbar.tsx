import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "من نحن", href: "#about" },
  { label: "شركاتنا", href: "#companies" },
  { label: "قيمنا", href: "#values" },
  { label: "تواصل معنا", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-brand py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Container - Premium presentation */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-90 group"
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="ASG - مجموعة السلام القابضة" 
              className={`w-auto object-contain transition-all duration-500 ease-out ${
                isScrolled 
                  ? "h-10 sm:h-11 md:h-12" 
                  : "h-11 sm:h-12 md:h-14"
              }`}
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-2 lg:gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
          isScrolled ? "bg-muted/80" : "bg-white/10 backdrop-blur-sm"
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`nav-link text-sm lg:text-base font-medium transition-all duration-300 px-4 py-2 rounded-full hover-lift ${
                isScrolled
                  ? "text-foreground hover:text-primary hover:bg-primary/10"
                  : "text-white hover:text-white hover:bg-white/20"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`flex md:hidden items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${
            isScrolled 
              ? "bg-primary/10 text-primary hover:bg-primary/20" 
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
          aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          <div className="relative w-6 h-6">
            <Menu 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              }`} 
            />
            <X 
              size={24} 
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              }`} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full right-0 left-0 bg-background/98 backdrop-blur-md shadow-brand transition-all duration-400 ease-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-foreground hover:text-primary hover:bg-muted font-medium text-right py-3 px-4 rounded-xl transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;