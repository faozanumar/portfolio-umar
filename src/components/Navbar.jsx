import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (!target) return;

    const navbarHeight = 72;

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    setTimeout(() => {
      const top =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }, 800);

    history.pushState(null, "", targetId);
    setOpenMenu(false);
  };

  const navItems = [
    { key: "beranda", href: "#beranda" },
    { key: "tentang", href: "#tentang" },
    { key: "experience", href: "#experience" },
    { key: "proyek", href: "#proyek" },
    { key: "kontak", href: "#kontak" },
  ];

  const ThemeLangButtons = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        onClick={toggleLanguage}
        aria-label={t("a11y.toggleLanguage")}
        className="h-10 min-w-10 px-3 flex items-center justify-center gap-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 hover:bg-violet-50 dark:hover:bg-zinc-700 text-xs font-bold transition"
        title={t("a11y.toggleLanguage")}
      >
        {language === "id" ? "ID" : "EN"}
      </button>
      <button
        onClick={toggleTheme}
        aria-label={t("a11y.toggleTheme")}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/70 hover:bg-violet-50 dark:hover:bg-zinc-700 transition"
        title={t("a11y.toggleTheme")}
      >
        {theme === "dark" ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-violet-700" />
        )}
      </button>
    </div>
  );

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 py-5 transition-all duration-300 ${
        active
          ? "bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="logo z-50">
          <h1 className="text-2xl font-bold">
            Portfolio<span className="text-violet-600">.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu absolute left-1/2 -translate-x-1/2 hidden md:flex">
          <ul className="menu flex items-center gap-6 lg:gap-8 text-sm lg:text-base px-5 py-3 rounded-br-2xl rounded-bl-2xl transition-all duration-300">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-medium hover:text-violet-500 dark:hover:text-violet-400 transition"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Theme + Language toggles */}
        <ThemeLangButtons className="hidden md:flex" />

        {/* Mobile: toggles + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeLangButtons />
          <button
            className="z-50"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label={openMenu ? t("a11y.closeMenu") : t("a11y.openMenu")}
          >
            {openMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 ${
            openMenu ? "right-0" : "-right-full"
          } w-[70%] h-screen bg-white dark:bg-black shadow-lg transition-all duration-300 md:hidden z-40`}
        >
          <ul className="flex flex-col gap-8 p-10 pt-24">
            {navItems.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-bold hover:text-violet-500 dark:hover:text-violet-400 transition"
                >
                  {t(`nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
