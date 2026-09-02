import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel01.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/php.png";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/nodejs.png";
import Tools9 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: { id: "Code Editor", en: "Code Editor" },
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: { id: "Framework", en: "Framework" },
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: { id: "Framework", en: "Framework" },
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: { id: "Framework", en: "Framework" },
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Tailwind CSS",
    ket: { id: "Framework", en: "Framework" },
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    ket: { id: "Bahasa Pemrograman", en: "Language" },
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: { id: "Bahasa Pemrograman", en: "Language" },
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: { id: "Javascript Runtime", en: "Javascript Runtime" },
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: { id: "Repository", en: "Repository" },
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: { id: "Aplikasi Design", en: "Design App" },
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: { id: "Aplikasi Design", en: "Design App" },
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: {
      id: "Website Sistem Manajemen Gudang Digital (Digihouse)",
      en: "Digital Warehouse Management System Website (Digihouse)",
    },
    desk: {
      id: "DigiHouse adalah aplikasi untuk mencari, menyewa, dan mengelola ruang gudang secara praktis.",
      en: "DigiHouse is an application for finding, renting, and managing warehouse space with ease.",
    },
    tools: ["ReactJS", "TailwindCSS"],
    dad: "200",
    link: "https://digihouse-jaya.netlify.app/",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: {
      id: "Website Media Edukasi Pengenalan Sayur-Sayuran (Buntil Edu)",
      en: "Vegetable Education Media Website (Buntil Edu)",
    },
    desk: {
      id: "Media pembelajaran interaktif untuk mengenal berbagai jenis sayur-sayuran.",
      en: "An interactive learning platform for getting to know different kinds of vegetables.",
    },
    tools: ["HTML", "CSS", "Javascript"],
    dad: "300",
    link: "https://buntil-edu.vercel.app/",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: {
      id: "AIUE Thrift Shop",
      en: "AIUE Thrift Shop",
    },
    desk: {
      id: "Website e-commerce thrift, berbagai pilihan pakaian bekas berkualitas.",
      en: "A thrift e-commerce website offering a variety of quality second-hand clothing.",
    },
    tools: ["Google Sites"],
    dad: "400",
    link: "https://sites.google.com/ittelkom-pwt.ac.id/aiue-thrift-shop/",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: {
      id: "Website Elite Fish Nutrition",
      en: "Elite Fish Nutrition Website",
    },
    desk: {
      id: "Website promosi nutrisi ikan untuk meningkatkan pertumbuhan dan hasil panen.",
      en: "A promotional website for fish nutrition products to boost growth and harvest yields.",
    },
    tools: ["WordPress", "Elementor"],
    dad: "500",
    link: "https://elitefishnutrition.page.gd/",
  },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: { id: "Web Portfolio", en: "Web Portfolio" },
  //   desk: {
  //     id: "Menampilkan karya dan pengalaman profesional dalam bentuk digital.",
  //     en: "Showcasing professional work and experience in digital form.",
  //   },
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: { id: "Company Profile 2.0", en: "Company Profile 2.0" },
  //   desk: {
  //     id: "Platform digital untuk memperkenalkan bisnis Anda secara profesional.",
  //     en: "A digital platform to professionally introduce your business.",
  //   },
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];

export const listExperience = [

  {
    id: 1,
    date: { id: "2026 - Sekarang", en: "2026 - Present" },
    title: { id: "Full Stack Web Developer", en: "Full Stack Web Developer" },
    company: "PT. Morich Indo Fashion",
    type: { id: "Full-time", en: "Full-time" },
    description: {
      id: "Mengembangkan dan melakukan maintenance aplikasi web internal perusahaan, termasuk melanjutkan migrasi sistem EXIM dari PHP Native ke Laravel. Mengembangkan fitur baru, memperbaiki bug, mengelola database, serta melakukan pengembangan dan integrasi fitur terkait proses bisnis perusahaan.",
      en: "Developing and maintaining the company's internal web applications, including continuing the migration of the EXIM system from Native PHP to Laravel. Developing new features, fixing bugs, managing databases, and implementing and integrating features related to the company's business processes.",
    },
    tech: ["PHP", "Laravel", "JavaScript", "MySQL"],
    active: true,
    dad: "200",
  },

  {
    id: 2,
    date: { id: "2025 - 2026", en: "2025 - 2026" },
    title: { id: "IT Web Developer Intern", en: "IT Web Developer Intern" },
    company: "PT. Morich Indo Fashion",
    type: { id: "Magang", en: "Internship" },
    description: {
      id: "Mengembangkan aplikasi web rekrutmen HR untuk manajemen kandidat, menambahkan fitur baru, melakukan perbaikan bug, serta membantu pengembangan dan maintenance aplikasi web internal perusahaan.",
      en: "Developed an HR recruitment web application for candidate management, added new features, fixed bugs, and contributed to the development and maintenance of the company's internal web applications.",
    },
    tech: ["PHP", "JavaScript", "Laravel"],
    active: false,
    dad: "300",
  },

  {
    id: 3,
    date: { id: "2024 - 2024", en: "2024 - 2024" },
    title: { id: "Web Developer Intern", en: "Web Developer Intern" },
    company: "PT Cazh Teknologi Inovasi",
    type: { id: "Magang", en: "Internship" },
    description: {
      id: "Berkontribusi dalam pengembangan website, perencanaan project, deployment, dokumentasi, serta pembuatan presentasi evaluasi selama kegiatan magang.",
      en: "Contributed to website development, project planning, deployment, documentation, and creating evaluation presentations during the internship.",
    },
    tech: ["HTML", "CSS", "JavaScript", "React"],
    active: false,
    dad: "400",
  },

];
