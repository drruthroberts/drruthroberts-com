new Swiper('.announcement-bar-section .swiper-container', {  
    loop: true,  
    slidesPerView: 1,  
    spaceBetween: 0,  
    speed: 500,  
    autoplay: {  
      delay: 4000, // Auto switch every 2 seconds  
      disableOnInteraction: false, // Continue autoplay on interaction  
    },  
  }); 