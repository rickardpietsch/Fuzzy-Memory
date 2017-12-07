// //
// // const cardsArray = Array.from(cards);
// //
// cards.forEach((card) => {
//   card.addEventListener('click', (event) => {
//     card.classList.toggle('flip')
//     card.innerText = '1';
//   })
// })
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

let memoryArray = numbersArray.concat(numbersArray);


const paragraphs = document.querySelector('p')
let cardsFlipped = [];

let matchedCards = 0;

const cards = document.querySelector('.card');

function newGame(){
  memoryArray = shuffle(memoryArray);
  for (var i = 0; i <= ((memoryArray.length)-1); i++) {
    const number = memoryArray[i];
    const card = document.createElement("div");
    card.classList.add('card'); //Style div
    card.setAttribute("data-id", number);
    card.innerText = number;
    document.querySelector(".frame").append(card);

    card.addEventListener('click', (event) => {
      cardsFlipped.push(event.target); //Lägger till card i cardflipped-array
      console.log(event.target.dataset);
      card.classList.toggle('flip');

      if (cardsFlipped.length === 2) {
        if (cardsFlipped[0].dataset.id === cardsFlipped[1].dataset.id) {
          matchedCards++;
          cardsFlipped[0].classList.add('clicked');
          cardsFlipped[1].classList.add('clicked');
          console.log('Match!')
          console.log(matchedCards);
          cardsFlipped = []

          // if (matchedCards === 8) {
          //   console.log('Victory!')
          // }
        } else {

        }

      }
    })

      // if (cardsFlipped.length > 2) { //Om vända kort är större än 2, ta bort klass
      //   cards.forEach(card => {
      //     card.classList.remove('flip');
      //   });
      //   cardsFlipped = 1;
      // }

      // if (cardsFlipped === 2) {
      //   let activeCards = document.querySelectorAll('.flip');
      //
      //   if (activeCards[0].dataset.card === activeCards[1].dataset.card) {
      //     activeCards.forEach(card => {
      //       card.remove();
      //     });
      //   }
      // }
      // for (var i = 0; i < 16; i++) {
      // card.setAttribute("data-card", i%8); //i%8 modulus
      // document.querySelector(".frame").append(card);
      // }
  }
}
newGame();



//Shuffle
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


  // memoryArray = shuffle(memoryArray);
  // console.log(memoryArray);
  // for (var i = 0; i <= ((memoryArray.length)-1); i++) {
  //   const number = memoryArray[i];
  //   let card = document.querySelector(`[data-id="${number}"]`);
  //   console.log(card);
  //   card.setAttribute("data-id", number);
  //   card.innerText = number;
    // document.querySelector(".frame").append(card);



// memory_array.forEach(function(value, index) {
//   let memory_array_value = value;
//   let cardsDiv = document.createElement(‘div’);
//   cardsDiv.className = ‘cards’;
//   output += ‘id=“tile_‘+ index +‘“’ + boardDiv.appendChild(cardsDiv);
//   console.log(memory_array_value+index);
//   let cardFront = document.querySelector(‘.cards’);
//   cardsDiv.addEventListener(‘click’, (event) => {
//     cardsDiv.innerHTML = memory_array_value;
//   });
// });

//
//
//
// Array.prototype.memory_tile_shuffle = function() {
//   var i = this.length, j, temp;
//   while(--i > 0){
//     j = Math.floor.(Math.random() * (i+1));
//     temp = this[j];
//     this[j] = this[i];
//     this[i] = temp;
//   }
// }
