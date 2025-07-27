const header = document.querySelector("header");

document.addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
