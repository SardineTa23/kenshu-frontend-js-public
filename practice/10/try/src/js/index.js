document.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

//   リストを取得
  const list = document.getElementsByClassName("list")[0];

//   nextをクリックした時
  next.addEventListener("click", () => {
    const firstItem = list.children[0];
    changeOrder(firstItem, true);
  });

//   prevをクリックした時
  prev.addEventListener("click", () => {
    const lastItem = list.children[2];
    changeOrder(lastItem, false);
  });

  function changeOrder(item, isNext) {
    if (isNext === true) {
        // 次の要素を取得し変数へ
      const nextItem = list.children[1];
    //   ポジションを打ち消すidを付与
      nextItem.setAttribute("id", "reset-left");
    //   transitionのための遅延処理
      setTimeout(() => {
        //   順番入れ替えÏ
        list.appendChild(item);
        // 打ち消しのためのidを外す
        nextItem.removeAttribute("id", "reset-left");
      }, 300);
    } else {
      item.setAttribute("id", "reset-right");
      setTimeout(() => {
        list.insertBefore(item, list.children[0]);
        item.removeAttribute("id", "reset-right");
      }, 300);
    }
  }
});
