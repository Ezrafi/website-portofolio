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
    spaceBetween: 25, // Sedikit diperlebar agar tidak terlalu rapat
    speed: 3000, // Kecepatan gerak (makin tinggi makin lambat & halus)
    grabCursor: true,
    
    loopedSlides: 22, // Setidaknya 2x jumlah skill asli
    loopAdditionalSlides: 11,

    // TAMBAHKAN INI:
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    observer: true, // Memantau perubahan pada elemen
    observeParents: true, // Memantau perubahan pada parent element
    
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false,
    },
    
    freeMode: {
        enabled: true,
        momentum: false,
    },
});