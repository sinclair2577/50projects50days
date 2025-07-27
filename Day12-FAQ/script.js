const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.parentNode);
    btn.parentNode.classList.toggle("active");
  });
});
