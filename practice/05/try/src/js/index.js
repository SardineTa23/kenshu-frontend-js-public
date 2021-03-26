document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const text = document.querySelector("#text");

  input.addEventListener("keyup", (event) => {
    if (event.currentTarget.value.includes("yes")) {
      text.textContent = event.currentTarget.value;
    } else {
      text.textContent = "";
    }
  });
});
