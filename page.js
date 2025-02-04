const workText = document.getElementsByClassName('worktext')[0]
const randButton = document.getElementsByClassName('randBtn')[0]
const alphabet = 'abcdefgihjklmnopqrstuvwxyz ,.'
const alphabetArray = alphabet.split('')



randButton.addEventListener('click', function(e) {

  workText.textContent = workText.textContent
  .split('')
    .map(
      (el) => el = alphabetArray[Math.floor(Math.random()*alphabetArray.length)])
    .join('')
    console.log(workText.textContent.split(''))
})