document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const genderText = document.querySelector("#gender-text");
  const nameText = document.querySelector("#name-text");
  const wrapper = document.querySelector("#text-wrapper");

  form.addEventListener("submit", (event) => {
    wrapper.classList.add("is-active");
    genderText.textContent = form.gender.value;
    nameText.textContent = form.name.value;
    event.preventDefault();
  });
});
