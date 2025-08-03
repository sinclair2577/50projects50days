const inputs = document.querySelectorAll("input");

const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

inputs.forEach((input) =>
  input.addEventListener("change", (e) => changeInput(e.target))
);

function changeInput(value) {
  if (good.checked && cheap.checked && fast.checked) {
    if (value === good) {
      fast.checked = false;
    } else if (value === cheap) {
      good.checked = false;
    } else {
      cheap.checked = false;
    }
  }
}
