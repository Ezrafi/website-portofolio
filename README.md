# Personal Portfolio Website - Atha

Website portofolio modern, responsif, dan interaktif yang dibangun menggunakan **Node.js**, **Express**, dan **Handlebars (HBS)**. Didesain dengan fokus pada estetika minimalis menggunakan font **Inter** dan fitur **Dark/Light Mode**.

## 🚀 Fitur Utama

* **Dark & Light Mode**: Transisi tema yang halus menggunakan CSS Variables dan LocalStorage.
* **Modern Hero Section**: Perkenalan diri dengan animasi *status pulse* yang interaktif.
* **Tech Stack Marquee**: Slider berjalan otomatis tanpa henti (seamless) menggunakan **Swiper.js**.
* **Responsive Project Cards**: Galeri proyek dengan efek *glassmorphism*, badge teknologi, dan optimasi gambar.
* **Sticky Navigation**: Navbar transparan dengan efek blur (Glassmorphism) yang mempermudah navigasi.
* **Fully Responsive**: Optimal untuk tampilan Desktop, Tablet, hingga Mobile.

## 🛠️ Tech Stack

**Backend:**
* Node.js
* Express.js
* Handlebars (HBS)

**Frontend:**
* CSS3 (Custom Variables & Grid/Flexbox)
* JavaScript (Vanilla JS)
* [Swiper.js](https://swiperjs.com/) - Untuk slider Tech Stack
* [FontAwesome](https://fontawesome.com/) - Untuk ikonografi
* [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) - Tipografi modern

## 📂 Struktur Folder

```text
├── public/
│   ├── css/
│   │   ├── global.css      # Variabel warna & reset
│   │   ├── navbar.css      # Styling navigasi & theme toggle
│   │   ├── hero.css        # Styling perkenalan utama
│   │   ├── tech.css        # Styling slider swiper
│   │   ├── projects.css    # Styling grid & kartu proyek
│   │   └── footer.css      # Styling bagian penutup
│   ├── js/
│   │   ├── main.js         # Inisialisasi Swiper.js
│   │   └── theme.js        # Logika Dark/Light mode
│   └── img/                # Aset gambar & icon
├── views/
│   ├── layouts/
│   │   └── main.hbs        # Struktur HTML utama (Boilerplate)
│   └── partials/           # Komponen lepasan
│       ├── navbar.hbs
│       ├── hero.hbs
│       ├── tech-stack.hbs
│       ├── project-card.hbs
│       └── footer.hbs
├── app.js                  # Entry point Express server
└── package.json

🏁 Memulai
Prasyarat
Pastikan Anda sudah menginstal Node.js di perangkat Anda.

Instalasi
Clone repositori ini:

Bash

git clone [https://github.com/username/portfolio-atha.git](https://github.com/username/portfolio-atha.git)
Masuk ke direktori proyek:

Bash

cd portfolio-atha
Instal dependensi:

Bash

npm install
Jalankan aplikasi:

Bash

npm start
Buka di browser: http://localhost:3000
