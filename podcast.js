/* eslint-disable no-undef */
let isPlaying = false

const audioElements = document.getElementsByClassName('audio')
const audioContext = new (window.AudioContext || window.webkitAudioContext)()

Array.from(audioElements).forEach((audioElement, index) => {
  const track = audioContext.createMediaElementSource(audioElement)
  track.connect(audioContext.destination)

  const playButton = document.getElementsByClassName('play')[index]
  playButton.addEventListener('click', function () {
    if (!isPlaying) {
      playButton.classList.remove('ri-play-circle-line')
      playButton.classList.add('ri-pause-circle-line')
      audioContext.resume().then(() => {
        audioElement.play()
        isPlaying = true
      })
    } else {
      playButton.classList.remove('ri-pause-circle-line')
      playButton.classList.add('ri-play-circle-line')
      audioElement.pause()
      isPlaying = false
    }
  })
})
