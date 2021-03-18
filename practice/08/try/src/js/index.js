document.addEventListener("DOMContentLoaded", () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const List = document.querySelector("#list");
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      List.innerHTML = jsonToHtmlElement(json);
    })
    .catch((error) => {
      console.log("失敗");
    });
});

function jsonToHtmlElement(json) {
  return json.reduce((acc, curr) => {
    return `${acc}<li><h3>${curr.title}</h3><p>${curr.body}</p></li>`;
  }, "");
}
