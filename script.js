document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const animateOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => animateOnScroll.observe(el));


    // 2. Mobile/Touch Caption Reveal for Polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    
    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            // Toggle revealed state on tap (useful for touch devices)
            polaroid.classList.toggle('revealed');
        });
    });
});
