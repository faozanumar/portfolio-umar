import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10">
        {/* ================= LEFT CONTENT ================= */}
        <div className="order-2 md:order-1 animate__animated animate__fadeInUp animate__delay-1s">
          {/* Quote */}
          {/* <div className="inline-flex items-center gap-3 mb-6 bg-zinc-800 p-4 rounded-2xl">
            <q className="text-sm sm:text-base whitespace-nowrap">
              Kode yang indah, lahir dari ketekunan.
            </q>
          </div> */}

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Hi, Saya Umar Nur Faozan
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base leading-loose mb-8 max-w-xl">
            Saya menaruh ketertarikan pada bidang front-end development dan
            WordPress. Saat ini saya masih dalam proses belajar, mencoba
            berbagai pendekatan baru, dan perlahan meningkatkan kemampuan
            melalui pengalaman proyek.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://docs.google.com/document/d/1aa194pOwAAz77clP1Diy_5LrregZJU7i/edit?usp=sharing&ouid=109893818938046141470&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 min-w-[180px] flex items-center justify-center gap-2 rounded-2xl bg-violet-700 hover:bg-violet-600 text-sm font-medium transition"
            >
              Lihat CV <i className="ri-eye-line ri-lg align-middle"></i>
            </a>

            <a
              href="#proyek"
              className="h-14 min-w-[180px] flex items-center justify-center gap-2 rounded-2xl bg-zinc-700 hover:bg-zinc-600 text-sm font-medium transition"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
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
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
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
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Umar Nur Faozan, seorang Front-End Web
            Developer dengan minat pada pengembangan website dan WordPress. Saya
            percaya bahwa tampilan dan fungsionalitas website perlu berjalan
            seimbang, sehingga setiap proyek yang saya kerjakan tidak hanya
            terlihat rapi, tetapi juga nyaman digunakan oleh pengguna.
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
                  5 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  1 <span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            Website ataupun Design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Proyek
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa proyek yang telah saya buat.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4 ">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.co/umarfaozan33@gmail.com"
          method="POST"
          className="bg-zinc-800 w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="800"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm md:text-base">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                className="w-full border border-zinc-600 rounded-xl bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm md:text-base">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                className="w-full border border-zinc-600 rounded-xl bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="pesan"
                className="font-semibold text-sm md:text-base"
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="7"
                placeholder="Masukan Pesan..."
                className="w-full border border-zinc-600 rounded-xl bg-zinc-900/30 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full h-12 md:h-14 rounded-lg bg-violet-700 hover:bg-violet-600 border border-zinc-600 text-sm md:text-base font-medium transition"
              >
                Kirim Pesan
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
