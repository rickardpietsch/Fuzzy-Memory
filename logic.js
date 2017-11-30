const cards = document.querySelectorAll('.card');

// const cardsArray = Array.from(cards);

cards.forEach((card) => {
  card.addEventListener('click', (event) => {
    card.classList.add('flip-in-ver-right')
    card.style.background = 'black';
    card.innerText = '1';
  })
})
