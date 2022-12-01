(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-apartments-open]"),
    closeModalBtn: document.querySelector("[data-modal-apartments-close]"),
    modal: document.querySelector("[data-modal-apartments]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();