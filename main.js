/* eslint-disable no-undef */
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

let isPlaying = false

const audioElement = document.getElementById('audio')
const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const track = audioContext.createMediaElementSource(audioElement)

track.connect(audioContext.destination)

document.getElementById('play').addEventListener('click', function () {
  if (!isPlaying) {
    document.getElementById('play').classList.remove('ri-play-circle-line')
    document.getElementById('play').classList.add('ri-pause-circle-line')
    audioContext.resume().then(() => {
      audioElement.play()
      isPlaying = true
    })
  } else {
    document.getElementById('play').classList.remove('ri-pause-circle-line')
    document.getElementById('play').classList.add('ri-play-circle-line')
    audioElement.pause()
    isPlaying = false
  }
})
