document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.ofertas-swiper', {
    // Configurações básicas
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    
    // Responsividade
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },

    // Navegação
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    // Efeitos
    effect: 'slide',
    speed: 800,
    grabCursor: true
  });
}); 