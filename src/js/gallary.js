 var swiper = new Swiper(".mySwiper", {
     cssMode: true,
      
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            lickable: true,
        },
        mousewheel: true,
        watchOverflow: true,
        keyboard: true,
        slidesPerView: 3,
        spaceBetween: 8,
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 4,
        slidesPerColum: 1,

        breakpoints: {
        768: {
                 spaceBetween: 14,
            },
        1280: {
                 spaceBetween: 24,
        }
        }


      });