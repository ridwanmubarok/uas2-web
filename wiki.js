/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  fetch('src/assets/md/jagung.html')
    .then((response) => response.text())
    .then((markdown) => {
      document.getElementById('jagung-content').innerHTML = markdown
    })
})

document.addEventListener('DOMContentLoaded', () => {
  fetch('src/assets/md/cabai.html')
    .then((response) => response.text())
    .then((markdown) => {
      document.getElementById('cabai-content').innerHTML = markdown
    })
})

document.addEventListener('DOMContentLoaded', () => {
  fetch('src/assets/md/padi.html')
    .then((response) => response.text())
    .then((markdown) => {
      document.getElementById('padi-content').innerHTML = markdown
    })
})
