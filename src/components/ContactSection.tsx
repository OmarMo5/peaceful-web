import { useEffect, useRef, useState } from "react";
import { Globe, Mail, MapPin, AtSign, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Globe,
    label: "الموقع الإلكتروني",
    value: "asg.com.sa",
    dir: "ltr",
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "info@asg.com.sa",
    dir: "ltr",
  },
  {
    icon: AtSign,
    label: "تابعنا",
    value: "alsalam_asg",
    dir: "ltr",
  },
  {
    icon: MapPin,
    label: "المقر الرئيسي",
    value: "مكة المكرمة، المملكة العربية السعودية",
    dir: "rtl",
  },
];

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-secondary font-semibold text-base sm:text-lg mb-3 sm:mb-4 block">
            تواصل معنا
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            <p className="mb-6">نسعد بتواصلكم</p>
            <span className="text-primary">ونرحب باستفساراتكم</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
              معلومات التواصل
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-muted hover:bg-muted/80 transition-all duration-300 border border-border hover:-translate-y-0.5 hover:shadow-brand"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-brand flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">
                      {item.label}
                    </p>
                    <p
                      className="text-foreground font-medium text-sm sm:text-base"
                      dir={item.dir}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق رؤيتكم. لا تترددوا في التواصل معنا.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 shadow-brand border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-5 sm:mb-6">
                أرسل رسالة
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-sm sm:text-base"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                    الرسالة
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-brand text-primary-foreground py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 hover:opacity-90 transition-all duration-300 shadow-brand hover:-translate-y-0.5 hover:shadow-brand-lg text-sm sm:text-base"
                >
                  إرسال الرسالة
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" style={{ transform: "scaleX(-1)" }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;