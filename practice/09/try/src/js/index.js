document.addEventListener("DOMContentLoaded", () => {
  const MainImg = document.querySelector(".main-img");
  const Imgs = document.querySelectorAll(".thumb-item-img")
  Imgs.forEach((el) => {
    el.addEventListener("mouseover", (event) => {
      removeIsActive(Imgs);
      addIsActive(event.target);
      setMainTarget(MainImg, event.target);
    });
  });
});

function removeIsActive(imgs) {
  imgs.forEach((e) => {
    e.classList.remove("is-active");
  });
}

function addIsActive(el) {
  el.classList.add("is-active");
}

function setMainTarget(main, target) {
  const mainSrc = target.getAttribute("src").replace("_small", "_large");
  main.src = mainSrc;
}
