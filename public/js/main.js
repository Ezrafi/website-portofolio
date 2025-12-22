// Fitur Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const swiper = new Swiper('.tech-swiper', {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 'auto',
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: {
        enabled: true,
        sticky: false,
    },
    // Tambahkan ini untuk mengatasi error loop
    loopedSlides: 8, // Sesuaikan dengan jumlah data di app.js
    loopAdditionalSlides: 8, 
});