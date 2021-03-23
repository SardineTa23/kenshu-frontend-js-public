document.addEventListener("DOMContentLoaded", () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const List = document.querySelector("#list");
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      jsonToHtmlElement(json, List);
    })
    .catch((error) => {
      console.log(error);
    });
});

function jsonToHtmlElement(json, List) {
  Array.prototype.forEach.call(json, (e) => {
    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    p.textContent = `${e.body}`;
    h3.textContent = `${e.title}`;
    li.appendChild(h3);
    li.appendChild(p);
    List.appendChild(li);
  });
}
