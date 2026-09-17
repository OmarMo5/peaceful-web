import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "الصفحة غير موجودة – مجموعة السلام القابضة";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl sm:text-6xl font-extrabold text-primary">404</h1>
        <p className="mb-6 text-lg sm:text-xl text-muted-foreground">
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-brand text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-brand hover:-translate-y-0.5 hover:shadow-brand-lg transition-all duration-300"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
