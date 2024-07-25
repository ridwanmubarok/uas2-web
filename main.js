import './src/assets/style.css'
import 'remixicon/fonts/remixicon.css'
import Swiper from 'swiper/bundle'

import 'swiper/swiper-bundle.css'

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 2,
})

export const swiperTrending = new Swiper('.swiper-trending', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 1,
})
