# 🌐 Personal Portfolio Website

Selamat datang! Repositori ini berisi source code untuk website
portfolio pribadi yang dibuat oleh seorang web developer. Tujuan utama
website ini adalah:

- Menampilkan profil dan cerita singkat tentang diri saya.
- Menunjukkan skill teknis dan tools yang dikuasai.
- Menampilkan proyek-proyek (project) beserta link demo atau source code.
- Menyediakan kontak dan tautan ke media sosial.

Website ini dikembangkan dengan fokus pada performa, aksesibilitas, dan
desain yang responsif.

---

## 🚀 Tech Stack

| Kategori        | Teknologi / Tool      |
| --------------- | --------------------- |
| Frontend        | React.js (JSX)        |
| Build Tool      | Vite                  |
| Styling         | Tailwind CSS          |
| Package Manager | NPM                   |
| Lainnya         | HTML, CSS, JavaScript |

---

## 🛠️ Fitur Utama

- ✅ Layout responsive untuk perangkat mobile dan desktop.
- ✅ Halaman/section: About, Skills, Projects, Contact.
- ✅ Integrasi link ke akun GitHub, LinkedIn, dan media sosial lain.
- ✅ Transisi dan animasi ringan untuk pengalaman pengguna yang halus.
- ✅ Optimasi kecepatan agar waktu muat rendah.

---

## 📁 Struktur Proyek

```
my-portfolio/
├─ public/
│  └─ assets/
│     ├─ proyek/
│     └─ tools/
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  └─ PreLoader.jsx
│  ├─ data.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ package.json
├─ vite.config.js
└─ eslint.config.js
```

File utama:

- `src/main.jsx` – Entry point aplikasi.
- `src/App.jsx` – Komponen utama yang memuat router atau section.
- `src/components` – Komponen presentasional seperti navbar dan footer.
- `src/data.js` – Data statis seperti daftar proyek atau skill.

---

## ⚙️ Instalasi & Pengembangan Lokal

1. **Clone repository**
   ```bash
   git clone https://github.com/username/my-portfolio.git
   cd my-portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan server development**

   ```bash
   npm run dev
   ```

   Buka `http://localhost:5173` di browser untuk melihat hasilnya.

4. **Membangun untuk produksi**
   ```bash
   npm run build
   ```
   File hasil build akan berada di folder `dist/`.

---

## 🚢 Deployment

Website ini mudah dideploy di berbagai layanan statis seperti Vercel,
Netlify, GitHub Pages, atau Firebase Hosting. Contoh singkat untuk Vercel:

```bash
npm i -g vercel
vercel
```

Ikuti instruksi CLI untuk menghubungkan ke akun dan memilih direktori
build (`dist`).

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Jika Anda ingin menambahkan fitur,
memperbaiki bug, atau meningkatkan dokumentasi.

1. Fork repositori ini.
2. Buat branch baru: `git checkout -b fitur-anda`.
3. Commit perubahan Anda: `git commit -m "Menambahkan fitur X"`.
4. Push branch ke fork Anda dan buat pull request.

---

## 📬 Kontak

- Email: yourname@example.com
- GitHub: [username](https://github.com/username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

Terima kasih telah mengunjungi portfolio saya! 🙏
