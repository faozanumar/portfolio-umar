import DataImage from "./data";
import { listTools, listProyek, listExperience } from "./data";
import { useLanguage } from "./context/LanguageContext";

function App() {
  const { t, pick } = useLanguage();

  return (
    <>
      <div
        className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-42"
        id="beranda"
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="order-2 md:order-1 animate__animated animate__fadeInUp animate__delay-1s">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t("hero.greeting")}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-loose mb-8 max-w-xl text-zinc-600 dark:text-zinc-300">
            {t("hero.description")}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://docs.google.com/document/d/1uQZmAcjy9mBs0DnNzr_bUCAh_3UO9wY6/edit?usp=sharing&ouid=109893818938046141470&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 min-w-[180px] flex items-center justify-center gap-2 rounded-2xl bg-violet-700 hover:bg-violet-600 text-white text-sm font-medium transition"
            >
              {t("hero.cvButton")} <i className="ri-eye-line ri-lg align-middle"></i>
            </a>

            <a
              href="#proyek"
              className="h-14 min-w-[180px] flex items-center justify-center gap-2 rounded-2xl bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-sm font-medium transition"
            >
              {t("hero.projectButton")} <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-b from-violet-600 via-indigo-700 to-slate-900 flex items-end justify-center">
            {/* glow */}
            <div className="absolute inset-0 bg-violet-500/20 blur-3xl"></div>

            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="relative z-10 w-full h-full object-contain translate-y-6 sm:translate-y-8 animate__animated animate__fadeInUp animate__delay-2s"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 scroll-mt-24 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10 text-zinc-700 dark:text-zinc-200">
            {t("tentang.bio")}
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  6 <span className="text-violet-500">+</span>
                </h1>
                <p>{t("tentang.projectsDone")}</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>{t("tentang.yearsExperience")}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="tools mt-32 py-10">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {t("tools.title")}
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-60"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {t("tools.description")}
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-300 dark:border-zinc-600 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 group transition-colors duration-300"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-100 dark:bg-zinc-800 p-1 rounded group-hover:bg-zinc-200 dark:group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{pick(tool.ket)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Tools */}
      </div>
      {/* End Tentang */}

      {/* Pengalaman */}
      <div className="experience mt-32 scroll-mt-24 py-10" id="experience">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("experience.title")}
        </h1>

        <p
          className="text-base/loose text-center opacity-60 mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("experience.description")}
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-600 via-zinc-300 dark:via-zinc-600 to-transparent -translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {listExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={exp.dad}
                data-aos-once="true"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-[18px] sm:left-1/2 top-6 w-5 h-5 rounded-full border-4 border-white dark:border-zinc-900 -translate-x-1/2 z-10 ${
                    exp.active
                      ? "bg-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                      : "bg-zinc-400 dark:bg-zinc-500"
                  }`}
                ></div>

                {/* Card */}
                <div className="ml-14 sm:ml-0 sm:w-[45%]">
                  <div className="bg-zinc-100/70 dark:bg-zinc-800/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl transition-all duration-300">
                    {/* Date */}
                    <span
                      className={`text-sm font-medium ${
                        exp.active
                          ? "text-violet-600 dark:text-violet-400"
                          : "text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {pick(exp.date)}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mt-2 mb-2">
                      {pick(exp.title)}
                    </h2>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{pick(exp.type)}</span>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-loose text-zinc-600 dark:text-zinc-300 mb-5">
                      {pick(exp.description)}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-600 dark:text-violet-300 text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Badge */}
                    {exp.active && (
                      <div className="mt-5">
                        <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-medium">
                          {t("experience.currentFocus")}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Pengalaman */}

      {/* Proyek */}
      <div className="proyek mt-32 scroll-mt-24 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("proyek.title")}
        </h1>
        <p
          className="text-base/loose text-center opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("proyek.description")}
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-md transition-colors duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="rounded-md"
              />
              <div>
                <h1 className="text-2xl font-bold my-4">{pick(proyek.nama)}</h1>
                <p className="text-base/loose mb-4 text-zinc-600 dark:text-zinc-300">
                  {pick(proyek.desk)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-300 dark:border-zinc-500 bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-white rounded-md font-semibold text-sm"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    className="bg-violet-700 text-white p-3 rounded-lg block border border-zinc-300 dark:border-zinc-600 hover:bg-violet-600"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("proyek.viewWebsite")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Proyek */}

      {/* Kontak */}
      <div className="kontak mt-24 scroll-mt-24 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          {t("kontak.title")}
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          {t("kontak.description")}
        </p>
        <form
          action="https://formsubmit.co/umarfaozan33@gmail.com"
          method="POST"
          className="bg-zinc-100 dark:bg-zinc-800 w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-colors duration-300"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="800"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm md:text-base">
                {t("kontak.nameLabel")}
              </label>
              <input
                type="text"
                name="nama"
                placeholder={t("kontak.namePlaceholder")}
                className="w-full border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm md:text-base">
                {t("kontak.emailLabel")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("kontak.emailPlaceholder")}
                className="w-full border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="pesan"
                className="font-semibold text-sm md:text-base"
              >
                {t("kontak.messageLabel")}
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="7"
                placeholder={t("kontak.messagePlaceholder")}
                className="w-full border border-zinc-300 dark:border-zinc-600 rounded-xl bg-white dark:bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full h-12 md:h-14 rounded-lg bg-violet-700 hover:bg-violet-600 text-white border border-zinc-300 dark:border-zinc-600 text-sm md:text-base font-medium transition"
              >
                {t("kontak.submit")}
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* End Kontak */}
    </>
  );
}

export default App;
