'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    hideModal();
  }
});

function showModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function hideModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


