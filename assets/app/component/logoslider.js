import Swiper from 'swiper/dist/js/swiper.js'

export default function logoslider () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    direction: 'horizontal',
    nextButton: '.logosliderNext',
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      }

    }
  })
}
