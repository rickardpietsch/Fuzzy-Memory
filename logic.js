let numbersArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
];

let cardsFlipped = [];
let matchedCards = 0;

let memoryArray = numbersArray.concat(numbersArray);

const body = document.querySelector('body');

const winner = document.querySelector('.winner');

/* Import audio file */
var player = document.createElement('audio');
player.src = 'mp3/explosion.mp3';
player.preload = 'auto';
body.appendChild(player);

/* New game funtion */
function newGame(){
  memoryArray = shuffle(memoryArray);
  for (var i = 0; i <= ((memoryArray.length)-1); i++) {
    const number = memoryArray[i];
    const card = document.createElement("div");
    card.classList.add('card');
    card.setAttribute("data-id", number);
    document.querySelector(".frame").append(card);

    /* Logic when card is clicked */
    card.addEventListener('click', (event) => {
      cardsFlipped.push(event.target);
      console.log(event.target.dataset);
      card.classList.toggle('flip');

      if (cardsFlipped.length === 2) {
        const frame = document.querySelector('.frame');
        frame.classList.add('hold');

        /* Logic for matching cards */
        if (cardsFlipped[0].dataset.id === cardsFlipped[1].dataset.id) {
          matchedCards++;
          console.log('Match!')
          console.log(matchedCards);
          cardsFlipped = []
          frame.classList.remove('hold');

          /* Logic for matching cards */
        } else {
          console.log('No match.')
          setTimeout(function() {
          cardsFlipped[0].classList.remove('flip');
          cardsFlipped[1].classList.remove('flip');
          cardsFlipped = []
          frame.classList.remove('hold');
          }, 2000);
        }
        /* Logic game won */
        if (matchedCards === 8) {
          winner.classList.add('visible');
          player.play();
          console.log('Victory!')
        }
      }
    })
  }
}
newGame();

/* Shuffle function */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Reset game */
const button = document.querySelector('button');

button.addEventListener('click', () => {
matchedCards = [];
let card = document.querySelectorAll('.card');

card.forEach(card => {
  card.remove();
});
winner.classList.remove('visible');
newGame();
})
