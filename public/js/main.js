// Fitur Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const techSwiper = new Swiper('.tech-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 5000, // Semakin besar angka, semakin lambat/smooth
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true
});