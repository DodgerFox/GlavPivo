import Swiper from 'swiper/dist/js/swiper.js'

export default function singleMarket() {
  var swiper = new Swiper('.singleMarketSliderSwiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    direction: 'horizontal',
    autoHeight: true,
    nextButton: '.singleMarketSliderNextButton',
    prevButton: '.singleMarketSliderPreviousButton',
    pagination: '.swiper-pagination',
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      880: {
        slidesPerView: 1,
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
