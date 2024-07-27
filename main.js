/* eslint-disable no-undef */
import './src/assets/style.css'
import 'remixicon/fonts/remixicon.css'
import Swiper from 'swiper/bundle'
import Alpine from 'alpinejs'

import 'swiper/swiper-bundle.css'

window.Alpine = Alpine
Alpine.start()

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
