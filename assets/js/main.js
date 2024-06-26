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

// loader
window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
        loaderContainer.style.display = 'none';
    }
  });
