// Fitur Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modernized Marquee Config
const swiper = new Swiper(".tech-swiper", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30, 
    speed: 4000, // Slightly slowed down to make it look premium and readable
    grabCursor: true,
    
    watchSlidesProgress: true,
    updateOnWindowResize: true,
    observer: true, 
    observeParents: true, 
    
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // IMPORTANT: Freezes the scroll so users can enjoy your hover effects!
        waitForTransition: false,
    },
    
    freeMode: {
        enabled: true,
        momentum: false,
    },
});