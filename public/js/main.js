// Fitur Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// const techSwiper = new Swiper('.tech-swiper', {
//     loop: true,
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//     speed: 5000, // Semakin besar angka, semakin lambat/smooth
//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//     },
//     freeMode: true
// });

const swiper = new Swiper(".tech-swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 5000, // Kecepatan gerak otomatis
    grabCursor: true, // Mengubah kursor jadi tangan saat hover
    
    loopedSlides: 10, // Sesuaikan dengan jumlah total skill asli kamu

    // Fitur Drag Manual
    freeMode: {
        enabled: true,
        momentum: false, // Mematikan momentum agar transisi marquee tidak kacau
    },
    
    autoplay: {
        delay: 0,
        disableOnInteraction: false, // PENTING: lanjut jalan setelah drag
        pauseOnMouseEnter: false,
        waitForTransition: false, // PENTING: paksa jalan meskipun transisi belum selesai
    },
});