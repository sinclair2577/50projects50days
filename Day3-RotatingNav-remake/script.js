const open = document.querySelector(".bars");
const close = document.querySelector(".times");
const btns = document.querySelector(".btns");
const main = document.querySelector("main");
const nav = document.querySelector("nav");

open.addEventListener("click", (e) => {
  btns.classList.add("active");
  main.classList.add("active");
  nav.classList.add("active");
});

close.addEventListener("click", (e) => {
  btns.classList.remove("active");
  main.classList.remove("active");
  nav.classList.remove("active");
});
