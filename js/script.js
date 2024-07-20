const openModal = document.getElementsByClassName("subscription-btn")[0];
const modalOverlay = document.getElementsByClassName("modal-overlay")[0];
const closeModal = document.getElementsByClassName("modal-close-btn")[0];

openModal.addEventListener("click", e => {
  e.preventDefault();
  modalOverlay.classList.add("is-open");
});

closeModal.addEventListener("click", e => {
  e.preventDefault();
  setTimeout(() => {
    modalOverlay.classList.remove("is-open");
  }, 50);
});
