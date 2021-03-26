document.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  //   リストを取得
  const list = document.getElementsByClassName("list")[0];
  // トランジションが進行が進行中かを確かめるためのオブジェクト
  const isTransitioning = { transition: "finished" };

  //   nextをクリックした時
  next.addEventListener("click", () => {
    const firstItem = list.children[0];
    // transitionがpendingでなければ処理へ
    if (isTransitioning.transition === "finished") {
      isTransitioning.transition = "pending";
      // 処理が完了したらIsTransitionをfinishへ戻す
      changeOrder(firstItem, true).then(setIsTransition);
    } else {
      // pendgingの際はなにもしない。
      return;
    }
  });

  //   prevをクリックした時
  prev.addEventListener("click", () => {
    const lastItem = list.children[2];
    // transitionがpendingでなければ処理へ
    if (isTransitioning.transition === "finished") {
      isTransitioning.transition = "pending";
      changeOrder(lastItem, false).then(setIsTransition);
    } else {
      // pendgingの際はなにもしない。
      return;
    }
  });

  function changeOrder(item, isNext) {
    if (isNext === true) {
      // 次の要素を取得し変数へ
      const nextItem = list.children[1];
      //   ポジションを打ち消すidを付与
      nextItem.setAttribute("id", "reset-left");
      //   transitionのための遅延処理
      return new Promise(function (resolve) {
        setTimeout(() => {
          //   順番入れ替え
          list.appendChild(item);
          // 打ち消しのためのidを外す
          nextItem.removeAttribute("id", "reset-left");
          resolve();
        }, 300);
      });
    } else {
      item.setAttribute("id", "reset-right");
      return new Promise(function (resolve) {
        setTimeout(() => {
          list.insertBefore(item, list.children[0]);
          item.removeAttribute("id", "reset-right");
          resolve();
        }, 300);
      });
    }
  }

  function setIsTransition() {
    isTransitioning.transition = "finished";
  }
});
