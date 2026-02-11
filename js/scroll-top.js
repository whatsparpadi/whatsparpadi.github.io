// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scroll-top-btn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollTopBtn.classList.remove('hidden');
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
            setTimeout(() => {
                if (!scrollTopBtn.classList.contains('visible')) {
                    scrollTopBtn.classList.add('hidden');
                }
            }, 300);
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
