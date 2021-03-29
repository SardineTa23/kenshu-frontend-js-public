// document.addEventListener("DOMContentLoaded", () => {
//   const next = document.querySelector(".next");
//   const prev = document.querySelector(".prev");

//   //   リストを取得
//   const list = document.getElementsByClassName("list")[0];
//   // トランジションが進行が進行中かを確かめるためのオブジェクト
//   let isTransitioning = false;

//   //   nextをクリックした時
//   next.addEventListener("click", () => {
//     const firstItem = list.children[0];
//     console.log(isTransitioning)
//     // transitionがfinishedなら処理へ
//     if (isTransitioning === false) {
//       isTransitioning = true;
//       // 処理が完了したらIsTransitionをfinishへ戻す
//       changeOrder(firstItem, true).then(setIsTransition);
//     }
//   });

//   //   prevをクリックした時
//   prev.addEventListener("click", () => {
//     const lastItem = list.children[2];
//     console.log(isTransitioning)
//     // transitionがfinishedなら処理へ
//     if (isTransitioning === false) {
//       isTransitioning = true;
//       changeOrder(lastItem, false).then(setIsTransition);
//     }
//   });

//   function changeOrder(item, isNext) {
//     if (isNext === true) {
//       // 次の要素を取得し変数へ
//       const nextItem = list.children[1];
//       //   ポジションを打ち消すidを付与
//       nextItem.setAttribute("id", "reset-left");
//       //   transitionのための遅延処理
//       return new Promise(function (resolve) {
//         nextItem.addEventListener('transitionend', () => {
//           list.appendChild(item);
//           nextItem.removeAttribute("id", "reset-left");
//           resolve();
//         });
//       });
//     } else {
//       item.setAttribute("id", "reset-right");
//       return new Promise(function (resolve) {
//         item.addEventListener('transitionend', () => {
//           list.insertBefore(item, list.children[0]);
//             item.removeAttribute("id", "reset-right");
//             resolve();
//         })
//       });
//     }
//   }

//   function setIsTransition() {
//     isTransitioning = false;
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  //   リストを取得
  const list = document.getElementsByClassName("list")[0];
  // トランジションが進行が進行中かを確かめるための変数
  let isTransitioning = false;

  //   nextをクリックした時
  next.addEventListener("click", () => {
    // isTransitioningがfalseなら処理へ
    if (isTransitioning) {
      return false;
    } else {
      isTransitioning = true;
      const firstItem = list.children[0];
      changeOrder(firstItem, true);
    }
  });

  //   prevをクリックした時
  prev.addEventListener("click", () => {
    // isTransitioningがfalseなら処理へ
    if (isTransitioning) {
      return false;
    } else {
      isTransitioning = true;
      const lastItem = list.children[2];
      changeOrder(lastItem, false);
    }
  });

  function changeOrder(item, isNext) {
    if (isNext) {
      // 次の要素を取得し変数へ
      const nextItem = list.children[1];
      //   ポジションを打ち消すidを付与
      nextItem.setAttribute("id", "reset-left");
      //   transitionが終了した際の処理
      nextItem.addEventListener("transitionend", () => {
        list.appendChild(item);
        nextItem.removeAttribute("id", "reset-left");
        // 処理が完了したらIsTransitionをfalseへ戻す
        isTransitioning = false;
      });
    } else {
      item.setAttribute("id", "reset-right");
      item.addEventListener("transitionend", () => {
        list.insertBefore(item, list.children[0]);
        item.removeAttribute("id", "reset-right");
        isTransitioning = false;
      });
    }
  }
});
