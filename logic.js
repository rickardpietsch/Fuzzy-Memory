// const cards = document.querySelector('.card');
// //
// // const cardsArray = Array.from(cards);
// //
// cards.forEach((card) => {
//   card.addEventListener('click', (event) => {
//     card.classList.toggle('flip')
//     card.innerText = '1';
//   })
// })
let letterArray = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
];

const memoryArray = letterArray.concat(letterArray);
let cardsflippedover = 0;
fliparray = new Array();

function newGame(){
  for (var i = 0; i <= ((memoryArray.length)-1); i++) {
  const card = document.createElement("div");
  card.setAttribute("class", "card"); //Style div
  // card.setAttribute("data-card", 1); //i%8 modulus
  document.querySelector(".frame").append(card);

  card.addEventListener('click', (event) => {
    var randomLetter = Math.floor(Math.random() * memoryArray.length);
    card.classList.toggle('flip')
    card.innerText = memoryArray[randomLetter];
    

    // for (var i = 0; i < 16; i++) {
    // card.setAttribute("data-card", i%8); //i%8 modulus
    // document.querySelector(".frame").append(card);
    // }
    })
  }
}
newGame();



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

// //Shuffle
// function shuffle(a) {
//     for (let i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//     }
//     return a;
// }
// memoryArray = shuffle(memoryArray);
// console.log(memoryArray);
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
