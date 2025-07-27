const container = document.querySelector(".container");
const close = document.getElementById("close");
const open = document.getElementById("open");

close.addEventListener("click", () => {
  container.classList.remove("show-nav");
});

open.addEventListener("click", () => {
  container.classList.add("show-nav");
});
