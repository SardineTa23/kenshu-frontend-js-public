document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const text = document.querySelector("#text");

  input.addEventListener("keyup", (event) => {
    if (event.target.value.includes('yes')) {
      text.innerHTML = "yes";
    } else {
      text.innerHTML = "";
    }
  });
});
