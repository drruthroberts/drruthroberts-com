var testiminal = new Swiper('.swiper-container.image-slider', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    // speed: 500,
    // autoplaySpeed: 2000,
    // autoplay: true,
    breakpoints: {
        1920: {
            slidesPerView: 5,          
            spaceBetween: 20,
            centeredSlides: false
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: false
        },
        767: {
            slidesPerView: 1.6,
            spaceBetween: 6,
        }
    }
});

