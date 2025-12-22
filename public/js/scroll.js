// Fitur Scroll-Spy (Mendeteksi section aktif)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Hapus class active dari semua
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};