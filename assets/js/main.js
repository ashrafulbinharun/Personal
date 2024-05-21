// locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// slider
var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
});