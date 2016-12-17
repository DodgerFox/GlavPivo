import Swiper from 'swiper/dist/js/swiper.js'

export default function beerslider () {
  var swiper = new Swiper('.beer-swiper-container', {
    slidesPerView: 8,
    spaceBetween: 15,
    direction: 'horizontal',
    autoHeight: true,
    nextButton: false,
    loop: false,
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      750: {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      }

    }
  })
}
