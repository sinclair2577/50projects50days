const searchIcon = document.querySelector(".search-icon");
const search = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  search.classList.toggle("active");
});
