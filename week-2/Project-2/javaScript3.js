const containerEl = document.querySelector('.container');
const boxModalEl = document.querySelector('.box__show-modal-1');
const boxEl = document.querySelectorAll('.box');
const modalEl = document.querySelector('.modal');
const closeModalEl = document.querySelector('.close-modal');
const overlayEl = document.querySelector('.overlay');

const clickHandler = () => {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
};
const closeModaHandler = () => {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
};
for (let i = 0; i < boxEl.length; i++){
boxEl[i].addEventListener('click', clickHandler);
}

// boxEl.addEventListener('click', clickHandler);
closeModalEl.addEventListener('click', closeModaHandler);
overlayEl.addEventListener('click', closeModaHandler);


