// Adds/removes 'scrolled' class on header when page is scrolled more than 10px
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Initializes Lenis smooth scrolling with custom lerp speed
const lenis = new Lenis({ lerp: 0.175 });

// Continuously updates Lenis scroll animation on each animation frame
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
