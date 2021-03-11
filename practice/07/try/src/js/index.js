document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");
  const errorArea = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    const formElements = {
      name: form.name,
      mail: form.mail,
      gender: form.gender,
      age: form.age,
      term: form.term,
    };
    if (checkValidates(formElements)) {
      errorArea.classList.add("is-active");
      event.preventDefault();
    }
  });
});

function checkValidates(formElements) {
  let result = false;
  Object.keys(formElements).forEach(function (k) {
    if (result === true) {
      return;
    } else if (
      formElements[k].type === "checkbox" &&
      formElements[k].checked === false
    ) {
      result = true;
    } else if (formElements[k].value === "") {
      result = true;
    }
  });
  return result;
}
