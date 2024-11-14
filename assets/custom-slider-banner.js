new Swiper('.custom-slider-banner-container .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    pagination: {
        el: '.custom-slider-banner-container .swiper-pagination',
        clickable: true
    },
});