import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-32 py-6 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        {/* Brand */}
        <p className="mt-1 text-center text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Umar Nur Faozan. {t("footer.rights")}
        </p>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          <a
            href="#beranda"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            {t("nav.beranda")}
          </a>
          <a
            href="#tentang"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            {t("nav.tentang")}
          </a>
          <a
            href="#proyek"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            {t("nav.proyek")}
          </a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/umarnurfaozan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a
            href="https://github.com/faozanumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/faozanumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-violet-500 dark:hover:text-violet-400 transition"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
