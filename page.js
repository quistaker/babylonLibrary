import "./helpers.js"

const LINE_LENGTH = 80
const LINE_COUNT = 40
const ALPHABET = 'abcdefgihjklmnopqrstuvwxyz ,.'.split('')
const workText = document.getElementsByClassName('worktext')[0]
const randButton = document.getElementsByClassName('randBtn')[0]

randButton.addEventListener('click', update_text)

function update_text() {
  workText.textContent = generate_text()
}

function generate_text() {
  return Array(LINE_COUNT).fill().map( () => generate_line() ).join("\n")
}

function generate_line() {
  return Array(LINE_LENGTH).fill().map( () => ALPHABET.sample() ).join('')
}

window.onload = function() {
  update_text()
}
