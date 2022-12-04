const refs = {
  openModalBtn: document.querySelectorAll('[data-modal-apartments-open]'),
  closeModalBtn: document.querySelector('[data-modal-apartments-close]'),
  modal: document.querySelector('[data-modal-apartments]'),
};

refs.openModalBtn.forEach(card => card.addEventListener('click', toggleModal));
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
