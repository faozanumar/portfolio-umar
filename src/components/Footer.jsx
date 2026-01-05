const Footer = () => {
  return (
    <footer className="mt-32 py-6 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
        {/* Brand */}
        <p className="mt-1 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Umar Nur Faozan.
        </p>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
          <a href="#beranda" className="hover:text-violet-400 transition">
            Beranda
          </a>
          <a href="#tentang" className="hover:text-violet-400 transition">
            Tentang
          </a>
          <a href="#proyek" className="hover:text-violet-400 transition">
            Proyek
          </a>
        </nav>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-violet-400 transition"
          >
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
