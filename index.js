/* eslint-disable no-undef */
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
