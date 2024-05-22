// locomotive scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// autotype
document.addEventListener("DOMContentLoaded", function() {
    const autotypeText = ['software developer', 'programmer', 'web ui designer'];
    const autoTyping = new AutoTyping('.autotype-selector', autotypeText, {
        typeSpeed: 120,
        deleteSpeed: 120,
        waitBeforeDelete: 1000,
        waitBetweenWords: 1000,
        // writeWhole: true,
    });
    autoTyping.start()
});

// slider
var swiper = new Swiper(".testimonial", {
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
});