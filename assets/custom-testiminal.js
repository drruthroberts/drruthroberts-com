new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 500,
    autoplaySpeed: 2000,
    // autoplay: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1920: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false
        },
        1440: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
        }
    }
  });