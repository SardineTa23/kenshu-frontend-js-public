document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("#button");
  const overlay = document.querySelector("#modal-overlay");
  const content = document.querySelector("#modal-content");
  const close = document.querySelector("#modal-close");

  btn.addEventListener("click", function () {
    addIsActive(overlay);
    addIsActive(content);
  });

  close.addEventListener("click", () => {
    closeModal(overlay, content);
  });
  overlay.addEventListener("click", () => {
    closeModal(overlay, content);
  });
});

function addIsActive(el) {
  el.classList.add("is-active");
}

function removeIsActive(el) {
  el.classList.remove("is-active");
}

function closeModal(overlay, content) {
  removeIsActive(overlay);
  removeIsActive(content);
}
