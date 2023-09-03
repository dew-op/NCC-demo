const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');
let cards = document.querySelectorAll('.card-container');
let cardWidth = document.querySelector('.card-container').offsetWidth;

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
  cardWidth = document.querySelector('.card-container').offsetWidth;
  carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index*cardWidth}px)`;
  // console.log((cards.length*cardWidth - (index * cardWidth)));
  
  if ((cards.length*cardWidth - ((index+1) * cardWidth)) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index*cardWidth}px)`;
})
