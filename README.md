# Personal Portfolio Website - Atha

Website portofolio modern, responsif, dan interaktif yang dibangun menggunakan **React**, **Vite**, dan **Tailwind CSS**. Didesain dengan fokus pada estetika minimalis menggunakan font **Inter** dan fitur **Dark/Light Mode**.

## 🚀 Fitur Utama

* **Dark & Light Mode**: Transisi tema yang halus menggunakan CSS Variables dan LocalStorage.
* **Modern Hero Section**: Perkenalan diri dengan animasi *status pulse* yang interaktif.
* **Tech Stack Marquee**: Slider berjalan otomatis tanpa henti (seamless) menggunakan **Swiper.js**.
* **Responsive Project Cards**: Galeri proyek dengan efek *glassmorphism*, badge teknologi, dan optimasi gambar.
* **Sticky Navigation**: Navbar transparan dengan efek blur (Glassmorphism) yang memudahkan navigasi.
* **Fully Responsive**: Optimal untuk tampilan Desktop, Tablet, hingga Mobile.

## 🛠️ Tech Stack

* React + Vite
* Tailwind CSS 4
* Swiper.js - Untuk slider Tech Stack
* FontAwesome - Untuk ikonografi
* Google Fonts (Inter) - Tipografi modern

## 📂 Struktur Folder

```text
├── client/
│   ├── index.html               # Entry HTML
│   └── src/                     # Kode React
│       ├── App.jsx              # Komponen utama
│       ├── components/          # Button, Footer, dll.
│       └── hooks/
├── public/img/                  # Aset gambar & icon
├── data/portfolio.js            # Data statis (projects, experiences, skills)
├── vite.config.js               # Konfigurasi Vite
├── vercel.json                  # Konfigurasi deploy Vercel
└── package.json
```

## 🏁 Memulai

### Prasyarat

Pastikan Anda sudah menginstal Node.js di perangkat Anda.

### Instalasi

```bash
git clone https://github.com/Ezrafi/website-portofolio.git
cd website-portofolio
npm install
```

### Menjalankan (Development)

```bash
npm run dev
```

Buka di browser: http://localhost:5173

### Build (Production)

```bash
npm run build
npm run preview
```

## 🚀 Deploy ke Vercel

Project ini adalah **static site** (Vite build). Hubungkan repo ke Vercel, lalu:

* Build Command: `vite build`
* Output Directory: `dist`

Setiap push ke `main` otomatis memicu deploy baru.