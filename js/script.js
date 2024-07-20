function handleModal(openBtn, overlay, closeBtn) {
  const open = document.querySelector(openBtn);
  const modal = document.querySelector(overlay);
  const close = document.querySelector(closeBtn);

  open.addEventListener("click", e => {
    e.preventDefault();
    modal.classList.add("is-open");
  });

  close.addEventListener("click", e => {
    e.preventDefault();
    setTimeout(() => {
      modal.classList.remove("is-open");
    }, 50);
  });
}

handleModal(".subscription-btn", ".modal-overlay", ".modal-close-btn");
handleModal(".menu-btn", ".mob-overlay", ".menu-close-btn");
