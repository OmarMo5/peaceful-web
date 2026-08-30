import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoColored from "@/assets/logo-colored.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "شركاتنا", href: "#companies" },
  { label: "مشاريعنا", href: "#projects" },
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
        isScrolled || isMobileMenuOpen
          ? "bg-background shadow-brand py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Container - Premium presentation with dual logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center transition-all duration-300 hover:opacity-90 group py-1"
        >
          <div className="relative h-10 sm:h-11 md:h-12 flex items-center">
            {/* White Logo - visible when not scrolled */}
            <img 
              src={logoWhite} 
              alt="ASG - مجموعة السلام القابضة" 
              className={`h-full w-auto object-contain transition-all duration-500 ease-out absolute inset-0 ${
                isScrolled || isMobileMenuOpen
                  ? "opacity-0 scale-95" 
                  : "opacity-100 scale-100"
              }`}
            />
            {/* Colored Logo - visible when scrolled */}
            <img 
              src={logoColored} 
              alt="ASG - مجموعة السلام القابضة" 
              className={`h-full w-auto object-contain transition-all duration-500 ease-out ${
                isScrolled || isMobileMenuOpen
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-95"
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

      {/* Mobile Menu - Fixed position for scroll stability */}
      <div
        className={`md:hidden fixed top-0 right-0 left-0 z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        style={{ 
          top: isScrolled ? '56px' : '64px',
          transition: 'top 0.5s ease-out, opacity 0.3s ease-out'
        }}
      >
        {/* Solid background panel */}
        <div className="bg-background border-b border-border shadow-brand">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-foreground hover:text-primary hover:bg-primary/10 font-medium text-right py-3.5 px-5 rounded-xl transition-all duration-300 ${
                  isMobileMenuOpen ? 'animate-fade-up' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 75}ms`,
                  animationFillMode: 'both'
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu backdrop overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: isScrolled ? '56px' : '64px' }}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;